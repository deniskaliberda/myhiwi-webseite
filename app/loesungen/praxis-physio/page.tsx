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
  title: "Website für Praxen & Physiotherapie — Termine & Recruiting",
  description:
    "Mehr Patienten, weniger Terminausfälle und — gerade in der Physiotherapie — bessere Bewerber. MyHiwi baut Praxen eine moderne Website, Online-Terminbuchung und eine Karriere-Strecke.",
  keywords: [
    "Website Arztpraxis",
    "Online Terminbuchung Praxis",
    "Physiotherapie Marketing",
    "Praxis Recruiting Website",
  ],
  alternates: { canonical: "https://myhiwi.de/loesungen/praxis-physio" },
};

const faqCopy = [
  {
    question: "Lohnt sich eine Online-Terminbuchung für eine Praxis?",
    answer:
      "Meist ja. Sie entlastet das Telefon, ermöglicht Buchungen rund um die Uhr und reduziert über automatische Erinnerungen die Terminausfälle (No-Shows) spürbar. Wichtig ist eine Lösung, die zum Praxisalltag passt — bei MyHiwi als eigene Strecke, nicht als teures Drittanbieter-Abo.",
  },
  {
    question: "Wie hilft eine Website bei der Personalsuche (Physiotherapie)?",
    answer:
      "Physiotherapie zählt zu den Engpassberufen — gute Bewerber sind knapp. Eine eigene Karriere-Seite mit einfachem Bewerbungsweg, ehrlichem Praxis-Einblick und Sichtbarkeit in Google macht aus der Website auch ein Recruiting-Werkzeug, nicht nur einen Patienten-Kanal.",
  },
  {
    question: "Was kostet das?",
    answer:
      "Je nach Umfang als Festpreis oder laufende Betreuung. Ob nur Website/Sichtbarkeit, Online-Terminbuchung oder zusätzlich ein Recruiting-Funnel — den passenden Zuschnitt klären wir im kostenlosen Erstgespräch.",
  },
];

const faqItems: FAQItem[] = faqCopy.map((item) => ({ question: item.question, answer: <p>{item.answer}</p> }));

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website, Online-Terminbuchung & Recruiting für Praxen und Physiotherapie",
    serviceType: "Webdesign, Local SEO, Online-Terminbuchung, Recruiting-Funnel",
    provider: { "@type": "Organization", name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)", url: "https://myhiwi.de" },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Berlin-Ost" },
      { "@type": "AdministrativeArea", name: "Landkreis Barnim" },
    ],
    url: "https://myhiwi.de/loesungen/praxis-physio",
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
      { "@type": "ListItem", position: 2, name: "Lösungen", item: "https://myhiwi.de/loesungen/praxis-physio" },
      { "@type": "ListItem", position: 3, name: "Praxis & Physio", item: "https://myhiwi.de/loesungen/praxis-physio" },
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
            <SectionMark index="00" label="Lösung · Praxis & Physio" tone="accent" />
            <h1 className="mt-mh-4 mh-display-1 mh-hero-title">
              Mehr Patienten, weniger <em className="mh-italic-accent">Ausfälle</em>.
            </h1>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
              Patienten suchen online, Termine sollen einfach zustande kommen — und in der
              Physiotherapie braucht es zusätzlich gute Bewerber. MyHiwi baut Ihrer Praxis
              Website, Online-Terminbuchung und, wo nötig, eine Karriere-Strecke.
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
                Patienten <em className="mh-italic-accent">und</em> Bewerber.
              </h2>
              <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
                Eine Praxis-Website, die zwei Aufgaben löst: Termine vereinfachen und — wo nötig —
                Personal gewinnen.
              </p>
            </div>
            <div className="grid gap-mh-3">
              {[
                "Moderne, vertrauenswürdige Praxis-Website.",
                "Google-Profil + lokale Sichtbarkeit („Praxis/Physio + Ort“).",
                "Online-Terminbuchung — eigene Strecke, ohne teures Abo.",
                "Automatische Erinnerungen gegen No-Shows.",
                "Optional: Karriere-Seite + einfacher Bewerbungsweg (Recruiting).",
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
            <FAQAccordion title="Praxis & Physio online — häufige Fragen" items={faqItems} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Kostenloser Check" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-2">
              Termine vereinfachen, Personal finden —{" "}
              <em className="mh-italic-accent text-mh-glow">prüfen</em> wir's?
            </h2>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Schicken Sie kurz Ihre Ausgangslage. Ich sage ehrlich, wo der erste Hebel für Ihre
              Praxis liegt — Patienten oder Recruiting.
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
