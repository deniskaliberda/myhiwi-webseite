import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, X, Check } from "lucide-react";
import { BtnGhost } from "@/components/myhiwi/cta/BtnGhost";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Card } from "@/components/myhiwi/card/Card";
import { Container } from "@/components/myhiwi/layout/Container";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import { FAQAccordion, type FAQItem } from "@/components/myhiwi/faq/FAQAccordion";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";

const UPDATED = "2026-06-02";

export const metadata: Metadata = {
  title: "Eigenes Buchungssystem vs. Booking.com (2026)",
  description:
    "Portal, SaaS-Tool oder eigene Buchungs-Website? Der ehrliche Vergleich für Ferienwohnungen & Hotels — Provision, laufende Kosten und ab wann sich die eigene Lösung rechnet.",
  keywords: [
    "eigenes Buchungssystem Ferienwohnung",
    "Buchungssystem ohne Provision",
    "Direktbuchung statt Booking.com",
    "Buchungssystem vs SaaS Smoobu Lodgify",
  ],
  alternates: { canonical: "https://myhiwi.de/wissen/eigenes-buchungssystem-vs-booking-com" },
};

const faqCopy = [
  {
    question: "Was ist der Unterschied zwischen Portal, SaaS-Tool und eigenem System?",
    answer:
      "Ein Portal (Booking.com) bringt Reichweite, nimmt aber effektiv oft 22–25 % Provision pro Buchung. Ein SaaS-Tool (z. B. Smoobu, Lodgify) kostet eine monatliche Miete plus teils kleine Provision. Ein eigenes, individuell gebautes Buchungssystem kostet einmalig in der Erstellung, danach nur geringe laufende Kosten — ohne Provision, mit Ihren Gästen und Daten bei Ihnen.",
  },
  {
    question: "Ab wann rechnet sich ein eigenes Buchungssystem?",
    answer:
      "Sobald ein nennenswerter Teil der Buchungen direkt laufen könnte. Da Portale effektiv 22–25 % nehmen und eine durchschnittliche Ferienwohnung grob 2.000–8.000 € Provision im Jahr zahlt, amortisiert sich eine eigene Lösung oft schon nach wenigen Monaten verschobener Direktbuchungen.",
  },
  {
    question: "Resellt MyHiwi ein SaaS-Tool wie Smoobu oder Lodgify?",
    answer:
      "Nein. MyHiwi baut die Buchungsstrecke individuell (Next.js + Supabase + Stripe), damit keine dauerhafte SaaS-Miete und keine Provision anfällt — die Lösung gehört Ihnen, nicht einem Drittanbieter.",
  },
];

const faqItems: FAQItem[] = faqCopy.map((item) => ({ question: item.question, answer: <p>{item.answer}</p> }));

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Eigenes Buchungssystem vs. Booking.com (2026)",
    datePublished: "2026-06-02",
    dateModified: UPDATED,
    author: { "@type": "Person", name: "Denis Kaliberda", url: "https://myhiwi.de/ueber-mich" },
    publisher: {
      "@type": "Organization",
      name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
      logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
    },
    mainEntityOfPage: "https://myhiwi.de/wissen/eigenes-buchungssystem-vs-booking-com",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCopy.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://myhiwi.de" },
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://myhiwi.de/wissen" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Eigenes Buchungssystem vs. Booking.com",
        item: "https://myhiwi.de/wissen/eigenes-buchungssystem-vs-booking-com",
      },
    ],
  },
];

const compare = [
  { label: "Booking.com (Portal)", good: ["Reichweite für Neukunden"], bad: ["Effektiv ~22–25 % Provision pro Buchung", "Gäste & Daten gehören dem Portal", "Abhängig vom Portal-Algorithmus"] },
  { label: "SaaS-Tool (Smoobu, Lodgify)", good: ["Schnell startklar"], bad: ["Monatliche Miete dauerhaft", "Teils zusätzliche Provision pro Buchung", "Funktionen im Korsett des Anbieters"] },
  { label: "Eigenes System (MyHiwi)", good: ["Keine Provision, keine SaaS-Miete", "Gäste & Daten bei Ihnen", "Genau auf Ihren Ablauf gebaut"], bad: ["Einmalige Erstellung nötig"] },
];

export default function Page() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Section background="paper" padding="large">
        <Container className="max-w-[860px]">
          <SectionMark index="?" label="Wissen · Ferienwohnung" tone="accent" />
          <h1 className="mt-mh-4 mh-display-2">
            Eigenes Buchungssystem vs.{" "}
            <em className="mh-italic-accent">Booking.com</em>?
          </h1>
          <p className="mt-mh-3 mh-label-mono-sm text-mh-text-secondary">
            <Link href="/ueber-mich" className="hover:text-mh-accent">Von Denis Kaliberda</Link> · aktualisiert 2. Juni 2026
          </p>
          <div className="mt-mh-5 rounded-mh-md border-l-4 border-mh-accent bg-mh-subtle px-mh-5 py-mh-4">
            <p className="mh-body-large text-mh-text-primary">
              Ein Portal wie Booking.com bringt Reichweite, kostet aber effektiv <strong>22–25 %</strong>
              {" "}pro Buchung. Ein <strong>eigenes Buchungssystem</strong> kostet einmalig in der
              Erstellung, danach kaum laufende Kosten — <strong>ohne Provision, ohne SaaS-Miete</strong>,
              mit Ihren Gästen und Daten bei Ihnen. Ab einer gewissen Auslastung ist das deutlich
              günstiger.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[900px]">
          <SectionMark index="01" label="Der Vergleich" />
          <h2 className="mt-mh-4 mh-display-3">
            Portal, SaaS oder <em className="mh-italic-accent">eigene Lösung</em>.
          </h2>
          <div className="mt-mh-7 grid gap-mh-4 md:grid-cols-3">
            {compare.map((c) => (
              <Card key={c.label} as="article" className="flex h-full flex-col gap-mh-4">
                <h3 className="mh-display-5">{c.label}</h3>
                <ul className="grid gap-mh-2">
                  {c.good.map((g) => (
                    <li key={g} className="flex gap-mh-2 mh-body-small text-mh-text-secondary">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mh-accent" strokeWidth={2} aria-hidden="true" />
                      <span>{g}</span>
                    </li>
                  ))}
                  {c.bad.map((b) => (
                    <li key={b} className="flex gap-mh-2 mh-body-small text-mh-text-secondary">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-mh-text-secondary/60" strokeWidth={2} aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="compact">
        <Container className="max-w-[860px]">
          <h2 className="mh-display-4">Wann rechnet sich die eigene Lösung?</h2>
          <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
            Da Portale effektiv 22–25 % nehmen und eine durchschnittliche Ferienwohnung grob
            2.000–8.000 € Provision im Jahr zahlt, amortisiert sich eine eigene Buchungsstrecke
            oft schon nach wenigen Monaten verschobener Direktbuchungen. Die genaue Rechnung
            steht in{" "}
            <Link href="/wissen/was-kostet-booking-com" className="font-semibold text-mh-accent hover:text-mh-accent-hover">„Was kostet Booking.com wirklich?"</Link>.
          </p>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[820px]">
          <SectionMark index="FAQ" label="Häufige Fragen" />
          <div className="mt-mh-5">
            <FAQAccordion title="Buchungssystem für Ferienwohnungen — häufige Fragen" items={faqItems} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Direktbuchungs-Check" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-2">
              Lohnt sich eine eigene Buchungsstrecke für{" "}
              <em className="mh-italic-accent text-mh-glow">Sie</em>?
            </h2>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Kostenloser Direktbuchungs-Check: Ich rechne mit Ihnen durch, wie viel Provision
              eine eigene Lösung spart und ob sie sich heute schon rechnet.
            </p>
            <CtaRow className="mt-mh-7">
              <BtnPrimary href="/fewo-direktbuchung" pill fullWidthOnMobile className="bg-mh-text-on-dark text-mh-ink-950 hover:bg-mh-glow">
                Direktbuchungs-Check ansehen
              </BtnPrimary>
              <BtnGhost
                href="/kontakt"
                fullWidthOnMobile
                className="border-mh-text-on-dark/35 text-mh-text-on-dark hover:bg-mh-text-on-dark hover:text-mh-ink-950"
              >
                Direkt anfragen
              </BtnGhost>
            </CtaRow>
            <p className="mt-mh-5 inline-flex items-center gap-mh-2 mh-label-mono-sm text-mh-text-on-dark/60">
              <CalendarClock className="h-4 w-4" aria-hidden="true" /> kostenlos · unverbindlich · direkt von Denis
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
