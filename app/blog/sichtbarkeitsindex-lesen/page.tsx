import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import { BlogArticleShell } from "@/components/myhiwi/blog/BlogArticleShell";

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
    name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
    logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
  },
  mainEntityOfPage: "https://myhiwi.de/blog/sichtbarkeitsindex-lesen",
};

export default function SichtbarkeitPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <BlogArticleShell
        category="SEO Reporting"
        date="24. April 2026"
        readTime="6 Min."
        title={
          <>
            Sichtbarkeitsindex —{" "}
            <em className="mh-italic-accent">und warum nur Top-10 Geld bringt</em>.
          </>
        }
        lead={
          <>
            Wenn Ihre Agentur Ihnen jeden Monat einen Bericht mit „Sichtbarkeitsindex
            gestiegen auf 0,42" schickt — was heißt das? Die Zahl ist aussagekräftig,
            aber nur wenn Sie wissen, wie sie zustande kommt und worauf sie nicht
            antwortet.
          </>
        }
        ctaTitle={
          <>
            Ihren Report{" "}
            <em className="mh-italic-accent text-mh-glow">durchsprechen</em>?
          </>
        }
        ctaLead="Schicken Sie mir vorab Ihren letzten Agentur-Report — im Erstgespräch dekodiere ich die Zahlen in 15 Minuten und sage ehrlich, was sie wirklich bedeuten."
      >
        <SectionReveal>
          <h2>Was der Sichtbarkeitsindex ist.</h2>
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
          <h2>Die 1 %-Regel, die alles verändert.</h2>
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
          <h2>Was ein guter Monats-Bericht enthalten muss.</h2>
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
                <TrendingUp className="mt-1 h-4 w-4 flex-shrink-0 text-mh-glow" strokeWidth={3} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal>
          <h2>Was oft fehlt — und wieso.</h2>
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
          <div className="my-8 rounded-mh-lg border border-mh-divider bg-blue-50 p-6 md:p-7">
            <p className="mh-label-mono-sm text-blue-700">
              Praxis-Beispiel
            </p>
            <p className="mt-3">
              Beim Sonnenhof haben wir die Top-10-Keywords in 100 Tagen von 24 auf 97
              vervierfacht — der sichtbarste Sprung in sechs Jahren SE-Ranking-Historie.
              Die komplette Verteilung (37 Top-5, 60 Top 6–10) im Case:
            </p>
            <Link
              href="/case-studies/sonnenhof-herrsching"
              className="mt-4 inline-flex items-center gap-1.5 font-semibold"
            >
              Sonnenhof Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>
      </BlogArticleShell>
    </>
  );
}
