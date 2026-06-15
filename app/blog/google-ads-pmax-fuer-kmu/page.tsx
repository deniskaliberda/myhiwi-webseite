import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import { BlogArticleShell } from "@/components/myhiwi/blog/BlogArticleShell";

export const metadata: Metadata = {
  title: "Google Ads Performance Max für KMU — was 2026 funktioniert | MyHiwi Blog",
  description:
    "Performance Max ist seit 2023 Googles Standard-Kampagnentyp. Wie es funktioniert, wann es für KMU rechnet, und was beim Sonnenhof-Ammersee zu 0,30 € CPC geführt hat — bei Branchenschnitt 1–3 €.",
  keywords: [
    "Google Ads Performance Max",
    "PMax KMU",
    "Google Ads Hotel",
    "CPC",
    "Performance Max Kampagne",
    "KMU Werbung",
  ],
  alternates: {
    canonical: "https://myhiwi.de/blog/google-ads-pmax-fuer-kmu",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Google Ads Performance Max für KMU — was 2026 funktioniert",
  datePublished: "2026-04-24",
  author: { "@type": "Person", name: "Denis Kaliberda" },
  publisher: {
    "@type": "Organization",
    name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
    logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
  },
  mainEntityOfPage: "https://myhiwi.de/blog/google-ads-pmax-fuer-kmu",
};

export default function PmaxPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <BlogArticleShell
        category="Google Ads"
        date="24. April 2026"
        readTime="7 Min."
        title={
          <>
            Google Ads Performance Max —{" "}
            <em className="mh-italic-accent">was 2026 für KMU wirklich funktioniert</em>.
          </>
        }
        lead={
          <>
            Performance Max (PMax) ist seit 2022 Googles Default-Antwort auf alle
            KMU-Werbung — eine einzige Kampagne bespielt Search, Display, YouTube, Gmail
            und Maps gleichzeitig. Richtig eingerichtet hat es beim Sonnenhof zu einem
            CPC von 0,30 € geführt — weit unter Branchenschnitt.
          </>
        }
        ctaTitle={
          <>
            PMax-Kampagne{" "}
            <em className="mh-italic-accent text-mh-glow">aufsetzen</em>?
          </>
        }
        ctaLead="Ich schaue mir im Erstgespräch Ihre aktuelle Situation an — Konversionsrate, Budget-Spielraum, Wettbewerb — und sage, ob PMax der richtige Einstieg ist."
      >
        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Was Performance Max ist.
          </h2>
          <p className="mt-3">
            Bis 2021 musste man für effektive Google-Werbung mindestens drei
            Kampagnentypen einzeln betreiben: Search-Ads für Google-Suchen,
            Display-Ads für Bannerflächen, Shopping-Ads für Produkte. Jede mit eigener
            Zielgruppen-, Keyword- und Budget-Logik.
          </p>
          <p>
            Performance Max macht daraus einen Topf: Sie laden Assets hoch (Texte,
            Bilder, Logos, Videos), definieren ein Ziel (z.&nbsp;B. „Leads“ oder
            „Buchungen“) und die Google-KI verteilt das Budget dynamisch über alle
            Kanäle — dort, wo pro Euro die meisten Conversions anfallen.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Warum PMax für KMU besonders passt.
          </h2>
          <ul className="mt-4 space-y-2">
            {[
              "Keine Kampagnen-Operation nötig. Die KI macht Bid-Management, Targeting und Creative-Rotation.",
              "Kleine Budgets (ab 300 €/Monat) reichen für Lernphase und erste Conversions.",
              "Google kombiniert First-Party-Daten (Website-Besucher, Conversion-Events) mit eigenen Signalen — das ist für kleine Accounts unmöglich nachzubauen.",
              "Content-Gap-Erkennung: PMax zeigt, welche Asset-Varianten besser performen — echte Hinweise für die Landing-Page.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-mh-glow" strokeWidth={3} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Wo PMax killt — wenn man es falsch aufsetzt.
          </h2>
          <p className="mt-3">
            Die dunkle Seite: PMax ist eine Black Box. Sie sehen keine Suchbegriffe, auf
            die Sie ranken, und bekommen kaum Einblick, an welchen Kanal das Budget
            fließt. Das führt zu den drei häufigsten Pannen:
          </p>

          <h3 className="mt-6 font-heading text-lg font-bold text-slate-900">
            1. Keine Conversion-Events, keine Optimierung.
          </h3>
          <p className="mt-2">
            Ohne saubere Conversion-Events (Formular-Absendung, Anruf, Buchung) hat
            die Google-KI nichts zu optimieren. Das Budget fließt irgendwo hin, mit
            null steuerbarem Resultat.
          </p>

          <h3 className="mt-6 font-heading text-lg font-bold text-slate-900">
            2. Brand-Kannibalisierung.
          </h3>
          <p className="mt-2">
            Standardmäßig bietet PMax auch auf den eigenen Markennamen. Das heißt, Sie
            zahlen Google Geld dafür, dass jemand, der nach Ihrem Namen sucht, Sie
            findet — ein Lead, den Sie eh bekommen hätten. Mit „Brand-Exclusions“ lässt
            sich das abschalten.
          </p>

          <h3 className="mt-6 font-heading text-lg font-bold text-slate-900">
            3. Kein lokaler Fokus.
          </h3>
          <p className="mt-2">
            Hotel am Ammersee? Dann brauchen Sie Radius-Targeting auf Bayern und
            Umland — sonst zahlen Sie für Klicks aus Hamburg, die nie buchen. Location
            in den Kampagnen-Settings ist Pflicht, nicht Option.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Die Setup-Reihenfolge, die funktioniert.
          </h2>
          <ol className="mt-4 space-y-3 list-decimal pl-5">
            <li>
              <strong>Tracking zuerst.</strong> Konversions-Ereignisse in GA4 und Google
              Ads eingerichtet, Test-Konversion verifiziert. Ohne das keine Kampagne.
            </li>
            <li>
              <strong>Assets in Maximum-Mengen.</strong> Google empfiehlt 5 Headlines, 5
              Descriptions, 5 Bilder, 1 Logo, 1 Video. Unter der Hälfte startet die
              Kampagne gar nicht richtig.
            </li>
            <li>
              <strong>Asset Groups nach Kategorien.</strong> Für Sonnenhof: eine Group
              „Familien“, eine „Hund“, eine „Wellness“. Jede mit spezifischen Assets —
              dann versteht die KI die Nischen.
            </li>
            <li>
              <strong>Brand-Exclusion-Liste.</strong> Der eigene Markenname + Variationen
              raus, sobald die Lernphase durch ist (14–21 Tage).
            </li>
            <li>
              <strong>Location-Targeting sauber.</strong> Bei lokalen Betrieben: max.
              50 km Radius, plus Top-3 Stadt-Namen als Zusatz.
            </li>
            <li>
              <strong>Budget langsam hochfahren.</strong> 300 € für 14 Tage, dann +20 %
              pro Woche bei stabilen CPL-Werten.
            </li>
          </ol>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Sonnenhof-Zahlen — März 2026.
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              ["2.242", "Klicks im Monat"],
              ["88.713", "Impressionen"],
              ["0,30 €", "Avg. CPC (Branche 1–3 €)"],
              ["86 %", "Optimierungsscore"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-mh-lg border border-mh-divider bg-slate-50 p-5">
                <p className="font-heading text-3xl font-extrabold leading-none tracking-tight">
                  <span className="gradient-text">{v}</span>
                </p>
                <p className="mt-2 text-sm text-slate-600">{l}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
            Quelle: Google Ads Account · Zeitraum 10. März – 10. April 2026
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="my-8 rounded-mh-lg border border-mh-divider bg-blue-50 p-6 md:p-7">
            <p className="mh-label-mono-sm text-blue-700">Praxis-Beispiel</p>
            <p className="mt-3">
              Der komplette Ads-Kontext, inklusive der 100-Tage-Timeline und dem
              Zusammenspiel mit organischer Sichtbarkeit:
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
