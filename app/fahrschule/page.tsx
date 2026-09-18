import type { Metadata } from "next";
import { ProjectTeaser } from "@/components/myhiwi/card/ProjectTeaser";
import Image from "next/image";
import { Container } from "@/components/myhiwi/layout/Container";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";
import { FAQAccordion, type FAQItem } from "@/components/myhiwi/faq/FAQAccordion";
import { FsCtaRow } from "./FsCta";
import { DossierMuster, ZettelMuster } from "./Muster";

/**
 * myhiwi.de/fahrschule — kanonische Landingpage (Phase 0, statisch).
 *
 * Bauplan: denis-workspace/dokumente/MyHiwi_Fahrschule_Web_Konzept_2026-07-03.md §4
 * Wording-Kanon (seit 2026-09-08): denis-workspace/dokumente/MyHiwi_Fahrschul_Offer_v6_2026-09.md
 *   §11 Sprachregeln + §13 WORTGLEICH-Block. Preise, Laufzeiten und Website-Beträge
 *   stehen NUR im Objekt `v6` unten und müssen dort wortgleich mit §13 bleiben.
 *   tests/fahrschule-wording.spec.ts prüft das gegen den gerenderten DOM.
 * Design: app/fahrschule/DESIGN.md (status review)
 *
 * Wording-Stand v6: keine Zusage einer Anfragen-Zahl (Anwalts-Gate offen),
 * keine kundenbezogene Fahrschul-Referenz ohne belegte Freigabe (Plan
 * Kaltakquise 2026-09-08, D9), Einsatzgebiet Berlin und Brandenburg sowie
 * München und Oberbayern (D4). Kein Sichtbarkeits-Check (Phase 1), keine
 * Kiez-Knappheit. Leistungszuordnung nach v6 §5 (F23): Sichtbarkeits-Bericht,
 * GBP-Pflege und Messloop in beiden Türen; Anfragen-Zettel (Anfrage und
 * Anmeldung getrennt) nur bei Reform-Partner; Fotoshooting wird separat
 * gescoped, vorhandene Fotos werden eingebaut.
 */

/**
 * WORTGLEICH-Block aus MyHiwi_Fahrschul_Offer_v6_2026-09.md §13 (Stand 2026-09-08).
 * Nur diese Sätze nennen Preise und Laufzeiten. Nicht umformulieren, nicht kürzen.
 * "12 Monate" darf nur im Satz T2_LAUFZEIT vorkommen.
 * DOWNSELL (Reform-Fahrplan) steht bewusst nicht auf der Seite: v6 §9 sagt,
 * der Fahrplan wird nicht proaktiv angeboten.
 */
const v6 = {
  T1_NAME: "Das Einstiegspaket heißt Reform-Start.",
  T1_PREIS: "Reform-Start kostet 399 Euro im Monat zuzüglich Mehrwertsteuer.",
  T1_LAUFZEIT: "Reform-Start läuft sechs Monate, danach monatlich kündbar.",
  T1_WEBSITE:
    "Bei Reform-Start kommt einmalig der Start-Sprint für Ihre Website dazu: 490 Euro, wenn Ihre bestehende Seite als Fundament taugt, 1.490 Euro für den standardisierten Umzug auf ein sauberes Fundament, ein kompletter Neubau wird separat angeboten.",
  T2_NAME: "Das Partnerpaket heißt Reform-Partner.",
  T2_PREIS: "Reform-Partner kostet 599 Euro im Monat zuzüglich Mehrwertsteuer.",
  T2_LAUFZEIT: "Reform-Partner läuft 12 Monate, danach monatlich kündbar.",
  T2_WEBSITE:
    "Bei Reform-Partner ist der Start-Sprint für Ihre Website im Paket enthalten, bis zum Wert des standardisierten Umzugs von 1.490 Euro, ein kompletter Neubau wird separat angeboten, und wer vor dem zwölften Monat aussteigt, zahlt den noch nicht abgedeckten Anteil nach.",
  CALLER_PREISSATZ:
    "Der Einstieg liegt bei 399 Euro im Monat zuzüglich Mehrwertsteuer plus einem einmaligen Betrag für die Website, das größere Paket bei 599 Euro im Monat mit der Website im Paket, die Details besprechen Sie im Termin mit Herrn Kaliberda.",
} as const;

/** Einsatzgebiet laut Plan Kaltakquise D4 (E3). Ein Satzbaustein, überall gleich. */
const REGION = "Berlin und Brandenburg sowie München und Oberbayern";

export const metadata: Metadata = {
  title: "Das Volle-Kurse-System: mehr Anfragen für Ihre Fahrschule",
  description: `Website und Google-Profil in Ordnung, jeden Monat schwarz auf weiß, wo Ihre Fahrschule steht. ${v6.T1_PREIS} Sie reden direkt mit Denis.`,
  alternates: { canonical: "https://myhiwi.de/fahrschule" },
  // Eigenes openGraph, damit die WhatsApp-Vorschau (DER Share-Kanal des
  // Avatars) nicht den generischen Agentur-Titel aus dem Root-Layout erbt.
  openGraph: {
    title: "Das Volle-Kurse-System: mehr Anfragen für Ihre Fahrschule",
    description: `Jeden Monat schwarz auf weiß, wo Ihre Fahrschule steht. Für Fahrschulen in ${REGION}.`,
    url: "https://myhiwi.de/fahrschule",
    type: "website",
    locale: "de_DE",
  },
};

const faqCopy = [
  {
    question: "Ich kann keinen Computer. Funktioniert das trotzdem?",
    answer:
      "Ja. Sie müssen nichts am Computer machen, alles läuft über WhatsApp. Was wir an Zugängen brauchen, holen wir beim Termin bei Ihnen ab. Vorhandene Fotos bauen wir ein, ein Fotoshooting vor Ort besprechen wir separat. Danach hören Sie von uns per WhatsApp, und Ihr monatlicher Bericht kommt genauso an.",
  },
  {
    // Risk-Reversal ohne Zusage einer Zahl: wortgleich aus v6 §11 (spoken).
    question: "Was ist, wenn es nicht klappt?",
    answer:
      "Ehrliche Antwort: Niemand kann Ihnen seriös Platz 1 oder eine bestimmte Zahl Anmeldungen zusagen, wer das tut, sagt nicht die Wahrheit. Was wir zusagen: Wir dokumentieren Ihren Startpunkt und Sie sehen jeden Monat schwarz auf weiß, was sich verändert. Wenn nichts passiert, sehen Sie auch das und können jederzeit mit uns reden.",
  },
  {
    question: "Wem gehört die Website?",
    answer:
      "Ihnen. Sobald der Start-Sprint bezahlt ist, gehört die Website Ihnen, egal wie es mit uns weitergeht. Was der Start-Sprint in den beiden Paketen kostet, steht oben im Abschnitt „Was es kostet“.",
  },
  {
    question: "Wie lange bin ich gebunden?",
    answer: `${v6.T1_LAUFZEIT} ${v6.T2_LAUFZEIT} Was der Vertrag genau enthält, gehen wir vor der Unterschrift gemeinsam durch.`,
  },
  {
    question: "Was ist mit Google und bezahlter Werbung?",
    answer:
      "Dass Sie gefunden werden, wenn jemand im Kiez nach einer Fahrschule sucht, ist der Kern unserer Arbeit: auf der Karte und in der Suche. Das ist in beiden Paketen enthalten. Ob Sie auch in den Google-Antworten auftauchen, halten wir vor dem Start fest, laufend daran arbeiten wir bei Reform-Partner. Bezahlte Anzeigen verkaufen wir Ihnen am Anfang nicht. Erst wenn die Zahlen nach ein paar Monaten zeigen, was eine Anfrage bei Ihnen wert ist, lohnt sich das Gespräch darüber.",
  },
];

const faqItems: FAQItem[] = faqCopy.map((item) => ({
  question: item.question,
  answer: <p>{item.answer}</p>,
}));

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Das Volle-Kurse-System",
    serviceType:
      "Website, Google-Unternehmensprofil und monatlicher Sichtbarkeits-Bericht für Fahrschulen",
    provider: {
      "@type": "Organization",
      name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
      url: "https://myhiwi.de",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Berlin" },
      { "@type": "AdministrativeArea", name: "Brandenburg" },
      { "@type": "AdministrativeArea", name: "Bayern" },
    ],
    url: "https://myhiwi.de/fahrschule",
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Fahrschule",
        item: "https://myhiwi.de/fahrschule",
      },
    ],
  },
];

const problemSpiegel = [
  "„Es melden sich weniger Schüler an.“",
  "„Die Fahrschule drüben hat 200 Bewertungen.“",
  "„Ab 2027 sollen die Portale nur noch Preise vergleichen.“",
];

const schritte = [
  {
    index: "1",
    title: "Der Start-Sprint",
    text: "Zuerst bringen wir das Fundament in Ordnung: Ihre Website, Ihr Google-Profil, der WhatsApp-Knopf für Anfragen. Taugt Ihre heutige Seite als Fundament, bleibt sie und wird sauber eingerichtet. Wenn nicht, ziehen wir sie auf ein sauberes Fundament um. Vorhandene Fotos bauen wir ein, ein Fotoshooting vor Ort besprechen wir separat.",
  },
  {
    index: "2",
    title: "Jeden Monat: so standen Sie, so stehen Sie jetzt",
    text: "Vor dem Start halten wir gemeinsam schriftlich fest, wo Sie heute stehen. Danach messen wir jeden Monat dagegen und Sie bekommen Ihren Sichtbarkeits-Bericht: so standen Sie, so stehen Sie jetzt. Das ist in beiden Paketen drin, damit Sie den Unterschied sehen, nicht glauben müssen.",
  },
  {
    index: "3",
    title: "Bei Reform-Partner: Ihr Anfragen-Zettel per WhatsApp",
    text: "Anrufe, WhatsApp-Kontakte, Formular-Anfragen. Jede Anfrage gezählt, Anfrage und Anmeldung getrennt, eine Seite im Monat. Ein Zettel, den Sie in dreißig Sekunden verstehen. Das ist der Teil, den nur Reform-Partner enthält.",
  },
];

const pakete = [
  {
    key: "reform-start",
    eyebrow: v6.T1_NAME,
    name: "Reform-Start",
    preis: v6.T1_PREIS,
    laufzeit: v6.T1_LAUFZEIT,
    website: v6.T1_WEBSITE,
    laufend:
      "Laufend drin: Google-Profil gepflegt, jeden Monat gegen Ihren Ausgangspunkt gemessen, Sichtbarkeits-Bericht, Änderungen bis zwei Stunden im Monat.",
  },
  {
    key: "reform-partner",
    eyebrow: v6.T2_NAME,
    name: "Reform-Partner",
    preis: v6.T2_PREIS,
    laufzeit: v6.T2_LAUFZEIT,
    website: v6.T2_WEBSITE,
    laufend:
      "Alles aus Reform-Start, dazu Ihr Anfragen-Zettel mit Anfrage und Anmeldung getrennt, aktiv betreute Anfragewege und Änderungen bis vier Stunden im Monat.",
  },
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

      {/* 1 · Hero — Inhaber-Währung, Anruf + WhatsApp, kein Formular */}
      <Section background="paper" padding="large">
        <Container>
          <div className="max-w-[820px]">
            <SectionMark
              index="FS"
              label={`Für Fahrschul-Inhaber in ${REGION}`}
              tone="accent"
            />
            <h1 className="fs-h1 mt-mh-4">
              Wenn in Ihrem Kiez jemand eine Fahrschule sucht — landet er bei
              Ihnen <em className="mh-italic-accent">oder drüben?</em>
            </h1>
            <p className="fs-body mt-mh-5 max-w-[62ch]">
              Wir sorgen dafür, dass die, die suchen, bei Ihnen landen. Und
              Sie sehen jeden Monat schwarz auf weiß, was sich verändert.
            </p>
            <div className="mt-mh-6">
              <FsCtaRow microcopy="Sie reden direkt mit Denis — kein Callcenter, kein Formular." />
            </div>
          </div>
        </Container>
      </Section>

      {/* 2 · Problem-Spiegel — spiegeln, nicht belehren */}
      <Section background="subtle" padding="default">
        <Container>
          <SectionMark index="01" label="Kommt Ihnen das bekannt vor?" />
          <div className="mt-mh-6 grid gap-mh-4 md:grid-cols-3">
            {problemSpiegel.map((satz) => (
              <blockquote
                key={satz}
                className="rounded-mh-md border border-mh-divider border-l-4 border-l-mh-ink-950 bg-white p-mh-5"
              >
                <p className="fs-body font-medium">{satz}</p>
              </blockquote>
            ))}
          </div>
          <p className="fs-body mt-mh-6 max-w-[62ch]">
            Dabei wollen so viele junge Leute wie nie den Führerschein — viele
            warten nur ab. Und die, die jetzt suchen, landen irgendwo. Bei
            Ihnen oder beim Wettbewerber.
          </p>
        </Container>
      </Section>

      {/* 3 · Das System in 3 Schritten + Anfragen-Zettel als Artefakt (Tür 2, v6 §5) */}
      <Section background="paper" padding="large">
        <Container>
          <SectionMark index="02" label="Das Volle-Kurse-System" />
          <h2 className="fs-h2 mt-mh-4 max-w-[24ch]">
            Drei Schritte. Und Sie sehen{" "}
            <em className="mh-italic-accent">jeden</em> davon.
          </h2>
          <div className="mt-mh-7 grid gap-mh-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <ol className="flex flex-col gap-mh-5">
              {schritte.map((s) => (
                <li
                  key={s.index}
                  className="flex gap-mh-4 border-t border-mh-divider pt-mh-5"
                >
                  <span className="font-mh-mono text-[13px] font-semibold text-mh-text-secondary">
                    {s.index}
                  </span>
                  <div>
                    <h3 className="font-mh-display text-[22px] font-bold leading-snug lg:text-[24px]">
                      {s.title}
                    </h3>
                    <p className="fs-body mt-mh-2 text-mh-text-primary">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ZettelMuster />
          </div>
        </Container>
      </Section>

      {/* 4 · Beweis-Schicht — „So messen wir" statt erfundener Ergebnisse.
          Der frühere Held-Block mit Zusage einer Anfragen-Zahl ist mit v6
          entfallen (Anwalts-Gate offen, Plan Kaltakquise D7). */}
      <Section background="subtle" padding="large">
        <Container>
          <SectionMark index="03" label="So messen wir" />
          <div className="mt-mh-6 grid gap-mh-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="fs-h2 max-w-[22ch]">
                Keine Erfolgsgeschichten aus dem Katalog.{" "}
                <em className="mh-italic-accent">Gemessen.</em>
              </h2>
              <p className="fs-body mt-mh-5 max-w-[62ch]">
                Vor dem Start bekommen Sie Ihren Ausgangspunkt auf einer Seite:
                Wie schnell ist Ihre Website auf dem Handy? Stehen Sie auf der
                Karte, wenn jemand im Kiez sucht? Tauchen Sie in den
                Google-Antworten auf?
              </p>
              <p className="fs-body mt-mh-4 max-w-[62ch]">
                Jeden Monat messen wir dagegen. Sie sehen schwarz auf weiß, so
                standen Sie, so stehen Sie jetzt. Bei Reform-Partner zählen wir
                zusätzlich jede Anfrage, die über Anruf, WhatsApp oder Formular
                ankommt, und trennen Anfrage von Anmeldung.
              </p>
            </div>
            <DossierMuster />
          </div>
        </Container>
      </Section>

      {/* 5 · Referenz — nur veröffentlichte Projektseite, keine Fahrschul-
          Referenz ohne belegte Freigabe (Plan Kaltakquise D9). */}
      <Section background="paper" padding="large">
        <Container>
          <SectionMark index="PRAXIS" label="Aus der Zusammenarbeit" />
          <h2 className="mt-mh-4 mh-display-3">Ein Blick in ein echtes Projekt.</h2>
          <p className="fs-body mt-mh-4 mb-mh-6 max-w-[62ch]">
            Andere Branche, gleiche Arbeitsweise: Website in Ordnung,
            Google-Profil gepflegt, jeden Monat gemessen.
          </p>
          <ProjectTeaser slug="sonnenhof-herrsching" />
        </Container>
      </Section>

      {/* 6 · Preis-Block — zwei Pakete, jeder Satz wortgleich aus v6 §13 */}
      <Section background="paper" padding="large">
        <Container>
          <SectionMark index="04" label="Was es kostet" />
          <h2 className="fs-h2 mt-mh-4">
            Zwei Pakete. <em className="mh-italic-accent">Offen.</em>
          </h2>
          <p className="fs-body mt-mh-5 max-w-[62ch]">{v6.CALLER_PREISSATZ}</p>
          <div className="mt-mh-6 grid gap-mh-5 md:grid-cols-2">
            {pakete.map((p) => (
              <article
                key={p.key}
                className="rounded-mh-lg border border-mh-divider p-mh-6 md:p-mh-7"
              >
                <p className="font-mh-mono text-[13px] text-mh-text-secondary">
                  {p.eyebrow}
                </p>
                <h3 className="font-mh-display mt-mh-3 text-[34px] font-extrabold leading-tight tracking-tight text-mh-ink-950 md:text-[40px]">
                  {p.name}
                </h3>
                <p className="fs-body mt-mh-4 font-medium">{p.preis}</p>
                <p className="fs-body mt-mh-2">{p.laufzeit}</p>
                <p className="fs-body mt-mh-4 border-t border-mh-divider pt-mh-4">
                  {p.website}
                </p>
                <p className="fs-body mt-mh-4 text-mh-text-secondary">{p.laufend}</p>
              </article>
            ))}
          </div>
          <p className="fs-body mt-mh-6 max-w-[62ch] font-medium">
            Sie müssen nichts am Computer machen — alles läuft über WhatsApp.
          </p>
        </Container>
      </Section>

      {/* 7 · Wer dahinter steht — echtes Foto, keine Agentur-Distanz */}
      <Section background="subtle" padding="large">
        <Container>
          <SectionMark index="05" label="Wer dahinter steht" />
          <div className="mt-mh-6 grid gap-mh-6 md:grid-cols-[280px_1fr] md:items-center">
            <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-mh-lg">
              <Image
                src="/ueber-mich/portrait.jpg"
                alt="Denis Kaliberda"
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="fs-h2">Denis Kaliberda</h2>
              <p className="fs-body mt-mh-4 max-w-[58ch]">
                Ich baue lokale Wachstumssysteme für Betriebe in {REGION}. Mein
                Büro steht in Ahrensfelde bei Berlin, nicht in einem Callcenter.
                Sie reden direkt mit mir: am Telefon, per WhatsApp, online oder
                vor Ort.
              </p>
              <p className="font-mh-mono mt-mh-4 text-[12px] uppercase tracking-[0.14em] text-mh-text-secondary">
                Kaliberda Digital Intelligence UG (haftungsbeschränkt) ·
                Lokale Wachstumssysteme
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8 · FAQ */}
      <Section background="paper" padding="large">
        <Container>
          <FAQAccordion
            title="Häufige Fragen"
            items={faqItems}
            defaultOpenIndex={0}
          />
        </Container>
      </Section>

      {/* 9 · Schluss-CTA */}
      <Section background="ink" padding="finalCta" finalCta>
        <Container>
          <div className="max-w-[720px]">
            <h2 className="fs-h2 text-mh-text-on-dark">
              Reden wir über <em className="mh-italic-accent">volle</em> Kurse.
            </h2>
            <p className="fs-body mt-mh-4 max-w-[54ch] text-mh-text-on-dark/85">
              Ein Anruf reicht. Sie erreichen mich direkt — und wir schauen
              gemeinsam, wo Ihre Fahrschule heute steht.
            </p>
            <div className="mt-mh-6">
              <FsCtaRow onDark />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
