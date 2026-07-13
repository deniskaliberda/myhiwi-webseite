/* ============================================================================
   scroll-world — portable scroll-scrubbed camera-flight engine
   ----------------------------------------------------------------------------
   Framework-agnostic. Vanilla JS, zero dependencies. It builds its own DOM and
   injects its own (namespaced) CSS into a container you give it, so it drops into
   plain HTML, Next.js (call from a ref/useEffect), Vue (onMounted), a server-
   rendered page, anything.

   USAGE
     mountScrollWorld(document.getElementById('world'), {
       brand: { name: 'Pearl & Co.', href: '#top' },
       diveScroll: 1.3,   // viewport-heights of scroll per dive clip
       connScroll: 0.9,   // ...per connector clip
       hint: 'scroll to fly in',
       nav: true,         // show the top section nav
       atmosphere: true,  // subtle gradient + drifting particles behind the clips
       scrollMobileFactor: 1.2,  // extra scroll distance per segment on mobile (small
                                 // viewports read the same flight as faster; industry
                                 // pattern is a LONGER mobile scroll run)
       sections: [
         { id, label, still, poster, posterMobile, clip, clipMobile, accent,
                          // `poster` = the EXTRACTED FIRST FRAME of the encoded clip
                          // (pipeline.md §5b). Shown while the clip loads, so the
                          // still→video swap is pixel-identical (no crop/render pop).
                          // `posterMobile` = same, extracted from the mobile/portrait
                          // encode (wire it whenever clipMobile has different framing).
                          // Falls back to `still` when absent; `still` remains the
                          // stills-mode / no-clip artwork.
           scroll: 1.6,   // optional per-section override of diveScroll — more scroll
                          // distance = a slower, longer dwell in this scene
           linger: 0.5,   // optional 0..1 — remaps time so the camera settles mid-scene
                          // (exactly where the copy peaks) and moves quicker at the
                          // edges. 0 = linear (default). Keep ≤ 0.6; 1 = full pause.
           eyebrow, title, body, tags:[…],
           cta:{ primary:{label,href}, secondary:{label,href} } }, // last section only
         …
       ],
       connectors: [clipUrl, …],          // length = sections.length - 1 (nulls allowed)
       connectorsMobile: [clipUrl, …],    // optional lighter connectors for phones (same length)

   MOBILE (the clipMobile/connectorsMobile variants are the opt-in mobile tiers;
   the rest of the phone handling below is always on)
     Two independent axes, deliberately separate:
     - CLIP TIER (which file): decided by device class — screen short side ≤600 CSS px
       = phone → `clipMobile`/`posterMobile`; tablets (iPad Pro included) and desktops
       get the full master. NOT decided by pointer type: iPadOS reports a coarse
       pointer and a Mac UA, but has a desktop-class screen + decoder.
     - BEHAVIOUR hardening (how it acts): on any coarse-pointer / ≤860px viewport the
       engine coalesces seeks (never issues a new currentTime while the decoder is
       still `seeking` — fast flicks can't pile up and freeze), takes a coarser seek
       step, keeps the poster up until the clip actually paints, primes each video
       (muted play→pause) on first touch (iOS blank-video fix), lengthens the scroll
       run (`scrollMobileFactor`), drops the drifting particles, and ignores
       URL-bar-only resizes (no scroll jump).
     STILLS MODE (automatic fallback, never configured): the page falls back to the
     stills cross-dissolving as you scroll — no video load or decode — when the user
     asked for it (`prefers-reduced-motion`, data-saver) or the OS blocks video at
     runtime (iOS Low Power Mode rejects even muted play(); detected on first touch).
     Chromium-only network signals (`navigator.connection.saveData`/`effectiveType`)
     are used strictly as downgrade signals — saveData → stills mode, 2g/3g → shrink
     the clip prefetch window. iOS exposes none of these, so the baseline stays
     conservative (posters first, lazy blob fetch near the viewport) for everyone.
     Nothing here is required — a config with only `clip`/`connectors` still works on
     phones; the mobile variants just make it lighter and smoother.

   THEME (CSS custom properties; set on the container or :root to override)
     --sw-bg         page background (match your scene bg for seamless posters)
     --sw-ink        primary text
     --sw-ink-soft   secondary text
     --sw-accent     default accent (each section overrides via its `accent`)
     --sw-font-display / --sw-font-body

   SEO / STATIC COPY
     The engine builds its DOM client-side, so on its own the page has no crawlable
     copy. Put a plain-markup version of the copy (h1 + per-section h2/p, real links)
     inside the container in a block marked `data-sw-seo` — the engine hides it on
     mount and it never fights the visual layer, but it exists in the served HTML for
     crawlers, link previews, and no-JS visitors (see index-template.html).

   REQUIREMENTS ON YOUR ASSETS
     - clips encoded native-res, crf~20, -g 8, +faststart, no audio (see pipeline.md)
     - connectors' endpoints are the neighbouring dives' ACTUAL frames (see SKILL Step 5)
     - posters extracted from the ENCODED clips' first frames (pipeline.md §5b)
     - (optional) mobile variants at ~720p, -g 4 for smoother phone scrubbing
   The engine loads each clip as a Blob (always seekable) and scrubs currentTime; it does
   NOT depend on HTTP byte-range support.
   ========================================================================== */

function mountScrollWorld(container, config) {
  // Embed patch (3c/3d): keep enough pre-mount state for an exact, StrictMode-safe teardown.
  const originalClass = container.getAttribute('class');
  const originalStyle = container.getAttribute('style');
  const originalMounted = container.getAttribute('data-sw-mounted');
  const originalChildren = new Set(container.children);
  const fallbackState = Array.from(container.querySelectorAll('[data-sw-seo]')).map(node => ({
    node,
    hidden: node.hasAttribute('hidden'),
    ariaHidden: node.getAttribute('aria-hidden'),
    inert: node.hasAttribute('inert'),
  }));
  const cleanups = [];
  const fetchControllers = new Set();
  const blobUrls = new Set();
  let disposed = false;
  let cssToken = null;
  let readFrame = 0;
  let seekFrame = 0;
  let readyFrame = 0;

  const restoreFallback = () => {
    fallbackState.forEach(({ node, hidden, ariaHidden, inert }) => {
      node.toggleAttribute('hidden', hidden);
      node.toggleAttribute('inert', inert);
      if (ariaHidden == null) node.removeAttribute('aria-hidden');
      else node.setAttribute('aria-hidden', ariaHidden);
    });
  };

  const destroy = () => {
    if (disposed) return;
    disposed = true;
    if (readFrame) cancelAnimationFrame(readFrame);
    if (seekFrame) cancelAnimationFrame(seekFrame);
    if (readyFrame) cancelAnimationFrame(readyFrame);
    fetchControllers.forEach(controller => controller.abort());
    fetchControllers.clear();
    cleanups.splice(0).reverse().forEach(cleanup => {
      try { cleanup(); } catch (e) {}
    });
    blobUrls.forEach(url => URL.revokeObjectURL(url));
    blobUrls.clear();
    Array.from(container.children).forEach(node => {
      if (!originalChildren.has(node)) node.remove();
    });
    restoreFallback();
    if (originalClass == null) container.removeAttribute('class');
    else container.setAttribute('class', originalClass);
    if (originalStyle == null) container.removeAttribute('style');
    else container.setAttribute('style', originalStyle);
    if (originalMounted == null) container.removeAttribute('data-sw-mounted');
    else container.setAttribute('data-sw-mounted', originalMounted);
    releaseCSS(cssToken);
    cssToken = null;
  };

  const failMount = error => {
    destroy();
    if (typeof config.onError === 'function') config.onError(error);
  };

  try {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // BEHAVIOUR hardening (seek step, priming, particles, resize gating) keys off input
  // type + viewport: `coarse` is captured once (input type doesn't change mid-session);
  // the ≤860px query is read live via isMobile() so a desktop resize/DevTools toggle
  // switches seek behaviour without a reload.
  const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const smallMQ = window.matchMedia('(max-width: 860px)');
  const isMobile = () => coarse || smallMQ.matches;
  // CLIP TIER keys off device class, NOT input type: an iPad Pro is coarse-pointer but
  // has a desktop-class screen and decoder — it gets the 1080p master, with the touch
  // hardening above still on. screen.* is stable across rotation and window resizes;
  // a phone's short side is ≤ ~500 CSS px, tablets start at 744.
  const phoneClass = Math.min(screen.width, screen.height) <= 600;
  // Network signals are Chromium-only (iOS/Safari/Firefox expose nothing) — treat them
  // strictly as a *downgrade* signal on top of a conservative default, never as a gate
  // for the good experience.
  const conn = navigator.connection;
  const dataSaver = !!(conn && conn.saveData);
  const slowNet = !!(conn && /^(slow-2g|2g|3g)$/.test(conn.effectiveType || ''));
  // Stills mode: the page becomes the stills cross-dissolving as you scroll — no video
  // load, no decode. Entered up-front for prefers-reduced-motion and data-saver, and at
  // runtime when iOS Low Power Mode blocks video (see enterStillsMode/primeVideo).
  let stillsOnly = reduce || dataSaver;
  const SECTIONS = config.sections || [];
  const CONNECTORS = config.connectors || [];
  const CONNECTORS_M = config.connectorsMobile || [];
  const DIVE_W = config.diveScroll || 1.3;
  const CONN_W = config.connScroll || 0.9;
  const CROSSFADE = (config.crossfade != null) ? config.crossfade : 0.12;  // seam dissolve width (vh)
  const N = SECTIONS.length;
  if (!N) return destroy;

  cssToken = injectCSS();
  container.classList.add('sw-root');
  container.dataset.swMounted = 'true';

  // ---- build the interleaved segment chain: dive0, conn0, dive1, … diveN-1 ----
  const SEGMENTS = [];
  SECTIONS.forEach((s, i) => {
    const dive = { kind: 'dive', si: i, clip: s.clip, clipM: s.clipMobile, still: s.still,
                   poster: s.poster, posterM: s.posterMobile,
                   accent: s.accent, w: s.scroll || DIVE_W, linger: s.linger || 0 };
    SEGMENTS.push(dive);
    s._seg = dive;
    // A connector is optional: if connectors[i] is falsy, the two dives simply
    // crossfade directly (no fly-over). Lets a page complete even when a
    // connector can't be generated (e.g. a content-filter false-positive).
    if (i < N - 1 && CONNECTORS[i]) {
      SEGMENTS.push({ kind: 'conn', si: i, clip: CONNECTORS[i], clipM: CONNECTORS_M[i],
                      still: SECTIONS[i + 1].still, poster: SECTIONS[i + 1].poster,
                      posterM: SECTIONS[i + 1].posterMobile,
                      accent: SECTIONS[i + 1].accent, w: CONN_W });
    }
  });
  const NSEG = SEGMENTS.length;

  // ---- DOM ----
  const sky = el('div', 'sw-sky');
  if (config.atmosphere !== false) {
    sky.appendChild(el('div', 'sw-sky__grad'));
    sky.appendChild(el('div', 'sw-sky__glow'));
  }
  const particles = el('div', 'sw-particles'); sky.appendChild(particles);

  const scrollbar = el('div', 'sw-scrollbar');
  const scrollbarFill = el('span'); scrollbar.appendChild(scrollbarFill);

  const topbar = el('div', 'sw-topbar');
  if (config.brand) {
    const brand = el('a', 'sw-brand'); brand.href = (config.brand.href || '#');
    if (config.brand.logo) {
      const lg = el('img', 'sw-brand__logo'); lg.src = config.brand.logo;
      lg.alt = config.brand.name || ''; lg.decoding = 'async';
      brand.appendChild(lg);
    } else {
      brand.appendChild(el('span', 'sw-brand__mark'));
      const nm = el('span', 'sw-brand__name'); nm.textContent = config.brand.name || ''; brand.appendChild(nm);
    }
    topbar.appendChild(brand);
  }
  const nav = el('nav', 'sw-nav'); if (config.nav !== false) topbar.appendChild(nav);
  if (config.cta && config.cta.label) {
    const c = el('a', 'sw-topcta'); c.href = config.cta.href || '#'; c.textContent = config.cta.label;
    topbar.appendChild(c);
  }

  const stage = el('div', 'sw-stage');
  const copylayer = el('div', 'sw-copylayer');
  const route = el('div', 'sw-route');
  const hint = el('div', 'sw-hint');
  const hintText = el('span'); hintText.textContent = config.hint || 'scroll'; hint.appendChild(hintText);
  hint.appendChild(el('i'));
  const track = el('div', 'sw-track');

  // Embed patch (3f): route:false removes the unlabelled mobile controls entirely.
  const engineNodes = [sky, scrollbar];
  if (topbar.childElementCount) engineNodes.push(topbar);
  engineNodes.push(stage, copylayer);
  if (config.route !== false) engineNodes.push(route);
  engineNodes.push(hint, track);
  engineNodes.forEach(n => container.appendChild(n));

  // segment scenes
  SEGMENTS.forEach((s, i) => {
    const scene = el('div', 'sw-scene'); scene.style.setProperty('--sw-accent', s.accent || '');
    const img = el('img', 'sw-scene__still'); img.alt = ''; img.decoding = 'async';
    // Embed patch (3i): the first poster is the LCP candidate; later posters stay lazy.
    if (i === 0) {
      img.loading = 'eager';
      img.setAttribute('fetchpriority', 'high');
    } else {
      img.loading = 'lazy';
    }
    // Prefer the extracted-frame poster (pixel-identical to the clip's first frame,
    // so the still→video swap can't pop) — matching the encode the device will get.
    // In stills mode the clip never loads, so the higher-fidelity source still is the
    // better permanent image.
    const pref = phoneClass ? (s.posterM || s.poster) : s.poster;
    const posterSrc = (!stillsOnly && pref) ? pref : s.still;
    if (posterSrc) img.src = posterSrc;
    scene.appendChild(img); stage.appendChild(scene);
    s.el = scene; s.img = img; s.video = null; s.hasClip = false;
    s.loading = false; s.ready = false; s.cur = 0; s.target = 0; s.visible = false;
  });

  // per-section copy / route / nav
  const copies = [], dots = [];
  SECTIONS.forEach((s, i) => {
    const c = el('article', 'sw-copy'); c.style.setProperty('--sw-accent', s.accent || '');
    // Embed patch (3g): only the active scene copy participates in the accessibility tree.
    c.inert = true;
    c.setAttribute('aria-hidden', 'true');
    const titleTag = i === 0 ? 'h1' : 'h2';
    c.innerHTML =
      `<span class="sw-copy__num">${pad(i + 1)} / ${pad(N)}</span>` +
      (s.eyebrow ? `<span class="sw-copy__eyebrow">${esc(s.eyebrow)}</span>` : '') +
      (s.title ? `<${titleTag} class="sw-copy__title">${esc(s.title)}</${titleTag}>` : '') +
      (s.body ? `<p class="sw-copy__body">${esc(s.body)}</p>` : '') +
      (s.tags && s.tags.length ? `<ul class="sw-copy__tags">${s.tags.map(t => `<li>${esc(t)}</li>`).join('')}</ul>` : '') +
      (s.cta ? `<div class="sw-copy__cta">${ctaBtns(s.cta)}</div>` : '');
    copylayer.appendChild(c); copies.push(c);

    if (config.route !== false) {
      const dot = el('button', 'sw-route__dot'); dot.style.setProperty('--sw-accent', s.accent || '');
      dot.innerHTML = `<span class="sw-route__label">${esc(s.label || '')}</span><i></i>`;
      dot.addEventListener('click', () => jumpTo(i)); route.appendChild(dot); dots.push(dot);
    }

    if (config.nav !== false) {
      const b = el('button', 'sw-nav__item'); b.textContent = s.label || '';
      b.addEventListener('click', () => jumpTo(i)); nav.appendChild(b);
    }
  });

  // ---- math ----
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const smooth = x => { x = clamp(x); return x * x * (3 - 2 * x); };
  const listen = (target, type, handler, options) => {
    target.addEventListener(type, handler, options);
    cleanups.push(() => target.removeEventListener(type, handler, options));
  };
  // Per-section dwell: monotone remap of scroll→time so the camera settles mid-scene
  // (where the copy peaks) and moves quicker near the seams. L=0 linear, L=1 full
  // mid-scene pause. f(0)=0, f(1)=1 always, so seam frames are untouched.
  const lingerEase = (x, L) => { L = clamp(L); const c = x - 0.5; return (1 - L) * x + L * (4 * c * c * c + 0.5); };
  let vh = window.innerHeight, stageX = 0, totalW = 0, activeIndex = -1, ticking = false;
  let worldStart = 0, worldEnd = 0, worldVisible = true;
  let engineReady = false;
  let laidOutW = window.innerWidth;   // width the current layout was computed at (see onResize)

  function layout() {
    if (disposed) return;
    vh = window.innerHeight;
    laidOutW = window.innerWidth;
    stageX = window.innerWidth > 860 ? 4 : 0;
    // Small viewports read a camera flight as faster than big ones do, so give each
    // segment more scroll distance on mobile (industry pattern: mobile scroll runs are
    // LONGER than desktop's for the same sequence). Override via scrollMobileFactor.
    const wf = isMobile() ? (config.scrollMobileFactor != null ? config.scrollMobileFactor : 1.2) : 1;
    let off = 0;
    SEGMENTS.forEach(s => { s.start = off * vh; off += s.w * wf; s.end = off * vh; });
    totalW = off;
    // Embedded hero: keep the post-finale dwell short (0.25vh) — the release point is
    // the track bottom (worldEnd), so a long dwell would show an empty sky with the
    // proof content bleeding in underneath. Track height and release derive from the
    // same boundary (spec step 3b).
    track.style.height = (totalW * vh + 0.25 * vh) + 'px';
    // Embed patch (3a/3b): measure one document-space boundary for all hero math and handoff.
    worldStart = container.getBoundingClientRect().top + window.scrollY;
    worldEnd = track.getBoundingClientRect().bottom + window.scrollY;
    read();
  }

  function jumpTo(i) {
    const seg = SECTIONS[i]._seg;
    // Embed patch (3a): scene jumps are relative to the embedded world's document offset.
    window.scrollTo({ top: worldStart + seg.start + (seg.end - seg.start) * 0.5, behavior: reduce ? 'auto' : 'smooth' });
  }

  let firstPosterReady = false;
  let lcpConfirmed = false;
  let videoLoadAllowed = false;

  function allowVideoLoading() {
    if (disposed || videoLoadAllowed) return;
    videoLoadAllowed = true;
    read();
  }

  function enterStillsMode() {
    if (disposed || stillsOnly) return;
    stillsOnly = true;
    fetchControllers.forEach(controller => controller.abort());
    fetchControllers.clear();
    SEGMENTS.forEach(s => {
      if (s.video) {
        try { s.video.pause(); } catch (e) {}
        s.video.remove();
      }
      if (s.blobUrl) {
        URL.revokeObjectURL(s.blobUrl);
        blobUrls.delete(s.blobUrl);
        s.blobUrl = null;
      }
      if (s.still) s.img.src = s.still;
      s.el.classList.remove('has-clip');
      s.video = null; s.hasClip = false; s.ready = false; s.loading = false;
    });
    read();
  }

  function loadClip(s) {
    if (disposed || stillsOnly || s.loading || !s.clip) return;
    // Embed patch (3i): scene one cannot fetch video before scroll intent or its LCP.
    if (s === SEGMENTS[0] && !videoLoadAllowed) return;
    s.loading = true;
    // Serve the lighter mobile encode on phone-class devices when one was provided
    // (tablets and desktops get the full master — see phoneClass above).
    const url = (phoneClass && s.clipM) ? s.clipM : s.clip;
    const controller = new AbortController();
    fetchControllers.add(controller);
    fetch(url, { signal: controller.signal }).then(r => {
      if (disposed) return Promise.reject(new DOMException('Disposed', 'AbortError'));
      return r.ok ? r.blob() : Promise.reject(new Error('404'));
    })
      .then(blob => {
        fetchControllers.delete(controller);
        if (disposed) return;
        const v = document.createElement('video');
        v.className = 'sw-scene__video';
        v.muted = true; v.playsInline = true; v.preload = 'auto';
        v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
        const blobUrl = URL.createObjectURL(blob);
        blobUrls.add(blobUrl); s.blobUrl = blobUrl; v.src = blobUrl;
        listen(v, 'loadedmetadata', () => {
          if (disposed) return;
          s.ready = true;
          read();
        });
        // Reveal the video (hide the still poster) only once a real frame has
        // painted — on iOS a seeked-but-never-played muted video stays blank, so
        // hiding the still on metadata alone would flash an empty scene.
        listen(v, 'seeked', () => {
          if (!disposed) s.el.classList.add('has-clip');
        }, { once: true });
        listen(v, 'loadeddata', () => {
          if (disposed) return;
          try { v.pause(); } catch (e) {}
          if (userReady) primeVideo(v);
        });
        if (disposed) {
          URL.revokeObjectURL(blobUrl);
          blobUrls.delete(blobUrl);
          return;
        }
        s.el.appendChild(v); s.video = v; s.hasClip = true;
      }).catch(error => {
        fetchControllers.delete(controller);
        if (!disposed && error && error.name !== 'AbortError') s.loading = false;
      });
  }

  function read() {
    if (disposed) return;
    const pageY = window.scrollY || window.pageYOffset;
    // Embed patch (3a): clamp page scroll into local world coordinates (including Y=0).
    const y = Math.max(0, pageY - worldStart);
    if (container.hasAttribute('data-sw-skip-exit') && pageY < worldEnd - 0.25 * vh) {
      container.removeAttribute('data-sw-skip-exit');
    }
    const pastWorld = pageY >= worldEnd || container.hasAttribute('data-sw-skip-exit');
    const fade = CROSSFADE * vh;
    let ci = 0;
    for (let i = 0; i < NSEG; i++) if (y >= SEGMENTS[i].start) ci = i;

    // On a slow connection (Chromium signal only) shrink the prefetch window: fetch the
    // clip you're in, not the neighbourhood. Everyone else prefetches ±1.6 viewports.
    const lookahead = slowNet ? 0.4 : 1.6;
    for (let i = 0; i < NSEG; i++) {
      const s = SEGMENTS[i];
      if (y > s.start - lookahead * vh && y < s.end + lookahead * vh) loadClip(s);
      const local = clamp((y - s.start) / (s.end - s.start), 0, 1);
      s.target = s.linger ? lingerEase(local, s.linger) : local;
      let outside = 0;
      // The finale scene never fades on its own — it stays up through the dwell and
      // leaves with the whole world at the sw-past release (no empty-sky window).
      if (y < s.start) outside = s.start - y; else if (y > s.end) outside = (i === NSEG - 1) ? 0 : y - s.end;
      const op = smooth(1 - outside / fade);
      s.el.style.opacity = op; s.visible = op > 0.001;
      s.el.style.zIndex = (i === ci) ? '120' : String(100 + Math.round(op * 10));
      if (!s.hasClip || !s.ready) {
        const sc = reduce ? 1 : 1.03 + local * 0.14;
        s.img.style.transform = `translateX(${stageX - 2}vw) scale(${sc.toFixed(3)})`;
      }
    }

    for (let i = 0; i < N; i++) {
      const seg = SECTIONS[i]._seg;
      const pr = clamp((y - seg.start) / (seg.end - seg.start), 0, 1);
      const before = y < seg.start, after = y > seg.end;
      let cop;
      // Plateau statt Dreiecks-Peak: Copy blendet kurz ein, STEHT über die
      // Szenenmitte fest und blendet erst kurz vor der Naht aus (Denis 2026-07-12:
      // "Texte gehen zu schnell weg").
      if (i === N - 1) {
        // Embed fix: once the finale reaches its copy peak, hold it through the +1vh dwell.
        cop = before ? 0 : (pr < 0.25 ? smooth(clamp(pr / 0.25)) : 1);
      }
      else if (i === 0) cop = after ? 0 : smooth(clamp((1 - pr) / 0.3));     // greets, hält bis ~70%
      else cop = (before || after) ? 0 : smooth(clamp(pr / 0.15)) * smooth(clamp((1 - pr) / 0.15));
      const c = copies[i];
      c.style.opacity = cop;
      c.style.transform = reduce ? 'none' : `translateY(${(0.5 - pr) * 4}vh)`;
      const copyActive = engineReady && !pastWorld && cop > 0.5;
      c.style.pointerEvents = copyActive ? 'auto' : 'none';
      c.inert = !copyActive;
      c.setAttribute('aria-hidden', copyActive ? 'false' : 'true');
    }

    const cur = SEGMENTS[ci];
    const near = clamp(cur.kind === 'dive' ? cur.si
      : (((y - cur.start) / (cur.end - cur.start)) > 0.5 ? cur.si + 1 : cur.si), 0, N - 1);
    if (near !== activeIndex) {
      activeIndex = near;
      dots.forEach((d, k) => d.classList.toggle('is-active', k === near));
      nav.querySelectorAll('.sw-nav__item').forEach((n, k) => n.classList.toggle('is-active', k === near));
      container.style.setProperty('--sw-accent', SECTIONS[near].accent || '');
    }
    scrollbarFill.style.transform = `scaleX(${clamp(y / Math.max(1, worldEnd - worldStart))})`;
    hint.style.opacity = clamp(1 - y / (0.5 * vh));
    if (particles) particles.style.transform = `translate3d(0, ${-y * 0.05}px, 0)`;
    // Embedded mode: when the page continues BELOW the world (hero use), release
    // the fixed layers once the visitor scrolls past the track — and bring them
    // back when scrolling up. On a standalone page this never triggers.
    // Embed patch (3b): release at the measured track-bottom; the wrapper may hold the
    // exit during a skip-margin jump until the visitor deliberately scrolls back up.
    container.classList.toggle('sw-past', pastWorld);
    worldVisible = !pastWorld && pageY < worldEnd && pageY + vh > worldStart;
    ticking = false;
    readFrame = 0;
    scheduleSeekFrame();
  }

  function scheduleSeekFrame() {
    if (disposed || seekFrame) return;
    const needsSeek = SEGMENTS.some(s => s.hasClip && s.ready && s.video &&
      ((worldVisible && s.visible) || Math.abs(s.cur - s.target) >= 0.002 || s.video.seeking));
    // Embed patch (3e): RAFs stop outside the world once all seeks have converged.
    if (!worldVisible && !needsSeek) return;
    if (!needsSeek) return;
    seekFrame = requestAnimationFrame(raf);
  }

  function raf() {
    seekFrame = 0;
    if (disposed) return;
    const eps = isMobile() ? 0.02 : 0.008;   // coarser seek step on phones = fewer decodes
    let needsSeek = false;
    for (let i = 0; i < NSEG; i++) {
      const s = SEGMENTS[i];
      if (!s.hasClip || !s.ready || !s.video) continue;
      // Never queue a seek while the decoder is still resolving the last one.
      // On phones a fast flick would otherwise pile up seeks and freeze the clip;
      // cur keeps lerping, so we snap to the latest target the moment it's free.
      if (s.video.seeking) { needsSeek = true; continue; }
      if (!s.visible && Math.abs(s.cur - s.target) < 0.002) continue;
      s.cur += (s.target - s.cur) * (reduce ? 1 : 0.18);
      const dur = s.video.duration || 1;
      const t = clamp(s.cur, 0, 0.999) * dur;
      if (Math.abs(s.video.currentTime - t) > eps) { try { s.video.currentTime = t; } catch (e) {} }
      if (Math.abs(s.cur - s.target) >= 0.002 || s.video.seeking) needsSeek = true;
    }
    if ((worldVisible || needsSeek) && needsSeek) scheduleSeekFrame();
  }

  // iOS needs a user gesture before a muted video will decode/paint reliably. On the
  // first touch we prime every loaded clip (muted play→pause) so the first seek is
  // instant instead of showing a blank frame. `userReady` also makes freshly-loaded
  // clips prime themselves (see loadClip).
  let userReady = false;
  function primeVideo(v) {
    if (disposed || !isMobile() || !v) return;
    // A muted, playsinline play() that REJECTS on a user gesture means the OS is
    // blocking video — in practice iOS Low Power Mode, where currentTime scrubbing
    // doesn't work either. Fall back to stills for the whole page instead of showing
    // frozen/blank scenes.
    try {
      const p = v.play();
      if (p && p.then) p.then(() => {
        if (disposed) return;
        try { v.pause(); } catch (e) {}
      }).catch(() => {
        if (!disposed) enterStillsMode();
      });
    }
    catch (e) {}
  }
  function onFirstGesture() {
    if (disposed || userReady) return;
    userReady = true;
    SEGMENTS.forEach(s => primeVideo(s.video));
  }
  listen(window, 'pointerdown', onFirstGesture, { once: true, passive: true });
  listen(window, 'touchstart', onFirstGesture, { once: true, passive: true });

  // Particles are a per-frame cost we can't afford alongside video scrubbing on a phone.
  seedParticles(particles, reduce || coarse);
  function onScroll() {
    if (!ticking) {
      ticking = true;
      readFrame = requestAnimationFrame(read);
    }
  }
  function onScrollIntent(event) {
    if (event.type !== 'keydown' || ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) {
      allowVideoLoading();
    }
  }
  listen(window, 'scroll', onScroll, { passive: true });
  listen(window, 'wheel', onScrollIntent, { once: true, passive: true });
  listen(window, 'touchmove', onScrollIntent, { once: true, passive: true });
  listen(window, 'keydown', onScrollIntent);
  // Mobile browsers fire `resize` every time the URL bar slides in/out. Re-running
  // layout() there rebuilds the track height and yanks the scroll position, so on
  // touch we ignore height-only changes and only relayout when the width actually
  // changes (rotation still comes through orientationchange). layout() records the
  // width it laid out at.
  function onResize() {
    if (coarse && window.innerWidth === laidOutW) {
      worldStart = container.getBoundingClientRect().top + window.scrollY;
      worldEnd = track.getBoundingClientRect().bottom + window.scrollY;
      read();
      return;
    }
    layout();
  }
  listen(window, 'resize', onResize);
  listen(window, 'orientationchange', layout);
  listen(window, 'load', layout);

  // Embed patch (3i): LCP unlocks scene-one video only after its poster is paint-ready.
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver(list => {
        if (disposed) return;
        const firstPoster = SEGMENTS[0].img;
        const confirmed = list.getEntries().some(entry => {
          const element = entry.element;
          return element === firstPoster || (element && element.matches && element.matches('[data-sw-lcp]'));
        });
        if (confirmed) {
          lcpObserver.disconnect();
          lcpConfirmed = true;
          if (firstPosterReady) allowVideoLoading();
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      cleanups.push(() => lcpObserver.disconnect());
    } catch (e) {}
  }

  layout();

  const firstPoster = SEGMENTS[0].img;
  const revealEngine = () => {
    if (disposed || engineReady) return;
    firstPosterReady = true;
    readyFrame = requestAnimationFrame(() => {
      readyFrame = 0;
      if (disposed) return;
      fallbackState.forEach(({ node }) => {
        node.hidden = true;
        node.setAttribute('aria-hidden', 'true');
        node.inert = true;
      });
      engineReady = true;
      container.classList.add('sw-ready');
      // Hiding the in-flow fallback moves the track, so remeasure before paint handoff.
      layout();
      if (lcpConfirmed) allowVideoLoading();
      if (typeof config.onReady === 'function') config.onReady();
    });
  };
  const posterFailed = () => failMount(new Error('Scene-one poster failed to load'));
  if (firstPoster.complete) {
    if (firstPoster.naturalWidth > 0) {
      if (typeof firstPoster.decode === 'function') {
        firstPoster.decode().then(() => {
          if (!disposed) revealEngine();
        }).catch(() => {
          if (!disposed && firstPoster.naturalWidth > 0) revealEngine();
          else if (!disposed) posterFailed();
        });
      } else revealEngine();
    } else posterFailed();
  } else {
    listen(firstPoster, 'load', revealEngine, { once: true });
    listen(firstPoster, 'error', posterFailed, { once: true });
  }

  // ---- helpers ----
  function el(tag, cls) { const n = document.createElement(tag); if (cls) n.className = cls; return n; }
  function pad(n) { return String(n).padStart(2, '0'); }
  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  function ctaBtns(cta) {
    let h = '';
    if (cta.primary) h += `<a class="sw-btn sw-btn--primary" href="${esc(cta.primary.href || '#')}">${esc(cta.primary.label)}</a>`;
    if (cta.secondary) h += `<a class="sw-btn sw-btn--ghost" href="${esc(cta.secondary.href || '#')}">${esc(cta.secondary.label)}</a>`;
    if (cta.tertiary) h += `<a class="sw-btn sw-btn--ghost" href="${esc(cta.tertiary.href || '#')}">${esc(cta.tertiary.label)}</a>`;
    return h;
  }
  return destroy;
  } catch (error) {
    failMount(error);
    return destroy;
  }
}

function seedParticles(host, reduce) {
  if (!host || reduce) return;
  const kinds = ['dot', 'dot', 'ring'];
  const seeds = [7, 23, 41, 58, 71, 88, 12, 34, 52, 66, 83, 95, 18, 29, 47, 63, 77, 91, 5, 38, 55, 69, 82, 97];
  for (let k = 0; k < 20; k++) {
    const s = document.createElement('span');
    s.className = 'sw-pt sw-pt--' + kinds[k % kinds.length];
    s.style.left = seeds[k % seeds.length] + 'vw';
    s.style.top = ((seeds[(k * 3) % seeds.length] * 1.3) % 100) + 'vh';
    s.style.setProperty('--sw-sc', (0.5 + ((seeds[(k * 5) % seeds.length] % 60) / 60) * 1.1).toFixed(2));
    const dur = 14 + (seeds[(k * 7) % seeds.length] % 22);
    s.style.animationDuration = dur + 's';
    s.style.animationDelay = (-(seeds[(k * 2) % seeds.length] % dur)) + 's';
    host.appendChild(s);
  }
}

function injectCSS() {
  const existing = document.getElementById('sw-css');
  if (existing) {
    const users = Number(existing.dataset.swUsers || 0);
    if (users > 0) {
      existing.dataset.swUsers = String(users + 1);
      return { style: existing, managed: true };
    }
    return { style: existing, managed: false };
  }
  const css = `
  .sw-root{--sw-bg:#F5EDE0;--sw-ink:#241d2b;--sw-ink-soft:#6a6072;--sw-accent:#8a7bb5;
    --sw-font-display:ui-rounded,"SF Pro Rounded","Segoe UI",system-ui,sans-serif;
    --sw-font-body:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,system-ui,sans-serif;
    position:relative;margin:0;background:var(--sw-bg,#F5EDE0);overflow-x:clip;
    color:var(--sw-ink);font-family:var(--sw-font-body);}
  /* Embed patch (3h): engine visibility and resets stay scoped to its container. */
  .sw-root:not(.sw-ready) .sw-sky,.sw-root:not(.sw-ready) .sw-topbar,.sw-root:not(.sw-ready) .sw-stage,.sw-root:not(.sw-ready) .sw-copylayer,.sw-root:not(.sw-ready) .sw-route,.sw-root:not(.sw-ready) .sw-scrollbar,.sw-root:not(.sw-ready) .sw-hint{opacity:0!important;visibility:hidden;}
  .sw-sky{position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:var(--sw-bg);}
  .sw-sky,.sw-topbar,.sw-stage,.sw-copylayer,.sw-route,.sw-scrollbar{transition:opacity .35s;}
  .sw-root.sw-past .sw-sky,.sw-root.sw-past .sw-topbar,.sw-root.sw-past .sw-stage,.sw-root.sw-past .sw-copylayer,.sw-root.sw-past .sw-route,.sw-root.sw-past .sw-scrollbar,.sw-root.sw-past .sw-hint{opacity:0 !important;visibility:hidden;transition:opacity .35s,visibility 0s .35s;}
  .sw-sky__grad{position:absolute;inset:-10%;background:linear-gradient(178deg,color-mix(in srgb,var(--sw-accent) 12%,var(--sw-bg)) 0%,var(--sw-bg) 55%,color-mix(in srgb,var(--sw-accent) 6%,var(--sw-bg)) 100%);}
  .sw-sky__glow{position:absolute;inset:0;background:radial-gradient(60% 42% at 74% 16%,color-mix(in srgb,var(--sw-accent) 22%,transparent),transparent 70%),radial-gradient(46% 34% at 50% 50%,color-mix(in srgb,#fff 45%,transparent),transparent 70%);}
  .sw-particles{position:absolute;inset:-6% -2%;will-change:transform;}
  .sw-pt{position:absolute;width:13px;height:13px;transform:scale(var(--sw-sc,1));opacity:0;animation:sw-drift linear infinite;}
  .sw-pt::before{content:"";position:absolute;inset:0;border-radius:50%;}
  .sw-pt--dot::before{background:radial-gradient(circle at 34% 30%,color-mix(in srgb,var(--sw-accent) 60%,#000),#000 82%);}
  .sw-pt--ring::before{background:transparent;border:2px solid color-mix(in srgb,var(--sw-accent) 55%,transparent);}
  @keyframes sw-drift{0%{opacity:0;transform:scale(var(--sw-sc)) translate(0,12vh) rotate(0)}12%{opacity:.5}88%{opacity:.45}100%{opacity:0;transform:scale(var(--sw-sc)) translate(4vw,-22vh) rotate(210deg)}}
  .sw-scrollbar{position:fixed;top:0;left:0;right:0;height:3px;z-index:60;background:color-mix(in srgb,var(--sw-accent) 14%,transparent);}
  .sw-scrollbar span{display:block;height:100%;width:100%;transform-origin:0 50%;transform:scaleX(0);background:var(--sw-accent);}
  .sw-topbar{position:fixed;top:0;left:0;right:0;z-index:50;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:clamp(14px,2.4vw,26px) clamp(18px,5vw,64px);}
  .sw-brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--sw-ink);}
  .sw-brand__mark{width:24px;height:28px;border-radius:7px 7px 10px 10px;background:linear-gradient(160deg,var(--sw-accent),color-mix(in srgb,var(--sw-accent) 60%,#000));box-shadow:0 6px 14px color-mix(in srgb,var(--sw-accent) 40%,transparent);}
  .sw-brand__name{font-family:var(--sw-font-display);font-weight:700;font-size:1.1rem;}
  .sw-nav{display:flex;gap:4px;padding:5px;background:color-mix(in srgb,#fff 55%,transparent);backdrop-filter:blur(10px);border:1px solid color-mix(in srgb,var(--sw-accent) 16%,transparent);border-radius:999px;}
  .sw-nav__item{font:inherit;font-size:.82rem;color:var(--sw-ink-soft);border:0;background:transparent;cursor:pointer;padding:7px 14px;border-radius:999px;transition:color .25s,background .25s;}
  .sw-nav__item:hover{color:var(--sw-ink);} .sw-nav__item.is-active{color:#fff;background:var(--sw-accent);}
  .sw-topcta{text-decoration:none;font-weight:600;font-size:.9rem;color:#fff;background:var(--sw-ink);padding:10px 20px;border-radius:999px;white-space:nowrap;}
  .sw-stage{position:fixed;inset:0;z-index:10;pointer-events:none;}
  .sw-scene{position:absolute;inset:0;opacity:0;overflow:hidden;will-change:opacity;}
  .sw-scene__video,.sw-scene__still{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 42%;}
  .sw-scene__still{will-change:transform;} .sw-scene.has-clip .sw-scene__still{opacity:0;} .sw-scene__video{z-index:1;}
  .sw-copylayer{position:fixed;inset:0;z-index:20;pointer-events:none;}
  .sw-copylayer::before{content:"";position:absolute;inset:0;width:min(58vw,780px);background:linear-gradient(90deg,var(--sw-bg) 0%,color-mix(in srgb,var(--sw-bg) 82%,transparent) 34%,color-mix(in srgb,var(--sw-bg) 40%,transparent) 62%,transparent 100%);}
  .sw-copy{position:absolute;left:clamp(18px,5vw,64px);top:50%;transform:translateY(-50%);width:min(42vw,460px);opacity:0;will-change:opacity,transform;}
  .sw-copy__num{font-family:ui-monospace,Menlo,monospace;font-size:.74rem;letter-spacing:.12em;color:var(--sw-ink-soft);}
  .sw-copy__eyebrow{display:block;margin-top:18px;font-family:var(--sw-font-display);font-weight:700;font-size:.8rem;letter-spacing:.16em;text-transform:uppercase;color:var(--sw-accent);}
  .sw-copy__title{font-family:var(--sw-font-display);font-weight:700;color:var(--sw-ink);font-size:clamp(2rem,4.4vw,3.5rem);line-height:1.03;margin:12px 0 0;letter-spacing:-.01em;text-shadow:0 2px 20px color-mix(in srgb,var(--sw-bg) 70%,transparent);}
  .sw-copy__body{margin-top:18px;font-size:clamp(1rem,1.25vw,1.14rem);line-height:1.55;color:color-mix(in srgb,var(--sw-ink) 78%,var(--sw-ink-soft));max-width:40ch;text-shadow:0 1px 12px color-mix(in srgb,var(--sw-bg) 90%,transparent);}
  .sw-copy__tags{list-style:none;display:flex;flex-wrap:wrap;gap:8px;margin:24px 0 0;padding:0;}
  .sw-copy__tags li{font-size:.82rem;font-weight:600;color:color-mix(in srgb,var(--sw-accent) 70%,#000);padding:7px 14px;border-radius:999px;background:color-mix(in srgb,var(--sw-accent) 14%,#fff);border:1px solid color-mix(in srgb,var(--sw-accent) 30%,transparent);}
  .sw-copy__cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px;pointer-events:auto;}
  .sw-root .sw-btn{display:inline-flex;min-height:56px;align-items:center;justify-content:center;text-decoration:none;font-weight:600;font-size:.95rem;padding:13px 24px;border-radius:999px;transition:transform .2s,background-color .2s,color .2s;}
  .sw-root .sw-btn--primary{color:#fff;background:#B45309;} .sw-root .sw-btn--primary:hover{background:#92400E;transform:translateY(-2px);}
  .sw-root .sw-btn--ghost{color:var(--sw-ink);border:1.5px solid color-mix(in srgb,var(--sw-ink) 35%,transparent);background:color-mix(in srgb,var(--sw-bg) 88%,#fff);} .sw-root .sw-btn--ghost:hover{transform:translateY(-2px);}
  .sw-root .sw-btn:focus-visible{outline:3px solid #2563EB;outline-offset:4px;}
  .sw-route{position:fixed;right:clamp(14px,2.4vw,30px);top:50%;z-index:40;transform:translateY(-50%);display:flex;flex-direction:column;gap:22px;padding:18px 10px;}
  .sw-route::before{content:"";position:absolute;left:50%;top:22px;bottom:22px;width:2px;transform:translateX(-50%);background:var(--sw-accent);opacity:.28;}
  .sw-route__dot{position:relative;border:0;background:transparent;cursor:pointer;width:14px;height:14px;display:grid;place-items:center;}
  .sw-route__dot i{width:9px;height:9px;border-radius:50%;background:color-mix(in srgb,var(--sw-accent) 40%,transparent);transition:transform .3s,background .3s,box-shadow .3s;}
  .sw-route__dot:hover i{transform:scale(1.25);background:var(--sw-accent);}
  .sw-route__dot.is-active i{background:var(--sw-accent);transform:scale(1.4);box-shadow:0 0 0 5px color-mix(in srgb,var(--sw-accent) 22%,transparent);}
  .sw-route__label{position:absolute;right:24px;top:50%;transform:translateY(-50%) translateX(6px);white-space:nowrap;font-size:.78rem;font-weight:600;color:var(--sw-ink);background:color-mix(in srgb,#fff 85%,transparent);backdrop-filter:blur(6px);padding:5px 11px;border-radius:999px;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;border:1px solid color-mix(in srgb,var(--sw-accent) 14%,transparent);}
  .sw-route__dot:hover .sw-route__label,.sw-route__dot.is-active .sw-route__label{opacity:1;transform:translateY(-50%) translateX(0);}
  .sw-hint{position:fixed;left:50%;bottom:26px;z-index:30;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:10px;font-size:.76rem;letter-spacing:.14em;text-transform:uppercase;color:var(--sw-ink-soft);transition:opacity .3s;}
  .sw-hint i{width:22px;height:34px;border-radius:12px;border:2px solid color-mix(in srgb,var(--sw-ink) 28%,transparent);position:relative;}
  .sw-hint i::after{content:"";position:absolute;left:50%;top:7px;width:4px;height:7px;border-radius:2px;background:var(--sw-accent);transform:translateX(-50%);animation:sw-wheel 1.7s ease-in-out infinite;}
  @keyframes sw-wheel{0%{opacity:0;top:6px}40%{opacity:1}100%{opacity:0;top:17px}}
  .sw-track{position:relative;z-index:1;width:100%;pointer-events:none;}
  @media (max-width:860px){
    .sw-nav{display:none;}
    .sw-copylayer::before{width:100%;height:60%;top:auto;bottom:0;background:linear-gradient(0deg,var(--sw-bg) 8%,color-mix(in srgb,var(--sw-bg) 70%,transparent) 46%,transparent 100%);}
    /* Anchor copy to the bottom, clear of the home indicator / collapsing URL bar.
       dvh + env() are progressive: browsers that lack them keep the vh fallback line. */
    .sw-copy{left:clamp(18px,5vw,64px);right:clamp(18px,5vw,64px);top:auto;bottom:clamp(64px,14vh,120px);transform:none;width:auto;max-width:560px;}
    .sw-copy{bottom:calc(clamp(56px,12dvh,110px) + env(safe-area-inset-bottom));}
    .sw-copy__title{font-size:clamp(1.9rem,7.5vw,2.7rem);}
    .sw-copy__body{max-width:none;font-size:clamp(.98rem,3.6vw,1.1rem);} .sw-scene__video,.sw-scene__still{object-position:center 46%;}
    .sw-hint{bottom:calc(20px + env(safe-area-inset-bottom));}
    /* Keep the first-visit story controls clear of the route's consent dialog. */
    .sw-root.sw-consent-visible .sw-copy{bottom:calc(var(--sw-consent-clearance,200px) + env(safe-area-inset-bottom));}
    .sw-root.sw-consent-visible .sw-hint{left:auto;right:18px;top:calc(var(--fs-header-height,77px) + 68px);bottom:auto;transform:none;}
    .sw-route{gap:16px;right:6px;} .sw-route__label{display:none;}
  }
  /* Portrait phones crop a 16:9 clip hard; keep the framing centred so the focal
     subject (which the camera dives toward) stays in view. */
  @media (max-width:860px) and (orientation:portrait){
    .sw-scene__video,.sw-scene__still{object-position:center 44%;}
  }
  /* Touch: give the route dots a finger-sized hit area without growing the visible dot. */
  @media (hover:none) and (pointer:coarse){
    .sw-route{padding:14px 6px;}
    .sw-route__dot{width:28px;height:28px;}
    .sw-btn{padding:15px 26px;}
  }
  @media (prefers-reduced-motion:reduce){ .sw-hint i::after{animation:none;} .sw-pt{display:none;} }
  `;
  // Embed patch (3h): inject late without a cascade layer so scoped rules beat preflight.
  const style = document.createElement('style'); style.id = 'sw-css';
  style.dataset.swUsers = '1';
  style.textContent = css;
  document.head.appendChild(style);
  return { style, managed: true };
}

function releaseCSS(token) {
  if (!token || !token.managed || !token.style) return;
  const users = Number(token.style.dataset.swUsers || 1) - 1;
  if (users <= 0) token.style.remove();
  else token.style.dataset.swUsers = String(users);
}

// Expose for module + global use.
if (typeof module !== 'undefined' && module.exports) module.exports = { mountScrollWorld };
if (typeof window !== 'undefined') window.mountScrollWorld = mountScrollWorld;

export { mountScrollWorld };
