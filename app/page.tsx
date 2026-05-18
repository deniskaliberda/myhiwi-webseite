import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarClock,
  Check,
  CreditCard,
  Globe,
  TrendingUp,
} from "lucide-react";
import { BrowserMockup } from "@/components/myhiwi/mockup/BrowserMockup";
import { BtnGhost } from "@/components/myhiwi/cta/BtnGhost";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { BtnTertiary } from "@/components/myhiwi/cta/BtnTertiary";
import { Card } from "@/components/myhiwi/card/Card";
import { ComplianceNote } from "@/components/myhiwi/trust/ComplianceNote";
import { Container } from "@/components/myhiwi/layout/Container";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import { FAQAccordion, type FAQItem } from "@/components/myhiwi/faq/FAQAccordion";
import { FeatureCard } from "@/components/myhiwi/card/FeatureCard";
import { FloatingMetricCard } from "@/components/myhiwi/hero/FloatingMetricCard";
import { ProofCard } from "@/components/myhiwi/card/ProofCard";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";
import { TrustStrip } from "@/components/myhiwi/trust/TrustStrip";

const primaryCta = {
  label: "Kostenlosen Digital-Check anfragen",
  href: "/kontakt",
};

const secondaryCta = {
  label: "Cases ansehen",
  href: "/case-studies",
};

export const metadata: Metadata = {
  title:
    "Digitale Wachstumssysteme für lokale Unternehmen | MyHiwi",
  description:
    "MyHiwi verbindet Website, Google-Sichtbarkeit, Anfragewege, Buchung, Zahlung und AI zu Wachstumssystemen für lokale Unternehmen.",
  alternates: {
    canonical: "https://myhiwi.de",
  },
};

const trustItems = [
  { label: "Sonnenhof", caption: "Pension · Herrsching" },
  { label: "Mr. Sherman", caption: "Tanzstudio · Berlin" },
  { label: "Formazin", caption: "Architektur · Pilot" },
  { label: "Villa Gloria", caption: "Unterkunft · Projekt" },
  { label: "FeWo Taubenhaus", caption: "Direktanfragen" },
];

const pains = [
  {
    title: "Die Website ist da, aber sie arbeitet nicht mit.",
    text: "Viele Seiten sehen ordentlich aus, beantworten aber nicht, was Google, Gäste und Interessenten vor der Anfrage wirklich brauchen.",
  },
  {
    title: "Sichtbarkeit endet vor dem nächsten Schritt.",
    text: "Google Business Profil, Ads, Inhalte und Website laufen nebeneinander. Dadurch entsteht Aufmerksamkeit, aber kein sauberer Anfrageweg.",
  },
  {
    title: "Anfragen kommen unstrukturiert an.",
    text: "Interessenten schreiben per Mail, Telefon oder Messenger. Danach beginnt Sortieren, Nachfragen und Hinterherlaufen.",
  },
  {
    title: "Buchung und Zahlung bleiben Handarbeit.",
    text: "Reservierungen, Anzahlungen, Bestätigungen und Rechnungen kosten Zeit, obwohl ein Teil davon verbindlich digital laufen könnte.",
  },
];

const featureBlocks = [
  {
    index: "01",
    icon: Globe,
    title: "Sichtbarkeit",
    subtitle: "GEFUNDEN WERDEN",
    outcome:
      "Website, Google Business Profil und Inhalte werden so gebaut, dass lokale Nachfrage überhaupt sauber landen kann.",
    bullets: [
      "Technische Website-Basis",
      "Local-SEO-Struktur",
      "Suchintentionen und Trust-Signale",
    ],
  },
  {
    index: "02",
    icon: TrendingUp,
    title: "Nachfrage",
    subtitle: "PASSENDE BESUCHER",
    outcome:
      "Ads, Content und Landingpages werden nicht isoliert optimiert, sondern auf echte Anfragen und Buchungen ausgerichtet.",
    bullets: [
      "Google Ads mit klarer Rolle",
      "Angebotsseiten statt Keyword-Silos",
      "Auswertung ohne Vanity-Metriken",
    ],
  },
  {
    index: "03",
    icon: CalendarClock,
    title: "Anfrage & Buchung",
    subtitle: "WENIGER REIBUNG",
    outcome:
      "Interessenten bekommen einen klaren nächsten Schritt. Der Betrieb bekommt bessere Informationen, bevor Arbeit entsteht.",
    bullets: [
      "Formulare und Anfrageflows",
      "Termin- oder Buchungslogik",
      "Übergabe in Mail, CRM oder Kalender",
    ],
  },
  {
    index: "04",
    icon: CreditCard,
    title: "Zahlung & Verbindlichkeit",
    subtitle: "ERNSTHAFTE NACHFRAGE",
    outcome:
      "Wo es sinnvoll ist, werden Anzahlungen, Zahlungen und Bestätigungen direkt in den Ablauf integriert.",
    bullets: [
      "Stripe- oder Zahlungsintegration",
      "Bestätigungsmails und Belege",
      "Weniger manuelle Nacharbeit",
    ],
  },
];

const aiUseCases = [
  {
    title: "Antworten vorbereiten",
    text: "AI hilft beim Sortieren und Vorformulieren, aber Entscheidungen bleiben beim Menschen.",
  },
  {
    title: "Anfragen strukturieren",
    text: "Aus losen Angaben werden saubere Übergaben für Mail, Kalender, CRM oder interne Abläufe.",
  },
  {
    title: "Dokumente beschleunigen",
    text: "Wiederkehrende Notizen, Protokolle oder Zusammenfassungen können als projektbezogener Pilot starten.",
  },
];

const values = [
  "Sie reden direkt mit Denis, nicht mit einer Account-Manager-Schicht.",
  "Code, Inhalte und Prozesse werden als zusammenhängendes System betrachtet.",
  "Zahlen werden nur gezeigt, wenn sie im Projekt belegbar sind.",
];

const faqCopy = [
  {
    question: "Was ist ein digitales Wachstumssystem?",
    answer:
      "Ein digitales Wachstumssystem verbindet Sichtbarkeit, Website, Anfrageweg, Buchung, Zahlung und passende Automatisierung. Es ist keine einzelne neue Webseite, sondern ein Ablauf, der aus Aufmerksamkeit konkrete Anfragen machen soll.",
  },
  {
    question: "Ist MyHiwi eine klassische Webdesign-Agentur?",
    answer:
      "Nein. Eine neue Website kann ein Baustein sein, aber sie wird immer im Zusammenhang mit Google-Sichtbarkeit, Anfragequalität und operativer Entlastung geplant. Ziel ist ein funktionierender Weg vom ersten Besuch bis zur verbindlichen Anfrage.",
  },
  {
    question: "Wie läuft der kostenlose Digital-Check ab?",
    answer:
      "Sie schicken kurz Ihre Ausgangslage. Danach schaut Denis persönlich auf Website, Google-Auftritt und Anfrageweg und meldet sich mit einer ehrlichen Einschätzung, wo ein sinnvoller erster Hebel liegen könnte.",
  },
  {
    question: "Für welche Betriebe passt das?",
    answer:
      "MyHiwi passt besonders für lokale Unternehmen mit wiederkehrenden Anfragen, Terminen, Buchungen oder Zahlungen. Typische Beispiele sind Unterkünfte, Fahrschulen, Sportanbieter, Praxen, Kanzleien, Handwerk und regionale Dienstleister.",
  },
  {
    question: "Wie gehen Sie mit Daten und DSGVO um?",
    answer:
      "Wir arbeiten DSGVO-bewusst, mit AVV und Anbieterübersicht projektbezogen. Vor Datenflüssen wird geklärt, welche Anbieter eingesetzt werden, welche Daten wirklich nötig sind und welche Abläufe besser reduziert werden.",
  },
  {
    question: "Wann ist MyHiwi nicht passend?",
    answer:
      "Wenn Sie nur eine möglichst billige einzelne Unterseite oder schnelle Design-Kosmetik suchen, ist MyHiwi wahrscheinlich nicht der richtige Partner. Der Ansatz lohnt sich dort, wo Website, Nachfrage und Betrieb zusammen verbessert werden sollen.",
  },
];

const faqItems: FAQItem[] = faqCopy.map((item) => ({
  question: item.question,
  answer: <p>{item.answer}</p>,
}));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCopy.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Section background="paper" padding="large" className="overflow-hidden">
        <Container>
          <div className="grid gap-mh-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-mh-9">
            <div className="max-w-[760px]">
              <SectionMark index="00" label="Positionierung" tone="accent" />
              <h1 className="mt-mh-4 mh-display-1 mh-hero-title">
                Digitale Wachstumssysteme für lokale{" "}
                <em className="mh-italic-accent">Unternehmen</em>.
              </h1>
              <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
                MyHiwi verbindet Website, Google-Sichtbarkeit, Anfragewege,
                Buchung, Zahlung und AI so, dass aus Sichtbarkeit bessere
                Anfragen, Buchungen und verbindliche nächste Schritte werden können.
              </p>
              <p className="mt-mh-4 max-w-mh-text mh-body-medium text-mh-text-secondary">
                Wir verkaufen keine Webseiten als Einzelteil. Wir bauen den
                digitalen Weg, auf dem lokale Nachfrage bei Ihnen ankommt.
              </p>
              <CtaRow
                className="mt-mh-6"
                microcopy="kostenlos · unverbindlich · Sie reden direkt mit Denis"
              >
                <BtnPrimary href={primaryCta.href} fullWidthOnMobile>
                  {primaryCta.label}
                </BtnPrimary>
                <BtnGhost href={secondaryCta.href} fullWidthOnMobile>
                  {secondaryCta.label}
                </BtnGhost>
                <BtnTertiary href="#pakete">Angebote ansehen</BtnTertiary>
              </CtaRow>
            </div>

            <div className="relative">
              <BrowserMockup domain="myhiwi.de/system" className="mx-auto max-w-[560px]">
                <div className="bg-mh-paper p-mh-5">
                  <div className="grid gap-mh-3">
                    <div className="rounded-mh-lg border border-mh-divider bg-mh-subtle p-mh-4">
                      <div className="flex items-center justify-between gap-mh-3">
                        <span className="mh-label-mono-sm text-mh-text-secondary">
                          Besucher
                        </span>
                        <span className="h-2 w-24 rounded-mh-pill bg-mh-accent-soft" />
                      </div>
                    </div>
                    {[
                      ["01", "Sichtbarkeit", "gefunden werden"],
                      ["02", "Nachfrage", "passende Besucher"],
                      ["03", "Anfrage", "klarer nächster Schritt"],
                      ["04", "Zahlung", "verbindlicher Ablauf"],
                    ].map(([number, title, text]) => (
                      <div
                        key={number}
                        className="grid grid-cols-[44px_1fr_auto] items-center gap-mh-3 rounded-mh-md border border-mh-divider bg-mh-paper p-mh-3"
                      >
                        <span className="mh-label-mono text-mh-accent">
                          {number}
                        </span>
                        <div>
                          <p className="mh-body-small font-semibold text-mh-text-primary">
                            {title}
                          </p>
                          <p className="mh-body-xs text-mh-text-secondary">
                            {text}
                          </p>
                        </div>
                        <ArrowRight
                          className="h-4 w-4 text-mh-text-secondary"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </div>
                    ))}
                    <div className="rounded-mh-lg bg-mh-ink-950 p-mh-4 text-mh-text-on-dark">
                      <div className="flex items-center gap-mh-3">
                        <Check
                          className="h-5 w-5 text-mh-glow"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        <div>
                          <p className="mh-body-small font-semibold">
                            Anfrage, Buchung oder Zahlung kommt sauber an.
                          </p>
                          <p className="mh-body-xs text-mh-text-on-dark/70">
                            Der Betrieb sieht den nächsten Schritt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </BrowserMockup>
              <FloatingMetricCard
                value="108 Anfragen / 100 Tage"
                caption="Sonnenhof Herrsching"
                tag="belegter Case 2026"
                className="mt-mh-4 lg:absolute lg:-right-mh-4 lg:-top-mh-4 lg:mt-0"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="compact">
        <Container>
          <TrustStrip items={trustItems} kicker="Ausgewählte Projekte" />
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <div className="grid gap-mh-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-mh-8">
            <div>
              <SectionMark index="01" label="Diagnose" />
              <h2 className="mt-mh-4 mh-display-3">
                Die Einzelteile sind da. Das{" "}
                <em className="mh-italic-accent">System</em> fehlt.
              </h2>
              <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
                Viele lokale Unternehmen haben schon Website, Google-Profil,
                Werbung oder ein Formular. Der Engpass entsteht dort, wo diese
                Teile nicht miteinander arbeiten.
              </p>
            </div>

            <div className="grid gap-mh-4 sm:grid-cols-2">
              {pains.map((pain) => (
                <Card key={pain.title} as="article" interactive>
                  <h3 className="mh-display-5">{pain.title}</h3>
                  <p className="mt-mh-3 mh-body-small text-mh-text-secondary">
                    {pain.text}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <Card tone="ink" className="mt-mh-7 grid gap-mh-5 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <p className="mh-label-mono text-mh-glow">Antwort von MyHiwi</p>
            <p className="mh-body-large text-mh-text-on-dark/88">
              Erst wird der Weg sichtbar gemacht: Woher kommen Menschen, was
              sehen sie, wo bleiben sie hängen, was muss automatisiert oder
              verbindlicher werden?
            </p>
          </Card>
        </Container>
      </Section>

      <Section id="system" background="paper" padding="large">
        <Container>
          <div className="grid gap-mh-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionMark index="02" label="Vier Bausteine" />
              <h2 className="mt-mh-4 mh-display-3">
                Vier Bausteine. Ein{" "}
                <em className="mh-italic-accent">Wachstumssystem</em>.
              </h2>
            </div>
            <p className="mh-body-medium text-mh-text-secondary">
              Die AI-Schicht sitzt bewusst darüber. Erst muss der sichtbare
              Weg funktionieren, dann kann Automatisierung sinnvoll verstärken.
            </p>
          </div>

          <div className="mt-mh-7 grid gap-mh-5 md:grid-cols-2 xl:grid-cols-4">
            {featureBlocks.map((block) => (
              <FeatureCard key={block.index} {...block} />
            ))}
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <div className="grid gap-mh-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionMark index="03" label="Verstärker-Schicht" />
              <h2 className="mt-mh-4 mh-display-3">
                AI da, wo sie wirklich{" "}
                <em className="mh-italic-accent">hilft</em>.
              </h2>
              <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
                AI ist bei MyHiwi kein Hauptprodukt und kein Versprechen. Sie
                wird dort eingesetzt, wo ein klarer Ablauf schon existiert und
                menschliche Kontrolle erhalten bleibt.
              </p>
            </div>

            <div className="grid gap-mh-4">
              {aiUseCases.map((item) => (
                <Card key={item.title} as="article" className="grid gap-mh-3 sm:grid-cols-[48px_1fr] sm:items-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
                    <Bot className="h-[22px] w-[22px]" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="mh-display-5">{item.title}</h3>
                    <p className="mt-mh-2 mh-body-small text-mh-text-secondary">
                      {item.text}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container>
          <div className="grid gap-mh-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="relative overflow-hidden rounded-mh-xl border border-mh-divider bg-mh-subtle p-mh-6 shadow-mh-card">
              <div className="aspect-[4/5] rounded-mh-lg bg-gradient-to-br from-mh-calm-portrait-warm-1 to-mh-calm-portrait-warm-2 p-mh-6">
                <div className="flex h-full flex-col justify-between rounded-mh-lg border border-mh-divider bg-mh-paper/72 p-mh-5">
                  <span className="mh-label-mono text-mh-text-secondary">
                    Gründer
                  </span>
                  <div>
                    <p className="font-mh-display text-[44px] font-bold leading-none tracking-mh-display text-mh-text-primary">
                      Denis
                    </p>
                    <p className="mt-mh-2 mh-body-small text-mh-text-secondary">
                      Ahrensfelde bei Berlin · Ammersee, Bayern
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionMark index="04" label="Über MyHiwi" />
              <h2 className="mt-mh-4 mh-display-3">
                Persönlich, nicht{" "}
                <em className="mh-italic-accent">skaliert</em>.
              </h2>
              <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
                MyHiwi ist bewusst klein geführt. Sie reden direkt mit Denis
                Kaliberda, und der Blick geht immer auf den konkreten Engpass
                Ihres Betriebs.
              </p>
              <ul className="mt-mh-5 grid gap-mh-3">
                {values.map((value) => (
                  <li key={value} className="flex gap-mh-3 mh-body-small">
                    <Check
                      className="mt-0.5 h-[18px] w-[18px] shrink-0 text-mh-accent"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
              <BtnTertiary href="/ueber-mich" className="mt-mh-6">
                Über MyHiwi lesen
              </BtnTertiary>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <div className="grid gap-mh-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionMark index="05" label="Proof" />
              <h2 className="mt-mh-4 mh-display-3">
                Belegte Cases, vorsichtig{" "}
                <em className="mh-italic-accent">formuliert</em>.
              </h2>
            </div>
            <p className="mh-body-medium text-mh-text-secondary">
              Harte Zahlen erscheinen nur dort, wo sie als vorhandener Case im
              Repo geführt werden. Alles andere bleibt bewusst als Projekt- oder
              Pilotkontext beschrieben.
            </p>
          </div>

          <div className="mt-mh-7 grid gap-mh-5">
            <ProofCard
              variant="lead-spread"
              kicker="01 · BELEGTER CASE"
              client="Sonnenhof Herrsching"
              industry="Pension · Ammersee"
              ausgangslage="Website und Sichtbarkeit mussten nach vielen Jahren neu sortiert werden."
              gebaut="Relaunch, Local-SEO-Fundament, bessere Anfrageführung und sichtbare Trust-Signale."
              pillars={["Sichtbarkeit", "Nachfrage", "Anfrage & Buchung"]}
              stat="108 Anfragen / 100 Tage"
              href="/case-studies/sonnenhof-herrsching"
            />

            <div className="grid gap-mh-5 md:grid-cols-2">
              <ProofCard
                kicker="02 · PROJEKT"
                client="Mr. Sherman Tanzstudio"
                industry="Tanz & Sport · Berlin"
                ausgangslage="Mitgliedschaften, Studio-Website und operative Abläufe mussten zusammen gedacht werden."
                gebaut="Brand-App, Mitgliederlogik und digitale Übergaben als verbundenes System."
                pillars={["Anfrage & Buchung", "Zahlung", "Automation"]}
                href="/case-studies/mr-sherman"
              />
              <ProofCard
                kicker="03 · PILOT"
                client="Formazin"
                industry="Architektur · Dokumentation"
                ausgangslage="Wiederkehrende Dokumentationsarbeit sollte schneller und strukturierter vorbereitet werden."
                gebaut="AI-gestützter Pilot für Notizen, Fotos und projektbezogene Übergaben."
                pillars={["AI & Automation", "Interne Abläufe"]}
                href="/case-studies/formazin"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="pakete" background="paper" padding="large">
        <Container>
          <div className="grid gap-mh-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionMark index="06" label="Wo starten?" />
              <h2 className="mt-mh-4 mh-display-3">
                Drei Einstiege, ein{" "}
                <em className="mh-italic-accent">Gespräch</em>.
              </h2>
            </div>
            <p className="mh-body-medium text-mh-text-secondary">
              Der Digital-Check klärt zuerst, welcher Einstieg sinnvoll ist.
              Genaue Preise und Umfang gehören in das Erstgespräch, nicht in
              eine pauschale Tabelle.
            </p>
          </div>

          <div className="mt-mh-7 grid gap-mh-5 lg:grid-cols-3">
            <StartCard
              kicker="01 · ERST PRÜFEN"
              title="Klein anfangen"
              text="Für Betriebe, die Klarheit brauchen, bevor sie ein Projekt starten."
              note="Digital-Check · kostenlos"
              href={primaryCta.href}
            />
            <StartCard
              kicker="02 · EMPFEHLUNG"
              title="Gezielt loslegen"
              text="Für Betriebe, bei denen Sichtbarkeit und Anfrageweg zusammen verbessert werden sollen."
              note="Sichtbarkeit & Anfrageflow"
              href={primaryCta.href}
              highlighted
            />
            <StartCard
              kicker="03 · SYSTEM BAUEN"
              title="Komplettes System"
              text="Für Betriebe, bei denen Buchung, Zahlung oder Automatisierung direkt mitgedacht werden müssen."
              note="Wachstumssystem"
              href={primaryCta.href}
            />
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <SectionMark index="07" label="FAQ" />
          <div className="mt-mh-5">
            <FAQAccordion
              title="Fragen, die vor dem ersten Gespräch wichtig sind."
              lead="Kurze Antworten ohne Funnel-Sprache. Details werden im Digital-Check projektbezogen geklärt."
              items={faqItems}
              defaultOpenIndex={0}
            />
          </div>
          <ComplianceNote className="mt-mh-7" />
        </Container>
      </Section>

      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-4xl">
            <SectionMark index="08" label="Final CTA" tone="accent" onDark />
            <h2 className="mt-mh-4 mh-display-2">
              Soll ich Ihren digitalen Anfrageweg kurz{" "}
              <em className="mh-italic-accent text-mh-glow">prüfen</em>?
            </h2>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
              Schicken Sie mir Ihre Ausgangslage. Ich prüfe Website,
              Sichtbarkeit und Anfrageweg und sage ehrlich, wo der erste Hebel
              liegen könnte.
            </p>
            <CtaRow
              className="mt-mh-7"
              microcopy={
                <span className="text-mh-text-on-dark/70">
                  kostenlos · unverbindlich · 20 Minuten · Sie reden direkt mit
                  Denis
                </span>
              }
            >
              <BtnPrimary
                href={primaryCta.href}
                pill
                fullWidthOnMobile
                className="bg-mh-text-on-dark text-mh-ink-950 hover:bg-mh-glow"
              >
                {primaryCta.label}
              </BtnPrimary>
            </CtaRow>
          </div>
        </Container>
      </Section>
    </>
  );
}

function StartCard({
  kicker,
  title,
  text,
  note,
  href,
  highlighted = false,
}: {
  kicker: string;
  title: string;
  text: string;
  note: string;
  href: string;
  highlighted?: boolean;
}) {
  return (
    <Card
      as="article"
      tone={highlighted ? "ink" : "paper"}
      className="flex h-full flex-col gap-mh-5"
      interactive={!highlighted}
    >
      <div className="flex items-start justify-between gap-mh-4">
        <span
          className={
            highlighted
              ? "mh-label-mono text-mh-glow"
              : "mh-label-mono text-mh-text-secondary"
          }
        >
          {kicker}
        </span>
        {highlighted ? (
          <span className="mh-label-mono-sm rounded-mh-pill bg-mh-glow px-mh-3 py-1 text-mh-ink-950">
            Empfehlung
          </span>
        ) : null}
      </div>
      <h3 className="mh-display-4">{title}</h3>
      <p
        className={
          highlighted
            ? "mh-body-medium text-mh-text-on-dark/82"
            : "mh-body-medium text-mh-text-secondary"
        }
      >
        {text}
      </p>
      <div className="mt-auto flex flex-col gap-mh-4 border-t border-current/10 pt-mh-4">
        <span
          className={
            highlighted
              ? "mh-label-mono-sm text-mh-text-on-dark/70"
              : "mh-label-mono-sm text-mh-text-secondary"
          }
        >
          {note}
        </span>
        {highlighted ? (
          <BtnPrimary
            href={href}
            fullWidthOnMobile
            className="bg-mh-glow text-mh-ink-950 hover:bg-mh-cyan-500/90"
          >
            {primaryCta.label}
          </BtnPrimary>
        ) : (
          <Link
            href={href}
            className={
              highlighted
                ? "mh-body-small font-semibold text-mh-glow"
                : "mh-body-small font-semibold text-mh-text-primary border-b border-mh-accent self-start pb-1"
            }
          >
            Erst prüfen lassen
          </Link>
        )}
      </div>
    </Card>
  );
}
