"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-scrubbed camera flight through the Volle-Kurse world (hero of /fahrschule).
 * Wraps the framework-agnostic scrub engine; the engine builds its own DOM + CSS
 * inside this container and releases its fixed layers once the visitor scrolls
 * past the world (embedded mode), handing off to the proof content below.
 */
export default function ScrollWelt() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.swMounted) return; // StrictMode double-invoke guard
    el.dataset.swMounted = "1";

    import("./scrub-engine").then(({ mountScrollWorld }) => {
      mountScrollWorld(el, {
        brand: { name: "MyHiwi", href: "#top", logo: "/brand/myhiwi-h-logo.svg" },
        cta: { label: "Anrufen", href: "tel:+4915114993066" },
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
              tertiary: { label: "Mehr erfahren", href: "#fs-start" },
            },
          },
        ],
        connectors: [],
        connectorsMobile: [],
      });
    });
  }, []);

  return (
    <div
      ref={ref}
      id="top"
      aria-label="Die Reise durch das Volle-Kurse-System"
      style={{ ["--sw-bg" as string]: "#F6F2EA", ["--sw-ink" as string]: "#1F2A2A", ["--sw-ink-soft" as string]: "#5A5E55", ["--sw-accent" as string]: "#B45309", ["--sw-font-display" as string]: "var(--font-display, 'Bricolage Grotesque', system-ui)", ["--sw-font-body" as string]: "var(--font-body, 'Inter Tight', system-ui)" }}
    />
  );
}
