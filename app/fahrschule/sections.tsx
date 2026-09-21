import Image from "next/image";

/**
 * Shared sections of the Fahrschule shell (landing page + appointment prep page).
 * Facts only from: Offer v6.1 / Abschlussplan 2026-09-18, Produkt-Profil, Reform-Faktenblatt,
 * Google Search Console (mannis-fahrschule.com). No promises, no invented numbers.
 */

export const REFORM_ARTIKEL =
  "https://mannis-fahrschule.com/blog/fuehrerschein-reform-2026-2027-was-beschlossen-ist";
export const MANNI_WEITERBILDUNG = "https://mannis-fahrschule.com/berufskraftfahrer";

/**
 * REFORM_STAND must be reviewed after the Bundesrat session on 2026-09-25.
 * Everything German in this list is planned, not decided; only the EU directive is decided.
 */
export const REFORM_STAND = "21.09.2026";

type ReformStep = { datum: string; status: "offen" | "geplant" | "beschlossen"; titel: string; text: string };

const REFORM_STEPS: ReformStep[] = [
  { datum: "25.09.2026", status: "offen", titel: "Bundesrat berät", text: "Die Verordnung steht auf der Tagesordnung. Danach ist klarer, was 2027 gelten soll." },
  { datum: "01.01.2027", status: "geplant", titel: "Neue Ausbildungsregeln", text: "Theorie ohne Präsenzpflicht, Lernen per App, Simulator." },
  { datum: "01.07.2027", status: "geplant", titel: "Neues Prüfungsrecht und Gesetz", text: "Die Prüfung soll strenger werden: 3 Fehlerpunkte statt 10." },
  { datum: "01.10.2027", status: "geplant", titel: "Preise werden öffentlich", text: "Erste Meldung ins Transparenzregister. Auch Bestehensquoten sollen sichtbar werden." },
  { datum: "26.11.2029", status: "beschlossen", titel: "EU-Richtlinie gilt", text: "Neue Prüfinhalte, Entzug gilt in der ganzen EU." },
];

export function Phone({ src, alt, width }: { src: string; alt: string; width: number }) {
  return (
    <div className="fsp-phone-frame" style={{ width }}>
      <Image src={src} alt={alt} width={390} height={844} sizes={`${width}px`} />
    </div>
  );
}

export function ReformInfografik() {
  const beschlossen = REFORM_STEPS.filter((s) => s.status === "beschlossen").length;
  return (
    <div className="fsp-dark fsp-bleed" aria-labelledby="reform-grafik-titel">
      <div className="fsp-grid-2" style={{ alignItems: "end" }}>
        <h3 id="reform-grafik-titel" className="fsp-h3" style={{ color: "inherit" }}>
          Führerscheinreform: Was ist beschlossen, was nur geplant?
        </h3>
        <div className="fsp-count">
          <div className="fsp-count-done">
            <b className="fsp-big">{beschlossen}</b>
            <span className="fsp-label" style={{ color: "inherit" }}>beschlossen</span>
          </div>
          <div className="fsp-count-open">
            <b className="fsp-big">{REFORM_STEPS.length - beschlossen}</b>
            <span className="fsp-label" style={{ color: "inherit" }}>geplant oder offen</span>
          </div>
        </div>
      </div>
      <ol className="fsp-tl" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {REFORM_STEPS.map((s) => (
          <li key={s.datum} className="fsp-tl-step">
            <div className="fsp-tl-rail" aria-hidden>
              <div className={`fsp-tl-dot ${s.status === "beschlossen" ? "fsp-tl-dot--done" : ""}`} />
              <div className="fsp-tl-line" />
            </div>
            <div className="fsp-tl-body">
              <span className="fsp-tl-date">{s.datum}</span>
              <span className={`fsp-chip ${s.status === "beschlossen" ? "fsp-chip--done" : ""}`}>{s.status}</span>
              <span className="fsp-tl-title">{s.titel}</span>
              <span className="fsp-tl-text">{s.text}</span>
            </div>
          </li>
        ))}
      </ol>
      <p className="fsp-mono" style={{ margin: 0, fontSize: 12, lineHeight: 1.5, color: "var(--fsp-on-dark-soft)" }}>
        Stand {REFORM_STAND} · keine Rechtsberatung · nach der Sitzung des Bundesrates aktualisieren wir diese Übersicht
      </p>
    </div>
  );
}

export function ManniBeispiel() {
  return (
    <div className="fsp-sheet fsp-sheet--mono fsp-bleed">
      <div className="fsp-row" style={{ paddingBottom: 16, borderBottom: "2px solid var(--fsp-ink)", flexWrap: "wrap" }}>
        <span className="fsp-h3" style={{ fontFamily: "var(--font-fsp), system-ui, sans-serif" }}>Mannis Fahrschule</span>
        <span style={{ fontSize: 13, lineHeight: 1.5, color: "var(--fsp-muted)" }}>
          Herrsching am Ammersee · seit 2006 · 4,8 Sterne bei über 300 Google-Bewertungen
        </span>
      </div>

      <div className="fsp-grid-2" style={{ gap: 28 }}>
        <div className="fsp-stack fsp-gap-8">
          <span className="fsp-label">Vorher</span>
          <Image className="fsp-shot" src="/fahrschule/manni-vorher.png" alt="Die alte Website von Mannis Fahrschule" width={1440} height={900} sizes="(min-width: 900px) 520px, 90vw" />
        </div>
        <div className="fsp-stack fsp-gap-8">
          <div className="fsp-row" style={{ alignItems: "flex-end" }}>
            <span className="fsp-label">Heute</span>
            <span className="fsp-note" style={{ fontSize: 23 }}>gleiche Fahrschule, neuer Auftritt</span>
          </div>
          <Image className="fsp-shot" src="/fahrschule/manni-heute.png" alt="Die neue Website von Mannis Fahrschule" width={1440} height={900} sizes="(min-width: 900px) 520px, 90vw" />
        </div>
      </div>

      <div className="fsp-grid-3 fsp-rule-dash">
        <div className="fsp-stack fsp-gap-12">
          <span className="fsp-label">Was wir gemacht haben</span>
          <ul className="fsp-check" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li>[x] Website neu aufgesetzt, fürs Handy gebaut</li>
            <li>[x] Aktuelle Preise eingetragen</li>
            <li>[x] Anmeldung, Anruf und WhatsApp mit einem Fingertipp</li>
            <li>[x] Google-Eintrag aufgeräumt</li>
            <li>[x] Flyer im selben Look gestaltet</li>
            <li>[x] Kurstermine: Das Büro pflegt sie in einer einfachen Verwaltungsseite, die Website zeigt sie automatisch</li>
            <li>[x] Anfragen kommen geordnet im Büro an, mit Wunschklasse und Kontaktdaten</li>
          </ul>
        </div>
        <div className="fsp-stack fsp-gap-8">
          <span className="fsp-label">Anfragen über die Website, erster Monat</span>
          <b className="fsp-big" style={{ fontSize: 120 }}>21</b>
          <span className="fsp-note">Darum geht es am Ende.</span>
        </div>
        <div className="fsp-stack fsp-gap-8">
          <span className="fsp-label">So oft bei Google in der Region gesehen</span>
          <div className="fsp-row" style={{ fontSize: 16 }}><span>vorher, im Monat</span><span>rund 4.900</span></div>
          <div className="fsp-row" style={{ fontSize: 16, fontWeight: 700 }}><span>erster voller Monat</span><span>rund 18.100</span></div>
          <span className="fsp-note" style={{ alignSelf: "flex-end" }}>fast viermal so oft</span>
        </div>
      </div>

      <div className="fsp-grid-3 fsp-rule-dash" style={{ alignItems: "center" }}>
        <span className="fsp-label">Besucher über unsere Ratgeber-Artikel</span>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
          <b className="fsp-big" style={{ fontSize: 84 }}>531</b>
          <span style={{ fontFamily: "var(--font-fsp), system-ui, sans-serif", fontSize: 15, lineHeight: 1.4, color: "var(--fsp-text)", paddingBottom: 4 }}>
            Klicks aus Google seit dem Start
          </span>
        </div>
        <span style={{ fontSize: 13, lineHeight: 1.55, color: "var(--fsp-text)" }}>
          297 davon allein über den Reform-Artikel. Die ganze Seite kam im selben Zeitraum auf 1.357 Klicks. 28.07. bis 19.09.2026, Google Search Console.
        </span>
      </div>

      <div className="fsp-rule-dash" style={{ display: "flex", gap: 18, alignItems: "center" }}>
        <Phone src="/fahrschule/manni-handy-weiterbildung.png" alt="Die Seite zur Berufskraftfahrer-Weiterbildung bei Mannis Fahrschule" width={110} />
        <div className="fsp-stack fsp-gap-8" style={{ fontFamily: "var(--font-fsp), system-ui, sans-serif" }}>
          <span className="fsp-label">Und es geht weiter</span>
          <span style={{ fontSize: 16, lineHeight: 1.45 }}>
            Neu bei Manni: die Weiterbildung für Berufskraftfahrer. Wir haben dafür eigene Seiten gebaut, damit gefunden wird, wer in der Region danach googelt.
          </span>
          <a href={MANNI_WEITERBILDUNG} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, minHeight: 44, display: "inline-flex", alignItems: "center" }}>
            Seite ansehen
          </a>
        </div>
      </div>

      <p style={{ margin: 0, paddingTop: 14, borderTop: "2px solid var(--fsp-ink)", fontSize: 12, lineHeight: 1.5, color: "var(--fsp-muted)" }}>
        Echte Zahlen, veröffentlicht mit Zustimmung von Mannis Fahrschule.
      </p>
    </div>
  );
}

export function Ansprechpartner({ ich = false }: { ich?: boolean }) {
  // Portrait intentionally left out until Denis supplies a new photo (2026-09-21).
  return (
    <div className="fsp-stack fsp-gap-8">
      <h3 className="fsp-h3">Mit wem Sie sprechen</h3>
      <p className="fsp-p">
        {ich
          ? "Denis Kaliberda, Geschäftsführer von MyHiwi in Ahrensfelde bei Berlin. Ich führe das Gespräch selbst und bleibe danach Ihr Ansprechpartner."
          : "Denis Kaliberda, Geschäftsführer von MyHiwi in Ahrensfelde bei Berlin. Er schaut sich Ihre Fahrschule vor dem Gespräch selbst an und bleibt Ihr Ansprechpartner. Pro Monat nehmen wir höchstens drei neue Fahrschulen auf."}
      </p>
    </div>
  );
}
