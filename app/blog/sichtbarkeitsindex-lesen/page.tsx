import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, TrendingUp, BarChart3 } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Sichtbarkeitsindex lesen — was Top-10-Keywords wirklich bedeuten | MyHiwi Blog",
  description:
    "Was der Sichtbarkeitsindex bei Sistrix und SE Ranking aussagt, warum nur Top-10-Keywords Traffic bringen, und wie man als KMU-Inhaber einen Monats-Bericht richtig interpretiert.",
  keywords: [
    "Sichtbarkeitsindex",
    "Sistrix",
    "SE Ranking",
    "Top-10-Keywords",
    "SEO Reporting",
    "Local SEO",
  ],
  alternates: {
    canonical: "https://myhiwi.de/blog/sichtbarkeitsindex-lesen",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Sichtbarkeitsindex lesen — was Top-10-Keywords wirklich bedeuten",
  datePublished: "2026-04-24",
  author: { "@type": "Person", name: "Denis Kaliberda" },
  publisher: {
    "@type": "Organization",
    name: "MyHiwi UG",
    logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
  },
  mainEntityOfPage: "https://myhiwi.de/blog/sichtbarkeitsindex-lesen",
};

export default function SichtbarkeitPost() {
  return (
    <div className="bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden pt-28 pb-12 md:pt-36">
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div className="relative mx-auto w-full max-w-3xl px-4 sm:px-6">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600">
            <ArrowLeft className="h-3.5 w-3.5" /> Zurück zum Blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-blue-700">
              <BarChart3 className="h-3 w-3" /> SEO Reporting
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="h-3 w-3" /> 24. April 2026
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="h-3 w-3" /> 6 Min. Lesezeit
            </span>
          </div>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
            Sichtbarkeitsindex —{" "}
            <span className="gradient-text">und warum nur Top-10 Geld bringt.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Wenn Ihre Agentur Ihnen jeden Monat einen Bericht mit „Sichtbarkeitsindex
            gestiegen auf 0,42" schickt — was heißt das? Die Zahl ist aussagekräftig,
            aber nur wenn Sie wissen, wie sie zustande kommt und worauf sie nicht
            antwortet.
          </p>
        </div>
      </section>

      <article className="relative bg-white pb-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 space-y-8 text-base leading-relaxed text-slate-700 md:text-lg">
          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Was der Sichtbarkeitsindex ist.
            </h2>
            <p className="mt-3">
              Der Sichtbarkeitsindex ist eine von Sistrix erfundene und inzwischen in
              praktisch allen SEO-Tools (SE Ranking, Semrush, Ahrefs) übernommene Metrik,
              die alle Keyword-Positionen einer Domain in eine einzige Zahl verdichtet.
              Grob: wie hoch rankt die Domain bei wie vielen relevanten Suchbegriffen?
            </p>
            <p>
              Jedes gerankte Keyword fließt gewichtet ein — hohe Positionen (Top 3)
              zählen viel, Position 50 fast nichts. Dazu kommt das geschätzte Suchvolumen:
              ein Top-5 für „Hotel Ammersee“ (2.000 Suchen/Mo) zählt mehr als ein
              Top-5 für „Frühstück Herrsching serviert“ (50 Suchen/Mo).
            </p>
          </SectionReveal>

          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Die 1 %-Regel, die alles verändert.
            </h2>
            <p className="mt-3">
              Studien von Advanced Web Ranking (2025) zeigen die brutale Wahrheit über
              Klickraten auf Google:
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-3 text-left font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">Position</th>
                    <th className="p-3 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">Ø Klickrate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Platz 1", "27,6 %"],
                    ["Platz 2", "15,8 %"],
                    ["Platz 3", "11,0 %"],
                    ["Platz 4–5", "6–8 %"],
                    ["Platz 6–10", "2–5 %"],
                    ["Platz 11 (= Seite 2)", "~ 1 %"],
                    ["Platz 20+", "< 0,5 %"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-t border-slate-100">
                      <td className="p-3 text-slate-700">{k}</td>
                      <td className="p-3 text-right font-heading font-bold text-slate-900">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Das heißt: ein Keyword auf Position 15 bringt praktisch keinen Traffic.
              Die gesamte Ranking-Arbeit zielt darauf ab, Keywords von 11–30 auf 1–10 zu
              heben. Alles unterhalb von Platz 10 ist Zukunfts-Potenzial, nicht aktueller
              Erfolg.
            </p>
          </SectionReveal>

          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Was ein guter Monats-Bericht enthalten muss.
            </h2>
            <ul className="mt-4 space-y-2">
              {[
                "Anzahl Top-10-Keywords (und Entwicklung vs. Vormonat) — das Wichtigste.",
                "Anzahl Top-3-Keywords — nur diese bringen Traffic in zweistelligen Klickraten.",
                "Verteilung der Keywords nach Positions-Bucket (1–5 / 6–10 / 11–20 / 21–50).",
                "Die Top-10 wichtigsten Keywords namentlich — nicht nur die Zahl.",
                "Traffic-Schätzung aus diesen Keywords (= tatsächliche Besucher).",
                "Vergleich zum Vormonat UND zum gleichen Monat im Vorjahr (wegen Saisonalität).",
                "Optional: eine Kommentar-Zeile, was sich bewegt hat und warum.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <TrendingUp className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-500" strokeWidth={3} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Was oft fehlt — und wieso.
            </h2>
            <p className="mt-3">
              Viele SEO-Reports zeigen stolz „47 Keywords im Ranking!“ — und verschweigen,
              dass 44 davon auf Position 30–100 stehen. Diese Zahlen sind Kosmetik, kein
              Fortschritt.
            </p>
            <p>
              Die zwei Fragen, die ein Inhaber jeden Monat stellen sollte:
            </p>
            <ol className="mt-3 space-y-3 list-decimal pl-5">
              <li>
                <strong>Wie viele Keywords sind in den Top 10?</strong> Das ist die
                einzige Zahl, die Traffic direkt übersetzt.
              </li>
              <li>
                <strong>Welches ist das wichtigste davon?</strong> Für einen
                Ammersee-Hotelier sollte „Hotel Ammersee“ oder „Ferienwohnung Herrsching“
                in den Top 5 stehen — sonst läuft SEO am Ziel vorbei.
              </li>
            </ol>
          </SectionReveal>

          <SectionReveal>
            <div className="my-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 md:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blue-700">
                Praxis-Beispiel
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-800">
                Beim Sonnenhof haben wir die Top-10-Keywords in 100 Tagen von 24 auf 97
                vervierfacht — der sichtbarste Sprung in sechs Jahren SE-Ranking-Historie.
                Die komplette Verteilung (37 Top-5, 60 Top 6–10) im Case:
              </p>
              <Link
                href="/case-studies/sonnenhof-herrsching"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 transition-colors hover:text-blue-800"
              >
                Sonnenhof Case Study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </article>

      <section className="relative bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Ihren Report durchsprechen?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Schicken Sie mir vorab Ihren letzten Agentur-Report — im Erstgespräch
            dekodiere ich die Zahlen in 15 Minuten und sage ehrlich, was sie wirklich
            bedeuten.
          </p>
          <Link
            href="/kontakt"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600"
          >
            Kostenloses Erstgespräch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
