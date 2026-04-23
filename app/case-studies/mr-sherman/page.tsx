import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Workflow,
  CreditCard,
  Mail,
  Users,
  Database,
  Code2,
  CheckCircle2,
  Target,
  TrendingUp,
  ExternalLink,
  Check,
} from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title:
    "Mr. Sherman Tanzstudio — Buchungs- und Zahlungs-Plattform | MyHiwi Case Study",
  description:
    "Komplette Membership-Plattform für ein Berliner Tanzstudio: Next.js + Supabase + Stripe mit 4 Tiers (49–1.020 €/Mo), Trainer-Portal, Admin-CRM und Meta-Ads mit Server-Side CAPI.",
  alternates: {
    canonical: "https://myhiwi.de/case-studies/mr-sherman",
  },
};

const heroMetrics = [
  { value: "4", label: "Membership-Tiers", sub: "49 – 1.020 €/Mo" },
  { value: "7,28 €", label: "Cost per Lead", sub: "75 % unter Benchmark" },
  { value: "205", label: "Leads / Monat", sub: "über Meta Ads" },
];

const tiers = [
  { name: "Basis", price: "49 €", stars: "10 Sterne / Session" },
  { name: "Tänzer", price: "420 €", stars: "4 Privatstunden · 15 Sterne" },
  { name: "Performer", price: "780 €", stars: "8 Privatstunden · 20 Sterne" },
  { name: "Artist", price: "1.020 €", stars: "12 Privatstunden · 30 Sterne" },
];

const bookingFlow = [
  {
    n: "01",
    icon: Users,
    title: "Tier wählen",
    text: "Mitglied wählt Basis / Tänzer / Performer / Artist auf der öffentlichen Seite. Alle Preise und Inklusiv-Leistungen transparent.",
  },
  {
    n: "02",
    icon: Database,
    title: "Anmeldung & Profil",
    text: "Supabase-Auth mit E-Mail + Verifizierung. Schüler-Profil wird sofort angelegt, Sterne-Konto startet bei 0.",
  },
  {
    n: "03",
    icon: CreditCard,
    title: "Stripe-Abo-Zahlung",
    text: "Stripe Checkout mit SEPA / Karte. Subscription läuft automatisch monatlich, bei Tier-Wechsel anteilig verrechnet.",
  },
  {
    n: "04",
    icon: Mail,
    title: "Onboarding-Mail",
    text: "Automatische E-Mail mit Portal-Link, Probestunde-Terminierung, Trainer-Zuordnung. Bestätigungsbeleg im Konto hinterlegt.",
  },
];

const stack = [
  { name: "Next.js 14", desc: "App Router, Server Components, ISR" },
  { name: "Supabase", desc: "Postgres, Auth, Row-Level Security" },
  { name: "Stripe", desc: "Subscriptions, Webhook, Tax, Customer Portal" },
  { name: "Vercel", desc: "Hosting, Edge Functions, Preview URLs" },
  { name: "Meta CAPI", desc: "Server-Side Events via Stripe-Webhook" },
  { name: "GTM", desc: "10 DataLayer-Events · 4 Custom Triggers" },
  { name: "GA4", desc: "4 Event-Tags mit Deduplication" },
  { name: "WhatsApp / SuperChat", desc: "Meta Lead Ads Pipeline" },
];

export default function MrShermanCaseStudy() {
  return (
    <div className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div
          className="absolute top-[-140px] right-[-100px] h-[500px] w-[500px] rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.2), transparent 60%)",
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
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-cyan-700">
                <Workflow className="h-3 w-3" />
                Case №02 · Automatisierung · Fitness & Dance
              </span>

              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-[60px]">
                Mr.{" "}
                <span className="gradient-text">Sherman</span>{" "}
                Tanzstudio
              </h1>
              <p className="mt-3 text-lg font-medium text-slate-500">
                Premium-Tanzstudio · Berlin Köpenick + Charlottenburg
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Kein Termin-Baukasten hätte das abgebildet: vier
                Membership-Tiers, Sterne-Bonus-System, Schüler-Portal,
                Trainer-Dashboard, Admin-CRM und Meta-Ads mit Server-Side
                CAPI-Tracking. Alles selbst gebaut, alles automatisiert.
              </p>

              <a
                href="https://mr-sherman.de"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                mr-sherman.de
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Platform mockup grid */}
            <div className="relative grid grid-cols-2 gap-3">
              {/* Top left — Tier selection */}
              <div className="col-span-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  Mitgliedschaften
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {tiers.map((t, i) => (
                    <div
                      key={t.name}
                      className={`rounded-lg p-2.5 ${
                        i === 2
                          ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white"
                          : "bg-slate-50 text-slate-900"
                      }`}
                    >
                      <p className="font-heading text-xs font-bold tracking-tight">
                        {t.name}
                      </p>
                      <p
                        className={`mt-0.5 text-lg font-bold ${
                          i === 2 ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {t.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom left — Stripe mock */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-blue-600" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Stripe Checkout
                  </p>
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="h-2 w-3/4 rounded bg-slate-200" />
                  <div className="h-2 w-full rounded bg-slate-200" />
                  <div className="h-6 w-full rounded bg-gradient-to-r from-blue-500 to-cyan-500" />
                </div>
                <p className="mt-3 font-heading text-sm font-bold text-slate-900">
                  780 € / Monat
                </p>
              </div>

              {/* Bottom right — Confirmation mail */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Bestätigung
                  </p>
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="h-2 w-full rounded bg-slate-200" />
                  <div className="h-2 w-2/3 rounded bg-slate-200" />
                  <div className="h-2 w-4/5 rounded bg-slate-200" />
                </div>
                <p className="mt-3 font-mono text-[10px] text-emerald-600">
                  ✓ Willkommen, [Name]
                </p>
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
              Ausgangslage
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Keine Standard-Software bildete{" "}
              <span className="gradient-text">diese Komplexität</span> ab.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Mr. Sherman ist ein Premium-Tanzstudio mit zwei Standorten in
                Berlin. Produkt-Seite ist kein reiner Stunden-Verkauf, sondern
                ein echtes Membership-Modell mit vier Tiers, einem
                Sterne-Bonus-System und vielen Zusatz-Paketen (Hochzeitstanz,
                Firmen-Events, Turnier-Reisen, Lady-Styling).
              </p>
              <p>
                Eversports, MindBody, Arlo & Co. bilden sowas nicht ab: starre
                Klassen-Buchungen, Provision pro Transaktion, kein Sterne-System,
                keine Trainer-Workflows, keine tiefe Ads-Attribution. Dazu
                zahlt man monatlich SaaS-Miete für die halbe Hälfte.
              </p>
              <p>
                Ziel: eine eigene Plattform, die dem Studio gehört, alle
                Produkte abbildet, Zahlungen automatisiert und mit dem
                Sales-Funnel (Meta Ads → WhatsApp → Probestunde → Tier-Upgrade)
                sauber verbunden ist.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================= BOOKING FLOW ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Workflow className="h-3 w-3 text-blue-600" />
              Produkt · So läuft eine Anmeldung
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Vom Klick auf „Anmelden" bis zur{" "}
              <span className="gradient-text">ersten Bestätigungs-Mail.</span>
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {bookingFlow.map((step, i) => (
              <SectionReveal key={step.n} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6">
                  {i < bookingFlow.length - 1 && (
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

      {/* ================= TECH STACK ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <Code2 className="h-3 w-3 text-blue-600" />
              Tech-Stack
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Acht Bausteine,{" "}
              <span className="gradient-text">die sauber miteinander reden.</span>
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {stack.map((s, i) => (
              <SectionReveal key={s.name} delay={i * 80}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-5">
                  <p className="font-heading text-base font-bold tracking-tight text-slate-900">
                    {s.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {s.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS IMPACT ================= */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
              <TrendingUp className="h-3 w-3 text-blue-600" />
              Business Impact · April 2026
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Plattform + Ads =
              <br />
              <span className="gradient-text">75 % unter Branchen-Benchmark.</span>
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <SectionReveal>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  Meta Ads · 14.03.–13.04.2026
                </p>
                <p className="mt-3 font-heading text-5xl font-extrabold leading-none tracking-tight">
                  <span className="gradient-text">205</span>
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Leads in 30 Tagen bei 1.492 € Ad-Spend — Charlottenburg-Kampagne
                  sogar mit CPL 6,34 €.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={100}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  Cost per Lead
                </p>
                <p className="mt-3 font-heading text-5xl font-extrabold leading-none tracking-tight">
                  <span className="gradient-text">7,28 €</span>
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  75 % unter dem Branchen-Benchmark von 25,61 € CPL für
                  Fitness & Dance-Werbung.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={200}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  Unit Economics
                </p>
                <p className="mt-3 font-heading text-5xl font-extrabold leading-none tracking-tight">
                  <span className="gradient-text">65–75 %</span>
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Rohmarge je Membership-Tier nach Trainer-Kosten — durch die
                  Plattform sauber ausgewiesen.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ================= SCOPE ================= */}
      <section className="relative bg-slate-50 py-20 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Was konkret gebaut wurde.
            </h2>
          </SectionReveal>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Öffentliche Website mit SEO-Stack",
              "Schüler-Portal als PWA (Branded)",
              "Trainer-Portal (Upload, Protokolle)",
              "Admin-CRM mit Live-Sicht auf Leads & Trial",
              "4-Tier-Mitgliedschafts-System mit Stripe-Subscriptions",
              "Sterne-Bonus-System mit Shop-Einlösung",
              "Meta Lead Ads + SuperChat/WhatsApp-Flow",
              "Server-Side Meta CAPI via Stripe-Webhook",
              "GTM + GA4 + 10 DataLayer-Events mit Deduplication",
              "Automatische Rechnungen & Buchhaltungs-Exports",
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
      <section className="relative py-20 md:py-28">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Sie brauchen{" "}
              <span className="gradient-text">eine eigene Plattform?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Buchungen, Zahlungen, Mitglieder, Automation — wenn Standard-SaaS
              nicht passt, baue ich das System, das zu Ihrem Geschäft passt.
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
