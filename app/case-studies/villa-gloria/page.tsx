import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CalendarClock,
  CreditCard,
  Target,
  TrendingUp,
  ExternalLink,
  Check,
  Workflow,
  Code2,
  Languages,
  MapPin,
} from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import Glossary from "@/components/Glossary";

export const metadata: Metadata = {
  title: "Villa Gloria Istrien — Custom Buchungs-Flow mit iCal-Sync | MyHiwi Case Study",
  description:
    "Wie ein Ferienhaus in Istrien das alte Smoobu-Widget durch einen Custom-Kalender mit echter Verfügbarkeitsprüfung ersetzt hat. Next.js + iCal-Parser + Property-Toggle + DE/EN.",
  alternates: {
    canonical: "https://myhiwi.de/case-studies/villa-gloria",
  },
};

const heroMetrics = [
  {
    value: "0 → 1",
    label: "Buchungs-Flow",
    sub: "OTA-Widget → Custom-Kalender",
  },
  {
    value: "2",
    label: "Property-Varianten",
    sub: "Gesamtes Haus · Poolwohnung",
  },
  {
    value: "88/100",
    label: "SEO-Score nach Relaunch",
    sub: "vorher 74/100",
  },
];

const flowSteps = [
  {
    n: "01",
    icon: CalendarClock,
    title: "Verfügbarkeit aus iCal",
    text: "Die App fragt Smoobus iCal-Feeds stündlich ab. Belegte Tage werden im Kalender automatisch deaktiviert — echte Daten, keine Mock-Kacheln.",
  },
  {
    n: "02",
    icon: Target,
    title: "Property-Toggle",
    text: "Gast wählt „Gesamtes Haus“ oder „Poolwohnung“ — der Kalender zeigt dynamisch die passenden Verfügbarkeiten je Objekt.",
  },
  {
    n: "03",
    icon: Workflow,
    title: "Range-Auswahl mit 3-Nächte-Regel",
    text: "react-day-picker in Range-Modus. Unter 3 Nächten lässt sich gar nicht erst auswählen — Gäste sehen direkt, was möglich ist.",
  },
  {
    n: "04",
    icon: CreditCard,
    title: "Email-Flow zum Verwalter",
    text: "Anfrage landet bei Micha (Urlaubsbleibe). Betreff + Tabelle enthalten Property-Name, Zeitraum, Kontakt. Bestätigung geht automatisch an den Gast.",
  },
];

const capabilities = [
  "Next.js 14 App Router mit i18n (DE + EN via next-intl)",
  "iCal-Parser-Library für Smoobu-Feed-Synchronisation",
  "API-Route /api/availability mit 1 h Caching",
  "react-day-picker mit Range-Selection + disabled Dates",
  "Property-Toggle (Gesamtes Haus vs. Poolwohnung)",
  "Min. 3 Nächte-Enforcement im Client + Server",
  "Booking-Form mit Token-basierter Validierung",
  "Resend-Email an Verwalter + Gast-Bestätigung",
  "Terracotta/Sand-Design mit SEO-optimierten Bildern",
  "Google Ads Search-Kampagne seit 01. April 2026 (20 €/Tag)",
  "GA4 + Google Ads Conversion-Tracking",
];

export default function VillaGloriaCaseStudy() {
  return (
    <div className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div
          className="absolute top-[-140px] right-[-100px] h-[500px] w-[500px] rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.14), transparent 60%)",
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

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-cyan-700">
              <Workflow className="h-3 w-3" />
              Case №04 · Automatisierung · Ferienhaus
            </span>

            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-[60px]">
              Vom Smoobu-Widget{" "}
              <span className="gradient-text">zum echten Buchungs-Flow.</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-slate-500">
              Villa Gloria al Padre · Ferienhaus in Kaštelir, Istrien, Kroatien
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Das alte Smoobu-Widget war hübsch, aber funktional eine Sackgasse:
              Gäste konnten Verfügbarkeit sehen, aber nicht anfragen —
              Datumseingabe passierte in einem separaten Formular ohne
              Prüfung. Der komplette Buchungs-Flow wurde ersetzt durch einen
              Custom-Kalender mit{" "}
              <Glossary term="supabase">iCal-Sync</Glossary> und
              Property-Toggle.
            </p>

            <a
              href="https://villa-gloria-istrien.de"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              villa-gloria-istrien.de
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
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
              Ausgangslage
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Ein Widget, das aussah wie Buchung —{" "}
              <span className="gradient-text">aber keine war.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                Villa Gloria ist ein mediterranes Ferienhaus in Istrien,
                verwaltet über{" "}
                <Glossary term="ota-provision">Smoobu als Channel-Manager</Glossary>.
                Auf der Website war das Smoobu-Widget eingebaut — es zeigte
                Verfügbarkeiten an, aber Gäste mussten dann in einem separaten
                Formular die Daten nochmal manuell eingeben. Doppelte Arbeit,
                null Verfügbarkeits-Prüfung.
              </p>
              <p>
                Dazu kam: das Objekt hat zwei Varianten. „Gesamtes Haus“ oder
                nur „Poolwohnung“. Die alte Lösung behandelte beides gleich —
                Gäste buchten das falsche, Anfragen liefen ins Leere.
              </p>
              <p>
                Ziel: ein Buchungs-Flow, der die Smoobu-Daten ernst nimmt,
                Property-Varianten sauber unterscheidet und in DE und EN
                funktioniert. Und zwar ohne Smoobu-Widget — weil das ohnehin
                hässlich und nicht mobile-freundlich war.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= 4-STEP FLOW ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Workflow className="h-3 w-3 text-blue-600" />
              Produkt · So läuft eine Anfrage
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Vier Schritte,{" "}
              <span className="gradient-text">ein verlässlicher Flow.</span>
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {flowSteps.map((step, i) => (
              <SectionReveal key={step.n} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6">
                  {i < flowSteps.length - 1 && (
                    <ArrowRight className="absolute right-[-16px] top-10 hidden h-5 w-5 text-blue-400 lg:block" />
                  )}
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold tracking-tight text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SEO + ADS ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <TrendingUp className="h-3 w-3 text-blue-600" />
              Sichtbarkeit · DE + EN + Ads
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Der Buchungs-Flow ist nur halb Wert,{" "}
              <span className="gradient-text">wenn niemand zur Seite kommt.</span>
            </h2>
          </SectionReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Languages,
                title: "DE + EN",
                text: "next-intl mit vollständiger Übersetzung — für deutsche und internationale Gäste in Istrien.",
              },
              {
                icon: TrendingUp,
                title: "SEO-Score 88/100",
                text: "Nach dem Audit: Schema.org FeWo + Hotel, Core Web Vitals grün, korrekte Canonicals, OG-Bilder je Sprache.",
              },
              {
                icon: MapPin,
                title: "Google Ads seit 01.04.2026",
                text: "Search-Kampagne mit 20 €/Tag Budget, 4 Ad Groups, Bidding „Klicks maximieren“. Gezielt auf Istrien-Suchen.",
              },
            ].map((c, i) => (
              <SectionReveal key={c.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold tracking-tight text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {c.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK / CAPABILITIES ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Code2 className="h-3 w-3 text-blue-600" />
              Was konkret gebaut wurde
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Der Stack im Detail.
            </h2>
          </SectionReveal>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {capabilities.map((t) => (
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
              Ferienwohnung mit{" "}
              <span className="gradient-text">Provisions-Problem?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Wenn Ihr Channel-Manager nur OTA-Provisionen verbrennt — schauen
              wir gemeinsam, ob ein Custom-Buchungs-Flow sich für Sie rechnet.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600"
              >
                Quick-Check anfragen
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
