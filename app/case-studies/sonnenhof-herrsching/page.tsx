import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  Search,
  TrendingUp,
  Target,
  MousePointer,
  ExternalLink,
  Check,
} from "lucide-react";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title:
    "Sonnenhof Herrsching — Local SEO + Google Ads Case Study | MyHiwi",
  description:
    "Wie ein Hotel am Ammersee in 3 Monaten von 5 auf 41+ Online-Anfragen pro Monat kam: Next.js-Website, Local SEO, Google Business Profil und Google Ads mit 0,30 € CPC.",
  alternates: {
    canonical: "https://myhiwi.de/case-studies/sonnenhof-herrsching",
  },
};

const heroMetrics = [
  { value: "+720%", label: "Anfragen · März vs. Februar", sub: "5 → 41" },
  { value: "28", label: "Top-10 Keywords", sub: "8 × Platz 1" },
  { value: "0,30 €", label: "Ø Google Ads CPC", sub: "Branche 1–3 €" },
];

const timeline = [
  {
    n: "01",
    when: "Januar 2026",
    title: "Onboarding & Audit",
    text: "Ausgangs-Scan: Website unsichtbar bei Google, Google Business Profil unvollständig, Ads-Konto nicht vorhanden. Hauptumsatz über Booking.com (15–18 % Provision).",
  },
  {
    n: "02",
    when: "Februar 2026",
    title: "Relaunch auf Next.js",
    text: "Neue Website DE + EN mit next-intl, mobile-first, Core Web Vitals grün, Zimmer-/FeWo-/Preise-/Region-Seiten strukturiert, technisches SEO (Schema, Sitemap, GBP-Verknüpfung).",
  },
  {
    n: "03",
    when: "März 2026",
    title: "Content-Cluster & Ads-Launch",
    text: "Blog-System für Ammersee-, Familien- und Hund-Themen. Google Ads Kampagne mit PMax + Search, lokale Keyword-Pakete, Optimierungsscore auf 86 % gebracht.",
  },
  {
    n: "04",
    when: "April 2026",
    title: "Skalierung",
    text: "Budget schrittweise angehoben, Klicks +53 % vs. März, 24-Klicks-Rekordtag am 6. April, April-Pace auf ~50 Anfragen/Monat. Nächster Schritt: NRW/Berlin/Hamburg-Expansion.",
  },
];

const keywordBreakdown = [
  { label: "Platz 1", count: 8, color: "bg-gradient-to-br from-blue-500 to-cyan-500" },
  { label: "Top 2–3", count: 6, color: "bg-blue-500" },
  { label: "Top 4–5", count: 7, color: "bg-blue-400" },
  { label: "Top 6–10", count: 7, color: "bg-blue-300" },
];

export default function SonnenhofCaseStudy() {
  return (
    <div className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div
          className="absolute top-[-140px] right-[-100px] h-[500px] w-[500px] rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.2), transparent 60%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Alle Case Studies
          </Link>

          <div className="mt-6 grid gap-12 lg:grid-cols-[1fr,480px] lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-blue-700">
                <Globe className="h-3 w-3" />
                Case №01 · Sichtbarkeit · Gastronomie
              </span>

              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-[60px]">
                Sonnenhof{" "}
                <span className="gradient-text">Herrsching</span>
              </h1>
              <p className="mt-3 text-lg font-medium text-slate-500">
                Hotel & Ferienwohnungen am Ammersee · Oberbayern
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Von rund 5 Online-Anfragen pro Monat auf 41 im März — ein
                Anstieg von 720 % in zwei Quartalen. So lief der Relaunch und
                was dahinter steht.
              </p>

              <a
                href="https://sonnenhof-herrsching.de"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                sonnenhof-herrsching.de
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="relative">
              <div className="relative rotate-[1.5deg] transition-transform duration-500 hover:rotate-0">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl screenshot-glow-light">
                  <div className="mb-2 flex items-center justify-between px-2">
                    <div className="flex gap-1.5">
                      <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-slate-400">
                      sonnenhof-herrsching.de
                    </span>
                    <span className="w-10" />
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200">
                    <Image
                      src="/case-studies/sonnenhof/sonnenhof-neu.png"
                      alt="Sonnenhof Herrsching — Website nach dem Relaunch"
                      width={460}
                      height={300}
                      priority
                      className="h-auto w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero metrics bar */}
          <div className="mt-14 grid gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur md:grid-cols-3 md:divide-x md:divide-slate-200">
            {heroMetrics.map((m, i) => (
              <div key={m.label} className={i > 0 ? "md:pl-8" : ""}>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  {m.label}
                </p>
                <p className="mt-2 font-heading text-3xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-4xl">
                  <span className="gradient-text">{m.value}</span>
                </p>
                <p className="mt-1.5 text-xs text-slate-500">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AUSGANGSLAGE ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Target className="h-3 w-3 text-blue-600" />
              Ausgangslage · Januar 2026
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Ein volles Haus,{" "}
              <span className="gradient-text">das Google nicht kannte.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Der Sonnenhof ist ein inhabergeführtes Hotel mit
                Ferienwohnungen direkt am Ammersee. Auslastung offline ist
                stark, die Gäste sind treu — aber der Traffic kam zu fast
                100 % über Booking.com und FeWo-Direkt. Jede Buchung kostete
                15–18 % Provision.
              </p>
              <p>
                Die alte Website war technisch zu langsam, inhaltlich zu dünn
                und bei Google unsichtbar. Suchbegriffe wie „Hotel
                Herrsching", „Ferienwohnung Ammersee" oder „Urlaub mit Hund
                Bayern" liefen direkt zur Konkurrenz oder zu den Portalen.
              </p>
              <p>
                Ziel des Projekts: Direkt-Anfragen über die eigene Seite so
                weit hochfahren, dass die Portal-Abhängigkeit sinkt und jede
                neue Anfrage wirtschaftlich dem Haus selbst gehört.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= BEFORE/AFTER ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                <TrendingUp className="h-3 w-3 text-blue-600" />
                Relaunch · Vorher / Nachher
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Ziehen Sie den Slider — und sehen Sie,{" "}
                <span className="gradient-text">was sich geändert hat.</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="mt-10">
            <SectionReveal>
              <BeforeAfterSlider
                beforeSrc="/case-studies/sonnenhof/sonnenhof-alt.png"
                afterSrc="/case-studies/sonnenhof/sonnenhof-neu.png"
                beforeAlt="Sonnenhof Herrsching — alte Website"
                afterAlt="Sonnenhof Herrsching — neue Next.js-Website nach Relaunch"
                beforeLabel="Vorher · März"
                afterLabel="Nachher · April"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE / PROCESS ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <ArrowRight className="h-3 w-3 text-blue-600" />
              Prozess · 4 Monate
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Wie aus einer leisen Website{" "}
              <span className="gradient-text">ein Anfragen-Kanal wurde.</span>
            </h2>
          </SectionReveal>

          <div className="mt-12 space-y-4">
            {timeline.map((step, i) => (
              <SectionReveal key={step.n} delay={i * 100}>
                <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-[auto,1fr] md:items-start md:gap-8 md:p-8">
                  <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 font-heading text-lg font-bold text-white shadow-md">
                      {step.n}
                    </span>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
                      {step.when}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEYWORDS & ADS DATA ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Search className="h-3 w-3 text-blue-600" />
              Daten · Stand 12.04.2026
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Organisch stark,{" "}
              <span className="gradient-text">bezahlt effizient.</span>
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Keyword breakdown */}
            <SectionReveal>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  28 Keywords in den Top-10
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold tracking-tight text-slate-900">
                  Keyword-Verteilung
                </h3>

                <div className="mt-6 space-y-3">
                  {keywordBreakdown.map((k) => (
                    <div key={k.label} className="flex items-center gap-3">
                      <span className="w-20 flex-shrink-0 font-mono text-xs text-slate-500">
                        {k.label}
                      </span>
                      <div className="relative h-7 flex-1 overflow-hidden rounded-md bg-slate-100">
                        <div
                          className={`${k.color} absolute inset-y-0 left-0 rounded-md transition-all`}
                          style={{ width: `${(k.count / 8) * 100}%` }}
                        />
                      </div>
                      <span className="w-8 flex-shrink-0 text-right font-heading text-lg font-bold text-slate-900">
                        {k.count}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-500">
                  Haupt-Cluster: „Hotel Herrsching", „Ferienwohnung Ammersee",
                  „Urlaub mit Hund Bayern", „Ausflugsziele Ammersee",
                  „Familienurlaub Starnberger See".
                </p>
              </div>
            </SectionReveal>

            {/* Ads data */}
            <SectionReveal delay={150}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  Google Ads · März 2026
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold tracking-tight text-slate-900">
                  Performance Max + Search
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    ["Klicks", "2.242"],
                    ["Impressionen", "88,7 K"],
                    ["Ø CPC", "0,30 €"],
                    ["Score", "86 %"],
                    ["CTR", "2,53 %"],
                    ["Kosten", "≈ 670 €"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-lg border border-slate-100 bg-slate-50 p-3"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                        {k}
                      </p>
                      <p className="mt-1 font-heading text-xl font-bold tracking-tight text-slate-900">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-500">
                  Bei einem Durchschnitts-Branchen-CPC von 1–3 € ist der
                  Sonnenhof-Wert von 0,30 € Ausdruck sauber strukturierter
                  Kampagnen und präziser lokaler Keyword-Arbeit.
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Additional stat row */}
          <SectionReveal>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                ["511+", "Organische Klicks seit Start"],
                ["27 K+", "Organische Impressionen"],
                ["24", "Klick-Rekord an einem Tag"],
                ["64 %", "Mobile Traffic"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="font-heading text-2xl font-extrabold leading-none tracking-tight text-slate-900">
                    <span className="gradient-text">{v}</span>
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{l}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <SectionReveal>
            <figure className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12">
              <MousePointer className="h-8 w-8 text-cyan-500" />
              <blockquote className="mt-5 font-heading text-2xl leading-relaxed tracking-tight text-slate-900 sm:text-3xl">
                „Denis hat nicht nur die Website neu gemacht — er hat
                verstanden,{" "}
                <span className="gradient-text">
                  warum Gäste zu uns kommen.
                </span>{" "}
                Das ist jetzt bei Google zu sehen."
              </blockquote>
              <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
                Conny Bauer · Sonnenhof Herrsching
              </figcaption>
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* ================= OFFERED CAPABILITIES ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Was konkret gebaut wurde.
            </h2>
          </SectionReveal>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Next.js-Website DE + EN mit next-intl (~600 Übersetzungs-Keys)",
              "Core-Web-Vitals-optimierter mobile-first Stack",
              "Schema.org Hotel-Schema + LocalBusiness + BreadcrumbList",
              "Google Business Profil vollständig optimiert + verknüpft",
              "Google Ads Konto (PMax + Search) mit Conversion-Tracking",
              "Content-Cluster Hund, Familie, Ammersee-Ausflüge",
              "Monatliches Reporting mit Sistrix + Search Console",
              "Blog-System für laufendes Content-Wachstum",
            ].map((t) => (
              <SectionReveal key={t}>
                <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500"
                    strokeWidth={3}
                  />
                  <span className="text-sm text-slate-700">{t}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Gleiches Muster,{" "}
              <span className="gradient-text">Ihre Region?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Wenn Sie ein Hotel, eine Ferienwohnung, Praxis oder Handwerks-Betrieb
              in Deutschland betreiben und das Gleiche für Ihre Region erreichen
              wollen — reden wir drüber.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition-all hover:border-slate-400"
              >
                Weitere Case Studies
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
