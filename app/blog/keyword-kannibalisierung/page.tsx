import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Check } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import { BlogArticleShell } from "@/components/myhiwi/blog/BlogArticleShell";

export const metadata: Metadata = {
  title: "Keyword-Kannibalisierung verstehen und fixen | MyHiwi Blog",
  description:
    "Was Keyword-Kannibalisierung ist, wie sie entsteht, und wie Sonnenhof Herrsching damit in 100 Tagen die Top-10-Keywords vervierfachen konnte. Praktischer Leitfaden für KMU-Websites.",
  keywords: [
    "Keyword-Kannibalisierung",
    "SEO-Fehler",
    "Google Ranking",
    "Top-10-Keywords",
    "Canonical Tags",
    "Local SEO",
  ],
  alternates: {
    canonical: "https://myhiwi.de/blog/keyword-kannibalisierung",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Keyword-Kannibalisierung verstehen und fixen",
  datePublished: "2026-04-24",
  author: { "@type": "Person", name: "Denis Kaliberda" },
  publisher: {
    "@type": "Organization",
    name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
    logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
  },
  mainEntityOfPage: "https://myhiwi.de/blog/keyword-kannibalisierung",
};

export default function KeywordKannibalisierungPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <BlogArticleShell
        category="Technisches SEO"
        date="24. April 2026"
        readTime="7 Min."
        title={
          <>
            Keyword-Kannibalisierung: der stille Killer{" "}
            <em className="mh-italic-accent">Ihrer Top-10-Platzierungen</em>.
          </>
        }
        lead={
          <>
            Im März 2026 hatte die Sonnenhof-Website 46 Top-10-Keywords bei Google. Einen
            Monat später waren es 97 — mehr als verdoppelt, ohne eine einzige neue Seite.
            Der wichtigste Grund: wir haben einen Fehler behoben, den 70 % aller
            KMU-Websites unbemerkt mit sich schleppen — Keyword-Kannibalisierung.
          </>
        }
        ctaTitle={
          <>
            Kannibalisierung auf{" "}
            <em className="mh-italic-accent text-mh-glow">Ihrer Seite</em>?
          </>
        }
        ctaLead="In 15 Minuten kann ich sehen, ob Ihre Website an diesem Problem leidet — und wo der Hebel für die ersten Top-10-Gewinne steckt."
      >
        <SectionReveal>
          <h2>Was ist Keyword-Kannibalisierung?</h2>
          <p className="mt-3">
            Keyword-Kannibalisierung heißt: mehrere Seiten Ihrer Website ranken bei
            Google auf dasselbe Suchwort — und jede einzelne zieht dabei die Ranking-Kraft
            der anderen runter. Statt <strong>einer</strong> starken Seite auf Position 3
            haben Sie drei halb-starke Seiten auf Position 12, 18 und 27.
          </p>
          <p className="mt-3">
            Google versteht dann nicht mehr, welche Seite die „Hauptversion“ für dieses
            Thema ist. Das Ergebnis: keine davon schafft es in die Top-10. Und nur Top-10
            bringt nennenswerten Traffic.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2>Wie entsteht das — ganz automatisch.</h2>
          <p className="mt-3">Die häufigsten Ursachen auf KMU-Websites:</p>
          <ul className="mt-4 space-y-3">
            {[
              "Ein Blog-Post und eine Produktseite bedienen das gleiche Thema aus unterschiedlichen Winkeln — Google kann nicht entscheiden, welche die bessere Antwort ist.",
              "Mehrere Service-Unterseiten („Zimmer“, „FeWo“, „Apartments“) konkurrieren um „Unterkunft am Ammersee“.",
              "Kategorie-Seiten im Shop überlappen mit Filter-URLs (z.B. /katalog und /katalog?kategorie=ringe).",
              "Duplicate Titles: zwei Seiten haben denselben Title-Tag — für Google praktisch identisch.",
              "Die klassische Falle: „SEO-optimiert“ heißt für viele Agenturen, jede Seite ein bestimmtes Keyword zu „bekommen“ — und schon verteilt sich dasselbe Keyword auf fünf Seiten.",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-mh-warn" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal>
          <h2>So erkennen Sie es.</h2>
          <p className="mt-3">Zwei Signale, die zuverlässig Kannibalisierung verraten:</p>
          <ol className="mt-4 space-y-3 list-decimal pl-5">
            <li>
              <strong>Google Search Console:</strong> klicken Sie auf ein Keyword, für das
              Sie ranken. Wenn die Spalte „Seite“ mehrere URLs derselben Domain zeigt,
              haben Sie Kannibalisierung.
            </li>
            <li>
              <strong>Ranking-Schwankungen:</strong> wenn ein Keyword wechselweise mit
              zwei unterschiedlichen URLs in Position 8 / 15 / 20 / 9 / 14 springt, teilen
              sich die URLs das Ranking.
            </li>
          </ol>
        </SectionReveal>

        <SectionReveal>
          <h2>Was wir am Sonnenhof gefixt haben.</h2>
          <p className="mt-3">
            Bei Sonnenhof-Herrsching.de rangen im März 2026 drei Seiten um die Begriffe
            „Ammersee Ferienwohnung“, „Ferienwohnung Herrsching“ und „Urlaub am Ammersee“.
            Konkret:
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <code>/ferienwohnungen</code> → Position 14
            </li>
            <li>
              <code>/zimmer</code> → Position 22 (mit überlappendem Content)
            </li>
            <li>
              <code>/ausflugsziele-ammersee</code> → Position 9 (Blog-Post, der eigentlich
              über Orte redet, nicht über Buchung)
            </li>
          </ul>
          <p className="mt-4">Der Fix in drei Schritten:</p>
          <ol className="mt-3 space-y-3 list-decimal pl-5">
            <li>
              <strong>Eine klare Ziel-Seite definieren</strong> — für Buchungs-Suchen ist
              das <code>/ferienwohnungen</code>, nicht der Blog-Post.
            </li>
            <li>
              <strong>Content neu zuschneiden</strong> — der Blog-Post behandelt jetzt
              ausschließlich Ausflüge und verweist auf die Ferienwohnungs-Seite für
              Buchungen. Keine Dopplung mehr.
            </li>
            <li>
              <strong>Interne Links umbauen</strong> — alle internen Verweise aus Blog und
              Menü zeigen konsistent auf die gewünschte Ziel-Seite. Google folgt dieser
              Gewichtung.
            </li>
          </ol>
          <p className="mt-4">
            Ergebnis: von 46 auf 97 Top-10-Keywords zwischen März und April — der größte
            Einzelsprung in sechs Jahren SE-Ranking-Historie der Domain.
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="my-8 rounded-mh-lg border border-mh-divider bg-blue-50 p-6 md:p-7">
            <p className="mh-label-mono-sm text-blue-700">Praxis-Beispiel</p>
            <p className="mt-3">
              Die komplette Zahlen-Entwicklung und die 6-Schritte-Timeline zum
              Sonnenhof-Fall liegt hier:
            </p>
            <Link
              href="/case-studies/sonnenhof-herrsching"
              className="mt-4 inline-flex items-center gap-1.5 font-semibold"
            >
              Case Study Sonnenhof Herrsching ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>

        <SectionReveal>
          <h2>Was Sie selbst machen können.</h2>
          <ul className="mt-4 space-y-2">
            {[
              "In Google Search Console: Top-20-Keywords durchgehen, prüfen welche URL rankt.",
              "Mehrfach-Rankings (≥ 2 URLs pro Keyword) notieren — das sind Ihre Kandidaten.",
              "Für jedes betroffene Keyword entscheiden: welche einzige Seite soll ranken.",
              "Die anderen Seiten entweder einstampfen (301-Redirect) oder inhaltlich auf ein anderes Keyword abgrenzen.",
              "Mindestens 4 Wochen Geduld — Google braucht Zeit, bis die Rankings sich neu sortieren.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-mh-glow" strokeWidth={3} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </BlogArticleShell>
    </>
  );
}
