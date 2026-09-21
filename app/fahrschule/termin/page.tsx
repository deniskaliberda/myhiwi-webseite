import type { Metadata } from "next";
import Link from "next/link";
import { Ansprechpartner, ManniBeispiel, ReformInfografik } from "../sections";

/**
 * myhiwi.de/fahrschule/termin — Vorbereitung für Inhaber, die am Telefon einen Termin vereinbart haben.
 * Der Link steht in der Mail nach der Terminbuchung. Kein „Gespräch vereinbaren": Der Termin steht schon.
 * Aufbau folgt dem dokumentierten 30-Minuten-Ablauf (denis-workspace, termin/01_Termin-Ablauf_30min.md).
 * Nicht für Suchmaschinen: noindex, nicht in der Sitemap, nirgends verlinkt.
 */

export const metadata: Metadata = {
  title: "Ihr Termin mit MyHiwi: So läuft das Gespräch",
  description: "Was in den 30 Minuten passiert, was wir vorher machen und wer wir sind.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://myhiwi.de/fahrschule/termin" },
};

// Kept local: values exported from the "use client" CTA module are not readable in a server component.
const PHONE_E164 = "+4915114993066";
const PHONE_DISPLAY = "01511 4993066";

const VORHER = [
  ["Ich suche Ihre Fahrschule wie ein Schüler.", "Am Handy, bei Google und in der Karte, mit dem Namen Ihres Orts."],
  ["Ich schaue mir Ihre Seite und Ihren Google-Eintrag an.", "Preise, Anmeldung, Termine, Bewertungen. Nur was man wirklich sieht."],
  ["Ich bringe zwei bis drei Beobachtungen mit.", "Konkret zu Ihrer Fahrschule, nichts Allgemeines."],
];

const ABLAUF = [
  ["0 bis 5", "Ankommen", "Kurz, wer ich bin und wie die 30 Minuten laufen."],
  ["5 bis 15", "Ich höre zu", "Wie kommen Anmeldungen heute zu Ihnen, wo geht etwas verloren, was erwarten Sie von der Reform."],
  ["15 bis 20", "Ihr Auftritt am Handy", "Ich zeige Ihnen, was ein Fahrschüler sieht, wenn er in Ihrem Ort sucht."],
  ["20 bis 25", "Mein Vorschlag und was es kostet", "Zwei Pakete, eine Empfehlung. Die Preise stehen unten schon."],
  ["25 bis 30", "Nächster Schritt", "Sie entscheiden in Ruhe. Ein Nein ist völlig in Ordnung."],
];

const FRAGEN = [
  "Wie kommen heute die meisten Anmeldungen zu Ihnen?",
  "Wie viele neue Fahrschüler nehmen Sie im Monat auf, und wie viele hätten Platz?",
  "Wer kümmert sich bei Ihnen um Internetseite und Google-Eintrag?",
  "Wie läuft eine Anfrage bei Ihnen ab, und wo geht etwas verloren?",
  "Merken Sie, dass Schüler wegen der Reform abwarten?",
];

const ECKDATEN = [
  ["Wann", "steht in Ihrer E-Mail"],
  ["Wie", "online, per Videolink"],
  ["Dauer", "30 Minuten"],
  ["Mit wem", "Denis Kaliberda"],
  ["Kosten", "keine, keine Verpflichtung"],
];

export default function TerminVorbereitungPage() {
  return (
    <>
      <section className="fsp-wrap" style={{ paddingTop: 28 }}>
        <div className="fsp-grid-hero">
          <div className="fsp-stack fsp-gap-16">
            <span className="fsp-eyebrow">Ihr Termin mit MyHiwi</span>
            <h1 className="fsp-h1">Schön, dass wir sprechen. Vorbereiten müssen Sie nichts.</h1>
            <p className="fsp-lead">
              Sie haben am Telefon einen Termin mit mir vereinbart. Hier steht, was in den 30 Minuten passiert, was ich vorher mache und wer wir sind. Lesezeit: drei Minuten.
            </p>
          </div>
          <dl className="fsp-sheet fsp-sheet--mono" style={{ gap: 12, fontSize: 15, margin: 0 }}>
            {ECKDATEN.map(([k, v]) => (
              <div key={k} className="fsp-row">
                <dt style={{ color: "var(--fsp-muted)" }}>{k}</dt>
                <dd style={{ margin: 0, textAlign: "right" }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="fsp-wrap fsp-section">
        <div className="fsp-grid-2" style={{ alignItems: "start" }}>
          <div className="fsp-stack fsp-gap-8">
            <span className="fsp-note" style={{ alignSelf: "flex-start" }}>Meine Hausaufgaben, nicht Ihre:</span>
            <h2 className="fsp-h2" style={{ paddingBottom: 8 }}>Was ich vor dem Gespräch mache</h2>
            {VORHER.map(([t, d], i) => (
              <div key={t} className="fsp-rule" style={{ display: "flex", gap: 16, paddingBottom: 16 }}>
                <span className="fsp-num" aria-hidden>{i + 1}</span>
                <div className="fsp-stack" style={{ gap: 4 }}>
                  <b style={{ fontWeight: 600, fontSize: 19, lineHeight: 1.2 }}>{t}</b>
                  <span className="fsp-small">{d}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="fsp-sheet" style={{ gap: 6 }}>
            <span className="fsp-eyebrow">Das frage ich Sie</span>
            <h3 className="fsp-h3" style={{ paddingBottom: 6 }}>Fünf Fragen. Aus dem Kopf reicht völlig.</h3>
            <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {FRAGEN.map((q, i) => (
                <li key={q} className="fsp-rule-dash" style={{ display: "flex", gap: 12, paddingTop: 12, paddingBottom: 12, fontSize: 16, lineHeight: 1.4 }}>
                  <span className="fsp-mono" style={{ color: "var(--fsp-muted)" }}>{i + 1}</span>
                  <span>{q}</span>
                </li>
              ))}
            </ol>
            <span className="fsp-note" style={{ fontSize: 24, paddingTop: 10 }}>Entscheidet noch jemand mit? Dann gern gleich dazuholen.</span>
          </div>
        </div>
      </section>

      <section className="fsp-wrap fsp-section">
        <div className="fsp-dark fsp-bleed">
          <h2 className="fsp-h3" style={{ color: "inherit" }}>So laufen die 30 Minuten</h2>
          <ol className="fsp-tl" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {ABLAUF.map(([z, t, d]) => (
              <li key={z} className="fsp-tl-step">
                <div className="fsp-tl-rail" aria-hidden>
                  <div className="fsp-tl-dot fsp-tl-dot--done" />
                  <div className="fsp-tl-line" />
                </div>
                <div className="fsp-tl-body">
                  <span className="fsp-tl-date">Minute {z}</span>
                  <span className="fsp-tl-title">{t}</span>
                  <span className="fsp-tl-text">{d}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fsp-wrap fsp-section">
        <div className="fsp-stack fsp-gap-22">
          <div className="fsp-stack fsp-gap-12">
            <h2 className="fsp-h2">Was wir machen, an einem Beispiel</h2>
            <p className="fsp-lead" style={{ maxWidth: 820 }}>
              Wir kümmern uns dauerhaft um den Auftritt von Fahrschulen im Internet. So sieht das bei Mannis Fahrschule in Herrsching aus.
            </p>
          </div>
          <ManniBeispiel />
        </div>
      </section>

      <section className="fsp-wrap fsp-section">
        <div className="fsp-stack fsp-gap-16">
          <h2 className="fsp-h2">Falls die Reform Sie umtreibt</h2>
          <p className="fsp-lead">Darüber sprechen wir im Termin. Hier der Stand auf einen Blick.</p>
          <ReformInfografik />
        </div>
      </section>

      <section className="fsp-wrap fsp-section">
        <div className="fsp-grid-2" style={{ alignItems: "start" }}>
          <div className="fsp-sheet fsp-bleed" style={{ gap: 12 }}>
            <h3 className="fsp-h3">Damit Sie es vorher wissen: die Preise</h3>
            <div className="fsp-row fsp-rule-strong"><b style={{ fontSize: 19 }}>Basis</b><b style={{ fontSize: 26 }}>349 € / Monat</b></div>
            <span className="fsp-small">6 Monate, danach monatlich kündbar. Dazu einmalig der Website-Start: 490 €, 1.490 € oder ab 2.990 €, je nach Zustand Ihrer Seite.</span>
            <div className="fsp-row fsp-rule-dash"><b style={{ fontSize: 19 }}>Großes Paket</b><b style={{ fontSize: 26 }}>599 € / Monat</b></div>
            <span className="fsp-small">12 Monate, Website-Start bis 1.490 € enthalten.</span>
            <span className="fsp-mono" style={{ fontSize: 12, color: "var(--fsp-muted)" }}>netto, zzgl. MwSt. Welches Paket passt, klären wir im Gespräch.</span>
            <Link href="/fahrschule#preise" style={{ fontWeight: 600, minHeight: 44, display: "inline-flex", alignItems: "center" }}>
              Alles im Detail auf unserer Seite für Fahrschulen
            </Link>
          </div>
          <div className="fsp-stack fsp-gap-22">
            <div className="fsp-stack fsp-gap-8">
              <span className="fsp-note" style={{ alignSelf: "flex-start" }}>Was ich Ihnen nicht verspreche:</span>
              <p className="fsp-p">
                Platz 1 bei Google oder eine bestimmte Zahl von Anmeldungen. Das kann niemand seriös zusagen. Ich zeige Ihnen, was ich sehe, und Sie entscheiden.
              </p>
            </div>
            <Ansprechpartner ich />
          </div>
        </div>
      </section>

      <section className="fsp-wrap fsp-section">
        <div className="fsp-dark fsp-bleed">
          <div className="fsp-grid-2" style={{ alignItems: "center" }}>
            <div className="fsp-stack fsp-gap-12">
              <h2 className="fsp-h3" style={{ color: "inherit" }}>Der Termin passt doch nicht? Oder eine Frage vorab?</h2>
              <p className="fsp-p">Kein Problem. Ein Anruf oder eine kurze Nachricht genügt, dann verschieben wir.</p>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
              <a href={`tel:${PHONE_E164}`} className="fs-btn fs-btn-primary">{PHONE_DISPLAY} anrufen</a>
              <a href="mailto:denis@myhiwi.de" style={{ color: "var(--fsp-on-dark)", minHeight: 44, display: "inline-flex", alignItems: "center", fontSize: 17 }}>denis@myhiwi.de</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
