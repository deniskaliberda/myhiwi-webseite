"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Check, Loader2, ArrowLeft } from "lucide-react";

const tagOptions = [
  { id: "website", label: "Website" },
  { id: "buchung", label: "Buchungssystem" },
  { id: "zahlung", label: "Zahlungssystem" },
  { id: "ki-tool", label: "Eigenes KI-Tool" },
  { id: "app", label: "Brand-App" },
  { id: "anders", label: "Etwas anderes" },
];

const timelineOptions = [
  { id: "asap", label: "So schnell wie möglich" },
  { id: "quartal", label: "In 1–3 Monaten" },
  { id: "informieren", label: "Erst mal sondieren" },
];

export default function FestpreisPage() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>("");
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

  function toggleTag(id: string) {
    setTags((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError("Name, Kontakt und Beschreibung sind nötig.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/festpreis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message, tags, timeline }),
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
          <h1
            className="font-bold tracking-[-0.03em] leading-[1.02] text-slate-900"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.4rem)" }}
          >
            Danke, {name.split(" ")[0]}.
            <br />
            <span className="text-slate-400">Ich melde mich.</span>
          </h1>
          <div className="mt-10 text-lg md:text-xl leading-relaxed text-slate-600 font-light max-w-[640px] space-y-4">
            <p>
              Innerhalb von 24 Stunden bekommen Sie eine Antwort —
              entweder mit einem konkreten Festpreis-Vorschlag, oder
              mit zwei, drei Rückfragen, falls ich noch was wissen muss.
            </p>
            <p>
              Kein Verkaufs-Telefonat, keine Auto-Mails. Nur ein
              ehrlicher Vorschlag.
            </p>
          </div>
          <Link
            href="/"
            className="mt-16 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-[820px] px-6 pt-28 pb-32 sm:px-10 md:pt-36 md:pb-48">
        {/* Hero */}
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-600 font-semibold mb-6">
          Festpreis-Anfrage
        </p>
        <h1
          className="font-bold tracking-[-0.035em] leading-[0.98] text-slate-900"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.2rem)" }}
        >
          Erzählen Sie mir,
          <br />
          <span className="text-slate-400">was Sie brauchen.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-600 font-light max-w-[620px]">
          Keine Schritte, keine Klick-Strecke. Sie schreiben in eigenen Worten,
          ich melde mich innerhalb 24 Stunden mit einem konkreten Festpreis —
          oder mit Rückfragen, wenn ich noch was wissen muss.
        </p>

        <form onSubmit={handleSubmit} className="mt-20 space-y-16">
          {/* === Frage 1: Worum geht's? === */}
          <div>
            <label
              htmlFor="message"
              className="block text-base text-slate-500 mb-4"
            >
              <span className="font-mono text-xs text-slate-400 mr-3">01</span>
              Worum geht's? Beschreiben Sie kurz, was Sie vorhaben.
            </label>
            <textarea
              id="message"
              ref={messageRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Zum Beispiel: Wir sind eine Fahrschule in Brandenburg, haben eine alte Wix-Seite und wollen ein neues Anmelde-System mit Theorie-Termin-Anzeige. Schüler-App haben wir schon, soll bleiben…"
              className="w-full text-lg md:text-xl leading-relaxed text-slate-900 placeholder:text-slate-300 bg-transparent border-0 border-b-2 border-slate-200 focus:border-cyan-500 outline-none transition-colors py-3 resize-none overflow-hidden font-light"
              required
            />
          </div>

          {/* === Frage 2: Quick-Tags (optional) === */}
          <div>
            <p className="text-base text-slate-500 mb-5">
              <span className="font-mono text-xs text-slate-400 mr-3">02</span>
              Was passt am ehesten? <span className="text-slate-400 italic ml-1">— optional, mehrere möglich</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {tagOptions.map((tag) => {
                const active = tags.includes(tag.id);
                return (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => toggleTag(tag.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                      active
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    {active && <Check className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" strokeWidth={3} />}
                    {tag.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* === Frage 3: Wann? === */}
          <div>
            <p className="text-base text-slate-500 mb-5">
              <span className="font-mono text-xs text-slate-400 mr-3">03</span>
              Wann brauchen Sie das? <span className="text-slate-400 italic ml-1">— optional</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {timelineOptions.map((opt) => {
                const active = timeline === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setTimeline(active ? "" : opt.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                      active
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    {active && <Check className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" strokeWidth={3} />}
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* === Kontakt === */}
          <div className="pt-10 border-t border-slate-200 grid sm:grid-cols-2 gap-10">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-slate-500 mb-2"
              >
                Ihr Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Vor- und Nachname"
                className="w-full text-lg text-slate-900 placeholder:text-slate-300 bg-transparent border-0 border-b border-slate-200 focus:border-cyan-500 outline-none transition-colors py-2 font-light"
                required
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-sm text-slate-500 mb-2"
              >
                Email oder Telefon
              </label>
              <input
                id="contact"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="name@email.de oder 0151 12345678"
                className="w-full text-lg text-slate-900 placeholder:text-slate-300 bg-transparent border-0 border-b border-slate-200 focus:border-cyan-500 outline-none transition-colors py-2 font-light"
                required
              />
            </div>
          </div>

          {/* === Submit === */}
          <div className="pt-6">
            {error && (
              <p className="mb-6 text-sm text-red-600">{error}</p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Wird gesendet…
                </>
              ) : (
                <>
                  Anfrage senden
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
            <p className="mt-5 text-xs text-slate-400">
              Antwort innerhalb 24 Stunden. Keine Auto-Mails, kein Verkaufs-Spam.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
