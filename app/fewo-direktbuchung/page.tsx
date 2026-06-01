import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Check,
  CreditCard,
  LineChart,
  Percent,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { BtnGhost } from "@/components/myhiwi/cta/BtnGhost";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
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
import { FewoCheckForm } from "@/components/myhiwi/fewo/FewoCheckForm";
import { FewoViewTracker } from "@/components/myhiwi/fewo/FewoViewTracker";

const primaryCta = {
  label: "Kostenlosen Direktbuchungs-Check anfragen",
  href: "#check-anfragen",
};

export const metadata: Metadata = {
  title: "Direktbuchung für Ferienwohnungen & Hotels",
  description:
    "Mehr Direktbuchungen, weniger Booking-Provision: MyHiwi baut Ihre Direktbuchungs-Strecke und fährt die Anzeigen, die darauf konvertieren — messbar, aus einer Hand.",
  alternates: {
    canonical: "https://myhiwi.de/fewo-direktbuchung",
  },
};

const trustItems = [
  { label: "Sonnenhof", caption: "Pension · Herrsching", logo: "/clients/sonnenhof.png" },
  { label: "Villa Gloria", caption: "Unterkunft · Istrien", logo: "/clients/villa-gloria.png" },
  { label: "FeWo Taubenhaus", caption: "Direktanfragen" },
];

const pains = [
  {
    title: "Booking.com nimmt 15–18 % von jeder Buchung.",
    text: "Beispiel: bei 80 Buchungen à 700 € sind das schnell 8.000–9.000 € im Jahr — Geld, das eigentlich Ihre Marge wäre.",
  },
  {
    title: "Sie hängen am Portal-Algorithmus.",
    text: "Sichtbarkeit, Ranking und Konditionen bestimmt die Plattform. Sie zahlen mit, haben aber wenig eigenen Hebel.",
  },
  {
    title: "Anzeigen laufen auf eine Seite, die nicht bucht.",
    text: "Klicks kosten Geld. Wenn die Strecke dahinter nicht überzeugt oder gar nicht misst, verbrennt das Budget — ohne dass jemand merkt, warum.",
  },
  {
    title: "Anfragen nach Büroschluss gehen verloren.",
    text: "„Haben Sie noch frei?“ um 22 Uhr landet im Nichts, wenn es keinen klaren Weg zur direkten Buchung gibt.",
  },
];

const featureBlocks = [
  {
    index: "01",
    icon: Building2,
    title: "Direktbuchungs-Strecke",
    subtitle: "DIE BASIS",
    outcome:
      "Website, Verfügbarkeit, Buchung und Zahlung — gebaut, damit Gäste direkt abschließen, ohne Umweg über ein Portal.",
    bullets: [
      "Eigener Buchungskalender, kein Portal-Widget",
      "Stripe mit Anzahlung und Bestätigung",
      "Mehrsprachig, mobil schnell",
    ],
  },
  {
    index: "02",
    icon: LineChart,
    title: "Sauberes Tracking",
    subtitle: "MESSEN STATT RATEN",
    outcome:
      "Server-seitiges Conversion-Tracking, das echte Anfragen zählt — nicht Klicks. Erst wenn die Strecke misst, läuft Werbung.",
    bullets: [
      "Echte Anfragen statt Vanity-Klicks",
      "Consent-konform umgesetzt",
      "Jede Anzeige zahlt auf Buchungen ein",
    ],
  },
  {
    index: "03",
    icon: TrendingUp,
    title: "Anzeigen auf Buchungen",
    subtitle: "DER TRAFFIC",
    outcome:
      "Google- und Meta-Anzeigen, die auf echte Buchungen optimiert und laufend auf Basis der Messung nachgesteuert werden.",
    bullets: [
      "Google & Meta, regional ausgesteuert",
      "Optimierung auf Buchungswert",
      "Werbebudget zahlen Sie direkt an die Plattform",
    ],
  },
  {
    index: "04",
    icon: CalendarCheck,
    title: "Reporting & Verbindlichkeit",
    subtitle: "SCHWARZ AUF WEISS",
    outcome:
      "Monatlich nachvollziehbar, was reinkam: Anfragen, Buchungen, Kosten pro Anfrage. Keine Blackbox.",
    bullets: [
      "Monats-Report ohne Vanity-Metriken",
      "Kosten pro Anfrage sichtbar",
      "Direktbuchungs-Quote im Blick",
    ],
  },
];

const steps = [
  {
    index: "01",
    title: "Direktbuchungs-Check",
    text: "Wir prüfen Ihre aktuelle Strecke und zeigen, wie viel Umsatz an Portale abfließt und wo der erste Hebel liegt. Kostenlos.",
    note: "kostenlos · unverbindlich",
  },
  {
    index: "02",
    title: "Strecke bauen",
    text: "Wir bauen die Direktbuchungs-Plattform: Website, Buchung, Zahlung und sauberes Tracking. Je nach Bundesland ist der Aufbau förderfähig — das prüfen wir mit.",
    note: "Website · Buchung · Zahlung · Tracking",
  },
  {
    index: "03",
    title: "Anzeigen fahren & messen",
    text: "Erst dann starten die Anzeigen — optimiert auf echte Buchungen, jeden Monat nachvollziehbar.",
    note: "Google & Meta · Monats-Report",
  },
];

const fitYes = [
  "Mehrere Apartments oder Zimmer unter einer Marke",
  "Saison ab etwa sechs Monaten mit guter Auslastung",
  "Heute viel Buchungsvolumen über Booking.com / Airbnb",
  "Eigener Name hat in der Region Wiedererkennung",
];

const fitNo = [
  "Einzelne Wohnung als Nebeneinnahme",
  "Stark schwankende, geringe Auslastung",
  "Kein eigener Markenname, nur generische Bezeichnung",
];

const faqCopy = [
  {
    question: "Muss ich Booking.com komplett kündigen?",
    answer:
      "Nein. Ziel ist, den direkten Anteil Schritt für Schritt zu erhöhen. Portale bleiben als Ergänzung — sie kosten Sie dann aber nicht mehr jede Buchung.",
  },
  {
    question: "Wer zahlt das Werbebudget?",
    answer:
      "Das Werbebudget zahlen Sie direkt an Google oder Meta. Wir betreuen die Kampagnen. Honorar und Werbebudget bleiben getrennt und transparent.",
  },
  {
    question: "Ab wann lohnt sich Werbung überhaupt?",
    answer:
      "Erst wenn die Buchungsstrecke steht und sauber misst. Anzeigen auf eine Seite, die nicht bucht, sind verbranntes Geld — deshalb bauen wir immer zuerst die Strecke.",
  },
  {
    question: "Was kostet das?",
    answer:
      "Das hängt von Größe und Zielen ab und gehört ins Erstgespräch, nicht in eine pauschale Tabelle. Den Direktbuchungs-Check bekommen Sie kostenlos und unverbindlich.",
  },
  {
    question: "Wie geht ihr mit Daten und DSGVO um?",
    answer:
      "DSGVO-bewusst, mit AVV und Anbieterübersicht. Das Tracking läuft consent-konform — gemessen wird nur, was wir auch dürfen.",
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

export default function FeWoDirektbuchungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FewoViewTracker />

      <Section background="paper" padding="large" className="overflow-hidden lg:flex lg:flex-col lg:justify-center lg:min-h-[100svh]">
        <Container>
          <div className="grid gap-mh-8 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.85fr)] lg:items-center lg:gap-mh-10">
            <div className="min-w-0 max-w-[760px]">
              <SectionMark index="00" label="Ferienwohnungen & Hotels" tone="accent" />
              <h1 className="relative z-10 mt-mh-4 mh-display-1 mh-hero-title">
                Gäste, die <em className="mh-italic-accent">direkt</em> buchen — nicht über Booking.com.
              </h1>
              <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
                Wir bauen Ihre Direktbuchungs-Strecke — Website, Buchung, Zahlung,
                sauberes Tracking — und fahren dann die Anzeigen, die darauf
                konvertieren. Statt 15–18 % Provision an Portale: planbar eigene
                Buchungen, Anfrage für Anfrage.
              </p>
              <CtaRow
                className="mt-mh-6"
                microcopy="kostenlos · unverbindlich · Sie reden direkt mit Denis"
              >
                <BtnPrimary href={primaryCta.href} fullWidthOnMobile>
                  {primaryCta.label}
                </BtnPrimary>
                <BtnGhost href="/case-studies/sonnenhof-herrsching" fullWidthOnMobile>
                  Sonnenhof-Case ansehen
                </BtnGhost>
              </CtaRow>
            </div>

            <div className="relative z-0 lg:pl-mh-3">
              <Card tone="paper" className="mx-auto max-w-[460px]">
                <span className="mh-label-mono text-mh-text-secondary">
                  Eine Buchung à 700 €
                </span>
                <div className="mt-mh-5 grid gap-mh-3">
                  <div className="flex items-center justify-between gap-mh-3 rounded-mh-md border border-mh-divider bg-mh-subtle p-mh-4">
                    <div className="flex items-center gap-mh-3">
                      <Percent className="h-5 w-5 text-mh-text-secondary" strokeWidth={1.6} aria-hidden="true" />
                      <span className="mh-body-small font-semibold text-mh-text-primary">
                        Über das Portal
                      </span>
                    </div>
                    <span className="mh-body-small font-semibold text-mh-text-secondary">
                      −105 € Provision
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-mh-3 rounded-mh-md border border-mh-divider bg-mh-paper p-mh-4">
                    <div className="flex items-center gap-mh-3">
                      <Check className="h-5 w-5 text-mh-accent" strokeWidth={1.8} aria-hidden="true" />
                      <span className="mh-body-small font-semibold text-mh-text-primary">
                        Direkt über Ihre Seite
                      </span>
                    </div>
                    <span className="mh-body-small font-semibold text-mh-accent">
                      0 € Provision
                    </span>
                  </div>
                </div>
                <div className="mt-mh-4 rounded-mh-lg bg-mh-ink-950 p-mh-4 text-mh-text-on-dark">
                  <div className="flex items-start gap-mh-3">
                    <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-mh-glow" strokeWidth={1.8} aria-hidden="true" />
                    <p className="mh-body-small text-mh-text-on-dark/88">
                      Jede direkte Buchung bleibt komplett bei Ihnen — Anzeige und
                      Strecke arbeiten genau darauf hin.
                    </p>
                  </div>
                </div>
              </Card>
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

      <Section background="paper" padding="compact">
        <Container>
          <TrustStrip items={trustItems} kicker="Unterkünfte, mit denen wir arbeiten" />
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <div className="grid gap-mh-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-mh-8">
            <div>
              <SectionMark index="01" label="Diagnose" />
              <h2 className="mt-mh-4 mh-display-3">
                Die Buchungen kommen — aber die{" "}
                <em className="mh-italic-accent">Marge</em> fließt ab.
              </h2>
              <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
                Die meisten Unterkünfte sind sichtbar und ausgebucht genug — der
                Engpass liegt nicht im Belegen, sondern darin, wie viel pro Buchung
                an Portale verloren geht und wie wenig planbar direkte Buchungen sind.
              </p>
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
                  <p className="mh-body-small text-mh-text-secondary">{pain.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container>
          <div className="grid gap-mh-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionMark index="02" label="Der Ansatz" />
              <h2 className="mt-mh-4 mh-display-3">
                Strecke und Traffic aus{" "}
                <em className="mh-italic-accent">einer Hand</em>.
              </h2>
            </div>
            <p className="mh-body-medium text-mh-text-secondary">
              Die meisten Anbieter können nur das eine oder das andere: eine schöne
              Seite bauen — oder Anzeigen schalten. Bleiben die Buchungen aus, schiebt
              jeder dem anderen die Schuld zu. Wir machen beides.
            </p>
          </div>

          <div className="mt-mh-7 grid gap-mh-5 md:grid-cols-2 xl:grid-cols-4">
            {featureBlocks.map((block) => (
              <FeatureCard key={block.index} {...block} />
            ))}
          </div>

          <Card tone="ink" className="mt-mh-7 grid gap-mh-5 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <p className="mh-label-mono text-mh-glow">Unser Prinzip</p>
            <p className="mh-body-large text-mh-text-on-dark/88">
              Wir schalten keine Anzeigen auf eine Seite, die nicht bucht. Erst die
              Strecke, dann der Traffic — so haften wir für das Ergebnis am Ende,
              nicht nur für den Klick am Anfang.
            </p>
          </Card>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <div className="grid gap-mh-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionMark index="03" label="Proof" />
              <h2 className="mt-mh-4 mh-display-3">
                Ein belegter Case, vorsichtig{" "}
                <em className="mh-italic-accent">formuliert</em>.
              </h2>
            </div>
            <p className="mh-body-medium text-mh-text-secondary">
              Harte Zahlen erscheinen nur dort, wo sie als realer Case geführt werden.
              Und wenn das Tracking nicht stimmt, sehen wir das zuerst — bevor Budget
              verbrennt.
            </p>
          </div>

          <div className="mt-mh-7">
            <ProofCard
              variant="lead-spread"
              kicker="01 · BELEGTER CASE"
              client="Sonnenhof Herrsching"
              industry="Pension · Ammersee"
              ausgangslage="Website und Sichtbarkeit mussten nach vielen Jahren neu sortiert werden, Buchungen liefen stark über Portale."
              gebaut="Relaunch, Local-SEO-Fundament, saubere Anfrageführung, sichtbare Trust-Signale und messbares Tracking als Basis für die Anzeigen."
              pillars={["Direktbuchungs-Strecke", "Tracking", "Anzeigen"]}
              stat="199 Anfragen / 4 Monate"
              imageSrc="/case-studies/sonnenhof/sonnenhof-neu.png"
              imageAlt="Neue Website des Sonnenhof Herrsching"
              href="/case-studies/sonnenhof-herrsching"
            />
          </div>

          <div className="mt-mh-8 grid gap-mh-7 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-center lg:gap-mh-10">
            <div className="mx-auto w-full max-w-[300px]">
              <video
                src="/case-studies/sonnenhof/conny-statement.mp4"
                poster="/case-studies/sonnenhof/conny-poster.jpg"
                controls
                playsInline
                preload="none"
                className="aspect-[9/16] w-full rounded-mh-xl border border-mh-divider bg-mh-ink-950 object-cover shadow-mh-card"
              />
            </div>
            <div>
              <span className="mh-label-mono text-mh-accent">Im O-Ton der Gastgeberin</span>
              <h3 className="mt-mh-3 mh-display-3">
                „Jetzt werde ich wieder{" "}
                <em className="mh-italic-accent">gefunden</em>."
              </h3>
              <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
                Conny Römmelt, Sonnenhof Herrsching — nach vier Monaten, in ihrem
                eigenen Video.
              </p>
              <div className="mt-mh-6 grid gap-mh-4 sm:grid-cols-3">
                {[
                  ["80 %", "der Belegung über die eigene Seite"],
                  ["jede 3.", "Anfrage wird zur Buchung"],
                  ["~700 €", "Ø Umsatz pro Buchung"],
                ].map(([num, label]) => (
                  <Card key={num} className="flex flex-col gap-mh-2">
                    <span className="mh-display-4 text-mh-text-primary">{num}</span>
                    <span className="mh-body-small text-mh-text-secondary">{label}</span>
                  </Card>
                ))}
              </div>
              <p className="mt-mh-4 mh-label-mono-sm text-mh-text-secondary">
                Schätzwerte der Gastgeberin · O-Ton aus E-Mail/Video, Mai 2026
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container>
          <div className="grid gap-mh-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionMark index="04" label="So läuft's ab" />
              <h2 className="mt-mh-4 mh-display-3">
                Drei Schritte, in der{" "}
                <em className="mh-italic-accent">richtigen Reihenfolge</em>.
              </h2>
            </div>
            <p className="mh-body-medium text-mh-text-secondary">
              Erst Klarheit, dann die Strecke, dann der Traffic. Wir starten keine
              Werbung, bevor die Buchungsstrecke steht und misst.
            </p>
          </div>

          <div className="mt-mh-7 grid gap-mh-5 lg:grid-cols-3">
            {steps.map((step) => (
              <Card
                key={step.index}
                as="article"
                className="flex h-full flex-col gap-mh-5"
                interactive
              >
                <span className="mh-label-mono text-mh-accent">{step.index}</span>
                <h3 className="mh-display-4">{step.title}</h3>
                <p className="mh-body-medium text-mh-text-secondary">{step.text}</p>
                <span className="mt-auto border-t border-mh-divider pt-mh-4 mh-label-mono-sm text-mh-text-secondary">
                  {step.note}
                </span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <div className="grid gap-mh-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionMark index="05" label="Für wen" />
              <h2 className="mt-mh-4 mh-display-3">
                Ehrlich, ob es zu Ihnen{" "}
                <em className="mh-italic-accent">passt</em>.
              </h2>
              <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
                Der Ansatz lohnt sich nicht für jeden — und das sagen wir vorher.
                Wenn er nicht passt, ist eine schlanke Website oder reine
                Sichtbarkeit oft der bessere Start.
              </p>
            </div>

            <div className="grid gap-mh-4 sm:grid-cols-2">
              <Card as="article" className="flex h-full flex-col gap-mh-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
                  <Check className="h-[22px] w-[22px]" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mh-display-5">Passt gut</h3>
                <ul className="grid gap-mh-3">
                  {fitYes.map((item) => (
                    <li key={item} className="flex gap-mh-3 mh-body-small text-mh-text-secondary">
                      <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-mh-accent" strokeWidth={1.8} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card as="article" tone="subtle" className="flex h-full flex-col gap-mh-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-mh-md bg-mh-paper text-mh-text-secondary">
                  <ShieldCheck className="h-[22px] w-[22px]" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="mh-display-5">Passt (noch) nicht</h3>
                <ul className="grid gap-mh-3">
                  {fitNo.map((item) => (
                    <li key={item} className="flex gap-mh-3 mh-body-small text-mh-text-secondary">
                      <ArrowRight className="mt-0.5 h-[18px] w-[18px] shrink-0 text-mh-text-secondary" strokeWidth={1.6} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container>
          <SectionMark index="06" label="FAQ" />
          <div className="mt-mh-5">
            <FAQAccordion
              title="Fragen, die vor dem ersten Gespräch wichtig sind."
              lead="Kurze Antworten ohne Funnel-Sprache. Details klären wir im kostenlosen Direktbuchungs-Check."
              items={faqItems}
              defaultOpenIndex={0}
            />
          </div>
          <ComplianceNote className="mt-mh-7" />
        </Container>
      </Section>

      <Section
        id="check-anfragen"
        background="ink"
        padding="finalCta"
        finalCta
        className="scroll-mt-24"
      >
        <Container>
          <div className="grid gap-mh-8 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-mh-10">
            <div>
              <SectionMark index="07" label="Direktbuchungs-Check" tone="accent" onDark />
              <h2 className="mt-mh-4 mh-display-2">
                Soll ich prüfen, wie viel Provision Sie{" "}
                <em className="mh-italic-accent text-mh-glow">sparen</em> können?
              </h2>
              <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-on-dark/80">
                Schicken Sie mir kurz Ihre Ausgangslage. Ich schaue auf Ihre
                Buchungsstrecke und Sichtbarkeit und sage ehrlich, wo der erste
                Hebel für mehr Direktbuchungen liegt.
              </p>
              <p className="mt-mh-6 mh-label-mono-sm text-mh-text-on-dark/70">
                kostenlos · unverbindlich · Sie reden direkt mit Denis
              </p>
            </div>
            <FewoCheckForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
