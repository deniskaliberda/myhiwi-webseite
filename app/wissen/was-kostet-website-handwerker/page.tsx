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
  title: "Was kostet eine Website für Handwerker? (2026)",
  description:
    "Was eine Website für einen Handwerksbetrieb 2026 wirklich kostet — ehrliche Preisspannen (Baukasten, Freelancer, Agentur) und warum der günstigste Preis selten der beste ist.",
  keywords: [
    "Website Handwerker Kosten",
    "was kostet eine Website für Handwerker",
    "Homepage Handwerksbetrieb Preis",
    "Webdesign Handwerk Brandenburg",
  ],
  alternates: { canonical: "https://myhiwi.de/wissen/was-kostet-website-handwerker" },
};

const faqCopy = [
  {
    question: "Reicht eine günstige Baukasten-Website (Wix, Jimdo)?",
    answer:
      "Zum Start kann ein Baukasten reichen. Sobald die Seite aber Anfragen bringen, in Google gefunden werden oder Termine/Zahlungen abwickeln soll, stößt man schnell an Grenzen — und zahlt das monatliche Abo dauerhaft. Für einen Betrieb, der online Aufträge gewinnen will, lohnt sich eine eigene, suchmaschinen-optimierte Seite meist mehr.",
  },
  {
    question: "Was kostet die laufende Pflege einer Handwerker-Website?",
    answer:
      "Laufende Kosten liegen je nach Modell grob zwischen 10–100 €/Monat (Hosting + kleine Wartung) bis hin zu einem Betreuungs-Paket mit SEO und Anpassungen. Wichtig: einmalige Erstellung und laufende Betreuung getrennt betrachten — eine fertige Seite ohne Pflege verliert mit der Zeit Sichtbarkeit.",
  },
  {
    question: "Wie lange dauert eine Handwerker-Website?",
    answer:
      "Eine fokussierte Website für einen lokalen Handwerksbetrieb ist meist in wenigen Wochen live — abhängig davon, wie schnell Texte, Fotos und Referenzen bereitstehen. Der zeitintensivere Teil ist nicht das Bauen, sondern das saubere Aufsetzen von Sichtbarkeit (Google-Profil, lokale Suche).",
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
    headline: "Was kostet eine Website für Handwerker? (2026)",
    datePublished: "2026-06-02",
    dateModified: UPDATED,
    author: { "@type": "Person", name: "Denis Kaliberda", url: "https://myhiwi.de/ueber-mich" },
    publisher: {
      "@type": "Organization",
      name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
      logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
    },
    mainEntityOfPage: "https://myhiwi.de/wissen/was-kostet-website-handwerker",
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
        name: "Was kostet eine Website für Handwerker?",
        item: "https://myhiwi.de/wissen/was-kostet-website-handwerker",
      },
    ],
  },
];

const priceTiers = [
  ["Baukasten / selbst gebaut (Wix, Jimdo)", "200–800 €", "+ monatliches Abo; begrenzt bei SEO & Funktionen"],
  ["Freelancer", "800–2.500 €", "individueller, Qualität schwankt stark"],
  ["Agentur (mehrseitig, SEO-fähig)", "3.000–10.000 €+", "auf Anfragen & Sichtbarkeit gebaut"],
];

export default function Page() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Section background="paper" padding="large">
        <Container className="max-w-[820px]">
          <SectionMark index="?" label="Wissen · Kosten" tone="accent" />
          <h1 className="mt-mh-4 mh-display-2">
            Was kostet eine Website für <em className="mh-italic-accent">Handwerker</em>?
          </h1>
          <p className="mt-mh-3 mh-label-mono-sm text-mh-text-secondary">
            <Link href="/ueber-mich" className="hover:text-mh-accent">Von Denis Kaliberda</Link> · aktualisiert 2. Juni 2026
          </p>

          {/* Answer-First-Kapsel (BLUF) */}
          <div className="mt-mh-5 rounded-mh-md border-l-4 border-mh-accent bg-mh-subtle px-mh-5 py-mh-4">
            <p className="mh-body-large text-mh-text-primary">
              Eine Website für einen Handwerksbetrieb kostet je nach Anspruch grob
              <strong> 200–800 €</strong> (Baukasten/selbst gebaut), <strong>800–2.500 €</strong>
              {" "}(Freelancer) oder <strong>3.000–10.000 €+</strong> (Agentur, mehrseitig &amp;
              SEO-fähig). Entscheidend ist nicht der Preis, sondern ob die Seite
              <strong> Anfragen bringt</strong> — eine reine Visitenkarten-Seite rechnet sich
              seltener als eine, die in Google gefunden wird.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="compact">
        <Container className="max-w-[820px] space-y-mh-8">
          <div>
            <h2 className="mh-display-4">Was kostet eine Website für Handwerker konkret?</h2>
            <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
              Die Preisspannen am deutschen Markt 2026 (Branchen-Richtwerte):
            </p>
            <div className="mt-mh-4 overflow-hidden rounded-mh-lg border border-mh-divider">
              <table className="w-full text-left">
                <thead className="bg-mh-subtle">
                  <tr>
                    <th className="p-mh-3 mh-label-mono-sm text-mh-text-secondary">Variante</th>
                    <th className="p-mh-3 mh-label-mono-sm text-mh-text-secondary">Einmalig</th>
                    <th className="hidden p-mh-3 mh-label-mono-sm text-mh-text-secondary sm:table-cell">Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTiers.map(([variant, price, note]) => (
                    <tr key={variant} className="border-t border-mh-divider">
                      <td className="p-mh-3 mh-body-small font-semibold text-mh-text-primary">{variant}</td>
                      <td className="p-mh-3 mh-body-small font-semibold text-mh-accent">{price}</td>
                      <td className="hidden p-mh-3 mh-body-small text-mh-text-secondary sm:table-cell">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="mh-display-4">Warum der günstigste Preis selten der beste ist</h2>
            <div className="mt-mh-4 rounded-mh-md border-l-4 border-mh-accent bg-mh-subtle px-mh-5 py-mh-4">
              <p className="mh-body-medium text-mh-text-primary">
                Eine Website ist kein Selbstzweck — sie soll <strong>Anfragen bringen</strong>.
                Eine 500-€-Seite, die niemand findet, ist teurer als eine 4.000-€-Seite, die
                pro Monat mehrere Aufträge einsammelt. Die richtige Frage ist nicht „was kostet
                eine Website", sondern „was bringt sie mir".
              </p>
            </div>
            <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
              Bei MyHiwi steht deshalb der <strong>Ergebnis-Gedanke</strong> im Vordergrund: Die
              Seite wird so gebaut, dass sie in der lokalen Google-Suche gefunden wird und der
              Weg von der Suche bis zur Anfrage sauber durchläuft. Verkauft werden Ergebnisse
              (Anfragen), nicht Stunden.
            </p>
          </div>

          <div>
            <h2 className="mh-display-4">Was kostet das bei MyHiwi?</h2>
            <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
              Konkrete Preise gehören ins Erstgespräch, nicht in eine pauschale Tabelle —
              weil Umfang und Ziel pro Betrieb verschieden sind. MyHiwi arbeitet mit zwei
              Modellen: einem <strong>Festpreis (Build)</strong> für einen klaren einmaligen
              Umfang, oder einer <strong>laufenden Betreuung</strong>, wenn Sichtbarkeit
              kontinuierlich wachsen soll. Den ersten Blick (Quick-Check) gibt es kostenlos.
            </p>
            <CtaRow className="mt-mh-5">
              <BtnPrimary href="/festpreis" fullWidthOnMobile>
                Festpreis anfragen
              </BtnPrimary>
            </CtaRow>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[820px]">
          <SectionMark index="FAQ" label="Häufige Fragen" />
          <div className="mt-mh-5">
            <FAQAccordion
              title="Was Handwerksbetriebe vor dem Website-Projekt fragen"
              items={faqItems}
              defaultOpenIndex={0}
            />
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Kostenloser Check" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-3">
              Kostenlos prüfen, was sich für Ihren Betrieb{" "}
              <em className="mh-italic-accent text-mh-glow">rechnet</em>.
            </h2>
            <p className="mt-mh-4 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Schicken Sie kurz Ihre Ausgangslage — ich sage ehrlich, ob und wo sich eine
              Website oder mehr Sichtbarkeit für Sie lohnt.
            </p>
            <CtaRow className="mt-mh-6">
              <BtnPrimary
                href="/kontakt"
                pill
                fullWidthOnMobile
                className="bg-mh-text-on-dark text-mh-ink-950 hover:bg-mh-glow"
              >
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
