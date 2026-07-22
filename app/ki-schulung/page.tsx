import type { Metadata } from "next";
import { Check, Clock3, ShieldCheck } from "lucide-react";
import {
  AI_STARTKLAR,
  AI_STARTKLAR_FAQ,
  formatEuro,
} from "@/lib/ai-startklar/product";
import { Card } from "@/components/myhiwi/card/Card";
import { AiStartklarForm } from "@/components/myhiwi/ai-startklar/AiStartklarForm";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { CtaRow } from "@/components/myhiwi/cta/CtaRow";
import {
  FAQAccordion,
  type FAQItem,
} from "@/components/myhiwi/faq/FAQAccordion";
import { Container } from "@/components/myhiwi/layout/Container";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";

export const metadata: Metadata = {
  title: "KI-Schulung für Unternehmen",
  description:
    "Dreistündige KI-Grundlagenschulung für Unternehmen: sinnvolle Anwendungen, bessere Prompts, Datenampel, Ergebnisprüfung und klare Nutzungsregeln.",
  alternates: { canonical: "https://myhiwi.de/ki-schulung" },
};

const safeDocumentAnswer = (
  <p>
    Nein. Wir arbeiten ausschließlich mit synthetischen oder robust
    anonymisierten sicheren Praxisbeispielen. Reale personenbezogene,
    vertrauliche, sicherheitsrelevante oder rote Daten werden nie live
    eingegeben.
  </p>
);

const faqItems: FAQItem[] = AI_STARTKLAR_FAQ.map((item) => ({
  question: item.question,
  answer:
    item.question === "Können wir eigene Dokumente verwenden?" ? (
      safeDocumentAnswer
    ) : (
      <p>{item.answer}</p>
    ),
}));

export default function KiSchulungPage() {
  return (
    <>
      <Section background="paper" padding="large">
        <Container>
          <div className="max-w-[820px]">
            <SectionMark
              index="00"
              label={AI_STARTKLAR.name}
              tone="accent"
            />
            <h1 className="mt-mh-4 mh-display-1 mh-hero-title">
              {AI_STARTKLAR.title}
            </h1>
            <p className="mt-mh-5 max-w-mh-text mh-body-large text-mh-text-secondary">
              {AI_STARTKLAR.summary}
            </p>
            <p className="mt-mh-4 mh-label-mono text-mh-text-secondary">
              3 Stunden live · bis 15 Personen · online ab{" "}
              {formatEuro(AI_STARTKLAR.prices.online)} netto
            </p>
            <CtaRow
              className="mt-mh-6"
              microcopy="unverbindlich · klare Fit-Prüfung · direkt mit MyHiwi"
            >
              <BtnPrimary href="#erstgespraech" fullWidthOnMobile>
                {AI_STARTKLAR.cta}
              </BtnPrimary>
            </CtaRow>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <SectionMark index="01" label="Ergebnis" />
          <h2 className="mt-mh-4 max-w-[760px] mh-display-3">
            Nach der Schulung kann Ihr Team
          </h2>
          <ul className="mt-mh-6 grid gap-mh-3 md:grid-cols-2 lg:grid-cols-3">
            {AI_STARTKLAR.outcomes.map((outcome) => (
              <Card
                as="li"
                key={outcome}
                padded="compact"
                className="flex gap-mh-3"
              >
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-mh-accent"
                  aria-hidden="true"
                />
                <span className="mh-body-small text-mh-text-secondary">
                  {outcome}
                </span>
              </Card>
            ))}
          </ul>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container>
          <div className="grid gap-mh-8 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionMark index="02" label="Für wen" />
              <h2 className="mt-mh-4 mh-display-3">
                Ein gemeinsamer Standard statt einzelner Experimente.
              </h2>
            </div>
            <div className="space-y-mh-4 mh-body-large text-mh-text-secondary">
              <p>
                Für Unternehmen, die generative KI bereits nutzen oder
                kontrolliert einführen möchten.
              </p>
              <p>
                Geeignet für Geschäftsführung, Verwaltung, Vertrieb,
                Marketing, Service und nicht sicherheitskritische
                Dokumentationsaufgaben.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="ink" padding="large">
        <Container>
          <SectionMark
            index="03"
            label="Drei Stunden"
            tone="accent"
            onDark
          />
          <h2 className="mt-mh-4 max-w-[760px] mh-display-3 text-mh-text-on-dark">
            Theorie, sichere Anwendung und Ihr Arbeitsalltag.
          </h2>
          <ol className="mt-mh-7 grid gap-mh-3 md:grid-cols-2">
            {AI_STARTKLAR.agenda.map((item, index) => (
              <li
                key={item}
                className="flex gap-mh-4 rounded-mh-lg border border-mh-text-on-dark/10 p-mh-5"
              >
                <span className="mh-label-mono text-mh-glow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mh-body-medium text-mh-text-on-dark/85">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container>
          <div className="grid gap-mh-6 lg:grid-cols-2">
            <Card>
              <Clock3
                className="h-6 w-6 text-mh-accent"
                aria-hidden="true"
              />
              <h2 className="mt-mh-4 mh-display-4">
                Auf Ihr Unternehmen vorbereitet
              </h2>
              <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
                Vor dem Termin klären wir Werkzeuge, Rollen, Vorkenntnisse und
                typische Aufgaben. Daraus entstehen zwei sichere
                Praxisbeispiele.
              </p>
            </Card>
            <Card>
              <ShieldCheck
                className="h-6 w-6 text-mh-accent"
                aria-hidden="true"
              />
              <h2 className="mt-mh-4 mh-display-4">
                Keine sensiblen Originaldaten nötig
              </h2>
              <p className="mt-mh-3 mh-body-medium text-mh-text-secondary">
                Wir arbeiten ausschließlich mit synthetischen oder robust
                anonymisierten sicheren Praxisbeispielen. Reale
                personenbezogene, vertrauliche, sicherheitsrelevante oder rote
                Daten werden nie live eingegeben.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <SectionMark index="04" label="Enthalten" />
          <h2 className="mt-mh-4 max-w-[760px] mh-display-3">
            Das ist in Ihrer Schulung enthalten.
          </h2>
          <ul className="mt-mh-6 grid gap-mh-3 md:grid-cols-2">
            {AI_STARTKLAR.included.map((item) => (
              <li
                key={item}
                className="flex gap-mh-3 border-t border-mh-divider pt-mh-4"
              >
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-mh-accent"
                  aria-hidden="true"
                />
                <span className="mh-body-small text-mh-text-secondary">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section background="paper" padding="large">
        <Container>
          <SectionMark index="05" label="Pakete" />
          <h2 className="mt-mh-4 max-w-[760px] mh-display-3">
            Zwei Formate, klar kalkuliert.
          </h2>
          <div className="mt-mh-6 grid gap-mh-4 md:grid-cols-2">
            <Card>
              <span className="mh-label-mono text-mh-accent">Online</span>
              <p className="mt-mh-3 mh-display-2">
                {formatEuro(AI_STARTKLAR.prices.online)}{" "}
                <span className="mh-body-small">netto</span>
              </p>
              <p className="mt-mh-2 mh-body-medium text-mh-text-secondary">
                3 Stunden live · bis 15 Personen
              </p>
            </Card>
            <Card>
              <span className="mh-label-mono text-mh-accent">Vor Ort</span>
              <p className="mt-mh-3 mh-display-2">
                {formatEuro(AI_STARTKLAR.prices.onsite)}{" "}
                <span className="mh-body-small">netto</span>
              </p>
              <p className="mt-mh-2 mh-body-medium text-mh-text-secondary">
                3 Stunden live · bis 15 Personen
              </p>
              <p className="mt-mh-3 mh-body-xs text-mh-text-secondary">
                {AI_STARTKLAR.travel}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container>
          <SectionMark index="06" label="Zusammenarbeit" />
          <h2 className="mt-mh-4 max-w-[760px] mh-display-3">
            Von der Anfrage bis zur Nachbesprechung.
          </h2>
          <ol className="mt-mh-6 grid gap-mh-3 lg:grid-cols-5">
            {AI_STARTKLAR.process.map((item, index) => (
              <Card as="li" key={item} padded="compact">
                <span className="mh-label-mono text-mh-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-mh-3 mh-body-small font-semibold">{item}</p>
              </Card>
            ))}
          </ol>
        </Container>
      </Section>

      <Section background="paper" padding="compact">
        <Container className="max-w-[900px]">
          <Card tone="ink">
            <h2 className="mh-display-4 text-mh-text-on-dark">
              Klare Leistungsgrenzen.
            </h2>
            <p className="mt-mh-4 mh-body-large text-mh-text-on-dark/85">
              AI-Startklar unterstützt den strukturierten und dokumentierbaren
              Aufbau grundlegender KI-Kompetenz.
            </p>
            <ul className="mt-mh-4 grid gap-mh-2 md:grid-cols-2">
              {AI_STARTKLAR.boundaries.map((item) => (
                <li
                  key={item}
                  className="mh-body-small text-mh-text-on-dark/70"
                >
                  · {item}
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>

      <Section background="subtle" padding="large">
        <Container className="max-w-[900px]">
          <SectionMark index="FAQ" label="Häufige Fragen" />
          <div className="mt-mh-5">
            <FAQAccordion
              title="AI-Startklar – häufige Fragen"
              items={faqItems}
              defaultOpenIndex={0}
            />
          </div>
        </Container>
      </Section>

      <Section
        id="erstgespraech"
        background="ink"
        padding="finalCta"
        finalCta
      >
        <Container>
          <div className="grid min-w-0 gap-mh-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="min-w-0 break-words">
              <SectionMark
                index="→"
                label="Erstgespräch"
                tone="accent"
                onDark
              />
              <h2 className="mt-mh-4 mh-display-2 text-mh-text-on-dark">
                Passt AI-Startklar zu Ihrem Team?
              </h2>
              <p className="mt-mh-5 mh-body-large text-mh-text-on-dark/80">
                In 25 bis 30 Minuten klären wir Teilnehmer, Wissensstand,
                Werkzeug, Praxisfokus und sensible Themen. Danach erhalten Sie
                eine klare Empfehlung: Standardpaket, individuelles Angebot
                oder zuerst eine fachliche Spezialprüfung.
              </p>
              <p className="mt-mh-4 mh-body-small text-mh-text-on-dark/65">
                Kein automatisches Angebot und keine pauschale rechtliche
                Freigabe.
              </p>
            </div>
            <AiStartklarForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
