import type { Metadata } from "next";
import Image from "next/image";
import { FsCtaRow } from "./FsCta";
import { Ansprechpartner, ManniBeispiel, Phone, REFORM_ARTIKEL, ReformInfografik } from "./sections";

/**
 * myhiwi.de/fahrschule — Landingpage für Fahrschul-Inhaber (v2, Papier-Look).
 *
 * Besucher: Inhaber, der gerade von der Telefon-Agentur angerufen wurde und nachschaut,
 * wer MyHiwi ist. Ziel: Er nimmt das Gespräch wahr bzw. meldet sich.
 * Freigabe der Richtung: Design-Canvas „Fahrschul-Landingpage Richtungen", Richtung B (Denis, 21.09.2026).
 * Fakten: Offer v6.1 / Abschlussplan 18.09.2026, Produkt-Profil, Reform-Faktenblatt, Search Console.
 * Keine Zusagen zu Plätzen bei Google, Anfragen oder Anmeldungen. Das Wort Garantie kommt nicht vor.
 * Gleiche Fakten wie das Telefonskript, nie dessen Sätze.
 * Design: app/fahrschule/DESIGN.md (v2, status review).
 */

export const metadata: Metadata = {
  title: "Für Fahrschulen: gefunden werden, Anfragen bekommen",
  description:
    "Wir bringen den Auftritt Ihrer Fahrschule im Internet auf den Stand, den Ihr Betrieb längst hat, und bleiben danach dran. Mit einem echten Beispiel, klaren Preisen und ohne Versprechen, die niemand halten kann.",
  alternates: { canonical: "https://myhiwi.de/fahrschule" },
  openGraph: {
    title: "Ihre Fahrschule ist gut. Im Internet sieht man das noch nicht.",
    description:
      "Website, Google-Eintrag und Ratgeber-Texte für Fahrschulen. Mit echtem Beispiel und klaren Preisen.",
    url: "https://myhiwi.de/fahrschule",
    type: "website",
    locale: "de_DE",
  },
};

const PAIN = [
  ["Wer empfohlen wird, googelt trotzdem.", "Steht dort die Fahrschule aus dem Nachbarort mit mehr Bewertungen und frischerer Seite, ist die Empfehlung weg."],
  ["Die Seite hat mal jemand gebaut. Seitdem fasst sie keiner an.", "Alte Preise, alte Kurstermine, die Meldung vom letzten Sommer."],
  ["Das Telefon klingelt, aber immer mit denselben Fragen.", "Kosten, Theoriezeiten, Anmeldung. Weil es auf der Seite nicht steht."],
  ["Ihre neuen Kunden sind 17 und haben das Handy in der Hand.", "Hakt Ihre Seite am Handy, sind sie nach zehn Sekunden bei der nächsten Fahrschule."],
];

const ABNEHMEN = [
  ["Wir holen die Wartenden ab.", "Ein verständlicher Text auf Ihrer Seite: was geplant ist, was heute gilt, warum Warten sich nicht lohnt."],
  ["Ihre Preise stehen erklärt da.", "Bevor ein Register sie nackt nebeneinanderstellt."],
  ["Wir zeigen, was eine App nicht kann.", "Ihre Fahrlehrer, Ihr Unterricht, Ihre Betreuung bis zur Prüfung."],
  ["Wir verfolgen das Verfahren für Sie.", "Wird etwas beschlossen, passen wir Ihre Seite an."],
];

const PARTNER = [
  ["Neue Preise?", "Eine kurze Nachricht genügt, auch per WhatsApp. Innerhalb eines Werktags steht es auf der Seite."],
  ["Kurstermine ohne Aufwand", "Ihr Büro trägt Termine in eine einfache Verwaltungsseite ein, die Website zeigt sie automatisch. Oder Sie schreiben uns kurz."],
  ["Jeden Monat neue Texte", "Zu den Fragen, die Schüler und Eltern in Ihrer Region wirklich googeln: Kosten, Prüfung, Ablauf, Reform. Dazu frische Beiträge in Ihrem Google-Eintrag."],
  ["Flyer-Begleitung", "Klassen- und Preis-Flyer im selben Look wie Ihre Seite. Ändern sich Preise oder Angebote, passen wir sie an, damit nichts Altes im Umlauf bleibt. Im großen Paket immer dabei."],
  ["Einmal im Monat die Zahlen", "Eine Seite, in normalem Deutsch: wie viele Anfragen kamen, wie oft Sie gefunden wurden, was wir gemacht haben. Zwei Minuten lesen."],
];

const BASIS = [
  ["Ihre Leistungen so im Internet, dass Google sie versteht", "Jede Klasse und jedes Angebot bekommt seinen Platz, mit Ihrem Ort dazu. So erscheinen Sie bei genau den Suchen, die zu Ihrer Fahrschule passen."],
  ["Website fürs Handy, laufend gepflegt", "Preise, Kurstermine und Meldungen ändern wir innerhalb eines Werktags. Eine Nachricht von Ihnen genügt."],
  ["Google-Eintrag in Ordnung", "Richtige Zeiten, richtige Angaben, jeden Monat 2 frische Beiträge."],
  ["1 Ratgeber-Text im Monat", "Zu den Fragen, die Schüler und Eltern in Ihrer Region googeln, auch zur Reform."],
  ["Einmal im Monat die Zahlen", "Wie viele Anfragen kamen, wie oft Sie gefunden wurden. Eine Seite, zwei Minuten."],
];

const GROSS = [
  ["Alles aus Basis, doppelt so viel Inhalt", "2 Ratgeber-Texte und 4 Google-Beiträge im Monat."],
  ["Anfrage-Assistent", "Ein Chatbot auf Ihrer Seite, der Ihrem Büro die immer gleichen Fragen abnimmt. Rund um die Uhr."],
  ["Gefunden werden, auch wenn jemand eine KI fragt", "Immer mehr junge Leute fragen ChatGPT statt Google. Wir arbeiten messbar daran, dass Ihre Fahrschule dort genannt wird. Zusagen können wir eine Nennung nicht."],
  ["Werbekampagne ab dem dritten Monat", "Erst wenn die Zahlen zeigen, wo Werbung sich lohnt. Das Werbebudget zahlen Sie direkt an Google, nie an uns."],
  ["Flyer-Begleitung inklusive", "Klassen- und Preis-Flyer im Look Ihrer Seite. Ändern sich Preise oder Angebote, passen wir sie an. Ohne Aufpreis je Motiv, nur den Druck zahlen Sie."],
  ["Unterstützung bei Veranstaltungen und besonderen Anlässen", "Jubiläum, Tag der offenen Tür, neues Fahrzeug, neuer Kurs: Wir bringen es auf Ihre Seite und in den Google-Eintrag."],
  ["Website-Start bis 1.490 € enthalten", "Bei Ausstieg vor Monat 12 wird er anteilig berechnet."],
];

function Items({ items }: { items: string[][] }) {
  return (
    <>
      {items.map(([t, d]) => (
        <div key={t} className="fsp-item">
          <b>{t}</b>
          <span>{d}</span>
        </div>
      ))}
    </>
  );
}

export default function FahrschulePage() {
  return (
    <>
      {/* Einstieg */}
      <section className="fsp-wrap" style={{ paddingTop: 28 }}>
        <div className="fsp-grid-hero">
          <div className="fsp-stack fsp-gap-16">
            <span className="fsp-eyebrow">Für Fahrschulen</span>
            <h1 className="fsp-h1">Ihre Fahrschule ist gut. Im Internet sieht man das noch nicht.</h1>
            <p className="fsp-lead">
              Wir bringen den Auftritt Ihrer Fahrschule auf den Stand, den Ihr Betrieb längst hat. Damit Schüler und Eltern Sie in Ihrer Region finden und sich bei Ihnen melden. Und danach bleiben wir dran.
            </p>
            <FsCtaRow microcopy="30 Minuten, online, ohne Verpflichtung." />
          </div>
          <div className="fsp-stack fsp-gap-12" style={{ alignItems: "flex-end" }}>
            <div className="fsp-photo-tilt">
              <Image src="/fahrschule/manni-heute.png" alt="Die neue Website von Mannis Fahrschule" width={1440} height={900} sizes="(min-width: 900px) 460px, 90vw" priority style={{ width: "100%", height: "auto" }} />
            </div>
            <span className="fsp-note">Mannis Fahrschule, Herrsching. Beispiel weiter unten.</span>
          </div>
        </div>
      </section>

      {/* Reform */}
      <section id="reform" className="fsp-wrap fsp-section">
        <div className="fsp-stack fsp-gap-16">
          <span className="fsp-note" style={{ alignSelf: "flex-start" }}>Und dann ist da noch die Reform.</span>
          <h2 className="fsp-h2">Keine Angst vor der Führerscheinreform. Den digitalen Teil nehmen wir Ihnen ab.</h2>
          <p className="fsp-lead" style={{ maxWidth: 820 }}>
            Im Moment weiß niemand genau, was kommt. Sicher ist nur: Es wird digitaler, und Ihre Schüler vergleichen mehr. Genau dafür sind wir Ihr Partner.
          </p>
          <ReformInfografik />
          <div className="fsp-sheet fsp-bleed">
            <div className="fsp-grid-hero" style={{ alignItems: "center" }}>
              <div className="fsp-stack">
                <span className="fsp-eyebrow" style={{ paddingBottom: 8 }}>Was wir Ihnen dabei abnehmen</span>
                {ABNEHMEN.map(([t, d]) => (
                  <div key={t} className="fsp-rule fsp-stack" style={{ gap: 3, paddingBottom: 12, paddingTop: 12 }}>
                    <b style={{ fontWeight: 600, fontSize: 18, lineHeight: 1.2 }}>{t}</b>
                    <span className="fsp-small">{d}</span>
                  </div>
                ))}
              </div>
              <div className="fsp-stack fsp-gap-12" style={{ alignItems: "center" }}>
                <Phone src="/fahrschule/manni-handy-reform.png" alt="Der Reform-Artikel auf der Seite von Mannis Fahrschule" width={170} />
                <span className="fsp-note" style={{ fontSize: 24 }}>So sieht das bei Manni aus</span>
                <a href={REFORM_ARTIKEL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, minHeight: 44, display: "inline-flex", alignItems: "center" }}>
                  Reform-Artikel lesen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="fsp-wrap fsp-section">
        <div className="fsp-stack fsp-gap-22">
          <span className="fsp-note" style={{ alignSelf: "flex-start" }}>Das kennen Sie vermutlich:</span>
          <div className="fsp-pain">
            {PAIN.map(([t, d]) => (
              <div key={t}>
                <h3 className="fsp-h3">{t}</h3>
                <p className="fsp-p">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beispiel */}
      <section id="beispiel" className="fsp-wrap fsp-section">
        <div className="fsp-stack fsp-gap-22">
          <div className="fsp-stack fsp-gap-12">
            <h2 className="fsp-h2">Ein Beispiel aus Herrsching</h2>
            <p className="fsp-lead" style={{ maxWidth: 760 }}>
              Keine schwache Fahrschule, die wir gerettet haben. Eine starke, der man es im Internet nicht angesehen hat.
            </p>
          </div>
          <ManniBeispiel />
        </div>
      </section>

      {/* Handy + Assistent */}
      <section className="fsp-wrap fsp-section">
        <div className="fsp-grid-2" style={{ alignItems: "center" }}>
          <div className="fsp-stack fsp-gap-12" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
              <Phone src="/fahrschule/manni-handy-start.png" alt="Startseite von Mannis Fahrschule am Handy" width={150} />
              <Phone src="/fahrschule/manni-handy-preise.png" alt="Preisseite von Mannis Fahrschule am Handy" width={150} />
            </div>
            <span className="fsp-note" style={{ fontSize: 24 }}>Start und Preise bei Manni, am Handy fotografiert</span>
          </div>
          <div className="fsp-stack fsp-gap-22">
            <div className="fsp-stack fsp-gap-12">
              <h2 className="fsp-h2">Zuerst fürs Handy gebaut. Weil Ihre Schüler dort sind.</h2>
              <p className="fsp-lead">Junge Leute erledigen alles am Handy. Anmelden, anrufen, WhatsApp: alles mit dem Daumen.</p>
            </div>
            <div className="fsp-sheet">
              <span className="fsp-eyebrow">Der Anfrage-Assistent</span>
              <h3 className="fsp-h3">Ein Chatbot, der Ihrem Büro die immer gleichen Fragen abnimmt.</h3>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <Phone src="/fahrschule/manni-handy-assistent.png" alt="Der Chatbot auf der Seite von Mannis Fahrschule" width={130} />
                <ul className="fsp-stack fsp-gap-8" style={{ listStyle: "none", margin: 0, padding: 0, fontSize: 16, lineHeight: 1.4 }}>
                  <li>Beantwortet Kosten, Klassen, Anmeldung</li>
                  <li>Auch abends und am Wochenende</li>
                  <li>Nimmt die Anfrage auf, Ihr Büro meldet sich</li>
                </ul>
              </div>
              <span className="fsp-mono" style={{ fontSize: 12, lineHeight: 1.5, color: "var(--fsp-muted)" }}>
                So läuft er bei Manni. Im großen Paket enthalten, im Basispaket + 50 € im Monat.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="fsp-wrap fsp-section">
        <div className="fsp-grid-2" style={{ alignItems: "start" }}>
          <div className="fsp-stack fsp-gap-16">
            <h2 className="fsp-h2">Kein einmaliges Projekt. Ein Partner, der dranbleibt.</h2>
            <p className="fsp-lead">
              Eine neue Seite ist nach einem Jahr wieder alt, wenn sich niemand kümmert. Deshalb hört unsere Arbeit nach dem Start nicht auf. So kommen über Monate mehr Anfragen, nicht durch einen einmaligen Neustart.
            </p>
            <div className="fsp-stack fsp-gap-8" style={{ paddingTop: 12 }}>
              <span className="fsp-note" style={{ alignSelf: "flex-start" }}>Was wir nicht versprechen:</span>
              <p className="fsp-p">
                Platz 1 bei Google oder eine bestimmte Zahl von Anmeldungen. Das kann niemand seriös zusagen, und Herrsching ist nicht Ihr Ort. Wir halten fest, wo Ihre Fahrschule heute steht, und Sie sehen jeden Monat, was sich verändert hat.
              </p>
            </div>
          </div>
          <div className="fsp-stack">
            {PARTNER.map(([t, d], i) => (
              <div key={t} className={i === 0 ? "fsp-rule-strong fsp-stack" : "fsp-rule fsp-stack"} style={{ gap: 4, paddingBottom: 16 }}>
                <b style={{ fontWeight: 600, fontSize: 19 }}>{t}</b>
                <span className="fsp-p">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pakete */}
      <section id="preise" className="fsp-wrap fsp-section">
        <div className="fsp-stack fsp-gap-22">
          <div className="fsp-row" style={{ flexWrap: "wrap" }}>
            <h2 className="fsp-h2">Zwei Pakete</h2>
            <span className="fsp-mono" style={{ fontSize: 13, color: "var(--fsp-muted)" }}>alle Preise netto, zzgl. MwSt.</span>
          </div>
          <div className="fsp-grid-2 fsp-bleed" style={{ gap: 28, alignItems: "start" }}>
            <div className="fsp-sheet" style={{ gap: 14 }}>
              <div className="fsp-row" style={{ paddingBottom: 12, borderBottom: "2px solid var(--fsp-ink)" }}>
                <span className="fsp-h3">Basis</span>
                <span className="fsp-h3" style={{ fontSize: 30 }}>349 € / Monat</span>
              </div>
              <p className="fsp-p" style={{ color: "var(--fsp-ink)" }}>
                Für Fahrschulen, die in ihrer Region gefunden werden und einen gepflegten Auftritt wollen, ohne selbst etwas am Computer zu machen.
              </p>
              <Items items={BASIS} />
              <div className="fsp-stack fsp-mono" style={{ gap: 6, paddingTop: 14, borderTop: "2px solid var(--fsp-ink)", fontSize: 13 }}>
                <div className="fsp-row"><span>Laufzeit</span><span>6 Monate, dann monatlich</span></div>
                <div className="fsp-row"><span>Anfrage-Assistent, auf Wunsch</span><span>+ 50 €</span></div>
                <span className="fsp-label" style={{ paddingTop: 8 }}>Website-Start, einmalig, nach Prüfung</span>
                <div className="fsp-row"><span>Ihre Seite taugt als Fundament</span><span>490 €</span></div>
                <div className="fsp-row"><span>Wir setzen sie neu auf</span><span>1.490 €</span></div>
                <div className="fsp-row"><span>Individueller Neubau</span><span>ab 2.990 €</span></div>
              </div>
            </div>
            <div className="fsp-sheet" style={{ gap: 14 }}>
              <div className="fsp-row" style={{ paddingBottom: 12, borderBottom: "2px solid var(--fsp-ink)" }}>
                <span className="fsp-h3">Großes Paket</span>
                <span className="fsp-h3" style={{ fontSize: 30 }}>599 € / Monat</span>
              </div>
              <p className="fsp-p" style={{ color: "var(--fsp-ink)" }}>
                Für Fahrschulen, die zusätzlich das Büro entlasten und aktiv mehr Anfragen wollen.
              </p>
              <Items items={GROSS} />
              <div className="fsp-row fsp-mono" style={{ paddingTop: 14, borderTop: "2px solid var(--fsp-ink)", fontSize: 13 }}>
                <span>Laufzeit</span><span>12 Monate</span>
              </div>
            </div>
          </div>
          <span className="fsp-note">Die Website gehört nach der Bezahlung Ihnen. Für mehrere Standorte gibt es eigene Konditionen.</span>
        </div>
      </section>

      {/* Schluss */}
      <section id="termin" className="fsp-wrap fsp-section">
        <div className="fsp-dark fsp-bleed">
          <div className="fsp-grid-2" style={{ alignItems: "center" }}>
            <Ansprechpartner onDark />
            <div className="fsp-stack fsp-gap-16">
              <h2 className="fsp-h2" style={{ color: "inherit" }}>30 Minuten, online, ohne Verpflichtung</h2>
              <p className="fsp-p">
                Sie sehen Ihre Fahrschule so, wie ein Schüler sie am Handy sieht. Montag und Dienstag ganztags, Mittwoch vormittags, Donnerstag nachmittags.
              </p>
              <FsCtaRow onDark />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
