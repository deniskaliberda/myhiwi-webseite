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
  title: "Lohnt sich Google Ads für kleine Unternehmen? (2026)",
  description:
    "Ab welchem Budget sich Google Ads für lokale Betriebe lohnt, was eine Anfrage kostet und wann es sich NICHT lohnt — ehrlich erklärt, mit Zahlen.",
  keywords: [
    "lohnt sich Google Ads für kleine Unternehmen",
    "Google Ads lokale Betriebe Budget",
    "Google Ads Kosten Handwerker",
    "Google Ads oder SEO",
  ],
  alternates: { canonical: "https://myhiwi.de/wissen/lohnt-sich-google-ads-kleine-unternehmen" },
};

const faqCopy = [
  {
    question: "Wie viel Budget brauche ich mindestens?",
    answer:
      "Für lokale Betriebe lohnt sich Google Ads meist ab etwa 500 €/Monat Werbebudget. Unter ~300 € fehlt oft das Volumen, um genug Daten für eine sinnvolle Optimierung zu sammeln. Das Werbebudget zahlt man direkt an Google — getrennt vom Honorar für die Betreuung.",
  },
  {
    question: "Zahle ich pro Klick oder pro Anfrage?",
    answer:
      "Bei Google bezahlt man pro Klick (CPC). Bei lokalen Handwerks-Suchen liegt der Klickpreis meist bei 1,50–4 €. Die relevante Kennzahl ist aber nicht der Klickpreis, sondern die Kosten pro echter Anfrage — und die hängt davon ab, wie gut die Seite hinter der Anzeige konvertiert.",
  },
  {
    question: "Wer zahlt das Werbebudget — ich oder die Agentur?",
    answer:
      "Das Werbebudget zahlen Sie direkt an Google, transparent und getrennt vom Betreuungs-Honorar. Bei MyHiwi läuft das Konto auf Ihre Daten; das Honorar für die Kampagnen-Betreuung wird separat abgerechnet — nie Ad-Budget mit Honorar vermischt.",
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
    headline: "Lohnt sich Google Ads für kleine Unternehmen? (2026)",
    datePublished: "2026-06-02",
    dateModified: UPDATED,
    author: { "@type": "Person", name: "Denis Kaliberda", url: "https://myhiwi.de/ueber-mich" },
    publisher: {
      "@type": "Organization",
      name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
      logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
    },
    mainEntityOfPage: "https://myhiwi.de/wissen/lohnt-sich-google-ads-kleine-unternehmen",
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
        name: "Lohnt sich Google Ads für kleine Unternehmen?",
        item: "https://myhiwi.de/wissen/lohnt-sich-google-ads-kleine-unternehmen",
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
          <SectionMark index="?" label="Wissen · Werbung" tone="accent" />
          <h1 className="mt-mh-4 mh-display-2">
            Lohnt sich Google Ads für <em className="mh-italic-accent">kleine Unternehmen</em>?
          </h1>
          <p className="mt-mh-3 mh-label-mono-sm text-mh-text-secondary">
            <Link href="/ueber-mich" className="hover:text-mh-accent">Von Denis Kaliberda</Link> · aktualisiert 2. Juni 2026
          </p>
          <div className="mt-mh-5 rounded-mh-md border-l-4 border-mh-accent bg-mh-subtle px-mh-5 py-mh-4">
            <p className="mh-body-large text-mh-text-primary">
              Google Ads lohnt sich für die meisten lokalen Betriebe <strong>ab etwa 500 €/Monat
              Budget</strong> — vorausgesetzt, die Seite dahinter wandelt Klicks in Anfragen um.
              Bei lokalen Handwerks-Suchen liegt der Klickpreis meist bei <strong>1,50–4 €</strong>.
              Entscheidend ist die <strong>Kosten pro Anfrage</strong>, nicht der Klickpreis.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="compact">
        <Container className="max-w-[820px] space-y-mh-8">
          <div>
            <h2 className="mh-display-4">Ab welchem Budget lohnt sich Google Ads?</h2>
            <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
              Faustregel für lokale Betriebe: <strong>ab ~500 €/Monat</strong>. Darunter fehlt
              meist das Klickvolumen, um die Kampagne sinnvoll zu optimieren. Klickpreise bei
              lokalen Handwerks- und Dienstleister-Suchen liegen als Branchen-Richtwert bei
              <strong> 1,50–4 €</strong>. Der Vorteil von Ads: Sichtbarkeit ist <strong>sofort</strong>
              da — im Gegensatz zu SEO, das Monate braucht.
            </p>
          </div>

          <div>
            <h2 className="mh-display-4">Was kostet eine Anfrage über Google Ads?</h2>
            <div className="mt-mh-4 rounded-mh-md border-l-4 border-mh-accent bg-mh-subtle px-mh-5 py-mh-4">
              <p className="mh-body-medium text-mh-text-primary">
                Die relevante Zahl ist nicht der Klick, sondern die <strong>Kosten pro echter
                Anfrage</strong>. Beispiel aus der Praxis (Branchenquelle): ein Steuerberater gewann
                47 Mandanten in 3 Monaten zu ~89 € pro Mandant. Ob das bei Ihnen funktioniert,
                hängt fast komplett davon ab, wie gut die Seite hinter der Anzeige konvertiert.
              </p>
            </div>
            <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
              Deshalb optimiert MyHiwi Kampagnen auf <strong>echte Anfragen</strong>, nicht auf
              Klicks — mit sauberem Conversion-Tracking. Anzeigen auf eine Seite, die nicht
              anfragt, verbrennen nur Budget.
            </p>
          </div>

          <div>
            <h2 className="mh-display-4">Google Ads oder SEO — was zuerst?</h2>
            <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
              Beides ergänzt sich: <strong>Google Ads</strong> bringt sofort Sichtbarkeit und
              Anfragen (man zahlt pro Klick). <strong>SEO</strong> ist langsamer (Monate), aber
              nachhaltig und „kostenlos" pro Klick, sobald es greift. Für viele lokale Betriebe
              ist die sinnvolle Reihenfolge: SEO-Fundament + Google-Profil aufbauen, Ads für den
              sofortigen Hebel.
            </p>
          </div>

          <div>
            <h2 className="mh-display-4">Wann lohnt sich Google Ads NICHT?</h2>
            <ul className="mt-mh-4 grid gap-mh-3">
              {[
                "Wenn die Seite dahinter nicht konvertiert — dann verbrennt jeder Klick Geld.",
                "Bei zu kleinem Budget (deutlich unter ~300 €/Monat) fehlt die Datenbasis.",
                "Bei reinen Einmal-im-Leben-Conversions ohne Wiederkehr (dort lohnt oft SEO/Content mehr).",
              ].map((t) => (
                <li key={t} className="flex gap-mh-3 mh-body-medium text-mh-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-mh-pill bg-mh-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[820px]">
          <SectionMark index="FAQ" label="Häufige Fragen" />
          <div className="mt-mh-5">
            <FAQAccordion title="Was Betriebe vor dem ersten Google-Ads-Budget fragen" items={faqItems} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Kostenloser Check" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-3">
              Lohnt sich Werbung für Ihren Betrieb? Ich sage es{" "}
              <em className="mh-italic-accent text-mh-glow">ehrlich</em>.
            </h2>
            <p className="mt-mh-4 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Schicken Sie kurz Ihre Ausgangslage — ich schaue, ob sich Google Ads bei Ihnen
              rechnet oder ob ein anderer Hebel zuerst dran ist.
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
