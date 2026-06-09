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
  title: "Mehr Fahrschüler gewinnen — Website & Marketing für Fahrschulen",
  description:
    "Die Zielgruppe 16–25 sucht online. MyHiwi baut Fahrschulen eine moderne Website, lokale Sichtbarkeit und einen klaren Anmeldeweg — damit mehr Fahrschüler den Weg zu Ihnen finden.",
  keywords: [
    "mehr Fahrschüler gewinnen",
    "Marketing für Fahrschulen",
    "Website für Fahrschule",
    "Fahrschule online Anmeldung",
  ],
  alternates: { canonical: "https://myhiwi.de/loesungen/fahrschule" },
};

const faqCopy = [
  {
    question: "Wie gewinnt eine Fahrschule heute neue Fahrschüler?",
    answer:
      "Die Zielgruppe 16–25 entscheidet online. Der Weg führt über eine moderne, mobile Website, ein gepflegtes Google-Profil mit guten Bewertungen und einen einfachen Anmelde-/Anfrageweg — ergänzt durch gezielte Anzeigen, wenn der Andrang planbar gesteuert werden soll.",
  },
  {
    question: "Was kostet die Zusammenarbeit für eine Fahrschule?",
    answer:
      "MyHiwi bietet ein Fahrschul-Bundle als Festpreis (einmalig) oder als laufende Betreuung mit Local-Marketing. Den genauen Umfang und Preis klären wir im kostenlosen Erstgespräch — abhängig von Standort und Zielen.",
  },
  {
    question: "Lohnen sich Anzeigen für eine Fahrschule?",
    answer:
      "Oft ja — die Zielgruppe ist auf Google und Social Media gut erreichbar. Entscheidend ist, dass die Anmelde-/Anfragestrecke dahinter sauber funktioniert und auf echte Anmeldungen optimiert wird, nicht nur auf Klicks. Das prüfen wir vorher.",
  },
];

const faqItems: FAQItem[] = faqCopy.map((item) => ({ question: item.question, answer: <p>{item.answer}</p> }));

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website & Marketing für Fahrschulen",
    serviceType: "Webdesign, Local SEO, Anmelde-/Anfragesystem",
    provider: { "@type": "Organization", name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)", url: "https://myhiwi.de" },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Berlin-Ost" },
      { "@type": "AdministrativeArea", name: "Landkreis Barnim" },
    ],
    url: "https://myhiwi.de/loesungen/fahrschule",
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
      { "@type": "ListItem", position: 2, name: "Lösungen", item: "https://myhiwi.de/loesungen/fahrschule" },
      { "@type": "ListItem", position: 3, name: "Fahrschule", item: "https://myhiwi.de/loesungen/fahrschule" },
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
            <SectionMark index="00" label="Lösung · Fahrschule" tone="accent" />
            <h1 className="mt-mh-4 mh-display-1 mh-hero-title">
              Mehr <em className="mh-italic-accent">Fahrschüler</em> gewinnen.
            </h1>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
              Ihre Zielgruppe (16–25) entscheidet online. MyHiwi baut Ihnen eine moderne,
              mobile Website, lokale Sichtbarkeit und einen einfachen Anmelde- bzw. Anfrageweg —
              damit mehr Fahrschüler den Weg zu Ihnen finden.
            </p>
            <CtaRow className="mt-mh-6" microcopy="kostenlos · unverbindlich · Sie reden direkt mit Denis">
              <BtnPrimary href="/kontakt" fullWidthOnMobile>
                Kostenlosen Digital-Check anfragen
              </BtnPrimary>
              <BtnGhost href="/festpreis" fullWidthOnMobile>
                Festpreis-Bundle anfragen
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
                Modern auftreten, einfach <em className="mh-italic-accent">anmelden</em> lassen.
              </h2>
              <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
                Eine Fahrschul-Website, die zur jungen Zielgruppe passt — und ein Weg, der aus
                Interesse eine echte Anmeldung macht.
              </p>
            </div>
            <div className="grid gap-mh-3">
              {[
                "Moderne, mobile Website im Look Ihrer Fahrschule.",
                "Google-Profil + lokale Sichtbarkeit („Fahrschule + Ort“).",
                "Einfacher Anmelde-/Anfrageweg statt nur Telefonnummer.",
                "Bewertungen sichtbar gemacht (Vertrauen bei jungen Leuten).",
                "Optional: Anzeigen auf Google & Social, auf Anmeldungen optimiert.",
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
            <FAQAccordion title="Fahrschul-Marketing — häufige Fragen" items={faqItems} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Kostenloser Check" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-2">
              Sollen wir Ihre Fahrschule online{" "}
              <em className="mh-italic-accent text-mh-glow">vorn</em> aufstellen?
            </h2>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Schicken Sie kurz Ihre Ausgangslage — ich sage ehrlich, wo der erste Hebel für
              mehr Fahrschüler liegt.
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
