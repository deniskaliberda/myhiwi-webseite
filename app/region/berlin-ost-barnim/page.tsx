import type { Metadata } from "next";
import Link from "next/link";
import { Check, MapPin, Wrench, Car, Scissors, Stethoscope } from "lucide-react";
import { BtnGhost } from "@/components/myhiwi/cta/BtnGhost";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Card } from "@/components/myhiwi/card/Card";
import { Container } from "@/components/myhiwi/layout/Container";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import { FAQAccordion, type FAQItem } from "@/components/myhiwi/faq/FAQAccordion";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";

export const metadata: Metadata = {
  title: "Webagentur & lokale Sichtbarkeit in Berlin-Ost & Barnim",
  description:
    "MyHiwi aus Ahrensfelde baut lokalen Betrieben in Berlin-Ost, im Landkreis Barnim und im Speckgürtel den Weg von Google-Sichtbarkeit zur direkten Anfrage — persönlich, vor Ort, ergebnisorientiert.",
  keywords: [
    "Webagentur Berlin-Ost",
    "Webdesign Ahrensfelde",
    "Internetagentur Barnim",
    "lokale Sichtbarkeit Bernau Werneuchen",
    "SEO Berlin-Ost",
  ],
  alternates: { canonical: "https://myhiwi.de/region/berlin-ost-barnim" },
};

const towns = ["Ahrensfelde", "Bernau", "Werneuchen", "Marzahn-Hellersdorf", "Lindenberg", "Blumberg", "Eiche", "Mehrow"];

const verticals = [
  { icon: Wrench, label: "Handwerk", href: "/loesungen/handwerk" },
  { icon: Car, label: "Fahrschulen", href: "/fahrschule" },
  { icon: Scissors, label: "Friseure & Kosmetik", href: "/loesungen/friseur" },
  { icon: Stethoscope, label: "Praxen & Physio", href: "/loesungen/praxis-physio" },
];

const faqCopy = [
  {
    question: "Arbeitet MyHiwi wirklich lokal in Berlin-Ost und Barnim?",
    answer:
      "Ja. MyHiwi sitzt in Ahrensfelde (16356) und betreut Betriebe in Berlin-Ost, im Landkreis Barnim und im Speckgürtel — Handwerk, Fahrschulen, Friseure, Praxen und mehr. Sie reden direkt mit dem Gründer, nicht mit einer Vertriebskette.",
  },
  {
    question: "Werde ich damit für „in der Nähe“-Suchen gefunden?",
    answer:
      "Genau darauf ist die Arbeit ausgerichtet: ein vollständiges Google-Unternehmensprofil plus eine Website, die für lokale Suchen (z. B. „Betrieb + Ort“) optimiert ist. Die Nähe zu Ahrensfelde/Barnim ist dabei ein Vorteil — für regionale Suchen ist die Hürde deutlich niedriger als für ein generisches „Berlin“.",
  },
  {
    question: "Was kostet das?",
    answer:
      "Je nach Umfang gibt es einen Festpreis (einmalig) oder eine laufende Betreuung. Konkrete Preise klären wir im kostenlosen Digital-Check — jeder Betrieb ist anders.",
  },
];

const faqItems: FAQItem[] = faqCopy.map((item) => ({ question: item.question, answer: <p>{item.answer}</p> }));

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Lokale Sichtbarkeit & Anfrage-/Buchungssysteme für Betriebe in Berlin-Ost & Barnim",
    serviceType: "Local SEO, Webdesign, Anfrage- und Buchungssysteme",
    provider: {
      "@type": "Organization",
      name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
      url: "https://myhiwi.de",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Berlin-Ost" },
      { "@type": "AdministrativeArea", name: "Landkreis Barnim" },
      { "@type": "Place", name: "Ahrensfelde" },
    ],
    url: "https://myhiwi.de/region/berlin-ost-barnim",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCopy.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://myhiwi.de" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Region Berlin-Ost & Barnim",
        item: "https://myhiwi.de/region/berlin-ost-barnim",
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Section background="paper" padding="large">
        <Container>
          <div className="max-w-[760px]">
            <SectionMark index="00" label="Region · Berlin-Ost & Barnim" tone="accent" />
            <h1 className="mt-mh-4 mh-display-1 mh-hero-title">
              Lokale Betriebe in Berlin-Ost &amp; Barnim,{" "}
              <em className="mh-italic-accent">online gefunden</em>.
            </h1>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
              MyHiwi sitzt in <strong>Ahrensfelde</strong> und baut Betrieben aus der Region den
              Weg von der Google-Suche zur direkten Anfrage und Buchung — Website, lokale
              Sichtbarkeit, Buchung, Zahlung. Persönlich, vor Ort, auf Ergebnisse gebaut.
            </p>
            <CtaRow className="mt-mh-6" microcopy="kostenlos · unverbindlich · Sie reden direkt mit Denis">
              <BtnPrimary href="/kontakt" fullWidthOnMobile>
                Kostenlosen Digital-Check anfragen
              </BtnPrimary>
              <BtnGhost href="/case-studies" fullWidthOnMobile>
                Projekte ansehen
              </BtnGhost>
            </CtaRow>
            <p className="mt-mh-6 inline-flex flex-wrap items-center gap-x-mh-3 gap-y-mh-2 mh-body-small text-mh-text-secondary">
              <MapPin className="h-4 w-4 text-mh-accent" strokeWidth={1.7} aria-hidden="true" />
              {towns.join(" · ")}
            </p>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <SectionMark index="01" label="Für wen" />
          <h2 className="mt-mh-4 mh-display-3">
            Gebaut für die Betriebe der <em className="mh-italic-accent">Region</em>.
          </h2>
          <div className="mt-mh-7 grid gap-mh-4 sm:grid-cols-2 lg:grid-cols-4">
            {verticals.map((v) => (
              <Card key={v.label} as="article" interactive className="flex h-full flex-col gap-mh-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
                  <v.icon className="h-[22px] w-[22px]" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="mh-display-5">{v.label}</h3>
                <Link href={v.href} className="mt-auto mh-body-small font-semibold text-mh-accent hover:text-mh-accent-hover">
                  Ansehen →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container>
          <div className="grid gap-mh-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionMark index="02" label="Warum lokal" />
              <h2 className="mt-mh-4 mh-display-3">
                Nähe ist Ihr <em className="mh-italic-accent">Vorteil</em>.
              </h2>
              <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
                Für lokale Suchen zählt die Distanz. Ein Betrieb in Ahrensfelde oder im Barnim
                rankt für regionale Suchen deutlich leichter als für ein generisches „Berlin" —
                wenn das Google-Profil und die Website sauber darauf ausgerichtet sind. Genau das
                bauen wir.
              </p>
            </div>
            <div className="grid gap-mh-3">
              {[
                "Vollständiges Google-Unternehmensprofil, das in der Karten-Suche erscheint.",
                "Website, die für „Betrieb + Ort“-Suchen optimiert ist.",
                "Sauberer Anfrage-/Buchungsweg statt verstreuter Anrufe.",
                "Persönlich vor Ort — kein Account-Manager dazwischen.",
              ].map((t) => (
                <Card key={t} padded="compact" className="flex gap-mh-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-mh-accent" strokeWidth={1.8} aria-hidden="true" />
                  <span className="mh-body-small text-mh-text-secondary">{t}</span>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[820px]">
          <SectionMark index="FAQ" label="Häufige Fragen" />
          <div className="mt-mh-5">
            <FAQAccordion title="Region Berlin-Ost & Barnim — häufige Fragen" items={faqItems} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Kostenloser Check" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-2">
              Sollen wir Ihren Betrieb in der Region{" "}
              <em className="mh-italic-accent text-mh-glow">sichtbar</em> machen?
            </h2>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Schicken Sie kurz Ihre Ausgangslage — ich schaue auf Ihre Sichtbarkeit und Ihren
              Anfrageweg und sage ehrlich, wo der erste Hebel liegt.
            </p>
            <CtaRow className="mt-mh-7">
              <BtnPrimary href="/kontakt" pill fullWidthOnMobile className="bg-mh-text-on-dark text-mh-ink-950 hover:bg-mh-glow">
                Kostenlosen Digital-Check anfragen
              </BtnPrimary>
            </CtaRow>
          </div>
        </Container>
      </Section>
    </>
  );
}
