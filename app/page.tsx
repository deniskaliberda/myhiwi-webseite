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
    "Mehr Direktanfragen für lokale Betriebe | MyHiwi",
  description:
    "MyHiwi baut lokalen Dienstleistern, Pensionen & Ferienwohnungen den Weg von Google-Sichtbarkeit zu direkten Anfragen und Buchungen. Berlin-Ost & Bayern.",
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

const benefits = [
  {
    index: "01",
    title: "Mehr Umsatz",
    text: "Sichtbar werden ist kein Selbstzweck. Der Weg ist so gebaut, dass aus Suchenden konkrete Anfragen und direkte Buchungen werden — nicht nur Klicks in einer Statistik.",
  },
  {
    index: "02",
    title: "Weniger Zeit",
    text: "Anfragen kommen strukturiert an — mit den Infos, die Sie für eine Antwort brauchen. Routine-Schritte laufen vorbereitet, die Entscheidung bleibt bei Ihnen.",
  },
  {
    index: "03",
    title: "Weniger Kosten",
    text: "Jede Direktbuchung spart die Portal-Provision. Werbung läuft auf echte Anfragen statt auf Reichweite, die nichts bringt.",
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

      <Section background="paper" padding="large" className="overflow-hidden lg:flex lg:flex-col lg:justify-center lg:min-h-[100svh]">
        <Container>
          <div className="grid gap-mh-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] lg:items-center lg:gap-mh-10">
            <div className="min-w-0 max-w-[760px]">
              <SectionMark index="00" label="Positionierung" tone="accent" />
              <h1 className="relative z-10 mt-mh-5 mh-display-1 mh-hero-title">
                Aus Sichtbarkeit werden{" "}
                <em className="mh-italic-accent">Buchungen</em>.
              </h1>
              <p className="mt-mh-6 max-w-mh-text mh-body-large text-mh-text-secondary">
                Der Weg von der Google-Suche bis zur verbindlichen Buchung —
                gebaut für lokale Betriebe. Mehr Umsatz, weniger Handarbeit.
              </p>
              <CtaRow
                className="mt-mh-7"
                microcopy="kostenlos · unverbindlich · Sie reden direkt mit Denis"
              >
                <BtnPrimary href={primaryCta.href} fullWidthOnMobile>
                  {primaryCta.label}
                </BtnPrimary>
                <BtnGhost href={secondaryCta.href} fullWidthOnMobile>
                  {secondaryCta.label}
                </BtnGhost>
              </CtaRow>
            </div>

            <div className="relative z-0 lg:pl-mh-3">
              <BrowserMockup domain="myhiwi.de/anfragen" className="mx-auto max-w-[560px]">
                <div className="bg-mh-paper p-mh-5">
                  <div className="grid gap-mh-3">
                    <div
                      className="mh-funnel-step rounded-mh-lg border border-mh-divider bg-mh-subtle p-mh-4"
                      style={{ animationDelay: "0s" }}
                    >
                      <div className="flex items-center justify-between gap-mh-3">
                        <span className="mh-label-mono-sm text-mh-text-secondary">
                          Besucher
                        </span>
                        <span className="h-2 w-24 rounded-mh-pill bg-mh-accent-soft" />
                      </div>
                    </div>
                    {[
                      { n: "01", Icon: Globe, title: "Sichtbarkeit", text: "gefunden werden" },
                      { n: "02", Icon: TrendingUp, title: "Nachfrage", text: "passende Besucher" },
                      { n: "03", Icon: CalendarClock, title: "Anfrage", text: "klarer nächster Schritt" },
                      { n: "04", Icon: CreditCard, title: "Zahlung", text: "verbindlicher Ablauf" },
                    ].map((step, i) => (
                      <div
                        key={step.n}
                        className="mh-funnel-step grid grid-cols-[40px_1fr_auto] items-center gap-mh-3 rounded-mh-md border border-mh-divider bg-mh-paper p-mh-3"
                        style={{ animationDelay: `${0.15 + i * 0.15}s` }}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-mh-pill bg-mh-accent-soft">
                          <step.Icon
                            className="h-5 w-5 text-mh-accent"
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </span>
                        <div>
                          <p className="mh-body-small font-semibold text-mh-text-primary">
                            <span className="mh-label-mono-sm text-mh-accent">{step.n} </span>
                            {step.title}
                          </p>
                          <p className="mh-body-xs text-mh-text-secondary">{step.text}</p>
                        </div>
                        <ArrowRight
                          className="h-4 w-4 text-mh-text-secondary"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </div>
                    ))}
                    <div
                      className="mh-funnel-step rounded-mh-lg bg-mh-ink-950 p-mh-4 text-mh-text-on-dark"
                      style={{ animationDelay: "0.78s" }}
                    >
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
                value="199 Anfragen / 4 Monate"
                caption="Sonnenhof Herrsching"
                tag="belegter Case 2026"
                className="mt-mh-4 lg:absolute lg:-right-mh-4 lg:-top-mh-4 lg:mt-0"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container>
          <SectionMark index="00" label="Warum Betriebe mit mir arbeiten" tone="accent" />
          <h2 className="mt-mh-4 mh-display-3">
            Drei Dinge sollen besser werden.{" "}
            <em className="mh-italic-accent">Mehr nicht.</em>
          </h2>
          <div className="mt-mh-7 grid gap-mh-4 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.index} className="flex h-full flex-col gap-mh-3">
                <span className="mh-label-mono text-mh-accent">{benefit.index}</span>
                <h3 className="mh-body-large font-semibold text-mh-text-primary">
                  {benefit.title}
                </h3>
                <p className="mh-body-medium text-mh-text-secondary">{benefit.text}</p>
              </Card>
            ))}
          </div>
          <p className="mt-mh-5 mh-body-small text-mh-text-secondary">
            Die KI ist dabei nur das Werkzeug im Hintergrund — sie beschleunigt, sie
            entscheidet nicht.
          </p>
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
              <div className="mt-mh-6 hidden overflow-hidden rounded-mh-xl border border-mh-divider bg-mh-paper shadow-mh-card lg:block">
                <img
                  src="/home/anfrage-flow.png"
                  alt="Aus einzelnen Bausteinen wird ein verbundener Weg von der Suche bis zur Buchung"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-mh-4 sm:grid-cols-2">
              {pains.map((pain, index) => (
                <Card
                  key={pain.title}
                  as="article"
                  interactive
                  className="flex h-full min-h-[220px] flex-col justify-between gap-mh-5"
                >
                  <div>
                    <span className="mh-label-mono-sm text-mh-accent">
                      Diagnose {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-mh-4 mh-display-5">{pain.title}</h3>
                  </div>
                  <p className="mh-body-small text-mh-text-secondary">
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
              <div className="mt-mh-6 overflow-hidden rounded-mh-xl border border-mh-divider bg-mh-paper shadow-mh-card">
                <img
                  src="/home/automatisierung.png"
                  alt="MyHiwi — KI als Werkzeug im Hintergrund, mit menschlicher Freigabe"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
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
            <div className="relative overflow-hidden rounded-mh-xl border border-mh-divider bg-mh-subtle p-mh-3 shadow-mh-card">
              <div className="relative aspect-[4/5] overflow-hidden rounded-mh-lg bg-mh-ink-950">
                <img
                  src="/ueber-mich/portrait.jpg"
                  alt="Denis Kaliberda, Gründer von MyHiwi"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mh-ink-950/82 via-mh-ink-950/18 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-mh-5 text-mh-text-on-dark">
                  <span className="mh-label-mono text-mh-text-on-dark/70">
                    Gründer
                  </span>
                  <p className="mt-mh-3 font-mh-display text-[44px] font-bold leading-none tracking-mh-display">
                    Denis
                  </p>
                  <p className="mt-mh-2 mh-body-small text-mh-text-on-dark/74">
                    Ahrensfelde bei Berlin · Ammersee, Bayern
                  </p>
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
              imageSrc="/case-studies/sonnenhof/sonnenhof-neu.png"
              imageAlt="Neue Website des Sonnenhof Herrsching"
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
                imageSrc="/case-studies/mr-sherman/cover.png"
                imageAlt="Mr. Sherman Tanzstudio Projektansicht"
                href="/case-studies/mr-sherman"
              />
              <ProofCard
                kicker="03 · PILOT"
                client="Formazin"
                industry="Architektur · Dokumentation"
                ausgangslage="Wiederkehrende Dokumentationsarbeit sollte schneller und strukturierter vorbereitet werden."
                gebaut="AI-gestützter Pilot für Notizen, Fotos und projektbezogene Übergaben."
                pillars={["AI & Automation", "Interne Abläufe"]}
                imageSrc="/case-studies/formazin/cover.png"
                imageAlt="Formazin Architektur Projektvisual"
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
