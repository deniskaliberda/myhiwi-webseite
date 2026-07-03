import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, MapPin, Star, Globe, MessageSquare, TrendingUp } from "lucide-react";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Card } from "@/components/myhiwi/card/Card";
import { Container } from "@/components/myhiwi/layout/Container";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import { FAQAccordion, type FAQItem } from "@/components/myhiwi/faq/FAQAccordion";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";

const UPDATED = "2026-06-02";

export const metadata: Metadata = {
  title: "Wie wird mein lokaler Betrieb bei Google gefunden? (2026)",
  description:
    "Der komplette, ehrliche Leitfaden: Google-Profil, Bewertungen, lokale Website, Anfrageweg und Anzeigen — wie ein lokaler Betrieb in Berlin-Ost & Barnim 2026 bei Google (und in der KI-Suche) gefunden wird.",
  keywords: [
    "wie werde ich bei Google gefunden",
    "lokaler Betrieb bei Google gefunden werden",
    "Google Maps Ranking verbessern",
    "lokale Sichtbarkeit Tipps",
  ],
  alternates: { canonical: "https://myhiwi.de/wissen/lokaler-betrieb-bei-google-gefunden-werden" },
};

const faqCopy = [
  {
    question: "Was ist der schnellste Weg, lokal bei Google gefunden zu werden?",
    answer:
      "Ein vollständig ausgefülltes Google-Unternehmensprofil mit präziser Kategorie, echten Fotos und aktuellen Bewertungen. Es erscheint in der Karten-Suche und ist der schnellste lokale Hebel — oft mit ersten Effekten in 30–90 Tagen, weitgehend unabhängig von der Website.",
  },
  {
    question: "Brauche ich dafür eine Website?",
    answer:
      "Zum Start nicht zwingend — das Profil reicht für die reine Auffindbarkeit. Sobald Anfragen strukturiert reinkommen, Buchungen/Zahlungen laufen oder Sie in der Google-Suche (nicht nur in der Karte) gefunden werden wollen, ist die eigene Website der nächste Schritt.",
  },
  {
    question: "Wie lange dauert es, bis man Wirkung sieht?",
    answer:
      "Im Map Pack oft 30–90 Tage für lokale Begriffe. Klassisches SEO (Google-Suche) ist ein 6–12-Monats-Aufbau. Wer sofort Anfragen braucht, kombiniert das mit Google Ads — Ads für jetzt, Profil + SEO als Fundament.",
  },
  {
    question: "Werde ich damit auch in ChatGPT oder Perplexity empfohlen?",
    answer:
      "Zunehmend ja. KI-Suchen greifen auf dieselben Signale zurück: ein gepflegtes Profil, konsistente Einträge in Verzeichnissen, Bewertungen und klare, fragen­orientierte Inhalte auf der Website. Wer lokal sauber aufgestellt ist, taucht auch in den KI-Antworten häufiger auf.",
  },
];

const faqItems: FAQItem[] = faqCopy.map((item) => ({ question: item.question, answer: <p>{item.answer}</p> }));

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Wie wird mein lokaler Betrieb bei Google gefunden? (2026)",
    datePublished: "2026-06-02",
    dateModified: UPDATED,
    author: { "@type": "Person", name: "Denis Kaliberda", url: "https://myhiwi.de/ueber-mich" },
    publisher: {
      "@type": "Organization",
      name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
      logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
    },
    mainEntityOfPage: "https://myhiwi.de/wissen/lokaler-betrieb-bei-google-gefunden-werden",
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
        name: "Wie wird mein lokaler Betrieb bei Google gefunden?",
        item: "https://myhiwi.de/wissen/lokaler-betrieb-bei-google-gefunden-werden",
      },
    ],
  },
];

const steps = [
  {
    icon: MapPin,
    title: "1. Google-Unternehmensprofil",
    text: "Der schnellste Hebel. Präzise Hauptkategorie, jedes Feld ausgefüllt, echte Fotos, Öffnungszeiten. Erscheint in der Karten-Suche.",
    link: { href: "/wissen/brauche-ich-website-oder-google-profil", label: "Profil oder Website?" },
  },
  {
    icon: Star,
    title: "2. Bewertungen",
    text: "Aktuelle, echte Bewertungen mit Text (Leistung + Region genannt) sind ein starkes lokales Signal. Recency schlägt reine Menge.",
    link: null,
  },
  {
    icon: Globe,
    title: "3. Lokale Website",
    text: "Eine Seite, die für „Betrieb + Ort“-Suchen gebaut ist — und in der Google-Suche, nicht nur in der Karte, gefunden wird.",
    link: { href: "/region/berlin-ost-barnim", label: "Region Berlin-Ost & Barnim" },
  },
  {
    icon: MessageSquare,
    title: "4. Der Anfrageweg",
    text: "Aus Sichtbarkeit muss eine Anfrage werden: ein klarer, einfacher Weg statt verstreuter Anrufe.",
    link: null,
  },
  {
    icon: TrendingUp,
    title: "5. Anzeigen (optional)",
    text: "Für den sofortigen Hebel, während Profil + SEO wachsen. Optimiert auf echte Anfragen, nicht auf Klicks.",
    link: { href: "/wissen/lohnt-sich-google-ads-kleine-unternehmen", label: "Lohnt sich Google Ads?" },
  },
];

export default function Page() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Section background="paper" padding="large">
        <Container className="max-w-[860px]">
          <SectionMark index="Pillar" label="Wissen · lokale Sichtbarkeit" tone="accent" />
          <h1 className="mt-mh-4 mh-display-2">
            Wie wird mein lokaler Betrieb bei{" "}
            <em className="mh-italic-accent">Google gefunden</em>?
          </h1>
          <p className="mt-mh-3 mh-label-mono-sm text-mh-text-secondary">
            <Link href="/ueber-mich" className="hover:text-mh-accent">Von Denis Kaliberda</Link> · aktualisiert 2. Juni 2026
          </p>
          <div className="mt-mh-5 rounded-mh-md border-l-4 border-mh-accent bg-mh-subtle px-mh-5 py-mh-4">
            <p className="mh-body-large text-mh-text-primary">
              Lokal gefunden zu werden hängt an fünf Bausteinen: einem vollständigen
              <strong> Google-Unternehmensprofil</strong>, <strong>Bewertungen</strong>, einer
              <strong> lokal optimierten Website</strong>, einem klaren <strong>Anfrageweg</strong>
              {" "}und — optional — <strong>Anzeigen</strong> für den sofortigen Hebel. Der schnellste
              davon ist das Profil: oft erste Effekte in 30–90 Tagen.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[900px]">
          <SectionMark index="01" label="Die fünf Bausteine" />
          <h2 className="mt-mh-4 mh-display-3">
            Von der Suche zur <em className="mh-italic-accent">Anfrage</em>.
          </h2>
          <div className="mt-mh-7 grid gap-mh-4">
            {steps.map((s) => (
              <Card key={s.title} as="article" className="grid gap-mh-4 sm:grid-cols-[52px_1fr] sm:items-start">
                <span className="flex h-12 w-12 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
                  <s.icon className="h-[22px] w-[22px]" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="mh-display-5">{s.title}</h3>
                  <p className="mt-mh-2 mh-body-medium text-mh-text-secondary">{s.text}</p>
                  {s.link ? (
                    <Link href={s.link.href} className="mt-mh-2 inline-block mh-body-small font-semibold text-mh-accent hover:text-mh-accent-hover">
                      {s.link.label} →
                    </Link>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container className="max-w-[900px]">
          <SectionMark index="02" label="Für Ihre Branche" />
          <h2 className="mt-mh-4 mh-display-3">
            Konkret für Ihren <em className="mh-italic-accent">Betrieb</em>.
          </h2>
          <div className="mt-mh-6 grid gap-mh-3 sm:grid-cols-2">
            {[
              ["Handwerk", "/loesungen/handwerk"],
              ["Fahrschulen", "/fahrschule"],
              ["Friseure & Kosmetik", "/loesungen/friseur"],
              ["Praxen & Physiotherapie", "/loesungen/praxis-physio"],
              ["Ferienwohnungen & Hotels", "/fewo-direktbuchung"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between rounded-mh-md border border-mh-divider bg-mh-paper px-mh-4 py-mh-3 mh-body-medium font-semibold text-mh-text-primary transition-colors hover:border-mh-accent hover:text-mh-accent"
              >
                {label} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <p className="mt-mh-5 mh-body-medium text-mh-text-secondary">
            Was das kostet, steht offen in{" "}
            <Link href="/wissen/was-kostet-website-handwerker" className="font-semibold text-mh-accent hover:text-mh-accent-hover">„Was kostet eine Website?"</Link>{" "}
            und{" "}
            <Link href="/wissen/was-kostet-seo-monatlich" className="font-semibold text-mh-accent hover:text-mh-accent-hover">„Was kostet SEO monatlich?"</Link>.
          </p>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[820px]">
          <SectionMark index="FAQ" label="Häufige Fragen" />
          <div className="mt-mh-5">
            <FAQAccordion title="Lokal bei Google gefunden werden — häufige Fragen" items={faqItems} defaultOpenIndex={0} />
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-3xl">
            <SectionMark index="→" label="Kostenloser Check" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-2">
              Wo steht Ihr Betrieb gerade — und was ist der{" "}
              <em className="mh-italic-accent text-mh-glow">erste Hebel</em>?
            </h2>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Schicken Sie kurz Ihre Ausgangslage. Ich schaue auf Profil, Sichtbarkeit und
              Anfrageweg und sage ehrlich, wo Sie zuerst ansetzen sollten.
            </p>
            <CtaRow className="mt-mh-7">
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
