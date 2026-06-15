import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import { BlogArticleShell } from "@/components/myhiwi/blog/BlogArticleShell";

export const metadata: Metadata = {
  title: "Schema.org für Hotels und KMU — was Google wirklich braucht | MyHiwi Blog",
  description:
    "Strukturierte Daten sind unsichtbare SEO-Arbeit mit sichtbarem Effekt. Welche Schema-Typen KMU brauchen (Hotel, LocalBusiness, FAQ), wie man sie richtig setzt, und warum das Rich Results entscheidet.",
  keywords: [
    "Schema.org",
    "strukturierte Daten",
    "JSON-LD",
    "Hotel Schema",
    "LocalBusiness",
    "Rich Results",
  ],
  alternates: {
    canonical: "https://myhiwi.de/blog/schema-org-fuer-hotels-und-kmu",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Schema.org für Hotels und KMU",
  datePublished: "2026-04-24",
  author: { "@type": "Person", name: "Denis Kaliberda" },
  publisher: {
    "@type": "Organization",
    name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
    logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
  },
  mainEntityOfPage: "https://myhiwi.de/blog/schema-org-fuer-hotels-und-kmu",
};

export default function SchemaPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <BlogArticleShell
        category="Technisches SEO"
        date="24. April 2026"
        readTime="6 Min."
        title={
          <>
            Schema.org — die unsichtbare Sprache,{" "}
            <em className="mh-italic-accent">mit der Google Ihre Seite liest.</em>
          </>
        }
        lead={
          <>
            Eine Menschen sehen Ihre Hotel-Webseite. Google sieht Text — und rät, worum es
            geht. Mit Schema.org geben Sie Google eine strukturierte Beschreibung:
            „Das hier ist ein Hotel, hier die Zimmertypen, hier die Bewertungen, hier die
            Adresse." Das Resultat: Rich Results in den Suchergebnissen — mit Sternen,
            Preisen und Bildern direkt in der Google-Liste.
          </>
        }
        ctaTitle={
          <>
            Kein Schema auf{" "}
            <em className="mh-italic-accent text-mh-glow">Ihrer Seite</em>?
          </>
        }
        ctaLead="Das ist eine der schnellsten SEO-Maßnahmen überhaupt — und im Erstgespräch in 5 Minuten zu sehen."
      >
        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Was Schema.org ist.
          </h2>
          <p className="mt-3">
            Schema.org ist ein 2011 von Google, Microsoft und Yahoo gemeinsam gegründeter
            Standard, der über 800 Content-Typen beschreibt: Hotel, Produkt, Event,
            Rezept, FAQ, Stellenangebot, Person, Film … Sie markieren Ihren Content mit
            einem unsichtbaren JSON-LD-Block im HTML-Kopf — und Google weiß, was es liest.
          </p>
          <p>
            Ohne Schema liefert Google einen normalen „blauen Link“. Mit korrektem
            Schema kann derselbe Eintrag plötzlich Preis, Sterne-Bewertung, Öffnungszeiten
            und Bilder in der Vorschau enthalten — drei- bis fünfmal mehr Klicks bei
            gleicher Position.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Die 4 Schema-Typen, die fast jeder KMU braucht.
          </h2>

          <h3 className="mt-6 font-heading text-lg font-bold text-slate-900">
            1. LocalBusiness
          </h3>
          <p className="mt-2">
            Adresse, Telefonnummer, Öffnungszeiten, geografische Koordinaten. Gehört
            auf die Startseite und Kontaktseite jedes lokalen Unternehmens. Ohne diese
            Markierung erscheint Ihr Unternehmen zwar im Map Pack — aber ohne ergänzende
            Info-Snippets.
          </p>

          <h3 className="mt-6 font-heading text-lg font-bold text-slate-900">
            2. Branchen-spezifisch (Hotel, Restaurant, MedicalClinic, …)
          </h3>
          <p className="mt-2">
            Sub-Typen von LocalBusiness. Google erkennt dann: „Aha, ein Hotel“ — und
            zeigt anders als bei einer Autowerkstatt. Für Sonnenhof haben wir den Typ
            <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-sm">Hotel</code>
            gesetzt, mit Zimmertypen als
            <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-sm">HotelRoom</code>
            und Preisen als
            <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-sm">PriceSpecification</code>.
          </p>

          <h3 className="mt-6 font-heading text-lg font-bold text-slate-900">
            3. BreadcrumbList
          </h3>
          <p className="mt-2">
            Die Pfad-Navigation auf Ihrer Seite (Home → Zimmer → Doppelzimmer). Als
            Schema markiert erscheint sie in den Google-Ergebnissen direkt unter dem
            Titel — bessere Orientierung, höhere CTR.
          </p>

          <h3 className="mt-6 font-heading text-lg font-bold text-slate-900">
            4. FAQPage
          </h3>
          <p className="mt-2">
            Hat Ihre Seite einen FAQ-Bereich (Parkplatz, Hunde, Frühstück …)? Mit
            FAQPage-Schema klappt Google diese Fragen direkt im Suchergebnis aus.
            Nimmt doppelt so viel vertikalen Platz ein und bietet dem Nutzer die Antwort
            vor dem Klick.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            JSON-LD vs. Microdata — was die richtige Form ist.
          </h2>
          <p className="mt-3">
            Technisch gibt es drei Schema-Formate: Microdata (altes HTML-Inline),
            RDFa (wissenschaftlich) und JSON-LD. Google bevorzugt seit 2015 eindeutig
            JSON-LD — ein einzelner{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">&lt;script type=&quot;application/ld+json&quot;&gt;</code>
            -Block im{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">&lt;head&gt;</code>{" "}
            der Seite.
          </p>
          <p>
            Der Vorteil: sauber trennbar vom sichtbaren HTML, leichter zu pflegen,
            weniger Fehlerquellen. Next.js hat dafür nativ Unterstützung via{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">dangerouslySetInnerHTML</code>{" "}
            oder dedizierte Helper-Libraries.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Was KMU-Websites typisch falsch machen.
          </h2>
          <ul className="mt-4 space-y-2">
            {[
              "Kein Schema überhaupt — die Seite erscheint als nackter blauer Link.",
              "Veraltete Microdata im Elementor-Theme, während der Content längst woanders liegt.",
              "Widersprüchliches Schema: Öffnungszeiten im Footer-JSON-LD ≠ Zeiten auf Google Business Profil.",
              "FAQ-Schema für Inhalte, die gar nicht auf der Seite stehen — das ist eine Richtlinien-Verletzung.",
              "Adresse im Schema ohne PLZ oder mit falscher Schreibweise — das Map Pack blockiert dann komplett.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mh-warn" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Wie man es prüft.
          </h2>
          <p className="mt-3">
            Google stellt den{" "}
            <a
              href="https://search.google.com/test/rich-results"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Rich Results Test
            </a>{" "}
            kostenlos bereit. URL eingeben, „Ergebnisse prüfen“ klicken, und Google zeigt:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Welche Schema-Typen gefunden wurden.",
              "Ob die Pflichtfelder gesetzt sind.",
              "Ob der Eintrag für Rich Results qualifiziert ist.",
              "Wie das Ergebnis in der Google-Suche aussehen würde.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-mh-glow" strokeWidth={3} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal>
          <div className="my-8 rounded-mh-lg border border-mh-divider bg-blue-50 p-6 md:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blue-700">
              Praxis-Beispiel
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-800">
              Sonnenhof-Herrsching.de nutzt Hotel + LocalBusiness + BreadcrumbList —
              Teil der Infrastruktur, die zu 97 Top-10-Keywords geführt hat.
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
      </BlogArticleShell>
    </>
  );
}
