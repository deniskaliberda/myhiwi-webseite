"use client";

import type { MouseEvent, ReactNode } from "react";
import { useEffect, useRef } from "react";

type ScrollWeltProps = {
  children: ReactNode;
};

function sendTrackingEvent(event: "call_click" | "whatsapp_click") {
  try {
    const params = new URLSearchParams(window.location.search);
    const payload = JSON.stringify({
      event,
      path: window.location.pathname,
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
      utm_content: params.get("utm_content"),
      utm_term: params.get("utm_term"),
      charge: params.get("utm_content"),
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/e",
        new Blob([payload], { type: "application/json" }),
      );
    }
  } catch {
    // Tracking must never block a call or WhatsApp conversation.
  }
}

/**
 * Scroll-scrubbed camera flight through the Volle-Kurse world (hero of /fahrschule).
 * The engine owns only its namespaced visual layers; React keeps the resilient
 * server fallback, skip control, tracking delegation, and lifecycle cleanup.
 */
export default function ScrollWelt({ children }: ScrollWeltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const skipRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const container = ref.current;
    const skip = skipRef.current;
    if (!container || !skip) return;

    let disposed = false;
    let destroyEngine: (() => void) | undefined;

    const showFallback = () => {
      container.querySelectorAll<HTMLElement>("[data-sw-seo]").forEach((node) => {
        node.hidden = false;
        node.inert = false;
        node.removeAttribute("aria-hidden");
      });
    };

    const syncSkipState = () => {
      const past = container.classList.contains("sw-past");
      skip.hidden = past;
      skip.inert = past;
      // Tailwind's inline-flex author rule otherwise overrides the UA hidden rule.
      skip.style.display = past ? "none" : "";
    };

    const classObserver = new MutationObserver(syncSkipState);
    classObserver.observe(container, { attributes: true, attributeFilter: ["class"] });
    syncSkipState();

    let consentResizeObserver: ResizeObserver | undefined;
    const syncConsentClearance = () => {
      if (disposed) return;
      consentResizeObserver?.disconnect();
      const consent = document.querySelector<HTMLElement>(
        '[role="dialog"][aria-label="Hinweis zu Cookies und Reichweitenmessung"]',
      );
      container.classList.toggle("sw-consent-visible", Boolean(consent));
      if (!consent) {
        container.style.removeProperty("--sw-consent-clearance");
        return;
      }
      const measure = () => {
        if (disposed) return;
        container.style.setProperty(
          "--sw-consent-clearance",
          `${Math.ceil(consent.getBoundingClientRect().height) + 16}px`,
        );
      };
      measure();
      consentResizeObserver = new ResizeObserver(measure);
      consentResizeObserver.observe(consent);
    };
    const consentObserver = new MutationObserver(syncConsentClearance);
    consentObserver.observe(document.body, { childList: true, subtree: true });
    syncConsentClearance();

    const trackClick = (event: globalThis.MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || !container.contains(anchor)) return;
      const href = anchor.getAttribute("href") || "";
      if (href.startsWith("tel:")) sendTrackingEvent("call_click");
      else if (href.includes("wa.me")) sendTrackingEvent("whatsapp_click");
    };
    container.addEventListener("click", trackClick);

    void import("./scrub-engine")
      .then(({ mountScrollWorld }) => {
        if (disposed) return;
        const destroy = mountScrollWorld(container, {
          nav: false,
          route: false,
          hint: "Scrollen Sie los",
          diveScroll: 1.3,
          crossfade: 0.08,
          scrollMobileFactor: 1.5,
          sections: [
            {
              id: "heute", label: "Ihre Fahrschule heute",
              still: "/fahrschule-welt/heute.webp",
              poster: "/fahrschule-welt/heute-poster.webp",
              clip: "/fahrschule-welt/vid/heute.mp4",
              clipMobile: "/fahrschule-welt/vid/heute-m.mp4",
              posterMobile: "/fahrschule-welt/heute-poster-m.webp",
              accent: "#B45309",
              scroll: 1.8,
              eyebrow: "Das Volle-Kurse-System",
              title: "Volle Kurse kommen nicht von allein.",
              body: "Gute Fahrschulen haben heute leere Plätze — nicht weil sie schlecht ausbilden, sondern weil niemand sie findet.",
              tags: ["Fahrschulen Berlin", "Direkt mit Denis"],
            },
            {
              id: "karte", label: "Auf der Karte",
              still: "/fahrschule-welt/karte.webp",
              poster: "/fahrschule-welt/karte-poster.webp",
              clip: "/fahrschule-welt/vid/karte.mp4",
              clipMobile: "/fahrschule-welt/vid/karte-m.mp4",
              posterMobile: "/fahrschule-welt/karte-poster-m.webp",
              accent: "#2563EB",
              scroll: 1.6,
              eyebrow: "Gefunden werden",
              title: "Wer im Kiez sucht, findet Sie.",
              body: "Neue Website, Google-Profil auf Vordermann, echte Bewertungen Ihrer Schüler — in zwei Wochen sichtbar neu.",
              tags: ["Website", "Google-Profil", "Bewertungen"],
            },
            {
              id: "anfragen", label: "Jede Anfrage gezählt",
              still: "/fahrschule-welt/anfragen.webp",
              poster: "/fahrschule-welt/anfragen-poster.webp",
              clip: "/fahrschule-welt/vid/anfragen.mp4",
              clipMobile: "/fahrschule-welt/vid/anfragen-m.mp4",
              posterMobile: "/fahrschule-welt/anfragen-poster-m.webp",
              accent: "#B45309",
              scroll: 1.8, linger: 0.45,
              eyebrow: "Schwarz auf weiß",
              title: "Jede Anfrage wird gezählt — ab Tag 0.",
              body: "Anrufe, WhatsApp, Formular: Jeden Monat kommt Ihr Anfragen-Zettel per WhatsApp. Ein Zettel, den Sie in dreißig Sekunden verstehen.",
              tags: ["Anfragen-Zettel", "Per WhatsApp"],
            },
            {
              id: "kurse", label: "Volle Kurse",
              still: "/fahrschule-welt/kurse.webp",
              poster: "/fahrschule-welt/kurse-poster.webp",
              clip: "/fahrschule-welt/vid/kurse.mp4",
              clipMobile: "/fahrschule-welt/vid/kurse-m.mp4",
              posterMobile: "/fahrschule-welt/kurse-poster-m.webp",
              accent: "#B45309",
              scroll: 2.2, linger: 0.5,
              eyebrow: "Das Ergebnis",
              title: "Volle Kurse. Die einzige Zahl, die zählt.",
              body: "349 € im Monat zzgl. MwSt., 12 Monate Betreuung — und Sie reden direkt mit Denis.",
              tags: [],
              cta: {
                primary: { label: "Anrufen", href: "tel:+4915114993066" },
                secondary: { label: "Per WhatsApp schreiben", href: "https://wa.me/4915114993066?text=Hallo%20Denis%2C%20ich%20komme%20von%20der%20Fahrschul-Seite." },
              },
            },
          ],
          connectors: [],
          connectorsMobile: [],
          onError: showFallback,
        });
        if (disposed) destroy();
        else destroyEngine = destroy;
      })
      .catch(() => {
        if (!disposed) showFallback();
      });

    return () => {
      disposed = true;
      classObserver.disconnect();
      consentObserver.disconnect();
      consentResizeObserver?.disconnect();
      container.removeEventListener("click", trackClick);
      destroyEngine?.();
      container.removeAttribute("data-sw-skip-exit");
      container.classList.remove("sw-consent-visible");
      container.style.removeProperty("--sw-consent-clearance");
      skip.hidden = false;
      skip.inert = false;
      skip.style.display = "";
      showFallback();
    };
  }, []);

  const focusDetails = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented) return;
    const target = document.getElementById("fs-start");
    if (!target) return;

    event.preventDefault();
    const container = ref.current;
    if (container) {
      container.setAttribute("data-sw-skip-exit", "true");
      container.classList.add("sw-past");
    }

    const headerHeight =
      document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    const root = document.documentElement;
    const previousBehavior = root.style.getPropertyValue("scroll-behavior");
    const previousPriority = root.style.getPropertyPriority("scroll-behavior");
    // Force an instant exit even though the site-wide stylesheet enables smooth anchors.
    root.style.setProperty("scroll-behavior", "auto", "important");
    window.scrollTo({
      top: Math.max(0, targetTop - headerHeight),
      behavior: "auto",
    });
    if (previousBehavior) {
      root.style.setProperty("scroll-behavior", previousBehavior, previousPriority);
    } else {
      root.style.removeProperty("scroll-behavior");
    }
    target.focus({ preventScroll: true });
  };

  return (
    <div
      ref={ref}
      id="top"
      aria-label="Die Reise durch das Volle-Kurse-System"
      style={{
        ["--sw-bg" as string]: "#F6F2EA",
        ["--sw-ink" as string]: "#1F2A2A",
        ["--sw-ink-soft" as string]: "#5A5E55",
        ["--sw-accent" as string]: "#B45309",
        ["--sw-font-display" as string]: "var(--font-bricolage)",
        ["--sw-font-body" as string]: "var(--font-inter-tight)",
      }}
    >
      {children}
      <a
        ref={skipRef}
        href="#fs-start"
        onClick={focusDetails}
        className="sw-skip fixed left-1/2 top-[calc(var(--fs-header-height)+12px)] z-[55] inline-flex min-h-11 -translate-x-1/2 items-center rounded-full border border-mh-divider bg-mh-paper px-4 py-2 font-mh-body text-sm font-semibold text-mh-text-primary shadow-sm transition-colors hover:border-[#B45309] hover:text-[#92400E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
      >
        Direkt zu den Details ↓
      </a>
    </div>
  );
}
