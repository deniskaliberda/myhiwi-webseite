import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Workflow,
  Bot,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title:
    "Case Studies — Website, SEO, Buchungsplattform & KI-Agent | MyHiwi",
  description:
    "Drei laufende Projekte im Detail: Sonnenhof Herrsching (Local SEO + Google Ads), Mr. Sherman Tanzstudio (eigene Brand-App mit Mitglieder-Plattform) und Formazin (Architekturbüro mit KI-Automation).",
  alternates: {
    canonical: "https://myhiwi.de/case-studies",
  },
};

const cases = [
  {
    slug: "sonnenhof-herrsching",
    field: "Sichtbarkeit · Local SEO",
    client: "Sonnenhof Herrsching",
    subline: "Hotel & Ferienwohnungen am Ammersee",
    description:
      "23 Jahre Website-Stillstand, 24 Top-10-Keywords Ende 2025. 100 Tage später: 108 direkte Gäste-Anfragen, 97 Top-10-Keywords (+304 %), 6-Jahres-Peak in der SE-Ranking-Historie.",
    metric: { value: "108", label: "Direkte Anfragen in 100 Tagen" },
    icon: Globe,
    image: "/case-studies/sonnenhof/sonnenhof-neu.png",
    accent: "from-blue-500 to-blue-600",
  },
  {
    slug: "mr-sherman",
    field: "Custom Brand-App · Mitglieder-Plattform",
    client: "Mr. Sherman Tanzstudio",
    subline: "Eigene Studio-App · Berlin Köpenick + Charlottenburg",
    description:
      "Komplette Brand-Applikation, gebaut speziell für das Studio: Memberships mit Stripe-Subscriptions, Trainer-Portal, Admin-CRM, Schüler-Login. Alles miteinander verbunden, alles automatisiert. Kein Mindbody, kein Eversports — die App trägt das Sherman-Branding und ist mit der Webseite digital verschmolzen.",
    metric: { value: "7,28 €", label: "Cost per Lead · 75 % unter Benchmark" },
    icon: Workflow,
    image: "/case-studies/mr-sherman/cover.png",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    slug: "formazin",
    field: "KI-Lösungen · Digitaler Partner",
    client: "Formazin · Architekturbüro",
    subline: "Bauprotokoll-Agent + laufende Prozess-Automation",
    description:
      "Keine einmalige Webseiten-Lieferung, sondern digitaler Partner: Engpässe finden, KI-Agents bauen, im Büro-Alltag integrieren, monatlich weiterentwickeln.",
    metric: { value: "3 h → Minuten", label: "pro Bauprotokoll" },
    icon: Bot,
    image: "/case-studies/formazin/cover.png",
    accent: "from-blue-600 to-cyan-500",
  },
];

export default function CaseStudiesOverviewPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div
          className="absolute top-[-140px] right-[-100px] h-[500px] w-[500px] rounded-full blur-3xl opacity-50 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.18), transparent 60%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-blue-700">
            <Sparkles className="h-3 w-3" />
            Case Studies · 2026
          </span>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[64px]">
            Drei Projekte,{" "}
            <span className="gradient-text">drei Engpässe,</span>
            <br />
            drei sehr unterschiedliche Lösungen.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Auf der Homepage in drei Zeilen, hier in der Tiefe: was ich konkret
            gebaut habe, welche Daten dahinterstehen und wie diese Kunden heute
            digital arbeiten.
          </p>
        </div>
      </section>

      {/* ================= CASE LIST ================= */}
      <section className="relative bg-slate-50 py-16 md:py-24">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 space-y-6">
          {cases.map((c, i) => (
            <SectionReveal key={c.slug} delay={i * 120}>
              <Link
                href={`/case-studies/${c.slug}`}
                className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${c.accent}`} />
                <div className="grid gap-0 md:grid-cols-[1fr,380px]">
                  {/* Content side */}
                  <div className="flex flex-col gap-4 p-8 md:p-10">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                        {c.field}
                      </span>
                    </div>

                    <div>
                      <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                        {c.client}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-blue-600">
                        {c.subline}
                      </p>
                    </div>

                    <p className="text-base leading-relaxed text-slate-600">
                      {c.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-slate-100 pt-5">
                      <div>
                        <p className="font-heading text-3xl font-extrabold leading-none tracking-tight text-slate-900">
                          <span className="gradient-text">{c.metric.value}</span>
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {c.metric.label}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-all group-hover:bg-blue-600">
                        Case Study ansehen
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>

                  {/* Visual side */}
                  <div className="relative min-h-[220px] overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50 md:min-h-0">
                    <div className="absolute inset-0 grid-pattern-light opacity-60" />
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        background:
                          "radial-gradient(circle at 70% 30%, rgba(59,130,246,0.18), transparent 55%)",
                      }}
                    />
                    {c.image ? (
                      <div className="absolute inset-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                        <Image
                          src={c.image}
                          alt={`${c.client} — Preview`}
                          fill
                          sizes="380px"
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-6 flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 backdrop-blur">
                        <div className="text-center">
                          <c.icon className="mx-auto h-12 w-12 text-blue-500" />
                          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                            {c.field.split("·")[0]}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Welches Problem{" "}
              <span className="gradient-text">darf ich lösen?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              15 Minuten, unverbindlich. Ich schaue mir Ihre Situation an und
              sage ehrlich, ob ich der richtige Partner bin — oder nicht.
            </p>
            <Link
              href="/kontakt"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/40"
            >
              Quick-Check anfragen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
