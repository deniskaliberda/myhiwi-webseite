import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Megaphone, Check } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

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
    name: "MyHiwi UG",
    logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
  },
  mainEntityOfPage: "https://myhiwi.de/blog/google-ads-pmax-fuer-kmu",
};

export default function PmaxPost() {
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
              <Megaphone className="h-3 w-3" /> Google Ads
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="h-3 w-3" /> 24. April 2026
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="h-3 w-3" /> 7 Min. Lesezeit
            </span>
          </div>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
            Google Ads Performance Max —{" "}
            <span className="gradient-text">was 2026 für KMU wirklich funktioniert.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Performance Max (PMax) ist seit 2022 Googles Default-Antwort auf alle
            KMU-Werbung — eine einzige Kampagne bespielt Search, Display, YouTube, Gmail
            und Maps gleichzeitig. Richtig eingerichtet hat es beim Sonnenhof zu einem
            CPC von 0,30 € geführt — weit unter Branchenschnitt.
          </p>
        </div>
      </section>

      <article className="relative bg-white pb-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 space-y-8 text-base leading-relaxed text-slate-700 md:text-lg">
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
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-500" strokeWidth={3} />
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
                <div key={l} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
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
            <div className="my-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 md:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-blue-700">
                Praxis-Beispiel
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-800">
                Der komplette Ads-Kontext, inklusive der 100-Tage-Timeline und dem
                Zusammenspiel mit organischer Sichtbarkeit:
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
            PMax-Kampagne aufsetzen?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Ich schaue mir im Erstgespräch Ihre aktuelle Situation an — Konversionsrate,
            Budget-Spielraum, Wettbewerb — und sage, ob PMax der richtige Einstieg ist.
          </p>
          <Link
            href="/kontakt"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600"
          >
            Quick-Check anfragen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
