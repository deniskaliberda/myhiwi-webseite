import { expect, test, type Page } from "@playwright/test";

const WORLD_TITLES = [
  "Volle Kurse kommen nicht von allein.",
  "Wer im Kiez sucht, findet Sie.",
  "Jede Anfrage wird gezählt — ab Tag 0.",
  "Volle Kurse. Die einzige Zahl, die zählt.",
];

const TRACKING_QUERY =
  "utm_source=qa&utm_medium=preview&utm_campaign=scroll-world&utm_content=door&utm_term=fahrschule";

async function waitForWorld(page: Page) {
  await expect(page.locator(".sw-root .sw-stage")).toHaveCount(1);
  await expect(page.locator("[data-sw-seo]")).toBeHidden();
}

async function scrollInstantly(page: Page, target: number) {
  const settledTarget = await page.evaluate((requestedTarget) => {
    const maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const clampedTarget = Math.min(maxScroll, Math.max(0, requestedTarget));
    window.scrollTo({
      top: clampedTarget,
      behavior: "instant" as ScrollBehavior,
    });
    return clampedTarget;
  }, target);
  await expect
    .poll(async () =>
      Math.abs((await page.evaluate(() => window.scrollY)) - settledTarget),
    )
    .toBeLessThanOrEqual(1);
  await page.evaluate(
    () => new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve())),
  );
}

async function scrollToFinale(page: Page) {
  const target = await page.evaluate(() => {
    const root = document.querySelector<HTMLElement>(".sw-root");
    const track = root?.querySelector<HTMLElement>(".sw-track");
    if (!root || !track) throw new Error("Scroll-World track is missing");

    const rootTop = root.getBoundingClientRect().top + window.scrollY;
    return rootTop + track.offsetHeight - window.innerHeight * 0.45;
  });
  await scrollInstantly(page, target);
  await expect(page.locator('.sw-copy__cta a[href^="tel:"]')).toBeVisible();
}

test.describe("/fahrschule Scroll-World", () => {
  test("liefert den vollständigen Fallback bereits im Server-HTML", async ({
    request,
  }) => {
    const response = await request.get("/fahrschule", {
      headers: { accept: "text/html" },
    });
    expect(response.status()).toBe(200);

    const html = await response.text();
    expect(html).toContain("data-sw-seo");
    expect(html).toMatch(/<h1[^>]*>\s*Volle Kurse kommen nicht von allein\./);
    for (const title of WORLD_TITLES) expect(html).toContain(title);
    expect(html).toContain("heute-poster");
    expect(html).toMatch(/fetchpriority="high"/i);
    expect(html).toContain('href="tel:+4915114993066"');
    expect(html).toContain("https://wa.me/4915114993066");
  });

  test("scrubbt Video, hält A11y-/Style-Verträge ein und hat einen sauberen Handoff", async ({
    page,
  }) => {
    const browserErrors: string[] = [];
    page.on("pageerror", (error) => browserErrors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") browserErrors.push(message.text());
    });

    await page.goto("/fahrschule");
    await waitForWorld(page);
    await scrollInstantly(page, 0);

    const copies = page.locator(".sw-copy");
    await expect(copies).toHaveCount(4);
    await expect(copies.first().locator("h1.sw-copy__title")).toBeVisible();
    expect(
      await page.locator(".sw-scene__still").first().evaluate((image: HTMLImageElement) => ({
        loading: image.loading,
        fetchPriority: image.fetchPriority,
      })),
    ).toEqual({ loading: "eager", fetchPriority: "high" });
    expect(
      await copies.first().evaluate((element) => element.getAttribute("aria-hidden")),
    ).toBe("false");
    expect(
      await copies.nth(1).evaluate((element) => ({
        ariaHidden: element.getAttribute("aria-hidden"),
        inert: element.hasAttribute("inert"),
      })),
    ).toEqual({ ariaHidden: "true", inert: true });
    await expect(page.locator(".sw-route__dot, .sw-nav__item")).toHaveCount(0);

    const fonts = await page.locator(".sw-root").evaluate((root) => {
      const title = root.querySelector<HTMLElement>(".sw-copy__title");
      const body = root.querySelector<HTMLElement>(".sw-copy__body");
      if (!title || !body) throw new Error("Scene copy is missing");
      const documentStyle = getComputedStyle(document.documentElement);
      return {
        title: getComputedStyle(title).fontFamily,
        body: getComputedStyle(body).fontFamily,
        expectedTitle: documentStyle.getPropertyValue("--font-bricolage").trim(),
        expectedBody: documentStyle.getPropertyValue("--font-inter-tight").trim(),
      };
    });
    expect(fonts.expectedTitle).not.toBe("");
    expect(fonts.expectedBody).not.toBe("");
    expect(fonts.title).toContain(fonts.expectedTitle.split(",")[0].replaceAll('"', ""));
    expect(fonts.body).toContain(fonts.expectedBody.split(",")[0].replaceAll('"', ""));

    const rootTop = await page.locator(".sw-root").evaluate(
      (element) => element.getBoundingClientRect().top + window.scrollY,
    );
    await page.mouse.wheel(0, 1);
    const firstScrubTarget = await page.evaluate(
      ({ top }) => top + window.innerHeight * 0.4,
      { top: rootTop },
    );
    await scrollInstantly(page, firstScrubTarget);
    const firstVideo = page.locator(".sw-scene__video").first();
    await expect(firstVideo).toBeAttached({ timeout: 25_000 });
    await expect
      .poll(() => firstVideo.evaluate((video: HTMLVideoElement) => video.currentTime), {
        timeout: 25_000,
      })
      .toBeGreaterThan(0.01);
    const firstTime = await firstVideo.evaluate(
      (video: HTMLVideoElement) => video.currentTime,
    );
    const secondScrubTarget = await page.evaluate(
      ({ top }) => top + window.innerHeight * 1.15,
      { top: rootTop },
    );
    await scrollInstantly(page, secondScrubTarget);
    await expect
      .poll(() => firstVideo.evaluate((video: HTMLVideoElement) => video.currentTime))
      .toBeGreaterThan(firstTime + 0.05);

    const headerCall = page.locator('header a[href^="tel:"]');
    for (const progress of [0.08, 0.34, 0.62, 0.88]) {
      const target = await page.locator(".sw-root").evaluate((root, fraction) => {
        const track = root.querySelector<HTMLElement>(".sw-track");
        if (!track) throw new Error("Scroll-World track is missing");
        const top = root.getBoundingClientRect().top + window.scrollY;
        return top + track.offsetHeight * fraction;
      }, progress);
      await scrollInstantly(page, target);
      await expect(headerCall).toBeVisible();
      await expect
        .poll(() =>
          headerCall.evaluate((link) => {
            const rect = link.getBoundingClientRect();
            const hit = document.elementFromPoint(
              rect.left + rect.width / 2,
              rect.top + rect.height / 2,
            );
            return hit === link || (hit !== null && link.contains(hit));
          }),
        )
        .toBe(true);
    }

    await scrollToFinale(page);
    const primary = page.locator(".sw-btn--primary");
    const primaryStyle = await primary.evaluate((link) => {
      const style = getComputedStyle(link);
      return {
        background: style.backgroundColor,
        color: style.color,
        height: link.getBoundingClientRect().height,
      };
    });
    expect(primaryStyle.background).toBe("rgb(180, 83, 9)");
    expect(primaryStyle.color).toBe("rgb(255, 255, 255)");
    expect(primaryStyle.height).toBeGreaterThanOrEqual(56);

    await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
    for (let index = 0; index < 8; index += 1) {
      if (await primary.evaluate((link) => document.activeElement === link)) break;
      await page.keyboard.press("Tab");
    }
    expect(await primary.evaluate((link) => document.activeElement === link)).toBe(true);
    expect(
      await primary.evaluate((link) => {
        const style = getComputedStyle(link);
        return link.matches(":focus-visible") &&
          (style.outlineStyle !== "none" || style.boxShadow !== "none");
      }),
    ).toBe(true);
    await primary.hover();
    await expect
      .poll(() => primary.evaluate((link) => getComputedStyle(link).backgroundColor))
      .toBe("rgb(146, 64, 14)");

    const seam = await page.locator(".sw-root").evaluate((root) => {
      const target = document.querySelector<HTMLElement>("#fs-start");
      if (!target) throw new Error("Proof-content target is missing");
      const rootBottom = root.getBoundingClientRect().bottom + window.scrollY;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      return targetTop - rootBottom;
    });
    expect(Math.abs(seam)).toBeLessThanOrEqual(1);
    expect(browserErrors).toEqual([]);
  });

  test("Skip-Link übergibt Scroll und Fokus an den Problem-Spiegel", async ({ page }) => {
    await page.goto("/fahrschule");
    await waitForWorld(page);

    const skip = page.getByRole("link", { name: "Direkt zu den Details ↓" });
    await expect(skip).toBeVisible();
    await skip.click();

    await expect.poll(() => page.evaluate(() => document.activeElement?.id)).toBe("fs-start");
    const targetGeometry = await page.locator("#fs-start").evaluate((target) => ({
      top: target.getBoundingClientRect().top,
      scrollMarginTop: Number.parseFloat(getComputedStyle(target).scrollMarginTop),
      headerBottom:
        document.querySelector("header")?.getBoundingClientRect().bottom ?? 0,
    }));
    expect(targetGeometry.scrollMarginTop).toBeGreaterThanOrEqual(
      targetGeometry.headerBottom - 1,
    );
    expect(targetGeometry.top).toBeGreaterThanOrEqual(targetGeometry.headerBottom - 2);
    await expect(page.locator(".sw-root")).toHaveClass(/\bsw-past\b/);
    // Once hidden the anchor leaves the accessibility tree, so the role-based
    // locator can no longer resolve it — assert the hidden state via CSS class.
    const hiddenSkip = page.locator("a.sw-skip");
    expect(await hiddenSkip.evaluate((link) => link.hasAttribute("inert"))).toBe(true);
    await expect(hiddenSkip).toBeHidden();
  });

  test("Finale-CTAs senden ausschließlich die freigegebenen Beacon-Payloads", async ({
    page,
  }) => {
    const payloads: unknown[] = [];
    await page.route("**/api/e", async (route) => {
      payloads.push(route.request().postDataJSON());
      await route.fulfill({ status: 204, body: "" });
    });
    await page.goto(`/fahrschule?${TRACKING_QUERY}`);
    await waitForWorld(page);
    await scrollToFinale(page);
    await page.evaluate(() => {
      document.addEventListener(
        "click",
        (event) => {
          const target = event.target;
          if (target instanceof Element && target.closest(".sw-copy__cta a")) {
            event.preventDefault();
          }
        },
        true,
      );
    });

    await page.locator('.sw-copy__cta a[href^="tel:"]').click();
    await expect.poll(() => payloads.length).toBe(1);
    await page.locator('.sw-copy__cta a[href*="wa.me"]').click();
    await expect.poll(() => payloads.length).toBe(2);

    const campaign = {
      path: "/fahrschule",
      utm_source: "qa",
      utm_medium: "preview",
      utm_campaign: "scroll-world",
      utm_content: "door",
      utm_term: "fahrschule",
      charge: "door",
    };
    expect(payloads).toEqual([
      { event: "call_click", ...campaign },
      { event: "whatsapp_click", ...campaign },
    ]);
  });

  test("Reduced Motion bleibt im Stills-Modus und lädt kein Video", async ({ page }) => {
    const videoRequests: string[] = [];
    page.on("request", (request) => {
      if (/\.mp4(?:\?|$)/.test(request.url())) videoRequests.push(request.url());
    });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/fahrschule");
    await waitForWorld(page);
    await page.mouse.wheel(0, 1_200);
    await page.waitForTimeout(750);

    await expect(page.locator(".sw-scene__video")).toHaveCount(0);
    expect(videoRequests).toEqual([]);
  });

  test("Client-Navigation remountet genau eine saubere Welt", async ({ page }) => {
    await page.goto("/fahrschule");
    await waitForWorld(page);
    await expect(page.locator("#sw-css")).toHaveCount(1);

    const strictModeRestored = await page.evaluate(() => {
      type Mount = (
        container: HTMLElement,
        config: Record<string, unknown>,
      ) => () => void;
      const mount = (window as typeof window & { mountScrollWorld?: Mount })
        .mountScrollWorld;
      if (!mount) throw new Error("Global engine mount is missing");

      const fixture = document.createElement("div");
      fixture.className = "strict-fixture";
      fixture.style.setProperty("--fixture", "original");
      fixture.innerHTML = '<div data-sw-seo><h1>Fallback</h1></div>';
      document.body.appendChild(fixture);
      const config = {
        nav: false,
        route: false,
        sections: [
          {
            id: "strict",
            label: "StrictMode",
            still: "/fahrschule-welt/heute.webp",
            poster: "/fahrschule-welt/heute-poster.webp",
            title: "StrictMode",
            scroll: 1,
          },
        ],
      };

      const destroyFirst = mount(fixture, config);
      destroyFirst();
      const firstRestore = {
        className: fixture.className,
        style: fixture.getAttribute("style"),
        fallbackHidden: fixture.querySelector("[data-sw-seo]")?.hasAttribute("hidden"),
        stages: fixture.querySelectorAll(".sw-stage").length,
      };
      const destroySecond = mount(fixture, config);
      const secondMounted = fixture.querySelectorAll(".sw-stage").length;
      destroySecond();
      const secondStages = fixture.querySelectorAll(".sw-stage").length;
      fixture.remove();

      return { firstRestore, secondMounted, secondStages };
    });
    expect(strictModeRestored).toEqual({
      firstRestore: {
        className: "strict-fixture",
        style: "--fixture: original;",
        fallbackHidden: false,
        stages: 0,
      },
      secondMounted: 1,
      secondStages: 0,
    });

    await page.locator('footer a[href="/impressum"]').click();
    await expect(page).toHaveURL(/\/impressum$/);
    await page.goBack();
    await expect(page).toHaveURL(/\/fahrschule$/);
    await waitForWorld(page);

    await expect(page.locator(".sw-stage")).toHaveCount(1);
    await expect(page.locator(".sw-track")).toHaveCount(1);
    await expect(page.locator("#sw-css")).toHaveCount(1);
  });

  test("No-JS zeigt den verlinkten Fallback", async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    try {
      await page.goto("/fahrschule");
      const fallback = page.locator("[data-sw-seo]");
      await expect(fallback).toBeVisible();
      await expect(
        fallback.getByRole("heading", {
          level: 1,
          name: "Volle Kurse kommen nicht von allein.",
        }),
      ).toBeVisible();
      await expect(fallback.locator('a[href^="tel:"]')).toBeVisible();
      await expect(fallback.locator('a[href*="wa.me"]')).toBeVisible();
    } finally {
      await context.close();
    }
  });

  test("Welt-Assets liefern Immutable-Cache, MIME und Byte-Ranges", async ({
    request,
  }) => {
    for (const [path, mime] of [
      ["/fahrschule-welt/heute-poster.webp", "image/webp"],
      ["/fahrschule-welt/vid/heute.mp4", "video/mp4"],
    ] as const) {
      const response = await request.get(path);
      expect(response.status()).toBe(200);
      expect(response.headers()["cache-control"]).toBe(
        "public, max-age=31536000, immutable",
      );
      expect(response.headers()["content-type"]).toContain(mime);
    }

    const range = await request.get("/fahrschule-welt/vid/heute.mp4", {
      headers: { range: "bytes=0-31" },
    });
    expect(range.status()).toBe(206);
    expect(range.headers()["accept-ranges"]).toBe("bytes");
    expect(range.headers()["content-range"]).toMatch(/^bytes 0-31\//);
    expect(range.headers()["content-length"]).toBe("32");
  });
});

test.describe("/fahrschule Scroll-World mobil", () => {
  test.use({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
  });

  test("bleibt horizontal dicht und wird nicht dauerhaft vom Consent verdeckt", async ({
    page,
  }) => {
    await page.goto("/fahrschule");
    await waitForWorld(page);

    const consent = page.getByRole("dialog", {
      name: "Hinweis zu Cookies und Reichweitenmessung",
    });
    if (await consent.isVisible()) {
      const bannerTop = (await consent.boundingBox())?.y ?? 0;
      for (const locator of [
        page.getByRole("link", { name: "Direkt zu den Details ↓" }),
        page.locator(".sw-copy").first(),
        page.locator(".sw-hint"),
      ]) {
        await expect(locator).toBeVisible();
        const bottom = await locator.evaluate(
          (element) => element.getBoundingClientRect().bottom,
        );
        expect(bottom).toBeLessThanOrEqual(bannerTop);
      }
      await consent.getByRole("button", { name: "Nur notwendige" }).click();
      await expect(consent).toBeHidden();
    }

    for (const progress of [0, 0.5, 0.95]) {
      const target = await page.locator(".sw-root").evaluate((root, fraction) => {
        const track = root.querySelector<HTMLElement>(".sw-track");
        if (!track) throw new Error("Scroll-World track is missing");
        const top = root.getBoundingClientRect().top + window.scrollY;
        return top + track.offsetHeight * fraction;
      }, progress);
      await scrollInstantly(page, target);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    }
  });
});
