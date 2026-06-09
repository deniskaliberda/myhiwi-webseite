import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Container } from "@/components/myhiwi/layout/Container";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import { FAQAccordion, type FAQItem } from "@/components/myhiwi/faq/FAQAccordion";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";

const UPDATED = "2026-06-02";

export const metadata: Metadata = {
  title: "Brauche ich eine Website oder reicht das Google-Profil?",
  description:
    "Reicht ein Google-Unternehmensprofil, oder braucht ein lokaler Betrieb eine eigene Website? Was beides kann, was nur die Website kann — ehrlich erklärt.",
  keywords: [
    "brauche ich eine Website oder reicht das Google-Profil",
    "Google Unternehmensprofil statt Website",
    "Website oder Google Business Profil",
    "lokale Sichtbarkeit ohne Website",
  ],
  alternates: { canonical: "https://myhiwi.de/wissen/brauche-ich-website-oder-google-profil" },
};

const faqCopy = [
  {
    question: "Kann ich mit einem Google-Profil ohne Website Kunden gewinnen?",
    answer:
      "Ja, zum Start oft schon. Ein vollständig gepflegtes Google-Unternehmensprofil bringt lokale Sichtbarkeit in der Karten-Suche und kann erste Anfragen (Anrufe, Routen) auslösen — ohne eigene Website. Für reine lokale Auffindbarkeit ist es der schnellste Hebel.",
  },
  {
    question: "Was kann die Website, was das Profil nicht kann?",
    answer:
      "Die eigene Website ist der einzige Ort, den Sie kontrollieren: ein eigener Anfrage- oder Buchungsweg, Zahlung/Anzahlung, mehr Vertrauen durch echte Inhalte und Referenzen — und Unabhängigkeit vom Plattform-Algorithmus. Das Profil bringt Sichtbarkeit, die Website verwandelt sie in verbindliche Anfragen.",
  },
  {
    question: "Ab wann lohnt sich eine eigene Website wirklich?",
    answer:
      "Sobald Anfragen, Termine oder Buchungen verbindlich und ohne Plattform-Abhängigkeit laufen sollen — oder wenn Sie in der Google-Suche (nicht nur in der Karte) gefunden werden wollen. Für einen Betrieb mit Wachstumsabsicht ist die Website langfristig Pflicht, nicht Kür.",
  },
];

const faqItems: FAQItem[] = faqCopy.map((item) => ({
  question: item.question,
  answer: <p>{item.answer}</p>,
}));

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Brauche ich eine Website oder reicht das Google-Profil?",
    datePublished: "2026-06-02",
    dateModified: UPDATED,
    author: { "@type": "Person", name: "Denis Kaliberda", url: "https://myhiwi.de/ueber-mich" },
    publisher: {
      "@type": "Organization",
      name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
      logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
    },
    mainEntityOfPage: "https://myhiwi.de/wissen/brauche-ich-website-oder-google-profil",
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
      { "@type": "ListItem", position: 2, name: "Wissen", item: "https://myhiwi.de/wissen" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Brauche ich eine Website oder reicht das Google-Profil?",
        item: "https://myhiwi.de/wissen/brauche-ich-website-oder-google-profil",
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
        <Container className="max-w-[820px]">
          <SectionMark index="?" label="Wissen · Sichtbarkeit" tone="accent" />
          <h1 className="mt-mh-4 mh-display-2">
            Brauche ich eine Website oder reicht das{" "}
            <em className="mh-italic-accent">Google-Profil</em>?
          </h1>
          <p className="mt-mh-3 mh-label-mono-sm text-mh-text-secondary">
            <Link href="/ueber-mich" className="hover:text-mh-accent">Von Denis Kaliberda</Link> · aktualisiert 2. Juni 2026
          </p>
          <div className="mt-mh-5 rounded-mh-md border-l-4 border-mh-accent bg-mh-subtle px-mh-5 py-mh-4">
            <p className="mh-body-large text-mh-text-primary">
              Zum Start reicht ein gut gepflegtes <strong>Google-Unternehmensprofil</strong> oft,
              um lokal gefunden zu werden. Langfristig braucht ein Betrieb <strong>beides</strong>:
              Das Profil bringt Sichtbarkeit in Google Maps, die eigene <strong>Website</strong> ist
              der Ort, an dem Anfragen, Buchungen und Zahlungen ohne Plattform-Abhängigkeit
              zusammenlaufen.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="compact">
        <Container className="max-w-[820px] space-y-mh-8">
          <div>
            <h2 className="mh-display-4">Reicht ein Google-Profil ohne Website?</h2>
            <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
              Für reine lokale Auffindbarkeit: oft ja, zum Start. Ein vollständiges Profil
              (richtige Kategorie, Fotos, Öffnungszeiten, Bewertungen) erscheint in der
              Karten-Suche und löst Anrufe und Routen-Anfragen aus. Es ist der <strong>schnellste</strong>
              {" "}lokale Hebel — und genau deshalb der erste Schritt.
            </p>
          </div>

          <div>
            <h2 className="mh-display-4">Was kann die Website, was das Profil nicht kann?</h2>
            <ul className="mt-mh-4 grid gap-mh-3">
              {[
                "Ein eigener Anfrage-/Buchungsweg — strukturiert, nicht nur ein Anruf.",
                "Zahlung & Anzahlung direkt integriert (Verbindlichkeit).",
                "Unabhängigkeit vom Plattform-Algorithmus — die Gäste/Kunden kommen zu Ihnen.",
                "Gefunden werden in der Google-Suche, nicht nur in der Karte.",
                "Vertrauen durch echte Inhalte, Referenzen und eine eigene Marke.",
              ].map((t) => (
                <li key={t} className="flex gap-mh-3 mh-body-medium text-mh-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-mh-pill bg-mh-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mh-display-4">Die ideale Kombination</h2>
            <div className="mt-mh-4 rounded-mh-md border-l-4 border-mh-accent bg-mh-subtle px-mh-5 py-mh-4">
              <p className="mh-body-medium text-mh-text-primary">
                Profil <strong>und</strong> Website spielen zusammen: Das Profil holt die lokale
                Sichtbarkeit (Maps), die Website verwandelt sie in verbindliche Anfragen und
                Buchungen. Genau dieser Weg — von der Sichtbarkeit zur Anfrage — ist das, was
                MyHiwi für lokale Betriebe baut.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[820px]">
          <SectionMark index="FAQ" label="Häufige Fragen" />
          <div className="mt-mh-5">
            <FAQAccordion title="Profil oder Website — die häufigsten Fragen" items={faqItems} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Kostenloser Check" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-3">
              Was ist für Ihren Betrieb der richtige{" "}
              <em className="mh-italic-accent text-mh-glow">erste Schritt</em>?
            </h2>
            <p className="mt-mh-4 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Schicken Sie kurz Ihre Ausgangslage — ich sage ehrlich, ob das Profil reicht oder
              wo eine Website für Sie zählt.
            </p>
            <CtaRow className="mt-mh-6">
              <BtnPrimary href="/kontakt" pill fullWidthOnMobile className="bg-mh-text-on-dark text-mh-ink-950 hover:bg-mh-glow">
                Kostenlosen Digital-Check anfragen
              </BtnPrimary>
            </CtaRow>
            <p className="mt-mh-5 inline-flex items-center gap-mh-2 mh-label-mono-sm text-mh-text-on-dark/60">
              <CalendarClock className="h-4 w-4" aria-hidden="true" /> Antwort in 1–3 Werktagen, direkt von Denis
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
