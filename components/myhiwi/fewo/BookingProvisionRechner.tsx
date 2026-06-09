"use client";

import { useState } from "react";
import { Card } from "@/components/myhiwi/card/Card";

const eur = (n: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)));

const fieldClass =
  "mt-mh-2 w-full rounded-mh-sm border border-mh-divider bg-mh-paper px-mh-4 py-mh-3 font-mh-body text-[16px] text-mh-text-primary shadow-sm transition-colors focus:border-mh-accent focus:outline-none focus:ring-2 focus:ring-mh-accent/20";
const labelClass = "mh-body-small font-semibold text-mh-text-primary";

function toNum(v: string, fallback: number) {
  const n = parseFloat(v.replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

/**
 * Interactive Booking.com commission calculator (FeWo wedge asset).
 * Inputs are industry-defensible ranges; all numbers are the visitor's own —
 * nothing fabricated. Result is the yearly commission + the savings from
 * shifting a few bookings to direct.
 */
export function BookingProvisionRechner() {
  const [buchungen, setBuchungen] = useState(20);
  const [wert, setWert] = useState(500);
  const [prozent, setProzent] = useState(15);

  const proBuchung = wert * (prozent / 100);
  const proJahr = buchungen * 12 * proBuchung;
  const spar5 = 5 * 12 * proBuchung;

  return (
    <Card className="grid gap-mh-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
      <div className="grid gap-mh-5">
        <div>
          <label htmlFor="rechner-buchungen" className={labelClass}>
            Buchungen über Booking.com pro Monat
          </label>
          <input
            id="rechner-buchungen"
            type="number"
            inputMode="numeric"
            min={0}
            value={buchungen}
            onChange={(e) => setBuchungen(toNum(e.target.value, 0))}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="rechner-wert" className={labelClass}>
            Durchschnittlicher Buchungswert (€)
          </label>
          <input
            id="rechner-wert"
            type="number"
            inputMode="numeric"
            min={0}
            value={wert}
            onChange={(e) => setWert(toNum(e.target.value, 0))}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="rechner-prozent" className={`${labelClass} flex items-center justify-between`}>
            <span>Effektiver Provisionssatz</span>
            <span className="font-bold text-mh-accent">{prozent} %</span>
          </label>
          <input
            id="rechner-prozent"
            type="range"
            min={10}
            max={25}
            step={1}
            value={prozent}
            onChange={(e) => setProzent(toNum(e.target.value, 15))}
            className="mt-mh-3 w-full accent-[color:var(--mh-accent)]"
          />
          <p className="mt-mh-2 mh-body-xs text-mh-text-secondary">
            Basis meist 12–15 %; mit Genius + Preferred Partner + Zahlungsgebühren effektiv bis ~25 %.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-mh-3 rounded-mh-lg bg-mh-ink-950 p-mh-6 text-mh-text-on-dark">
        <span className="mh-label-mono-sm text-mh-text-on-dark/70">Provision pro Jahr an Booking.com</span>
        <span className="mh-display-2 text-mh-glow">{eur(proJahr)}</span>
        <div className="mt-mh-2 grid gap-mh-2 border-t border-mh-text-on-dark/15 pt-mh-3">
          <p className="mh-body-small text-mh-text-on-dark/85">
            ≈ <strong className="text-mh-text-on-dark">{eur(proBuchung)}</strong> pro Buchung
          </p>
          <p className="mh-body-small text-mh-text-on-dark/85">
            Schon <strong className="text-mh-text-on-dark">5 Direktbuchungen/Monat</strong> sparen
            ≈ <strong className="text-mh-text-on-dark">{eur(spar5)}</strong> im Jahr.
          </p>
        </div>
        <p className="mt-mh-2 mh-body-xs text-mh-text-on-dark/55">
          Ihre eigenen Zahlen · Richtwert, keine Garantie
        </p>
      </div>
    </Card>
  );
}

export default BookingProvisionRechner;
