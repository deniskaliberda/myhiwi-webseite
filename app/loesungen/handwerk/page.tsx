import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Mehr Anfragen für Handwerksbetriebe — Website & Sichtbarkeit",
  description:
    "Über 90 % suchen einen Handwerksbetrieb zuerst bei Google. MyHiwi baut Handwerkern in Berlin-Ost & Barnim Website, lokale Sichtbarkeit und einen sauberen Anfrageweg — auf mehr Aufträge gebaut.",
  keywords: [
    "Marketing für Handwerker",
    "Website Handwerksbetrieb",
    "Local SEO Handwerk",
    "Handwerker online Kunden gewinnen Berlin-Ost",
  ],
  alternates: { canonical: "https://myhiwi.de/loesungen/handwerk" },
};

const faqCopy = [
  {
    question: "Wie gewinnt ein Handwerksbetrieb online neue Kunden?",
    answer:
      "Der erste Hebel ist Auffindbarkeit: ein vollständiges Google-Unternehmensprofil und eine Website, die für lokale Suchen („Gewerk + Ort“) optimiert ist. Mehr als 90 % suchen einen Handwerksbetrieb zuerst online — wer dort sauber erscheint und einen klaren Anfrageweg bietet, gewinnt die Anfrage.",
  },
  {
    question: "Was kostet eine Website für meinen Handwerksbetrieb?",
    answer:
      "Grob 200–800 € (Baukasten), 800–2.500 € (Freelancer) oder 3.000–10.000 €+ (Agentur). Entscheidend ist, ob die Seite Anfragen bringt. Details in unserer Antwort „Was kostet eine Website für Handwerker?“ und im kostenlosen Quick-Check.",
  },
  {
    question: "Brauche ich überhaupt eine Website oder reicht Google?",
    answer:
      "Zum Start kann das Google-Profil reichen. Sobald Anfragen strukturiert reinkommen sollen oder Sie auch in der Google-Suche gefunden werden wollen, ist die Website der nächste Schritt — sie verwandelt Sichtbarkeit in verbindliche Anfragen.",
  },
];

const faqItems: FAQItem[] = faqCopy.map((item) => ({ question: item.question, answer: <p>{item.answer}</p> }));

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website & lokale Sichtbarkeit für Handwerksbetriebe",
    serviceType: "Webdesign, Local SEO, Anfragesystem",
    provider: { "@type": "Organization", name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)", url: "https://myhiwi.de" },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Berlin-Ost" },
      { "@type": "AdministrativeArea", name: "Landkreis Barnim" },
    ],
    url: "https://myhiwi.de/loesungen/handwerk",
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
      { "@type": "ListItem", position: 2, name: "Lösungen", item: "https://myhiwi.de/loesungen/handwerk" },
      { "@type": "ListItem", position: 3, name: "Handwerk", item: "https://myhiwi.de/loesungen/handwerk" },
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
            <SectionMark index="00" label="Lösung · Handwerk" tone="accent" />
            <h1 className="mt-mh-4 mh-display-1 mh-hero-title">
              Mehr Anfragen für Ihren <em className="mh-italic-accent">Handwerksbetrieb</em>.
            </h1>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
              Über 90 % suchen einen Handwerksbetrieb zuerst bei Google. MyHiwi baut Ihnen die
              Sichtbarkeit (Google-Profil + Website) und einen sauberen Anfrageweg — damit aus
              Suchenden konkrete Aufträge werden, nicht nur Klicks.
            </p>
            <CtaRow className="mt-mh-6" microcopy="kostenlos · unverbindlich · Sie reden direkt mit Denis">
              <BtnPrimary href="/kontakt" fullWidthOnMobile>
                Kostenlosen Digital-Check anfragen
              </BtnPrimary>
              <BtnGhost href="/wissen/was-kostet-website-handwerker" fullWidthOnMobile>
                Was kostet das?
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
                Sichtbar werden, Anfragen <em className="mh-italic-accent">einsammeln</em>.
              </h2>
              <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
                Kein Bauchladen — der Fokus liegt darauf, dass der Betrieb lokal gefunden wird
                und Anfragen strukturiert ankommen.
              </p>
            </div>
            <div className="grid gap-mh-3">
              {[
                "Google-Unternehmensprofil vollständig eingerichtet & optimiert.",
                "Website, die für „Gewerk + Ort“-Suchen gebaut ist (Local SEO).",
                "Klarer Anfrageweg statt verstreuter Anrufe und Zettel.",
                "Mobil schnell, mit echten Referenzen und Trust-Signalen.",
                "Optional: Anzeigen, die auf echte Anfragen optimiert sind.",
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

      <Section background="paper" padding="compact">
        <Container className="max-w-[820px]">
          <Card tone="ink" className="flex flex-col gap-mh-3">
            <p className="mh-label-mono text-mh-glow">Unser Prinzip</p>
            <p className="mh-body-large text-mh-text-on-dark/88">
              Wir verkaufen Ergebnisse, nicht Stunden. Die Schlüsselgröße sind Anfragen — nicht
              Klicks oder Rankings. Wenn ein Hebel sich für Sie nicht lohnt, sagen wir das im
              Erstgespräch.
            </p>
          </Card>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[820px]">
          <SectionMark index="FAQ" label="Häufige Fragen" />
          <div className="mt-mh-5">
            <FAQAccordion title="Handwerk online — häufige Fragen" items={faqItems} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Kostenloser Check" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-2">
              Mehr Aufträge über das Netz — sollen wir{" "}
              <em className="mh-italic-accent text-mh-glow">prüfen</em>, wie?
            </h2>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Schicken Sie kurz Ihre Ausgangslage. Ich sage ehrlich, wo der erste Hebel für mehr
              Anfragen liegt.
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
