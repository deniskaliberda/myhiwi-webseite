import { Check } from "lucide-react";

/**
 * Muster-Artefakte der Fahrschul-LP.
 *
 * WICHTIG (Anti-Slop): beides sind klar beschriftete MUSTER —
 * Produkt-Illustrationen der Artefakte, die der Kunde bekommt.
 * Keine erfundenen Summen, keine erfundenen Messwerte.
 */

const zettelRows = [
  { text: "Anruf über Ihre Anfrage-Rufnummer", when: "Di., 14:32" },
  { text: "WhatsApp über den Knopf auf Ihrer Website", when: "Mi., 09:15" },
  { text: "Formular-Anfrage über Ihr Google-Profil", when: "Fr., 18:47" },
];

export function ZettelMuster() {
  return (
    <figure className="mx-auto w-full max-w-[440px]">
      <div className="rounded-mh-md border border-mh-divider bg-white p-mh-5 shadow-mh-hero">
        <div className="flex items-baseline justify-between border-b-2 border-mh-ink-950 pb-mh-3">
          <span className="font-mh-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-mh-text-primary">
            Anfragen-Zettel
          </span>
          <span className="rounded-mh-pill border border-mh-divider px-mh-3 py-1 font-mh-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-mh-text-secondary">
            Muster
          </span>
        </div>
        <ul className="mt-mh-3">
          {zettelRows.map((row) => (
            <li
              key={row.text}
              className="flex items-start gap-mh-3 border-b border-mh-divider py-mh-3"
            >
              <Check
                size={18}
                strokeWidth={2}
                className="mt-[2px] shrink-0 text-mh-glow"
                aria-hidden
              />
              <div>
                <p className="font-mh-body text-[15px] font-medium leading-snug text-mh-text-primary">
                  {row.text}
                </p>
                <p className="mt-[2px] font-mh-mono text-[11px] text-mh-text-secondary">
                  {row.when}
                </p>
              </div>
            </li>
          ))}
          <li aria-hidden className="border-b border-dashed border-mh-divider py-mh-3">
            <span className="font-mh-mono text-[11px] text-mh-text-secondary">…</span>
          </li>
        </ul>
      </div>
      <figcaption className="mt-mh-3 text-center font-mh-body text-[14px] leading-relaxed text-mh-text-secondary">
        Jede Zeile ist eine gezählte Anfrage. Diesen Zettel bekommen Sie
        jeden Monat per WhatsApp — schwarz auf weiß.
      </figcaption>
    </figure>
  );
}

const dossierRows = [
  "Wie schnell ist Ihre Website auf dem Handy?",
  "Stehen Sie auf der Karte, wenn jemand im Kiez sucht?",
  "Tauchen Sie in den Google-Antworten auf?",
  "Wie weit sind Sie von den Bewertungen des Kiez-Ersten entfernt?",
];

export function DossierMuster() {
  return (
    <figure className="mx-auto w-full max-w-[440px]">
      <div className="rounded-mh-md border border-mh-divider bg-white p-mh-5 shadow-mh-card">
        <div className="flex items-baseline justify-between border-b-2 border-mh-ink-950 pb-mh-3">
          <span className="font-mh-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-mh-text-primary">
            Ihr Ausgangspunkt · eine Seite
          </span>
          <span className="rounded-mh-pill border border-mh-divider px-mh-3 py-1 font-mh-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-mh-text-secondary">
            Muster
          </span>
        </div>
        <ul className="mt-mh-3">
          {dossierRows.map((row) => (
            <li
              key={row}
              className="flex items-center justify-between gap-mh-3 border-b border-mh-divider py-mh-3"
            >
              <p className="font-mh-body text-[15px] font-medium leading-snug text-mh-text-primary">
                {row}
              </p>
              <span
                aria-hidden
                className="h-[18px] w-[18px] shrink-0 rounded-[4px] border-2 border-mh-divider"
              />
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-mh-3 text-center font-mh-body text-[14px] leading-relaxed text-mh-text-secondary">
        Wird vor dem Start bei Ihnen gemessen und schriftlich festgehalten —
        gegen diesen Ausgangspunkt zählen wir.
      </figcaption>
    </figure>
  );
}
