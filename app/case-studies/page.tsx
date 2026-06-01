import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Workflow, Bot, MapPin } from "lucide-react";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Card } from "@/components/myhiwi/card/Card";
import { Container } from "@/components/myhiwi/layout/Container";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";

export const metadata: Metadata = {
  title: "Case Studies — Website, SEO, Buchungsplattform & KI-Agent",
  description:
    "Laufende Projekte im Detail: Sonnenhof Herrsching (Local SEO + Direktbuchung), Villa Gloria (Direktbuchung Istrien), Mr. Sherman Tanzstudio (eigene Brand-App) und Formazin (Architekturbüro mit KI-Automation).",
  alternates: {
    canonical: "https://myhiwi.de/case-studies",
  },
};

type CaseMetric = { value: string; label: string };

const cases: Array<{
  slug: string;
  field: string;
  client: string;
  subline: string;
  description: string;
  metric: CaseMetric | null;
  pillars: string[];
  icon: typeof Globe;
  image: string | null;
}> = [
  {
    slug: "sonnenhof-herrsching",
    field: "Sichtbarkeit · Local SEO · Direktbuchung",
    client: "Sonnenhof Herrsching",
    subline: "Hotel & Ferienwohnungen am Ammersee",
    description:
      "23 Jahre Website-Stillstand, 24 Top-10-Keywords Ende 2025. 4 Monate später: 199 direkte Gäste-Anfragen, 97 Top-10-Keywords (+304 %), 6-Jahres-Peak in der SE-Ranking-Historie.",
    metric: { value: "199", label: "Direkte Anfragen in 4 Monaten" },
    pillars: ["Sichtbarkeit", "Direktbuchung", "Anzeigen"],
    icon: Globe,
    image: "/case-studies/sonnenhof/sonnenhof-neu.png",
  },
  {
    slug: "villa-gloria",
    field: "Direktbuchung · Sichtbarkeit · Ads",
    client: "Villa Gloria",
    subline: "Ferienunterkunft · Istrien",
    description:
      "Eigene Buchungsstrecke, Sichtbarkeit und Anzeigen aus einer Hand — damit Gäste direkt buchen statt über Portale.",
    metric: null,
    pillars: ["Direktbuchung", "Sichtbarkeit", "Anzeigen"],
    icon: MapPin,
    image: null,
  },
  {
    slug: "mr-sherman",
    field: "Custom Brand-App · Mitglieder-Plattform",
    client: "Mr. Sherman Tanzstudio",
    subline: "Eigene Studio-App · Berlin Köpenick + Charlottenburg",
    description:
      "Komplette Brand-Applikation, gebaut speziell für das Studio: Memberships mit Stripe-Subscriptions, Trainer-Portal, Admin-CRM, Schüler-Login. Alles miteinander verbunden, alles automatisiert. Kein Mindbody, kein Eversports — die App trägt das Sherman-Branding und ist mit der Webseite digital verschmolzen.",
    metric: { value: "7,28 €", label: "Cost per Lead · 75 % unter Benchmark" },
    pillars: ["Brand-App", "Memberships", "CRM"],
    icon: Workflow,
    image: "/case-studies/mr-sherman/cover.png",
  },
  {
    slug: "formazin",
    field: "KI-Lösungen · Digitaler Partner",
    client: "Formazin · Architekturbüro",
    subline: "Bauprotokoll-Agent + laufende Prozess-Automation",
    description:
      "Keine einmalige Webseiten-Lieferung, sondern digitaler Partner: Engpässe finden, KI-Agents bauen, im Büro-Alltag integrieren, monatlich weiterentwickeln.",
    metric: { value: "3 h → Minuten", label: "pro Bauprotokoll" },
    pillars: ["KI-Agent", "Automation", "Partner"],
    icon: Bot,
    image: "/case-studies/formazin/cover.png",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "https://myhiwi.de" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Case Studies",
      item: "https://myhiwi.de/case-studies",
    },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: cases.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.client,
    url: `https://myhiwi.de/case-studies/${c.slug}`,
  })),
};

export default function CaseStudiesOverviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* HERO */}
      <Section background="paper" padding="large">
        <Container>
          <SectionMark index="00" label="Case Studies · 2026" tone="accent" />
          <h1 className="mt-mh-4 mh-display-1 mh-hero-title max-w-[860px]">
            Vier Projekte, vier Engpässe,{" "}
            <em className="mh-italic-accent">vier Lösungen.</em>
          </h1>
          <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
            Auf der Homepage in drei Zeilen, hier in der Tiefe: was ich konkret
            gebaut habe, welche Daten dahinterstehen und wie diese Kunden heute
            digital arbeiten.
          </p>
          <p className="mt-mh-4 mh-body-small text-mh-text-secondary">
            Schwerpunkt Ferienwohnungen &amp; Hotels?{" "}
            <Link
              href="/fewo-direktbuchung"
              className="font-semibold text-mh-accent hover:text-mh-accent-hover"
            >
              Mehr zur Direktbuchung für Unterkünfte →
            </Link>
          </p>
        </Container>
      </Section>

      {/* CASE LIST */}
      <Section background="subtle" padding="large">
        <Container>
          <div className="grid gap-mh-5">
            {cases.map((c) => (
              <Card key={c.slug} padded="none" interactive className="overflow-hidden">
                <Link
                  href={`/case-studies/${c.slug}`}
                  className="group grid md:grid-cols-[1fr_360px]"
                >
                  {/* Content */}
                  <div className="flex flex-col gap-mh-4 p-mh-6 md:p-mh-7">
                    <div className="flex items-center gap-mh-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
                        <c.icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <span className="mh-label-mono-sm text-mh-text-secondary">
                        {c.field}
                      </span>
                    </div>

                    <div>
                      <h2 className="mh-display-4">{c.client}</h2>
                      <p className="mt-1 mh-body-small font-semibold text-mh-accent">
                        {c.subline}
                      </p>
                    </div>

                    <p className="mh-body-small text-mh-text-secondary">
                      {c.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-end justify-between gap-mh-4 border-t border-mh-divider pt-mh-4">
                      {c.metric ? (
                        <div>
                          <p className="mh-display-5 text-mh-text-primary">
                            {c.metric.value}
                          </p>
                          <p className="mt-1 mh-body-xs text-mh-text-secondary">
                            {c.metric.label}
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {c.pillars.map((p) => (
                            <span
                              key={p}
                              className="rounded-mh-pill border border-mh-divider bg-mh-paper px-mh-3 py-1 mh-body-xs text-mh-text-secondary"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="inline-flex items-center gap-mh-2 mh-body-small font-semibold text-mh-text-primary transition-colors group-hover:text-mh-accent">
                        Case ansehen
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="relative min-h-[200px] overflow-hidden border-t border-mh-divider bg-mh-subtle md:border-l md:border-t-0">
                    {c.image ? (
                      <Image
                        src={c.image}
                        alt={`${c.client} — Vorschau`}
                        fill
                        sizes="360px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <c.icon
                          className="h-12 w-12 text-mh-text-secondary/40"
                          strokeWidth={1.3}
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-4xl">
            <SectionMark index="01" label="Ihr Projekt" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-2">
              Welches Problem darf ich{" "}
              <em className="mh-italic-accent text-mh-glow">lösen?</em>
            </h2>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              15 Minuten, unverbindlich. Ich schaue mir Ihre Situation an und sage
              ehrlich, ob ich der richtige Partner bin — oder nicht.
            </p>
            <CtaRow className="mt-mh-7">
              <BtnPrimary
                href="/kontakt"
                pill
                fullWidthOnMobile
                className="bg-mh-text-on-dark text-mh-ink-950 hover:bg-mh-glow"
              >
                Kostenlosen Digital-Check anfragen
              </BtnPrimary>
            </CtaRow>
          </div>
        </Container>
      </Section>
    </>
  );
}
