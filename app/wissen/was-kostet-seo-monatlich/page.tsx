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
  title: "Was kostet SEO monatlich? (2026)",
  description:
    "Was lokale SEO 2026 monatlich kostet (Branchen-Richtwerte für KMU und lokale Betriebe) — und warum die entscheidende Kennzahl Anfragen sind, nicht Rankings.",
  keywords: [
    "was kostet SEO monatlich",
    "SEO Kosten kleine Unternehmen",
    "lokale SEO Preise",
    "SEO Agentur Kosten 2026",
  ],
  alternates: { canonical: "https://myhiwi.de/wissen/was-kostet-seo-monatlich" },
};

const faqCopy = [
  {
    question: "Warum ist SEO ein monatlicher Posten und kein Einmal-Preis?",
    answer:
      "SEO ist laufende Arbeit: technische Pflege, Inhalte, lokale Signale und Reaktion auf Google-Updates. Eine einmalige Optimierung verpufft mit der Zeit. Deshalb wird SEO meist monatlich abgerechnet — eine kleinere, dauerhaft gepflegte Betreuung bringt mehr als ein großer Einmal-Aufschlag.",
  },
  {
    question: "Wie schnell sieht man bei SEO Ergebnisse?",
    answer:
      "SEO ist ein 6–12-Monats-Aufbau, gerade bei jungen Domains. Erste Bewegungen bei Long-Tail- und lokalen Suchen oft ab Monat 3–6, spürbare Wirkung danach. Wer sofortige Anfragen braucht, kombiniert SEO mit Google Ads — Ads für jetzt, SEO als Fundament.",
  },
  {
    question: "Was ist die richtige Kennzahl für den SEO-Erfolg?",
    answer:
      "Nicht Rankings, sondern Anfragen. Platz 1 für ein Keyword, das niemand sucht, bringt nichts. Bei MyHiwi ist die Schlüsselgröße deshalb, ob mehr echte Anfragen reinkommen — Sichtbarkeit ist nur das Mittel dazu.",
  },
];

const faqItems: FAQItem[] = faqCopy.map((item) => ({ question: item.question, answer: <p>{item.answer}</p> }));

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Was kostet SEO monatlich? (2026)",
    datePublished: "2026-06-02",
    dateModified: UPDATED,
    author: { "@type": "Person", name: "Denis Kaliberda", url: "https://myhiwi.de/ueber-mich" },
    publisher: {
      "@type": "Organization",
      name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
      logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
    },
    mainEntityOfPage: "https://myhiwi.de/wissen/was-kostet-seo-monatlich",
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
        name: "Was kostet SEO monatlich?",
        item: "https://myhiwi.de/wissen/was-kostet-seo-monatlich",
      },
    ],
  },
];

const seoRows = [
  ["Lokale SEO (ein Standort)", "500–1.000 €/Mo", "Google-Profil, lokale Seiten, Citations"],
  ["KMU-SEO (mehr Umfang)", "750–1.500 €/Mo", "Content, technische SEO, Betreuung"],
  ["Einzelne Bausteine (z. B. nur Profil/Reviews)", "ab ~150–300 €/Mo", "schlanker Einstieg"],
];

export default function Page() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Section background="paper" padding="large">
        <Container className="max-w-[820px]">
          <SectionMark index="?" label="Wissen · Kosten" tone="accent" />
          <h1 className="mt-mh-4 mh-display-2">
            Was kostet <em className="mh-italic-accent">SEO monatlich</em>?
          </h1>
          <p className="mt-mh-3 mh-label-mono-sm text-mh-text-secondary">
            <Link href="/ueber-mich" className="hover:text-mh-accent">Von Denis Kaliberda</Link> · aktualisiert 2. Juni 2026
          </p>
          <div className="mt-mh-5 rounded-mh-md border-l-4 border-mh-accent bg-mh-subtle px-mh-5 py-mh-4">
            <p className="mh-body-large text-mh-text-primary">
              Lokale SEO kostet 2026 als Branchen-Richtwert grob <strong>500–1.000 €/Monat</strong>
              {" "}(ein Standort), für KMU mit mehr Umfang eher <strong>750–1.500 €/Monat</strong>.
              Entscheidend ist nicht der Preis, sondern ob daraus <strong>echte Anfragen</strong>
              {" "}werden — nicht bloß bessere Rankings.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="compact">
        <Container className="max-w-[820px] space-y-mh-8">
          <div>
            <h2 className="mh-display-4">Was kostet SEO konkret pro Monat?</h2>
            <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
              Typische Spannen am deutschen Markt 2026 (Branchen-Richtwerte):
            </p>
            <div className="mt-mh-4 overflow-hidden rounded-mh-lg border border-mh-divider">
              <table className="w-full text-left">
                <thead className="bg-mh-subtle">
                  <tr>
                    <th className="p-mh-3 mh-label-mono-sm text-mh-text-secondary">Umfang</th>
                    <th className="p-mh-3 mh-label-mono-sm text-mh-text-secondary">Monatlich</th>
                    <th className="hidden p-mh-3 mh-label-mono-sm text-mh-text-secondary sm:table-cell">Beinhaltet typisch</th>
                  </tr>
                </thead>
                <tbody>
                  {seoRows.map(([k, v, note]) => (
                    <tr key={k} className="border-t border-mh-divider">
                      <td className="p-mh-3 mh-body-small font-semibold text-mh-text-primary">{k}</td>
                      <td className="p-mh-3 mh-body-small font-semibold text-mh-accent">{v}</td>
                      <td className="hidden p-mh-3 mh-body-small text-mh-text-secondary sm:table-cell">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="mh-display-4">Rankings oder Anfragen — worauf es ankommt</h2>
            <div className="mt-mh-4 rounded-mh-md border-l-4 border-mh-accent bg-mh-subtle px-mh-5 py-mh-4">
              <p className="mh-body-medium text-mh-text-primary">
                Platz 1 für ein Keyword, das niemand sucht, bringt keinen Umsatz. Die
                Schlüsselgröße bei MyHiwi sind deshalb <strong>Anfragen, nicht Rankings</strong>.
                Gemessen wird, was reinkommt — Sichtbarkeit ist nur das Mittel dazu.
              </p>
            </div>
            <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
              Sofortige Anfragen brauchen oft <Link href="/wissen/lohnt-sich-google-ads-kleine-unternehmen" className="font-semibold text-mh-accent hover:text-mh-accent-hover">Google Ads</Link>;
              SEO ist der nachhaltige Unterbau, der über 6–12 Monate kompoundiert.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[820px]">
          <SectionMark index="FAQ" label="Häufige Fragen" />
          <div className="mt-mh-5">
            <FAQAccordion title="SEO-Kosten — häufige Fragen" items={faqItems} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Kostenloser Check" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-3">
              Lohnt sich SEO für Sie? Ich rechne es{" "}
              <em className="mh-italic-accent text-mh-glow">ehrlich</em> durch.
            </h2>
            <p className="mt-mh-4 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Schicken Sie kurz Ihre Ausgangslage — ich sage, welcher Einstieg bei Ihnen den
              meisten Effekt bringt.
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
