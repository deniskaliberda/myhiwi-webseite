"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Loader2, Mail, MessageSquare, SearchCheck } from "lucide-react";

import { Card } from "@/components/myhiwi/card/Card";
import { BtnGhost } from "@/components/myhiwi/cta/BtnGhost";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Container } from "@/components/myhiwi/layout/Container";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";

const fieldClass =
  "mt-mh-2 w-full rounded-mh-sm border border-mh-divider bg-mh-paper px-mh-4 py-mh-3 font-mh-body text-[16px] text-mh-text-primary shadow-sm transition-colors placeholder:text-mh-text-secondary/60 focus:border-mh-accent focus:outline-none focus:ring-2 focus:ring-mh-accent/20";

const labelClass = "mh-body-small font-semibold text-mh-text-primary";

export default function KontaktClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [region, setRegion] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (error) errorRef.current?.focus();
  }, [error]);

  useEffect(() => {
    if (done) successRef.current?.focus();
  }, [done]);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.style.height = "auto";
      messageRef.current.style.height = `${messageRef.current.scrollHeight}px`;
    }
  }, [message]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !website.trim() || !message.trim()) {
      setError("Name, E-Mail, Webseite/Firma und Anliegen sind nötig.");
      return;
    }

    if (!consent) {
      setError("Bitte bestätigen Sie die Einwilligung zur Kontaktaufnahme.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          website: website.trim(),
          message: [message.trim(), region.trim() ? `Ort / Region: ${region.trim()}` : ""].filter(Boolean).join("\n\n"),
          phone: phone.trim(),
          consent,
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || data?.success !== true) {
        setError(typeof data?.error === "string" ? data.error : "Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.");
        return;
      }
      setDone(true);
    } catch {
      setError("Die Verbindung wurde unterbrochen. Bitte versuchen Sie es erneut. Ihre Angaben bleiben erhalten.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <Section background="paper" padding="large" className="min-h-screen">
        <Container className="max-w-[980px]">
          <Card className="relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-mh-accent-soft blur-3xl"
            />
            <div className="relative" role="status" aria-live="polite">
              <SectionMark index="OK" label="Anfrage angekommen" tone="accent" />
              <h1 ref={successRef} tabIndex={-1} className="mt-mh-4 mh-display-2">
                Danke. Ihre Anfrage ist angekommen.
              </h1>
              <p className="mt-mh-4 max-w-mh-text mh-body-large text-mh-text-secondary">
                Ich schaue mir{" "}
                <span className="font-semibold text-mh-text-primary">
                  {website}
                </span>{" "}
                an und melde mich in 1–3 Werktagen per E-Mail mit einer
                ersten Einschätzung zu Ihrer Webseite und Sichtbarkeit.
              </p>
              <p className="mt-mh-4 max-w-mh-text mh-body-small text-mh-text-secondary">
                Falls es länger als drei Werktage dauert, schreiben Sie mir gerne
                direkt an{" "}
                <a
                  href="mailto:kontakt@myhiwi.de"
                  className="font-semibold text-mh-accent hover:text-mh-accent-hover"
                >
                  kontakt@myhiwi.de
                </a>
                .
              </p>
              <div className="mt-mh-6 flex flex-col gap-mh-3 sm:flex-row">
                <BtnGhost href="/" fullWidthOnMobile>
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Zur Startseite
                </BtnGhost>
                <BtnPrimary href="/case-studies" fullWidthOnMobile>
                  Projekte ansehen
                </BtnPrimary>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    );
  }

  return (
    <Section background="paper" padding="large">
      <Container>
        <div className="grid gap-mh-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionMark index="01" label="Kontakt" tone="accent" />
            <h1 className="mt-mh-4 mh-display-2">
              Wie sichtbar ist Ihr Betrieb?
            </h1>
            <p className="mt-mh-4 max-w-mh-text mh-body-large text-mh-text-secondary">
              Schicken Sie mir Ihre Webseite oder den Namen Ihres Betriebs.
              Sie erhalten in 1–3 Werktagen eine persönliche Ersteinschätzung:
              Wie wirkt Ihre Webseite, wie sind Sie bei Google auffindbar und
              welche Grundlagen fehlen für die KI-Suche?
            </p>

            <div className="mt-mh-6 grid gap-mh-3">
              <Card padded="compact" className="flex gap-mh-3">
                <SearchCheck
                  className="mt-1 h-5 w-5 shrink-0 text-mh-accent"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <div>
                  <h2 className="mh-body-small font-semibold text-mh-text-primary">
                    Ein klarer nächster Schritt
                  </h2>
                  <p className="mt-1 mh-body-xs text-mh-text-secondary">
                    Sie erfahren, wo sich eine Verbesserung Ihrer Webseite
                    oder lokalen Sichtbarkeit lohnt.
                  </p>
                </div>
              </Card>
              <Card padded="compact" className="flex gap-mh-3">
                <MessageSquare
                  className="mt-1 h-5 w-5 shrink-0 text-mh-accent"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <div>
                  <h2 className="mh-body-small font-semibold text-mh-text-primary">
                    Direkt mit Denis
                  </h2>
                  <p className="mt-1 mh-body-xs text-mh-text-secondary">
                    Ich sehe mir Ihren Betrieb an und beantworte Ihre
                    Fragen persönlich.
                  </p>
                </div>
              </Card>
              <Card padded="compact" className="flex gap-mh-3">
                <Mail
                  className="mt-1 h-5 w-5 shrink-0 text-mh-accent"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <div>
                  <h2 className="mh-body-small font-semibold text-mh-text-primary">
                    Antwort in 1–3 Werktagen
                  </h2>
                  <p className="mt-1 mh-body-xs text-mh-text-secondary">
                    Sie bekommen die Einschätzung per E-Mail. Für einen
                    Rückruf können Sie Ihre Telefonnummer angeben.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <Card as="form" onSubmit={handleSubmit} aria-busy={submitting} className="min-w-0 space-y-mh-5">
            <div>
              <h2 className="mh-display-4">Sichtbarkeitscheck anfragen</h2>
              <p className="mt-mh-2 mh-body-small text-mh-text-secondary">
                Ein paar Stichpunkte reichen. Mit * markierte Felder sind Pflichtfelder.
              </p>
            </div>

            <div>
              <label htmlFor="name" className={labelClass}>
                Vor- und Nachname *
              </label>
              <input
                id="name"
                name="name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Vor- und Nachname"
                autoComplete="name"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                E-Mail-Adresse *
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ihre@firma.de"
                autoComplete="email"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="website" className={labelClass}>
                Webseite oder Firma *
              </label>
              <input
                id="website"
                name="website"
                required
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="ihre-firma.de oder Firmenname"
                autoComplete="url"
                className={fieldClass}
              />
              <p className="mt-mh-2 mh-body-xs text-mh-text-secondary">
                URL falls vorhanden — sonst einfach Firmenname.
              </p>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Was möchten Sie verbessern? *
              </label>
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Zum Beispiel: eine neue Webseite, besser bei Google gefunden werden oder in der KI-Suche auftauchen."
                rows={4}
                className={`${fieldClass} min-h-[132px] resize-none`}
              />
            </div>

            <div>
              <label htmlFor="region" className={labelClass}>
                Ort oder Region <span className="font-normal text-mh-text-secondary">(optional)</span>
              </label>
              <input
                id="region"
                name="region"
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="Wo möchten Sie Kunden erreichen?"
                autoComplete="address-level2"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Telefon{" "}
                <span className="font-normal text-mh-text-secondary">
                  (optional)
                </span>
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Falls Sie lieber telefonieren möchten"
                autoComplete="tel"
                className={fieldClass}
              />
            </div>

            {error ? (
              <p ref={errorRef} tabIndex={-1} role="alert" className="rounded-mh-sm border border-red-200 bg-red-50 px-mh-4 py-mh-3 mh-body-small text-red-700">
                {error}
              </p>
            ) : null}

            <label className="flex cursor-pointer items-start gap-mh-3">
              <input
                type="checkbox"
                name="consent"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-[18px] w-[18px] shrink-0 cursor-pointer accent-[color:var(--mh-accent)]"
              />
              <span className="mh-body-xs text-mh-text-secondary">
                Ich bin einverstanden, dass MyHiwi sich zu meiner Anfrage bei mir meldet. *{" "}
                <a
                  href="/datenschutz"
                  className="font-semibold text-mh-accent hover:text-mh-accent-hover"
                >
                  Datenschutz
                </a>
              </span>
            </label>

            <div className="flex flex-col gap-mh-4 pt-mh-2">
              <p className="mh-body-xs text-mh-text-secondary">
                Mit der Anfrage entsteht kein Auftrag.
              </p>
              <BtnPrimary type="submit" disabled={submitting} fullWidthOnMobile>
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Senden…
                  </>
                ) : (
                  "Sichtbarkeitscheck anfragen"
                )}
              </BtnPrimary>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
