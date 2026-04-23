import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Globe,
  CalendarClock,
  CreditCard,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Search,
  LineChart,
} from "lucide-react";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Digitale Kundengewinnung für lokale Unternehmen | MyHiwi",
  description:
    "Website + SEO + Buchung + Zahlung — alles aus einer Hand. Von 0% auf 34,6% Sichtbarkeit in 4 Wochen. Faire Preise ab 299 €/Monat.",
  alternates: {
    canonical: "https://myhiwi.de",
  },
};

/* ---------- Tier data (public 3-tier model from CLAUDE.md) ---------- */

const tiers = [
  {
    id: "sichtbar",
    name: "Sichtbar",
    tagline: "Sichtbar werden, ohne Festlegung.",
    price: "299",
    unit: "€ / Monat",
    setup: "648 € einmalige Einrichtung",
    term: "3 Monate Mindestlaufzeit",
    audience: "Handwerker & kleine Betriebe in der Proof-Phase",
    features: [
      "Individuelle Website · 5–8 Seiten",
      "Mobile-first, handgemacht — kein Baukasten",
      "Google Business Profil · Grundlagen-SEO",
      "Monatliches Reporting auf Deutsch",
      "E-Mail-Support",
    ],
    highlight: false,
    cta: "Starten",
  },
  {
    id: "wachstum",
    name: "Wachstum",
    tagline: "Unser Standard-Produkt für lokale KMU.",
    price: "599",
    unit: "€ / Monat",
    setup: "648 € einmalige Einrichtung",
    term: "12 Monate Mindestlaufzeit",
    audience: "Ferienwohnungen, Fahrschulen, Friseure, Praxen",
    features: [
      "Alles aus Sichtbar",
      "Laufende SEO — Content + Technik + Backlinks",
      "Google Ads inklusive · bis 1.000 € Werbebudget",
      "1 Blog-Artikel pro Monat",
      "Monatlicher Strategie-Call",
      "Priorisierter Support",
    ],
    highlight: true,
    cta: "Wachstum starten",
  },
  {
    id: "dominanz",
    name: "Dominanz",
    tagline: "Für alle, die Marktführer werden wollen.",
    price: "999",
    unit: "€ / Monat",
    setup: "1.139 € einmalige Einrichtung",
    term: "12 Monate Mindestlaufzeit",
    audience: "Hotels, Zahnarztpraxen, Kanzleien, regionale Ketten",
    features: [
      "Alles aus Wachstum",
      "Google Ads erweitert · 1.000–3.000 € Budget",
      "Wettbewerber-Monitoring · A/B-Tests",
      "Conversion-Optimierung auf der Website",
      "Quartals-Workshop vor Ort oder via Zoom",
      "Branchen-Spezialisierung (Medizin, Recht, Premium)",
    ],
    highlight: false,
    cta: "Dominieren",
  },
];

const pillars = [
  {
    n: "01",
    icon: Globe,
    title: "Sichtbarkeit",
    subtitle: "Website + SEO + Ads",
    description:
      "Eine Website, die Google versteht, Ihre Region kennt und Besucher zu Anfragen macht. Technisch sauber, inhaltlich überzeugend.",
    bullets: [
      "Next.js Performance",
      "Local SEO & Google Business",
      "Google Ads Management",
    ],
  },
  {
    n: "02",
    icon: CalendarClock,
    title: "Buchung",
    subtitle: "Termine direkt auf Ihrer Seite",
    description:
      "Custom Buchungssystem statt teurer OTA-Provisionen. Kunden buchen direkt bei Ihnen — DSGVO-konform aus Deutschland.",
    bullets: [
      "Kalender-Sync (Google, iCloud, Smoobu)",
      "Automatische Bestätigungen",
      "Keine Drittanbieter-Provision",
    ],
  },
  {
    n: "03",
    icon: CreditCard,
    title: "Zahlung",
    subtitle: "Direkt kassieren via Stripe",
    description:
      "Kartenzahlung, SEPA, Klarna — direkt auf Ihrer Website. Anzahlungen, Kautionen, Gutscheine. Voll integriert, voll automatisch.",
    bullets: [
      "Stripe & Mollie",
      "Rechnungen automatisch",
      "Sichere SCA-Authentifizierung",
    ],
  },
];

const processSteps = [
  {
    n: "01",
    title: "Erstgespräch",
    period: "Tag 1 · 15 Min",
    description:
      "Wir lernen uns kennen — ohne Verkaufsdruck. Sie erzählen, was läuft und was nicht.",
  },
  {
    n: "02",
    title: "Audit & Strategie",
    period: "Woche 1–2",
    description:
      "Ich analysiere Ihre Online-Präsenz, den Wettbewerb und das lokale Potenzial in Ihrer Region.",
  },
  {
    n: "03",
    title: "Setup & Launch",
    period: "Woche 3–4",
    description:
      "Website geht live, Google Business läuft, Tracking steht. Sie sehen erste Bewegung in den Zahlen.",
  },
  {
    n: "04",
    title: "Laufende Betreuung",
    period: "monatlich",
    description:
      "Reporting, Optimierung, Content — und ein Ansprechpartner, der Ihre Branche kennt.",
  },
];

const stats = [
  {
    value: "4",
    suffix: " / 5",
    label:
      "Konsumenten nutzen Suchmaschinen, um lokale Informationen zu finden.",
    source: "Google Consumer Insights",
  },
  {
    value: "78",
    suffix: "%",
    label:
      "lokaler Smartphone-Suchen führen innerhalb 24 Std. zu einem Geschäftsbesuch.",
    source: "Google / Ipsos",
  },
  {
    value: "12",
    suffix: "×",
    label:
      "durchschnittlicher ROI von Local SEO nach 12 Monaten vs. bezahlte Anzeigen.",
    source: "BrightLocal Benchmark 2025",
  },
];

/* =========================================================
   PAGE
   ========================================================= */

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Background layers */}
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div
          className="absolute top-[-160px] right-[-140px] h-[620px] w-[620px] rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.18), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-[-160px] left-[-120px] h-[480px] w-[480px] rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.14), transparent 60%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr,540px] lg:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-blue-700">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
                </span>
                Local SEO & Webdesign · Berlin + Bayern
              </span>

              <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-[68px]">
                Ihre Kunden{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">suchen</span>
                  <span className="absolute inset-x-0 bottom-1 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-80 -z-0" />
                </span>{" "}
                Sie.
                <br />
                <span className="text-slate-400">Finden sie Sie auch?</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Ich baue Websites, die bei Google ranken, Termine automatisch
                buchen und Zahlungen direkt einziehen. Drei Bausteine, ein
                Ansprechpartner — und messbare Ergebnisse schon im ersten
                Monat.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/40"
                >
                  Kostenloses Erstgespräch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#case"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 backdrop-blur transition-all hover:border-slate-400 hover:bg-white"
                >
                  Case Study ansehen
                </Link>
                <span className="text-xs font-mono uppercase tracking-[0.1em] text-slate-400">
                  15 Min · unverbindlich
                </span>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 pt-6">
                {[
                  "Kostenfrei starten",
                  "Faire Preise ab 299 €/Monat",
                  "DSGVO · Made in Deutschland",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <Check className="h-4 w-4 text-cyan-500" strokeWidth={3} />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — screenshot + floating cards */}
            <div className="relative hidden lg:block">
              <div className="relative -rotate-[1.5deg] transition-transform duration-500 hover:rotate-0">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl screenshot-glow-light">
                  {/* Browser chrome */}
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
                      alt="Sonnenhof Herrsching — Website-Redesign von MyHiwi"
                      width={520}
                      height={360}
                      priority
                      className="h-auto w-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Floating metric A */}
                <div className="absolute -left-8 -top-6 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur animate-float-y">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Sichtbarkeit
                  </p>
                  <p className="mt-0.5 font-heading text-xl font-bold text-slate-900">
                    0% <span className="text-slate-400">→</span>{" "}
                    <span className="gradient-text">34,6%</span>
                  </p>
                </div>

                {/* Floating metric B */}
                <div
                  className="absolute -right-6 -bottom-6 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur animate-float-y"
                  style={{ animationDelay: "1.2s" }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Top-10 Keywords
                  </p>
                  <p className="mt-0.5 font-heading text-xl font-bold text-slate-900">
                    <span className="gradient-text">19</span>
                    <span className="text-slate-400"> / 47</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Credential bar */}
          <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 pt-6 text-sm">
            <span className="text-slate-500">
              Gegründet von{" "}
              <span className="font-medium text-slate-800">Denis Kaliberda</span>{" "}
              — Ex-Volleyball-Nationalspieler
            </span>
            <a
              href="https://de.wikipedia.org/wiki/Denis_Kaliberda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-500 transition-colors hover:text-blue-600"
            >
              Wikipedia <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://www.volleyball-verband.de/de/kader/spieler--amp--trainer/denis-kaliberda/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-500 transition-colors hover:text-blue-600"
            >
              Volleyball-Verband <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ===================== 3 PILLARS ===================== */}
      <section id="leistungen" className="relative py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionReveal>
            <div className="grid gap-8 md:grid-cols-[1.3fr,1fr] md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                  <Sparkles className="h-3 w-3 text-blue-600" />
                  Leistungen · 3 Bausteine
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                  Drei Säulen.
                  <br />
                  <span className="gradient-text">Ein Ansprechpartner.</span>
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-slate-600">
                Keine Standard-Pakete. Ich kombiniere diese drei Bausteine
                flexibel — je nachdem, was Sie wirklich brauchen, um online
                gefunden und gebucht zu werden.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <SectionReveal key={p.n} delay={i * 100}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Top gradient bar on hover */}
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs tracking-[0.14em] text-slate-400">
                      — {p.n}
                    </span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                      <p.icon className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-bold tracking-tight text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-600">
                    {p.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {p.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-cyan-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CASE STUDY ===================== */}
      <section id="case" className="relative bg-slate-50 py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern-light opacity-60 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionReveal>
            <div className="grid gap-8 md:grid-cols-[1fr,1fr] md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                  <TrendingUp className="h-3 w-3 text-blue-600" />
                  Case №01 · Gastronomie
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                  Vom unsichtbaren Betrieb zum{" "}
                  <span className="gradient-text">ausgebuchten Freitag.</span>
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-slate-600 md:ml-auto">
                Der Sonnenhof Herrsching hatte eine Website, die Google
                schlicht nicht kannte. Vier Wochen nach dem Relaunch standen 19
                Keywords in den Top-10, die Sichtbarkeit war von 0 % auf
                34,6 % gestiegen. Ziehen Sie den Slider.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr,1fr]">
            <SectionReveal>
              <BeforeAfterSlider
                beforeSrc="/case-studies/sonnenhof/sonnenhof-alt.png"
                afterSrc="/case-studies/sonnenhof/sonnenhof-neu.png"
                beforeAlt="Sonnenhof Herrsching — alte Website (vor dem Redesign)"
                afterAlt="Sonnenhof Herrsching — neue Website nach dem Redesign durch MyHiwi"
                beforeLabel="Vorher · März"
                afterLabel="Nachher · April"
              />
            </SectionReveal>

            <SectionReveal delay={150}>
              <div className="flex flex-col gap-3">
                <MetricCard
                  label="Sichtbarkeit · Sistrix"
                  value="+346"
                  unit="%"
                  description="Anstieg der Google-Sichtbarkeit in 4 Wochen."
                />
                <MetricCard
                  label="Top-10 Keywords"
                  value="19"
                  unit="/ 47"
                  description="Lokale Suchbegriffe auf der ersten Google-Seite."
                />
                <MetricCard
                  label="Reservierungen vs. Vorjahr"
                  value="2,1"
                  unit="×"
                  description="Online-Buchungen im Vergleich zum gleichen Zeitraum 2025."
                />
                <figure className="rounded-xl border border-slate-200 bg-white p-5">
                  <blockquote className="text-sm leading-relaxed text-slate-700">
                    „Denis hat nicht nur die Website neu gemacht — er hat
                    verstanden, warum Gäste zu uns kommen. Das ist jetzt bei
                    Google zu sehen."
                  </blockquote>
                  <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                    M. Bauer · Inhaber Sonnenhof Herrsching
                  </figcaption>
                </figure>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal>
            <div className="mt-8 text-center">
              <Link
                href="/blog/sonnenhof-case-study"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                Vollständige Case Study lesen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <LineChart className="h-3 w-3 text-blue-600" />
              Prozess · So arbeiten wir
            </span>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
              Vier Schritte.{" "}
              <span className="gradient-text">Klar strukturiert,</span> nie
              Schnellschuss.
            </h2>
          </SectionReveal>

          <div className="relative mt-14">
            {/* connector line */}
            <div className="absolute left-0 right-0 top-[22px] hidden h-0.5 rounded-full bg-slate-200 md:block">
              <div className="h-full origin-left rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_12px_rgba(59,130,246,0.5)] animate-process-fill" />
            </div>

            <div className="grid gap-10 md:grid-cols-4 md:gap-6">
              {processSteps.map((step, i) => (
                <SectionReveal key={step.n} delay={i * 120}>
                  <div className="relative">
                    <div className="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-cyan-500 text-sm font-heading font-bold text-white shadow-lg">
                      {step.n}
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400">
                      {step.period}
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-bold tracking-tight text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
      <section
        id="preise"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 md:py-32"
      >
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionReveal>
            <div className="grid gap-8 md:grid-cols-[1fr,1fr] md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                  <ShieldCheck className="h-3 w-3 text-blue-600" />
                  Preise · 2026
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                  Faire Preise.
                  <br />
                  Ohne <span className="gradient-text">Kleingedrucktes.</span>
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-slate-600 md:ml-auto">
                Drei klare Pakete — je nach Größe und Anspruch. Sie zahlen nur
                für das, was Sie wirklich brauchen. Monatliche Gebühr plus
                einmalige Einrichtung.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <SectionReveal key={tier.id} delay={i * 120}>
                <article
                  className={[
                    "relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all",
                    tier.highlight
                      ? "border-0 bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-500/30 md:-translate-y-3 md:scale-[1.02]"
                      : "border border-slate-200 bg-white text-slate-900 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl",
                  ].join(" ")}
                >
                  {tier.highlight && (
                    <>
                      {/* Decorative glow inside featured card */}
                      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/25 blur-3xl" />
                      <span className="absolute right-5 top-5 rounded-md bg-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur">
                        ★ Empfohlen
                      </span>
                    </>
                  )}

                  <div className="relative">
                    <h3
                      className={[
                        "font-heading text-2xl font-bold tracking-tight",
                        tier.highlight ? "text-white" : "text-slate-900",
                      ].join(" ")}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={[
                        "mt-1 text-sm",
                        tier.highlight ? "text-white/80" : "text-slate-500",
                      ].join(" ")}
                    >
                      {tier.tagline}
                    </p>

                    <div className="mt-6 flex items-baseline gap-1.5">
                      <span
                        className={[
                          "font-heading text-5xl font-extrabold leading-none tracking-tight",
                          tier.highlight ? "text-white" : "text-slate-900",
                        ].join(" ")}
                      >
                        {tier.price}
                      </span>
                      <span
                        className={[
                          "font-mono text-xs uppercase tracking-[0.08em]",
                          tier.highlight ? "text-white/80" : "text-slate-500",
                        ].join(" ")}
                      >
                        {tier.unit}
                      </span>
                    </div>

                    <div
                      className={[
                        "mt-3 space-y-0.5 text-xs",
                        tier.highlight ? "text-white/80" : "text-slate-500",
                      ].join(" ")}
                    >
                      <p>{tier.setup}</p>
                      <p>{tier.term}</p>
                    </div>

                    <ul
                      className={[
                        "mt-6 space-y-2.5 border-t pt-5 text-sm",
                        tier.highlight
                          ? "border-white/20 text-white"
                          : "border-slate-100 text-slate-700",
                      ].join(" ")}
                    >
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check
                            className={[
                              "mt-0.5 h-4 w-4 flex-shrink-0",
                              tier.highlight ? "text-cyan-300" : "text-cyan-500",
                            ].join(" ")}
                            strokeWidth={3}
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <p
                      className={[
                        "mt-6 text-xs italic",
                        tier.highlight ? "text-white/70" : "text-slate-500",
                      ].join(" ")}
                    >
                      {tier.audience}
                    </p>

                    <Link
                      href="/kontakt"
                      className={[
                        "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all",
                        tier.highlight
                          ? "bg-white text-blue-700 hover:bg-slate-100"
                          : "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      {tier.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          {/* Add-ons footnote */}
          <SectionReveal>
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                Zusätzliche Bausteine · modular kombinierbar
              </p>
              <div className="mt-4 grid gap-4 text-sm text-slate-700 md:grid-cols-4">
                {[
                  ["Buchungssystem", "ab 2.990 € · 49 €/Mo"],
                  ["Zahlungssystem", "ab 1.490 € · 29 €/Mo"],
                  ["Zusatzsprache", "490 € pro Sprache"],
                  ["Blog-Artikel extra", "149 € pro Beitrag"],
                ].map(([name, price]) => (
                  <div
                    key={name}
                    className="rounded-lg border border-slate-100 bg-white px-4 py-3"
                  >
                    <p className="font-medium text-slate-900">{name}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{price}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="relative py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] lg:gap-16 lg:items-center">
            {/* Portrait placeholder */}
            <SectionReveal>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-blue-50 aspect-[4/5] shadow-xl">
                <div className="absolute inset-0 grid-pattern-light opacity-70" />
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 25%, rgba(59,130,246,0.25), transparent 60%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center font-mono text-xs uppercase tracking-[0.12em] text-slate-400">
                    [ Porträt ]
                    <br />
                    <span className="text-slate-500">Denis Kaliberda</span>
                  </div>
                </div>

                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white/95 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] backdrop-blur">
                  <span className="text-slate-700">
                    Denis Kaliberda · Gründer
                  </span>
                  <span className="text-cyan-600">Einzelhand</span>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={150}>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  Über mich · Persönlich
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                  Als Ex-Leistungssportler weiß ich: Erfolg ist{" "}
                  <span className="gradient-text">kein Zufall.</span>
                </h2>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                  <p>
                    Nach 10 Jahren als Volleyball-Nationalspieler — Olympia,
                    WM-Bronze, 200+ Länderspiele — weiß ich: Struktur, Ausdauer
                    und Präzision sind die Basis jedes Erfolgs. Diese
                    Arbeitsweise übertrage ich heute auf Local SEO und
                    Webdesign.
                  </p>
                  <p>
                    Ich arbeite mit wenigen Kunden. Dafür intensiv, persönlich
                    und mit echten Ergebnissen. Kein Agentur-Theater, kein
                    Außendienst, kein Kleingedrucktes.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    ["Erfahrung", "10+ Jahre"],
                    ["Aktive Kunden", "7 KMU"],
                    ["Standort", "Berlin + Bayern"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                        {k}
                      </p>
                      <p className="mt-1 font-heading text-lg font-bold text-slate-900">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/ueber-mich"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                >
                  Meine Geschichte
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="relative bg-slate-50 py-24 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Search className="h-3 w-3 text-blue-600" />
              Warum SEO · Fakten
            </span>
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl">
              Local SEO ist kein Kostenfaktor. Es ist ein{" "}
              <span className="gradient-text">Investment,</span> das Monat für
              Monat neue Kunden bringt.
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {stats.map((s, i) => (
              <SectionReveal key={s.label} delay={i * 120}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <p className="font-heading text-6xl font-extrabold leading-none tracking-tight text-slate-900">
                    <span className="gradient-text">{s.value}</span>
                    <span className="text-slate-400">{s.suffix}</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {s.label}
                  </p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                    Quelle: {s.source}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-900 to-[#0b1a3a] px-8 py-14 text-white shadow-2xl sm:px-14 sm:py-20">
              <div className="absolute inset-0 grid-pattern opacity-70" />
              <div
                className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.35), transparent 60%)",
                }}
              />
              <div
                className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(6,182,212,0.28), transparent 60%)",
                }}
              />

              <div className="relative grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-end">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-300 backdrop-blur">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    Erstgespräch · Kostenlos
                  </span>

                  <h2 className="mt-5 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Bereit, online{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      gefunden
                    </span>{" "}
                    zu werden?
                  </h2>

                  <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
                    15 Minuten, keine Präsentation, keine Verkaufs-Tricks. Ich
                    schaue mir Ihre Situation an und sage ehrlich, was geht und
                    was nicht.
                  </p>

                  <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400">
                    <span className="h-2 w-2 animate-pulse-ring rounded-full bg-emerald-400" />
                    Freie Plätze Mai · 2 von 4
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-between rounded-lg bg-white px-5 py-4 text-sm font-semibold text-navy-900 shadow-lg transition-all hover:bg-slate-100"
                  >
                    Termin buchen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-between rounded-lg border border-white/20 bg-white/5 px-5 py-4 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10"
                  >
                    Fragebogen ausfüllen
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4 text-xs text-slate-400">
                    {[
                      "15 Minuten, unverbindlich",
                      "Keine Standard-Präsentation",
                      "Ehrliche Einschätzung Ihres Potenzials",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="text-cyan-400">—</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}

/* ---------- small inline helper (kept here so page.tsx stays a single file) ---------- */

function MetricCard({
  label,
  value,
  unit,
  description,
}: {
  label: string;
  value: string;
  unit: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 font-heading text-4xl font-extrabold leading-none tracking-tight text-slate-900">
        <span className="gradient-text">{value}</span>
        <span className="ml-1 text-lg font-semibold text-slate-400">
          {unit}
        </span>
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
