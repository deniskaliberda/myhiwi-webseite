"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, ArrowLeft } from "lucide-react";

export default function KontaktPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Auto-grow textarea
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.style.height = "auto";
      messageRef.current.style.height = messageRef.current.scrollHeight + "px";
    }
  }, [message]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !website.trim() || !message.trim()) {
      setError("Name, E-Mail, Webseite/Firma und Anliegen sind nötig.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, website, message, phone }),
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
      <div className="bg-white text-slate-900 min-h-screen flex items-center">
        <div className="mx-auto max-w-[820px] px-6 py-32 sm:px-10 md:py-44">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-600 font-semibold mb-6">
            Anfrage angekommen
          </p>
          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
            Danke, {name.split(" ")[0]}.
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-slate-600">
            Ich schaue mir{" "}
            <span className="font-medium text-slate-900">{website}</span>{" "}
            in den nächsten Tagen an und melde mich per E-Mail bei Ihnen mit
            einer ersten Einschätzung. Kein Auto-Responder, keine
            Vertriebs-Kette — eine kurze, ehrliche Antwort.
          </p>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-slate-500">
            Falls es länger als drei Werktage dauert, schreiben Sie mir gerne
            direkt an{" "}
            <a
              href="mailto:kontakt@myhiwi.de"
              className="text-blue-600 hover:underline"
            >
              kontakt@myhiwi.de
            </a>
            .
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Zur Startseite
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-900/90"
            >
              Meine Projekte ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-[820px] px-6 pt-32 pb-20 sm:px-10 md:pt-40 md:pb-28">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-600 font-semibold">
          Webseite · Quick-Check
        </p>
        <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[56px]">
          Schicken Sie mir Ihre Webseite —{" "}
          <span className="gradient-text">ich schau mir das an.</span>
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-slate-600">
          Kurze Form unten ausfüllen. Ich melde mich in 1–3 Werktagen mit einer
          ehrlichen Ersteinschätzung — was funktioniert, was hängt, ob ich der
          richtige Partner für Sie bin. Kein Sales-Funnel, kein Auto-Responder.
        </p>

        <form onSubmit={handleSubmit} className="mt-14 space-y-10">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-900"
            >
              Wie heißen Sie?
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Vor- und Nachname"
              autoComplete="name"
              className="mt-3 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-lg text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-900"
            >
              Wo erreiche ich Sie per E-Mail?
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ihre@firma.de"
              autoComplete="email"
              className="mt-3 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-lg text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Webseite / Firma */}
          <div>
            <label
              htmlFor="website"
              className="block text-sm font-medium text-slate-900"
            >
              Welche Webseite oder Firma?
            </label>
            <input
              id="website"
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="ihre-firma.de oder Firmenname"
              autoComplete="url"
              className="mt-3 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-lg text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <p className="mt-2 text-xs text-slate-500">
              URL falls vorhanden — sonst einfach Firmenname.
            </p>
          </div>

          {/* Anliegen */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-900"
            >
              Worum geht's?
            </label>
            <textarea
              ref={messageRef}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Zwei, drei Sätze reichen — was läuft gerade nicht, was möchten Sie verbessern, oder einfach 'Quick-Check bitte'."
              rows={3}
              className="mt-3 w-full resize-none border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-lg text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Telefon optional */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-900"
            >
              Telefon{" "}
              <span className="font-normal text-slate-400">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Falls Sie lieber telefonieren möchten"
              autoComplete="tel"
              className="mt-3 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-lg text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>

          {error && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Ihre Daten gehen direkt an mich — nicht an einen Sales-Bot oder
              CRM-Funnel.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-900/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Senden…
                </>
              ) : (
                <>
                  Anfrage senden
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
