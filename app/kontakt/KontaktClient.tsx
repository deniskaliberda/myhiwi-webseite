"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Loader2, Mail, MessageSquare, SearchCheck } from "lucide-react";

import { Card } from "@/components/myhiwi/card/Card";
import { BtnGhost } from "@/components/myhiwi/cta/BtnGhost";
import { BtnPrimary } from "@/components/myhiwi/cta/BtnPrimary";
import { Container } from "@/components/myhiwi/layout/Container";
import { Section } from "@/components/myhiwi/layout/Section";
import { SectionMark } from "@/components/myhiwi/layout/SectionMark";
import { ComplianceNote } from "@/components/myhiwi/trust/ComplianceNote";

const fieldClass =
  "mt-mh-2 w-full rounded-mh-sm border border-mh-divider bg-mh-paper px-mh-4 py-mh-3 font-mh-body text-[16px] text-mh-text-primary shadow-sm transition-colors placeholder:text-mh-text-secondary/60 focus:border-mh-accent focus:outline-none focus:ring-2 focus:ring-mh-accent/20";

const labelClass = "mh-body-small font-semibold text-mh-text-primary";

export default function KontaktClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

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
        body: JSON.stringify({ name, email, website, message, phone, consent }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Anfrage konnte nicht gesendet werden.");
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
      <Section background="paper" padding="large" className="min-h-screen">
        <Container className="max-w-[980px]">
          <Card className="relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-mh-accent-soft blur-3xl"
            />
            <div className="relative">
              <SectionMark index="OK" label="Anfrage angekommen" tone="accent" />
              <h1 className="mt-mh-4 mh-display-2">
                Danke{name.trim() ? `, ${name.trim().split(" ")[0]}` : ""}.
              </h1>
              <p className="mt-mh-4 max-w-mh-text mh-body-large text-mh-text-secondary">
                Ich schaue mir{" "}
                <span className="font-semibold text-mh-text-primary">
                  {website}
                </span>{" "}
                in den nächsten Tagen an und melde mich per E-Mail mit einer
                ersten Einschätzung. Kein Auto-Responder, keine Vertriebs-Kette —
                eine kurze, ehrliche Antwort.
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
              Schicken Sie mir Ihre Webseite — ich schau mir das an.
            </h1>
            <p className="mt-mh-4 max-w-mh-text mh-body-large text-mh-text-secondary">
              Kurze Form ausfüllen. Ich melde mich in 1–3 Werktagen mit einer
              ehrlichen Ersteinschätzung: was funktioniert, was hängt und ob
              MyHiwi der richtige Partner ist.
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
                    Erste Sichtung statt Sales-Funnel
                  </h2>
                  <p className="mt-1 mh-body-xs text-mh-text-secondary">
                    Kein automatisches Angebot. Erst schauen, dann ehrlich
                    einschätzen.
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
                    Die Nachricht landet bei mir, nicht in einer fremden
                    Vertriebsstrecke.
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
                    Antwort in wenigen Werktagen
                  </h2>
                  <p className="mt-1 mh-body-xs text-mh-text-secondary">
                    Meist per E-Mail, optional telefonisch, wenn das einfacher
                    ist.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <Card as="form" onSubmit={handleSubmit} className="space-y-mh-5">
            <div>
              <h2 className="mh-display-4">Kostenlosen Digital-Check anfragen</h2>
              <p className="mt-mh-2 mh-body-small text-mh-text-secondary">
                Ein paar Stichpunkte reichen. Pflichtfelder sind Name, E-Mail,
                Webseite/Firma und Anliegen.
              </p>
            </div>

            <div>
              <label htmlFor="name" className={labelClass}>
                Wie heißen Sie?
              </label>
              <input
                id="name"
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
                Wo erreiche ich Sie per E-Mail?
              </label>
              <input
                id="email"
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
                Welche Webseite oder Firma?
              </label>
              <input
                id="website"
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
                Worum geht&apos;s?
              </label>
              <textarea
                ref={messageRef}
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Zwei, drei Sätze reichen — was läuft gerade nicht, was möchten Sie verbessern, oder einfach: Quick-Check bitte."
                rows={4}
                className={`${fieldClass} min-h-[132px] resize-none`}
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
                Ich bin einverstanden, dass MyHiwi sich zu meiner Anfrage bei mir meldet.{" "}
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
                Ihre Daten gehen direkt an MyHiwi — nicht an einen Sales-Bot oder
                eine fremde CRM-Kette.
              </p>
              <BtnPrimary type="submit" disabled={submitting} fullWidthOnMobile>
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Senden…
                  </>
                ) : (
                  "Anfrage senden"
                )}
              </BtnPrimary>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
