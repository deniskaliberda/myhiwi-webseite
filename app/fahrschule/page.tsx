import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/myhiwi/layout/Container";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";
import { FAQAccordion, type FAQItem } from "@/components/myhiwi/faq/FAQAccordion";
import { FsCtaRow } from "./FsCta";
import { DossierMuster, ZettelMuster } from "./Muster";
import ScrollWelt from "@/components/myhiwi/fahrschule-welt/ScrollWelt";

/**
 * myhiwi.de/fahrschule — kanonische Landingpage (Phase 0, statisch).
 *
 * Bauplan: denis-workspace/dokumente/MyHiwi_Fahrschule_Web_Konzept_2026-07-03.md §4
 * Wording-Kanon: MyHiwi_Fahrschul_Offer_v4_2026-07-03.md (§3, §5, §6, §13)
 * Design: app/fahrschule/DESIGN.md (status review)
 *
 * Wording-Stand: Garantie öffentlich NUR Kurzfassung, bis der Anwalt das
 * volle Garantie-Wording freigegeben hat. Kein Sichtbarkeits-Check (Phase 1),
 * keine Kiez-Knappheit (erst nach Anwalts-Klausel).
 */

export const metadata: Metadata = {
  title: "Das Volle-Kurse-System — mehr Anfragen für Ihre Fahrschule in Berlin",
  description:
    "Neue Website, Google-Profil auf Vordermann, echte Bewertungen Ihrer Schüler — und jede Anfrage gezählt, schwarz auf weiß per WhatsApp. 349 € im Monat zzgl. MwSt. Sie reden direkt mit Denis.",
  alternates: { canonical: "https://myhiwi.de/fahrschule" },
  // Eigenes openGraph, damit die WhatsApp-Vorschau (DER Share-Kanal des
  // Avatars) nicht den generischen Agentur-Titel aus dem Root-Layout erbt.
  openGraph: {
    title: "Das Volle-Kurse-System — mehr Anfragen für Ihre Fahrschule",
    description:
      "Wir zählen jede Anfrage ab Tag 0 — schwarz auf weiß per WhatsApp. Für Fahrschulen in Berlin.",
    url: "https://myhiwi.de/fahrschule",
    type: "website",
    locale: "de_DE",
  },
};

const faqCopy = [
  {
    question: "Ich kann keinen Computer — funktioniert das trotzdem?",
    answer:
      "Ja. Sie müssen nichts am Computer machen — alles läuft über WhatsApp. Was wir an Zugängen brauchen, holen wir beim Termin vor Ort bei Ihnen ab, die Fotos machen wir dabei auch. Danach hören Sie von uns per WhatsApp — und Ihr Anfragen-Zettel kommt genauso an.",
  },
  {
    question: "Was ist, wenn es nicht klappt?",
    answer:
      "Wir zählen jede Anfrage ab Tag 0 — die genaue Zusage legen wir gemeinsam schriftlich fest. Bevor Sie unterschreiben, steht die vereinbarte Anfragen-Zahl schwarz auf weiß im Vertrag. Sie können die Zähldaten einsehen.",
  },
  {
    question: "Wem gehört die Website?",
    answer:
      "Ihnen. Die Website bezahlen Sie einmalig — danach gehört sie Ihnen für immer, egal wie es mit uns weitergeht. Sie ist nicht an die monatliche Betreuung gekoppelt.",
  },
  {
    question: "Wie lange bin ich gebunden?",
    answer:
      "Die Betreuung läuft 12 Monate und kostet 349 € im Monat zzgl. MwSt., ab dem ersten Monat. Was der Vertrag genau enthält — inklusive der vereinbarten Anfragen-Zahl — gehen wir vor der Unterschrift gemeinsam durch.",
  },
  {
    question: "Was ist mit SEO und Werbung?",
    answer:
      "SEO heißt am Ende nur: Wer im Kiez nach einer Fahrschule sucht, findet Sie — auf der Karte, in der Suche, in den Google-Antworten. Genau daran arbeiten wir, das ist Teil des Systems und kostet nichts extra. Bezahlte Anzeigen verkaufen wir Ihnen an der Tür nicht: Erst wenn Ihr Anfragen-Zettel nach ein paar Monaten zeigt, was eine Anfrage bei Ihnen wert ist, lohnt sich das Gespräch darüber überhaupt.",
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
      "Website, Google-Unternehmensprofil und Anfragen-Messung für Fahrschulen",
    provider: {
      "@type": "Organization",
      name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
      url: "https://myhiwi.de",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Berlin" },
      { "@type": "AdministrativeArea", name: "Brandenburg" },
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
  "„Ab 2027 vergleichen die Portale nur noch Preise.“",
];

const schritte = [
  {
    index: "1",
    title: "14-Tage-Start-Sprint",
    text: "In zwei Wochen ist alles sichtbar neu: Ihre Website, Ihr Google-Profil, der WhatsApp-Knopf für Anfragen. Die Fotos machen wir beim Termin bei Ihnen vor Ort — Sie müssen nichts liefern.",
  },
  {
    index: "2",
    title: "Wir zählen jede Anfrage — ab Tag 0",
    text: "Anrufe, WhatsApp-Kontakte, Formular-Anfragen. Vorher halten wir gemeinsam schriftlich fest, wo Sie heute stehen — damit Sie den Unterschied sehen, nicht glauben müssen.",
  },
  {
    index: "3",
    title: "Jeden Monat: Ihr Anfragen-Zettel per WhatsApp",
    text: "Eine Seite. Jede gezählte Anfrage schwarz auf weiß. Kein Bericht, den keiner liest — ein Zettel, den Sie in dreißig Sekunden verstehen.",
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

      {/* 0 · Scroll-Welt — Kamerafahrt durch das Volle-Kurse-System (Hero) */}
      <ScrollWelt>
        <div data-sw-seo className="bg-mh-paper text-mh-text-primary">
          <section className="relative flex min-h-[calc(100svh-var(--fs-header-height))] items-end overflow-hidden px-5 py-mh-7 md:px-16 md:py-mh-9">
            <Image
              src="/fahrschule-welt/heute-poster.webp"
              alt="Fahrschule in der Volle-Kurse-Welt"
              fill
              priority
              data-sw-lcp
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="relative z-10 max-w-[620px] rounded-mh-lg border border-mh-divider bg-mh-paper/95 p-mh-5 md:p-mh-7">
              <span className="font-mh-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#92400E]">
                Das Volle-Kurse-System
              </span>
              <h1 className="fs-h1 mt-mh-3">Volle Kurse kommen nicht von allein.</h1>
              <p className="fs-body mt-mh-4">
                Gute Fahrschulen haben heute leere Plätze — nicht weil sie schlecht
                ausbilden, sondern weil niemand sie findet.
              </p>
            </div>
          </section>
          <div className="grid gap-mh-5 px-5 py-mh-7 md:grid-cols-3 md:px-16 md:py-mh-9">
            <article className="rounded-mh-lg border border-mh-divider bg-white p-mh-5">
              <h2 className="fs-h2">Wer im Kiez sucht, findet Sie.</h2>
              <p className="fs-body mt-mh-4">
                Neue Website, Google-Profil auf Vordermann, echte Bewertungen Ihrer
                Schüler — in zwei Wochen sichtbar neu.
              </p>
            </article>
            <article className="rounded-mh-lg border border-mh-divider bg-white p-mh-5">
              <h2 className="fs-h2">Jede Anfrage wird gezählt — ab Tag 0.</h2>
              <p className="fs-body mt-mh-4">
                Anrufe, WhatsApp, Formular: Jeden Monat kommt Ihr Anfragen-Zettel per
                WhatsApp. Ein Zettel, den Sie in dreißig Sekunden verstehen.
              </p>
            </article>
            <article className="rounded-mh-lg border border-mh-divider bg-white p-mh-5">
              <h2 className="fs-h2">Volle Kurse. Die einzige Zahl, die zählt.</h2>
              <p className="fs-body mt-mh-4">
                349 € im Monat zzgl. MwSt., 12 Monate Betreuung — und Sie reden direkt
                mit Denis.
              </p>
              <div className="mt-mh-5 flex flex-col gap-3">
                <a href="tel:+4915114993066" className="fs-btn fs-btn-primary">
                  Anrufen
                </a>
                <a
                  href="https://wa.me/4915114993066?text=Hallo%20Denis%2C%20ich%20komme%20von%20der%20Fahrschul-Seite."
                  className="fs-btn fs-btn-outline"
                >
                  Per WhatsApp schreiben
                </a>
              </div>
            </article>
          </div>
        </div>
      </ScrollWelt>

      {/* 1 · Problem-Spiegel — spiegeln, nicht belehren */}
      <Section
        id="fs-start"
        tabIndex={-1}
        background="subtle"
        padding="default"
        className="scroll-mt-[var(--fs-header-height)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2563EB]"
      >
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

      {/* 3 · Das System in 3 Schritten + Anfragen-Zettel als Artefakt */}
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

      {/* 4 · Anfragen-Garantie — Held-Block, Amber, NUR Kurzfassung */}
      <Section background="paper" padding="compact">
        <Container>
          <div className="rounded-mh-xl border-2 border-[rgba(180,83,9,0.35)] bg-[rgba(180,83,9,0.06)] px-mh-5 py-mh-6 md:px-mh-7 md:py-mh-7">
            <span className="font-mh-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#92400E]">
              Die Anfragen-Garantie
            </span>
            <p className="fs-h2 mt-mh-4 max-w-[30ch] text-mh-ink-950">
              Wir zählen jede Anfrage ab Tag 0 — die genaue Zusage legen wir
              gemeinsam schriftlich fest.
            </p>
            <p className="fs-body mt-mh-4 max-w-[62ch]">
              Bevor Sie unterschreiben, steht die vereinbarte Anfragen-Zahl
              schwarz auf weiß im Vertrag. Gezählt, nicht behauptet.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5 · Beweis-Schicht — „So messen wir" statt erfundener Ergebnisse */}
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
                Ab Tag 0 zählen wir dann jede Anfrage, die über die Messkanäle
                ankommt — Anrufe, WhatsApp, Formular. Sie können die Zähldaten
                einsehen.
              </p>
              <p className="fs-body mt-mh-4 max-w-[62ch] text-mh-text-secondary">
                Wir zeigen Ihnen hier keine erfundenen Zahlen. Lieber zeigen
                wir offen, wie wir messen — und legen die Messung bei Ihnen auf
                den Tisch.
              </p>
            </div>
            <DossierMuster />
          </div>
        </Container>
      </Section>

      {/* 6 · Preis-Block — offen, keine Tiers, keine Ranges */}
      <Section background="paper" padding="large">
        <Container>
          <SectionMark index="04" label="Was es kostet" />
          <h2 className="fs-h2 mt-mh-4">
            Ein Preis. <em className="mh-italic-accent">Offen.</em>
          </h2>
          <div className="mt-mh-6 max-w-[720px] rounded-mh-lg border border-mh-divider p-mh-6 md:p-mh-7">
            <p className="font-mh-display text-[34px] font-extrabold leading-tight tracking-tight text-mh-ink-950 md:text-[44px]">
              349 € im Monat
            </p>
            <p className="font-mh-mono mt-mh-2 text-[13px] uppercase tracking-[0.14em] text-mh-text-secondary">
              zzgl. MwSt. · 12 Monate · ab dem ersten Monat
            </p>
            <p className="fs-body mt-mh-5">
              Dazu einmalig Ihre neue Website — Preis nach Zustand Ihrer
              heutigen Seite, auf Wunsch in drei Raten. Einmal bezahlt, gehört
              sie Ihnen für immer.
            </p>
            <p className="fs-body mt-mh-4 border-t border-mh-divider pt-mh-4 font-medium">
              Sie müssen nichts am Computer machen — alles läuft über WhatsApp.
            </p>
          </div>
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
                Ich baue lokale Wachstumssysteme für Betriebe in Berlin-Ost und
                Brandenburg — von Ahrensfelde aus, nicht aus einem Callcenter.
                Sie reden direkt mit mir: an der Tür, am Telefon, per WhatsApp.
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
