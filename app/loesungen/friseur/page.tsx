import type { Metadata } from "next";
import { Check } from "lucide-react";
import { BtnGhost } from "@/components/myhiwi/cta/BtnGhost";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Card } from "@/components/myhiwi/card/Card";
import { Container } from "@/components/myhiwi/layout/Container";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import { FAQAccordion, type FAQItem } from "@/components/myhiwi/faq/FAQAccordion";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";

export const metadata: Metadata = {
  title: "Mehr Kunden für Ihren Friseursalon — Website & Online-Termine",
  description:
    "„Friseur in der Nähe“ ist eine der meistgesuchten lokalen Suchen. MyHiwi baut Salons in Berlin-Ost & Barnim Website, lokale Sichtbarkeit und eine eigene Online-Terminbuchung — ohne SaaS-Gebühren.",
  keywords: [
    "Friseur mehr Kunden gewinnen",
    "Online-Terminbuchung Friseur",
    "Website Friseursalon",
    "Neukunden Friseur Berlin",
  ],
  alternates: { canonical: "https://myhiwi.de/loesungen/friseur" },
};

const faqCopy = [
  {
    question: "Wie gewinnt ein Friseursalon online neue Kunden?",
    answer:
      "„Friseur in der Nähe“ gehört zu den meistgesuchten lokalen Suchbegriffen. Der Hebel ist ein gepflegtes Google-Profil mit guten Bewertungen, eine moderne Website und eine einfache Online-Terminbuchung — so wird aus Sichtbarkeit ein gebuchter Termin statt nur ein Anruf, der nicht zustande kommt.",
  },
  {
    question: "Lohnt sich eine Online-Terminbuchung für Friseure?",
    answer:
      "Meist ja: weniger Telefon-Unterbrechungen, Buchungen rund um die Uhr und Erinnerungen, die Terminausfälle reduzieren. Bei MyHiwi gibt es die Buchung als eigene Lösung — ohne dauerhafte SaaS-Gebühr und ohne Abhängigkeit von einem Portal-Anbieter.",
  },
  {
    question: "Was kostet das?",
    answer:
      "Je nach Umfang als Festpreis oder laufende Betreuung. Den genauen Umfang und Preis klären wir im kostenlosen Erstgespräch — abhängig davon, ob nur Website/Sichtbarkeit oder auch Online-Buchung dazukommt.",
  },
];

const faqItems: FAQItem[] = faqCopy.map((item) => ({ question: item.question, answer: <p>{item.answer}</p> }));

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website, Sichtbarkeit & Online-Terminbuchung für Friseursalons",
    serviceType: "Webdesign, Local SEO, Online-Terminbuchung",
    provider: { "@type": "Organization", name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)", url: "https://myhiwi.de" },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Berlin-Ost" },
      { "@type": "AdministrativeArea", name: "Landkreis Barnim" },
    ],
    url: "https://myhiwi.de/loesungen/friseur",
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
      { "@type": "ListItem", position: 2, name: "Lösungen", item: "https://myhiwi.de/loesungen/friseur" },
      { "@type": "ListItem", position: 3, name: "Friseur", item: "https://myhiwi.de/loesungen/friseur" },
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
            <SectionMark index="00" label="Lösung · Friseur" tone="accent" />
            <h1 className="mt-mh-4 mh-display-1 mh-hero-title">
              Mehr Kunden für Ihren <em className="mh-italic-accent">Friseursalon</em>.
            </h1>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
              „Friseur in der Nähe" ist eine der meistgesuchten lokalen Suchen. MyHiwi baut Ihnen
              die Sichtbarkeit (Google-Profil + Website) und eine eigene Online-Terminbuchung —
              damit aus Suchenden gebuchte Termine werden, ohne dauerhafte SaaS-Gebühr.
            </p>
            <CtaRow className="mt-mh-6" microcopy="kostenlos · unverbindlich · Sie reden direkt mit Denis">
              <BtnPrimary href="/kontakt" fullWidthOnMobile>
                Kostenlosen Digital-Check anfragen
              </BtnPrimary>
              <BtnGhost href="/region/berlin-ost-barnim" fullWidthOnMobile>
                Region Berlin-Ost & Barnim
              </BtnGhost>
            </CtaRow>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <div className="grid gap-mh-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionMark index="01" label="Was Sie bekommen" />
              <h2 className="mt-mh-4 mh-display-3">
                Gefunden werden, <em className="mh-italic-accent">gebucht</em> werden.
              </h2>
              <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
                Sichtbarkeit allein reicht nicht — der Termin muss einfach zustande kommen.
              </p>
            </div>
            <div className="grid gap-mh-3">
              {[
                "Google-Profil mit guten, sichtbaren Bewertungen.",
                "Moderne, mobile Website im Look Ihres Salons.",
                "Eigene Online-Terminbuchung — ohne monatliche SaaS-Gebühr.",
                "Erinnerungen, die Terminausfälle reduzieren.",
                "Anbindung an Instagram & Co., wo Ihre Zielgruppe ist.",
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
            <FAQAccordion title="Friseur online — häufige Fragen" items={faqItems} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Kostenloser Check" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-2">
              Mehr Termine über das Netz — sollen wir{" "}
              <em className="mh-italic-accent text-mh-glow">prüfen</em>, wie?
            </h2>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Schicken Sie kurz Ihre Ausgangslage. Ich sage ehrlich, wo der erste Hebel für mehr
              Kunden und Termine liegt.
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
