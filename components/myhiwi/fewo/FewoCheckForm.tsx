"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

import { useConsent } from "@/components/analytics/ConsentProvider";
import { fireLeadConversions } from "@/lib/conversions";
import { BtnGhost } from "@/components/myhiwi/cta/BtnGhost";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Card } from "@/components/myhiwi/card/Card";
import { ComplianceNote } from "@/components/myhiwi/trust/ComplianceNote";

const fieldClass =
  "mt-mh-2 w-full rounded-mh-sm border border-mh-divider bg-mh-paper px-mh-4 py-mh-3 font-mh-body text-[16px] text-mh-text-primary shadow-sm transition-colors placeholder:text-mh-text-secondary/60 focus:border-mh-accent focus:outline-none focus:ring-2 focus:ring-mh-accent/20";

const labelClass = "mh-body-small font-semibold text-mh-text-primary";

function newEventId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `mh-fewo-${crypto.randomUUID()}`;
  }
  return `mh-fewo-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/**
 * Inline FeWo "Direktbuchungs-Check" form on /fewo-direktbuchung.
 * Posts to /api/contact (Resend + server CAPI) and, after HTTP 200, fires the
 * browser-side Lead conversions when ad-tracking consent was granted.
 */
export function FewoCheckForm() {
  const { decision } = useConsent();
  const adConsent = decision === "granted";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If the visitor arrived via a Meta ad (fbclid in URL) and the pixel has not
  // set the _fbc cookie yet, seed it so the server-side CAPI gets a matching
  // fbc. Gated on consent — no ad cookie is written without opt-in.
  useEffect(() => {
    if (!adConsent) return;
    try {
      const fbclid = new URLSearchParams(window.location.search).get("fbclid");
      if (fbclid && !document.cookie.includes("_fbc=")) {
        document.cookie = `_fbc=fb.1.${Date.now()}.${fbclid}; path=/; max-age=7776000; SameSite=Lax`;
      }
    } catch {
      // ignore
    }
  }, [adConsent]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !website.trim()) {
      setError("Name, E-Mail und Ihre Unterkunft/Website sind nötig.");
      return;
    }
    if (!consent) {
      setError("Bitte bestätigen Sie die Einwilligung zur Kontaktaufnahme.");
      return;
    }

    const eventId = newEventId();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          website,
          message,
          phone,
          consent,
          event_id: eventId,
          adConsent,
          page: window.location.href,
          source: "fewo-direktbuchung",
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Anfrage konnte nicht gesendet werden.");
      }
      // Browser-side ad conversions (dedup against the server CAPI via eventId).
      if (adConsent) {
        fireLeadConversions(eventId);
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unbekannter Fehler");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <Card className="flex flex-col gap-mh-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
          <CheckCircle2 className="h-[22px] w-[22px]" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <h3 className="mh-display-4">
          Danke{name.trim() ? `, ${name.trim().split(" ")[0]}` : ""} — angekommen.
        </h3>
        <p className="max-w-mh-text mh-body-medium text-mh-text-secondary">
          Ich schaue mir{" "}
          <span className="font-semibold text-mh-text-primary">{website}</span>{" "}
          an und melde mich in 1–3 Werktagen mit dem Direktbuchungs-Check: wie
          viel Provision aktuell abfließt und wo der erste Hebel liegt. Kein
          Auto-Responder, keine Vertriebs-Kette.
        </p>
        <p className="mh-body-small text-mh-text-secondary">
          Dauert es länger als drei Werktage? Schreiben Sie mir direkt an{" "}
          <a
            href="mailto:kontakt@myhiwi.de"
            className="font-semibold text-mh-accent hover:text-mh-accent-hover"
          >
            kontakt@myhiwi.de
          </a>
          .
        </p>
        <div className="pt-mh-2">
          <BtnGhost href="/case-studies/sonnenhof-herrsching" fullWidthOnMobile>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Sonnenhof-Case ansehen
          </BtnGhost>
        </div>
      </Card>
    );
  }

  return (
    <Card as="form" onSubmit={handleSubmit} className="space-y-mh-5">
      <div>
        <h3 className="mh-display-4">Kostenlosen Direktbuchungs-Check anfragen</h3>
        <p className="mt-mh-2 mh-body-small text-mh-text-secondary">
          Ein paar Stichpunkte reichen. Pflichtfelder: Name, E-Mail und Ihre
          Unterkunft/Website.
        </p>
      </div>

      <div>
        <label htmlFor="fewo-name" className={labelClass}>
          Wie heißen Sie?
        </label>
        <input
          id="fewo-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Vor- und Nachname"
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="fewo-email" className={labelClass}>
          Wo erreiche ich Sie per E-Mail?
        </label>
        <input
          id="fewo-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ihre@unterkunft.de"
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="fewo-website" className={labelClass}>
          Ihre Unterkunft oder Website?
        </label>
        <input
          id="fewo-website"
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="z. B. pension-seeblick.de oder Name der Unterkunft"
          autoComplete="url"
          className={fieldClass}
        />
        <p className="mt-mh-2 mh-body-xs text-mh-text-secondary">
          URL falls vorhanden — sonst einfach der Name.
        </p>
      </div>

      <div>
        <label htmlFor="fewo-message" className={labelClass}>
          Kurz zur Ausgangslage{" "}
          <span className="font-normal text-mh-text-secondary">(optional)</span>
        </label>
        <textarea
          id="fewo-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="z. B. Anzahl Einheiten, welche Portale Sie heute nutzen, wie viel direkt läuft."
          rows={3}
          className={`${fieldClass} min-h-[104px] resize-none`}
        />
      </div>

      <div>
        <label htmlFor="fewo-phone" className={labelClass}>
          Telefon{" "}
          <span className="font-normal text-mh-text-secondary">(optional)</span>
        </label>
        <input
          id="fewo-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Falls Sie lieber telefonieren möchten"
          autoComplete="tel"
          className={fieldClass}
        />
      </div>

      {error ? (
        <p className="rounded-mh-sm border border-red-200 bg-red-50 px-mh-4 py-mh-3 mh-body-small text-red-700">
          {error}
        </p>
      ) : null}

      <ComplianceNote variant="compact" />

      <label className="flex cursor-pointer items-start gap-mh-3">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-[18px] w-[18px] shrink-0 cursor-pointer accent-[color:var(--mh-accent)]"
        />
        <span className="mh-body-xs text-mh-text-secondary">
          Ich bin einverstanden, dass MyHiwi sich zu meiner Anfrage bei mir
          meldet.{" "}
          <a
            href="/datenschutz"
            className="font-semibold text-mh-accent hover:text-mh-accent-hover"
          >
            Datenschutz
          </a>
        </span>
      </label>

      <div className="flex flex-col gap-mh-4 pt-mh-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="mh-body-xs text-mh-text-secondary">
          Ihre Daten gehen direkt an Denis — nicht an einen Sales-Bot oder eine
          fremde CRM-Kette.
        </p>
        <BtnPrimary type="submit" disabled={submitting} fullWidthOnMobile>
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Senden…
            </>
          ) : (
            "Check anfragen"
          )}
        </BtnPrimary>
      </div>
    </Card>
  );
}

export default FewoCheckForm;
