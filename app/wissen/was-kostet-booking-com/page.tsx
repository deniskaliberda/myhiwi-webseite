import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { BtnGhost } from "@/components/myhiwi/cta/BtnGhost";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Container } from "@/components/myhiwi/layout/Container";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import { FAQAccordion, type FAQItem } from "@/components/myhiwi/faq/FAQAccordion";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";
import { BookingProvisionRechner } from "@/components/myhiwi/fewo/BookingProvisionRechner";

const UPDATED = "2026-06-02";

export const metadata: Metadata = {
  title: "Was kostet Booking.com wirklich? (2026)",
  description:
    "Wie hoch die Booking.com-Provision 2026 wirklich ist (Basis, Genius, Preferred Partner, Zahlungsgebühren), was sie eine Ferienwohnung im Jahr kostet — und wie man Direktbuchungen zurückholt.",
  keywords: [
    "Booking.com Provision 2026",
    "was kostet Booking.com",
    "Ferienwohnung Provision sparen",
    "Direktbuchung ohne Booking.com",
  ],
  alternates: { canonical: "https://myhiwi.de/wissen/was-kostet-booking-com" },
};

const faqCopy = [
  {
    question: "Muss ich Booking.com komplett kündigen?",
    answer:
      "Nein. Portale bleiben eine gute Akquise-Quelle für Neukunden, die Ihr Haus nie gegoogelt hätten. Das Ziel ist nicht, sie abzuschaffen, sondern den direkten Anteil Schritt für Schritt zu erhöhen — vor allem bei Stammgästen und Wiederkehr-Buchungen, die Sie sonst über die Plattform teuer zurückkaufen.",
  },
  {
    question: "Wie viel kann ich mit Direktbuchungen sparen?",
    answer:
      "Booking.com nimmt 2026 effektiv oft 22–25 % pro Buchung. Schon 5 Direktbuchungen pro Monat sparen je nach Buchungswert leicht über 1.000 € im Jahr. Eine durchschnittliche Ferienwohnung zahlt grob 2.000–8.000 € Provision jährlich — Geld, das bei Direktbuchung komplett bei Ihnen bleibt.",
  },
  {
    question: "Wie bekomme ich überhaupt Direktbuchungen?",
    answer:
      "Über eine eigene Buchungsstrecke (Website + Verfügbarkeit + Buchung + Zahlung), die in der lokalen Google-Suche gefunden wird, plus den Billboard-Effekt: viele Gäste suchen Ihr Haus nach dem Portal-Fund nochmal direkt. Der Schlüssel ist, dass dieser direkte Weg sauber existiert und konvertiert.",
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
    headline: "Was kostet Booking.com wirklich? (2026)",
    datePublished: "2026-06-02",
    dateModified: UPDATED,
    author: { "@type": "Person", name: "Denis Kaliberda", url: "https://myhiwi.de/ueber-mich" },
    publisher: {
      "@type": "Organization",
      name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
      logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
    },
    mainEntityOfPage: "https://myhiwi.de/wissen/was-kostet-booking-com",
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
        name: "Was kostet Booking.com wirklich?",
        item: "https://myhiwi.de/wissen/was-kostet-booking-com",
      },
    ],
  },
];

const provisionRows = [
  ["Basis-Provision (DE)", "12–15 %", "Berlin/Großstädte eher am oberen Rand"],
  ["+ Genius-Programm", "+10 %", "für mehr Sichtbarkeit"],
  ["+ Preferred Partner", "+5 %", "bessere Platzierung"],
  ["+ Zahlungsgebühren", "~1–2 %", "bei „Payments by Booking.com“"],
  ["= Effektiv", "22–25 %", "je nach Programmen pro Buchung"],
];

export default function Page() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Section background="paper" padding="large">
        <Container className="max-w-[820px]">
          <SectionMark index="?" label="Wissen · Ferienwohnung" tone="accent" />
          <h1 className="mt-mh-4 mh-display-2">
            Was kostet <em className="mh-italic-accent">Booking.com</em> wirklich?
          </h1>
          <p className="mt-mh-3 mh-label-mono-sm text-mh-text-secondary">
            <Link href="/ueber-mich" className="hover:text-mh-accent">Von Denis Kaliberda</Link> · aktualisiert 2. Juni 2026
          </p>
          <div className="mt-mh-5 rounded-mh-md border-l-4 border-mh-accent bg-mh-subtle px-mh-5 py-mh-4">
            <p className="mh-body-large text-mh-text-primary">
              Booking.com nimmt 2026 in Deutschland meist <strong>12–15 % Provision</strong> pro
              Buchung — mit Programmen wie <strong>Genius (+10 %)</strong> und <strong>Preferred
              Partner (+5 %)</strong> plus Zahlungsgebühren <strong>effektiv bis 22–25 %</strong>.
              Eine durchschnittliche Ferienwohnung zahlt so grob <strong>2.000–8.000 €</strong>
              {" "}Provision im Jahr.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="compact">
        <Container className="max-w-[820px] space-y-mh-8">
          <div>
            <h2 className="mh-display-4">Wie hoch ist die Booking.com-Provision 2026?</h2>
            <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
              Die Provision setzt sich aus mehreren Bausteinen zusammen (Branchen-Richtwerte 2026):
            </p>
            <div className="mt-mh-4 overflow-hidden rounded-mh-lg border border-mh-divider">
              <table className="w-full text-left">
                <thead className="bg-mh-subtle">
                  <tr>
                    <th className="p-mh-3 mh-label-mono-sm text-mh-text-secondary">Baustein</th>
                    <th className="p-mh-3 mh-label-mono-sm text-mh-text-secondary">Anteil</th>
                    <th className="hidden p-mh-3 mh-label-mono-sm text-mh-text-secondary sm:table-cell">Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {provisionRows.map(([k, v, note], idx) => (
                    <tr key={k} className={idx === provisionRows.length - 1 ? "border-t-2 border-mh-accent bg-mh-subtle" : "border-t border-mh-divider"}>
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
            <h2 className="mh-display-4">Rechnen Sie es selbst aus</h2>
            <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
              Ihre eigenen Zahlen — sofort sehen, was Booking.com Sie im Jahr kostet:
            </p>
            <div className="mt-mh-4">
              <BookingProvisionRechner />
            </div>
          </div>

          <div>
            <h2 className="mh-display-4">Was kostet dich das im Jahr?</h2>
            <div className="mt-mh-4 rounded-mh-md border-l-4 border-mh-accent bg-mh-subtle px-mh-5 py-mh-4">
              <p className="mh-body-medium text-mh-text-primary">
                Eine durchschnittliche Ferienwohnung zahlt grob <strong>2.000–8.000 € Provision
                im Jahr</strong>. Schon <strong>5 Direktbuchungen pro Monat</strong> sparen je nach
                Buchungswert leicht über <strong>1.000 € jährlich</strong> — Geld, das bei
                Direktbuchung komplett bei Ihnen bleibt.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mh-display-4">Wie holst du Direktbuchungen zurück?</h2>
            <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
              Über eine eigene Buchungsstrecke, die in Google gefunden wird — plus den
              Billboard-Effekt (Gäste suchen Ihr Haus nach dem Portal-Fund oft nochmal direkt).
            </p>
            <div className="mt-mh-4 rounded-mh-md border border-mh-divider bg-mh-paper px-mh-5 py-mh-4">
              <p className="mh-label-mono-sm text-mh-accent">Belegter Case · Sonnenhof Herrsching</p>
              <p className="mt-mh-2 mh-body-medium text-mh-text-primary">
                Nach dem Relaunch durch MyHiwi: <strong>199 direkte Anfragen in 4 Monaten</strong>,
                rund <strong>80 % der Belegung über die eigene Seite</strong> (Angabe der
                Gastgeberin). Provision, die vorher an Portale ging — jetzt eigene Marge.
              </p>
              <Link
                href="/case-studies/sonnenhof-herrsching"
                className="mt-mh-3 inline-flex items-center gap-mh-2 mh-body-small font-semibold text-mh-accent hover:text-mh-accent-hover"
              >
                Sonnenhof-Case ansehen →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[820px]">
          <SectionMark index="FAQ" label="Häufige Fragen" />
          <div className="mt-mh-5">
            <FAQAccordion title="Booking.com & Direktbuchung — die häufigsten Fragen" items={faqItems} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Direktbuchungs-Check" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-3">
              Wie viel Provision können Sie{" "}
              <em className="mh-italic-accent text-mh-glow">sparen</em>?
            </h2>
            <p className="mt-mh-4 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Kostenloser Direktbuchungs-Check: Ich schaue auf Ihre Buchungsstrecke und sage
              ehrlich, wo der erste Hebel für mehr Direktbuchungen liegt.
            </p>
            <CtaRow className="mt-mh-6">
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
