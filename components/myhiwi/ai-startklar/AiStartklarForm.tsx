"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { AI_STARTKLAR_FOCUS_OPTIONS } from "@/lib/ai-startklar/product";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Card } from "@/components/myhiwi/card/Card";

const fieldClass =
  "mt-mh-2 min-w-0 w-full max-w-full rounded-mh-sm border border-mh-divider bg-mh-paper px-mh-4 py-mh-3 font-mh-body text-[16px] text-mh-text-primary shadow-sm transition-colors placeholder:text-mh-text-secondary/60 focus:border-mh-accent focus:outline-none focus:ring-2 focus:ring-mh-accent/20";
const labelClass = "mh-body-small font-semibold text-mh-text-primary";

export function AiStartklarForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const values = new FormData(form);
    const payload = {
      company: values.get("company"),
      name: values.get("name"),
      email: values.get("email"),
      participants: Number(values.get("participants")),
      format: values.get("format"),
      timeframe: values.get("timeframe"),
      tools: values.get("tools"),
      focus: values.get("focus"),
      phone: values.get("phone"),
      message: values.get("message"),
      consent: values.get("consent") === "on",
      page: window.location.href,
    };

    setSubmitting(true);
    try {
      const response = await fetch("/api/ai-startklar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(
          data.error || "Anfrage konnte nicht gesendet werden.",
        );
      }
      setDone(true);
      form.reset();
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Anfrage konnte nicht gesendet werden.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <Card
        role="status"
        aria-live="polite"
        className="flex min-w-0 flex-col gap-mh-4 break-words"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mh-display-4">
          Danke – Ihre Anfrage ist angekommen.
        </h3>
        <p className="mh-body-medium text-mh-text-secondary">
          Wir prüfen, ob das Standardpaket zu Teilnehmerzahl, Format,
          Werkzeugen und Schwerpunkt passt, und melden uns persönlich mit dem
          passenden nächsten Schritt.
        </p>
      </Card>
    );
  }

  return (
    <form className="min-w-0" onSubmit={handleSubmit}>
      <Card className="min-w-0 space-y-mh-5 break-words">
        <div>
          <h3 className="mh-display-4">
            Unverbindliches Erstgespräch anfragen
          </h3>
          <p className="mt-mh-2 mh-body-small text-mh-text-secondary">
            Die Angaben helfen uns, Standardpaket und Sonderbedarf vor dem
            Gespräch zu unterscheiden.
          </p>
        </div>

        <div>
          <label htmlFor="ai-startklar-company" className={labelClass}>
            Unternehmen
          </label>
          <input
            id="ai-startklar-company"
            name="company"
            required
            maxLength={160}
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="ai-startklar-name" className={labelClass}>
            Vor- und Nachname
          </label>
          <input
            id="ai-startklar-name"
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="ai-startklar-email" className={labelClass}>
            Geschäftliche E-Mail-Adresse
          </label>
          <input
            id="ai-startklar-email"
            name="email"
            type="email"
            required
            maxLength={240}
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="ai-startklar-participants" className={labelClass}>
            Ungefähre Teilnehmerzahl
          </label>
          <input
            id="ai-startklar-participants"
            name="participants"
            type="number"
            required
            min={1}
            max={500}
            inputMode="numeric"
            aria-describedby="ai-startklar-participants-help"
            className={fieldClass}
          />
          <p
            id="ai-startklar-participants-help"
            className="mt-mh-2 mh-body-xs text-mh-text-secondary"
          >
            Das Standardpaket gilt für bis zu 15 Personen. Größere Gruppen
            kalkulieren wir individuell.
          </p>
        </div>
        <div>
          <label htmlFor="ai-startklar-format" className={labelClass}>
            Gewünschtes Format
          </label>
          <select
            id="ai-startklar-format"
            name="format"
            required
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Bitte wählen
            </option>
            <option value="online">Online</option>
            <option value="vor-ort">Vor Ort</option>
            <option value="offen">Noch offen</option>
          </select>
        </div>
        <div>
          <label htmlFor="ai-startklar-timeframe" className={labelClass}>
            Gewünschter Zeitraum
          </label>
          <input
            id="ai-startklar-timeframe"
            name="timeframe"
            required
            maxLength={120}
            placeholder="z. B. September 2026"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="ai-startklar-tools" className={labelClass}>
            Aktuell genutzte oder geplante KI-Werkzeuge
          </label>
          <textarea
            id="ai-startklar-tools"
            name="tools"
            required
            maxLength={500}
            rows={2}
            placeholder="z. B. Microsoft Copilot, ChatGPT oder noch offen"
            aria-describedby="ai-startklar-tools-help"
            className={`${fieldClass} resize-y`}
          />
          <p
            id="ai-startklar-tools-help"
            className="mt-mh-2 mh-body-xs font-semibold text-mh-text-secondary"
          >
            Bitte übermitteln Sie keine personenbezogenen, vertraulichen oder
            sicherheitsrelevanten Inhalte.
          </p>
        </div>
        <div>
          <label htmlFor="ai-startklar-focus" className={labelClass}>
            Gewünschter Schulungsfokus
          </label>
          <select
            id="ai-startklar-focus"
            name="focus"
            required
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Bitte wählen
            </option>
            {AI_STARTKLAR_FOCUS_OPTIONS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="ai-startklar-phone" className={labelClass}>
            Telefon{" "}
            <span className="font-normal text-mh-text-secondary">
              (optional)
            </span>
          </label>
          <input
            id="ai-startklar-phone"
            name="phone"
            type="tel"
            maxLength={80}
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="ai-startklar-message" className={labelClass}>
            Kurze Ergänzung{" "}
            <span className="font-normal text-mh-text-secondary">
              (optional)
            </span>
          </label>
          <textarea
            id="ai-startklar-message"
            name="message"
            maxLength={1600}
            rows={3}
            aria-describedby="ai-startklar-message-help"
            className={`${fieldClass} resize-y`}
          />
          <p
            id="ai-startklar-message-help"
            className="mt-mh-2 mh-body-xs font-semibold text-mh-text-secondary"
          >
            Bitte übermitteln Sie keine personenbezogenen, vertraulichen oder
            sicherheitsrelevanten Inhalte.
          </p>
        </div>

        {error ? (
          <p
            role="alert"
            aria-live="polite"
            className="rounded-mh-sm border border-red-200 bg-red-50 px-mh-4 py-mh-3 mh-body-small text-red-700"
          >
            {error}
          </p>
        ) : null}

        <label className="flex cursor-pointer items-start gap-mh-3">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-[color:var(--mh-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mh-accent focus-visible:ring-offset-2"
          />
          <span className="mh-body-xs text-mh-text-secondary">
            Ich bin einverstanden, dass MyHiwi sich zu meiner Anfrage bei mir
            meldet.{" "}
            <a
              href="/datenschutz"
              className="rounded-sm font-semibold text-mh-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mh-accent focus-visible:ring-offset-2"
            >
              Datenschutz
            </a>
          </span>
        </label>
        <BtnPrimary type="submit" disabled={submitting} fullWidthOnMobile>
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Wird gesendet…
            </>
          ) : (
            "Erstgespräch anfragen"
          )}
        </BtnPrimary>
      </Card>
    </form>
  );
}
