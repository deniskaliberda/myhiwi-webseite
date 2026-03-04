import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  Award,
  TrendingUp,
  BarChart3,
  Globe,
  Search,
  Target,
  CheckCircle,
  Zap,
  Building2,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Case Study: Sonnenhof Herrsching – Von 0% auf 34,6% Sichtbarkeit in 4 Wochen | MyHiwi Blog",
  description:
    "Wie eine familiengeführte Pension am Ammersee durch neue Website und SEO-Optimierung 14 Keywords in die Top 3 brachte. Echte Ergebnisse, keine leeren Versprechen.",
  keywords: [
    "Case Study Local SEO",
    "SEO Ergebnisse",
    "Pension Herrsching SEO",
    "Sonnenhof Herrsching",
    "Local SEO Fallstudie",
    "Website Relaunch Ergebnisse",
    "Ferienwohnung Ammersee",
  ],
  alternates: {
    canonical: "https://myhiwi.de/blog/sonnenhof-case-study",
  },
};

export default function SonnenhofCaseStudyPost() {
  return (
    <main className="min-h-screen pt-20">
      {/* Article Header */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-green-50/30 to-cyan-50/30" />
        <div className="absolute top-10 right-[10%] w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-float" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Zur&uuml;ck zum Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Case Study
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar className="w-3 h-3" />
                3. M&auml;rz 2026
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3 h-3" />
                10 Min. Lesezeit
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold text-primary mb-6 leading-tight">
              Von unsichtbar zu Seite 1: Wie der Sonnenhof Herrsching in 4
              Wochen bei Google{" "}
              <span className="gradient-text">durchstartete</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              <strong>
                Eine familiengeführte Pension am Ammersee, eine Website aus
                einer anderen Ära und null Sichtbarkeit bei Google.
              </strong>{" "}
              4 Wochen nach dem Start der SEO-Optimierung: 14 Keywords in den
              Top&nbsp;3, 23 in den Top&nbsp;10 und ein perfekter technischer
              Health Score von 100/100.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <article className="prose-custom">
              {/* Section: Der Kunde */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-4 mt-0">
                Der Kunde: Sonnenhof Herrsching
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Der Sonnenhof ist eine familiengeführte Pension in Herrsching am
                Ammersee &ndash; seit über 40 Jahren ein fester Bestandteil der
                Region. Mit 5 Ferienwohnungen und 7 Gästezimmern, nur wenige
                Schritte vom See entfernt, bietet der Betrieb alles, was Gäste
                am Fünfseenland suchen.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                <strong>Das Problem:</strong> Niemand hat den Sonnenhof bei
                Google gefunden.
              </p>

              {/* Key Facts Box */}
              <div className="my-8 p-5 md:p-6 bg-accent/5 rounded-2xl border border-accent/15">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-cyan flex items-center justify-center flex-shrink-0 shadow-md">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-1">
                      Sonnenhof Herrsching am Ammersee
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Familiengeführte Pension seit über 40 Jahren &middot; 5
                      Ferienwohnungen &middot; 7 Gästezimmer &middot; Wenige
                      Schritte vom Ammersee entfernt
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: Wie es dazu kam */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-4 mt-10">
                Wie es dazu kam
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Als Volleyballspieler beim TSV Herrsching wohne ich selbst in
                einer der Ferienwohnungen im Sonnenhof. Ich kenne die Anlage,
                die Gastgeber und die Qualität des Hauses aus erster Hand. Was
                mir aber sofort auffiel: Die Online-Präsenz passte überhaupt
                nicht zum Erlebnis vor Ort.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Die alte Website stammte aus einer komplett anderen Ära des
                Internets &ndash; gelbes Design, keine mobile Optimierung, keine
                SEO-Grundlagen. Eine Seite, die auf dem Smartphone kaum
                bedienbar war und Google keine Chance gab, den Sonnenhof für
                relevante Suchanfragen zu finden.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Die Betreiber sind herzliche Gastgeber, aber digitales Marketing
                ist einfach nicht ihr Fachgebiet &ndash; und die Zeit dafür
                fehlt im Tagesgeschäft einer Pension sowieso. Also habe ich
                ihnen angeboten, das als mein erstes Projekt zu übernehmen.
              </p>

              {/* Before/After Screenshots */}
              <div className="my-8 md:my-12">
                <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-6">
                  Die alte vs. die neue Website
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* VORHER */}
                  <div className="relative rounded-2xl border border-red-200 bg-red-50/30 p-3 md:p-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-100 rounded-full mb-3">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                        Vorher
                      </span>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                      <Image
                        src="/case-studies/sonnenhof/sonnenhof-alt.png"
                        alt="Alte Website des Sonnenhof Herrsching – gelbes Design, nicht mobiloptimiert"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-2 text-center">
                      Gelbes Design aus einer anderen Ära &ndash; keine mobile
                      Optimierung
                    </p>
                  </div>

                  {/* NACHHER */}
                  <div className="relative rounded-2xl border-2 border-green-200 bg-green-50/30 p-3 md:p-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 rounded-full mb-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                        Nachher
                      </span>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-accent/20 shadow-lg shadow-accent/10">
                      <Image
                        src="/case-studies/sonnenhof/sonnenhof-neu.png"
                        alt="Neue Website des Sonnenhof Herrsching – modern, mobiloptimiert, professionell"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-2 text-center">
                      Modern, schnell, mobilfähig &ndash; mit Next.js aufgebaut
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: Ausgangslage */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-4 mt-10">
                Die Ausgangslage: Neue Website, aber noch keine Sichtbarkeit
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Die neue Website war live &ndash; modern, schnell, mobilfähig.
                Aber eine gute Website allein reicht nicht. Ohne gezielte
                SEO-Optimierung war der Sonnenhof für Google praktisch
                unsichtbar. So sah es in der ersten Woche aus:
              </p>

              {/* Ausgangslage Metriken */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                <div className="text-center p-4 bg-red-50 rounded-xl border border-red-100">
                  <div className="text-2xl md:text-3xl font-inter font-bold text-red-500">
                    0%
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1">
                    Sichtbarkeit bei Google
                  </div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl border border-red-100">
                  <div className="text-2xl md:text-3xl font-inter font-bold text-red-500">
                    Pos. 94
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1">
                    Durchschnittliche Position
                  </div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl border border-red-100">
                  <div className="text-2xl md:text-3xl font-inter font-bold text-red-500">
                    2/36
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1">
                    Keywords im Google-Index
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-2xl md:text-3xl font-inter font-bold text-slate-500">
                    83
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1">
                    Health Score (von 100)
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-2xl md:text-3xl font-inter font-bold text-slate-500">
                    16
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1">
                    Backlinks
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-2xl md:text-3xl font-inter font-bold text-slate-500">
                    23
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1">
                    Technische Fehler
                  </div>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Das erste technische Audit zeigte, wo Optimierungspotenzial lag:
                11 doppelte Seitentitel, 9 Seiten mit doppeltem Inhalt, 11
                doppelte Meta-Descriptions, 17 zu große Bilder und bei allen 25
                Seiten fehlte der Robots-Meta-Tag komplett. Die Website war ein
                solider Rohbau &ndash; aber Google brauchte klarere Signale.
              </p>

              {/* Section: Was wir gemacht haben */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-6 mt-10">
                Was wir gemacht haben
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: Globe,
                    title: "1. Neue Website als Basis",
                    desc: "Komplett neue Website auf Basis von Next.js – modern, mobilfähig, schnell. Klare Struktur mit eigenen Unterseiten für jede Ferienwohnung und jedes Zimmer, responsives Design und ein DSGVO-konformes Setup.",
                  },
                  {
                    icon: Search,
                    title: "2. Technische Optimierung & SEO",
                    desc: "Keyword-Recherche mit 36+ Suchbegriffen in thematischen Clustern. Individuelle Meta-Titles und Descriptions für jede Seite. Robots-Meta-Tags implementiert, interne Verlinkung von 278 auf 620 Links ausgebaut, Bilder optimiert und Alt-Texte ergänzt.",
                  },
                  {
                    icon: Target,
                    title: "3. Content-Strategie & Blog",
                    desc: "Blog mit 9 gezielten Themen-Beiträgen aufgebaut – jeder auf ein Keyword-Cluster ausgerichtet: Von Ausflugsziele Herrsching über Familienurlaub am Ammersee bis Ferienwohnung München Umgebung.",
                  },
                  {
                    icon: BarChart3,
                    title: "4. Google Business Profil & Verzeichnisse",
                    desc: "Google Business Profil optimiert und Verzeichniseinträge angelegt, um die lokale Autorität systematisch aufzubauen.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary mb-1">
                        {item.title}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section: Ergebnisse */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-6 mt-10">
                Die Ergebnisse: 4 Wochen im Zeitraffer
              </h2>

              {/* Woche 1 */}
              <div className="mb-6">
                <h3 className="text-xl font-inter font-bold text-primary mb-3">
                  Woche 1 (28. Jan &ndash; 3. Feb): Startlinie
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left py-2.5 px-4 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                          Kennzahl
                        </th>
                        <th className="text-right py-2.5 px-4 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                          Wert
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">
                          Keywords im Index
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          2 von 36 (6%)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">
                          Sichtbarkeit
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          0%
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">
                          &Oslash; Position
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          94
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">Top 3</td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          2 (nur Brand)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">Top 10</td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 mt-2 italic">
                  Die neue Website war gerade live. Google musste die Seite erst
                  crawlen und indexieren.
                </p>
              </div>

              {/* Woche 2 */}
              <div className="mb-6">
                <h3 className="text-xl font-inter font-bold text-primary mb-3">
                  Woche 2 (4.&ndash;10. Feb): Erste Signale
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left py-2.5 px-4 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                          Kennzahl
                        </th>
                        <th className="text-right py-2.5 px-4 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                          Wert
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">
                          Keywords im Index
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          3 von 36 (9%)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">
                          Sichtbarkeit
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          0%
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">
                          &Oslash; Position
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          91
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">Top 3</td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          2
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">Top 10</td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 mt-2 italic">
                  Noch keine große Bewegung &ndash; aber &bdquo;Pension
                  Herrsching&ldquo; tauchte kurz auf Position 13 auf. Google
                  begann, die neuen Inhalte wahrzunehmen.
                </p>
              </div>

              {/* Woche 3 - Der Durchbruch */}
              <div className="mb-6">
                <h3 className="text-xl font-inter font-bold text-primary mb-1">
                  Woche 3 (11.&ndash;17. Feb): Der Durchbruch
                </h3>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 rounded-full mb-3">
                  <Zap className="w-3 h-3 text-green-600" />
                  <span className="text-xs font-bold text-green-600">
                    +21 Keywords in einer Woche!
                  </span>
                </div>
                <div className="overflow-x-auto rounded-xl border-2 border-green-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-green-50 border-b border-green-200">
                        <th className="text-left py-2.5 px-4 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                          Kennzahl
                        </th>
                        <th className="text-right py-2.5 px-4 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                          Wert
                        </th>
                        <th className="text-right py-2.5 px-4 text-green-600 font-semibold text-xs uppercase tracking-wider">
                          Veränderung
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-green-100">
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">
                          Keywords im Index
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          24 von 36 (43%)
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          +21 Keywords!
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">
                          Sichtbarkeit
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          5%
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          von 0%
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">
                          &Oslash; Position
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          61
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          +33 Positionen
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">Top 3</td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          7
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          +5
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">Top 10</td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          18
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          +16
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">Top 30</td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          22
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          +19
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 mt-2 italic">
                  Der entscheidende Sprung. Google hatte die neue
                  Seitenstruktur, die Blog-Beiträge und die technischen
                  Optimierungen verarbeitet. Plötzlich rankten 24 Keywords
                  &ndash; darunter &bdquo;Pension Herrsching&ldquo; (Pos. 4)
                  und &bdquo;Ferienwohnung Herrsching&ldquo; (Pos. 8).
                </p>
              </div>

              {/* Woche 4 - Konsolidierung */}
              <div className="mb-8">
                <h3 className="text-xl font-inter font-bold text-primary mb-1">
                  Woche 4 (18.&ndash;24. Feb): Konsolidierung auf hohem Niveau
                </h3>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 rounded-full mb-3">
                  <TrendingUp className="w-3 h-3 text-accent" />
                  <span className="text-xs font-bold text-accent">
                    34,6% Sichtbarkeit erreicht
                  </span>
                </div>
                <div className="overflow-x-auto rounded-xl card-gradient-border p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-accent/5 border-b border-accent/10">
                        <th className="text-left py-2.5 px-4 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                          Kennzahl
                        </th>
                        <th className="text-right py-2.5 px-4 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                          Wert
                        </th>
                        <th className="text-right py-2.5 px-4 text-accent font-semibold text-xs uppercase tracking-wider">
                          Veränderung
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-accent/5">
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">
                          Keywords im Index
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          36 von 56 (64%)
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          +12 weitere
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">
                          Sichtbarkeit
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-accent">
                          34,6%
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          +29,6%
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">
                          &Oslash; Position
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          45
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          +16 Positionen
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">Top 3</td>
                        <td className="py-2.5 px-4 text-right font-bold text-accent">
                          14
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          +7
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">Top 10</td>
                        <td className="py-2.5 px-4 text-right font-bold text-accent">
                          23
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          +5
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 text-slate-600">Top 30</td>
                        <td className="py-2.5 px-4 text-right font-bold text-slate-700">
                          30
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          +8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 mt-2 italic">
                  Die Sichtbarkeit explodierte förmlich. Neue Nischen-Keywords
                  kamen dazu &ndash; der Sonnenhof rankte jetzt auch für
                  &bdquo;Ferienwohnung Ammersee mit Hund&ldquo; (Pos. 4),
                  &bdquo;Pension Fünfseenland&ldquo; (Pos. 3) und
                  &bdquo;Ferienwohnung Ammersee Kinder&ldquo; (Pos. 3).
                </p>
              </div>

              {/* Section: Highlights */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-6 mt-10">
                Die Highlights auf einen Blick
              </h2>

              {/* Ranking-Erfolge */}
              <h3 className="text-xl font-inter font-bold text-primary mb-3">
                Ranking-Erfolge
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left py-2.5 px-4 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                        Keyword
                      </th>
                      <th className="text-right py-2.5 px-4 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                        Vorher
                      </th>
                      <th className="text-right py-2.5 px-4 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                        Nachher
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      {
                        kw: "Pension Herrsching",
                        before: "nicht indexiert",
                        after: "Platz 1",
                      },
                      {
                        kw: "Pension Herrsching am Ammersee",
                        before: "nicht indexiert",
                        after: "Platz 2",
                      },
                      {
                        kw: "Ferienwohnung Ammersee Kinder",
                        before: "nicht indexiert",
                        after: "Platz 3",
                      },
                      {
                        kw: "Pension Fünfseenland",
                        before: "nicht indexiert",
                        after: "Platz 3",
                      },
                      {
                        kw: "Pension Ammersee Hund erlaubt",
                        before: "nicht indexiert",
                        after: "Platz 3",
                      },
                      {
                        kw: "Zimmer Herrsching",
                        before: "nicht indexiert",
                        after: "Platz 4",
                      },
                      {
                        kw: "Ferienwohnung Herrsching",
                        before: "Pos. 15–21",
                        after: "Platz 7",
                      },
                      {
                        kw: "Ferienwohnung Ammersee",
                        before: "nicht indexiert",
                        after: "Platz 26",
                      },
                      {
                        kw: "Unterkunft Ammersee",
                        before: "nicht indexiert",
                        after: "Platz 41",
                      },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="py-2.5 px-4 text-slate-700 font-medium">
                          {row.kw}
                        </td>
                        <td className="py-2.5 px-4 text-right text-slate-400 text-xs">
                          {row.before}
                        </td>
                        <td className="py-2.5 px-4 text-right font-bold text-green-600">
                          {row.after}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Health Score Vergleich */}
              <h3 className="text-xl font-inter font-bold text-primary mb-3">
                Technischer Health Score
              </h3>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-sm text-slate-500 mb-1">Vorher</div>
                  <div className="text-3xl font-inter font-bold text-slate-500">
                    83
                  </div>
                  <div className="text-xs text-red-400 mt-1">
                    23 Fehler, 18 Warnungen
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-accent flex-shrink-0" />
                <div className="flex-1 text-center p-4 bg-green-50 rounded-xl border-2 border-green-200">
                  <div className="text-sm text-green-600 mb-1">Nachher</div>
                  <div className="text-3xl font-inter font-bold text-green-600">
                    100
                  </div>
                  <div className="text-xs text-green-500 mt-1">
                    0 Fehler, 0 Warnungen
                  </div>
                </div>
              </div>

              {/* Domain-Metriken */}
              <h3 className="text-xl font-inter font-bold text-primary mb-3">
                Domain-Metriken
              </h3>
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="text-center p-4 bg-accent/5 rounded-xl border border-accent/10">
                  <div className="text-2xl md:text-3xl font-inter font-bold text-accent">
                    +512%
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1">
                    Backlinks (16 → 98)
                  </div>
                </div>
                <div className="text-center p-4 bg-cyan/5 rounded-xl border border-cyan/10">
                  <div className="text-2xl md:text-3xl font-inter font-bold text-cyan">
                    +378%
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1">
                    Verw. Domains (9 → 43)
                  </div>
                </div>
                <div className="text-center p-4 bg-green-500/5 rounded-xl border border-green-500/10">
                  <div className="text-2xl md:text-3xl font-inter font-bold text-green-600">
                    +123%
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 mt-1">
                    Interne Links (278 → 620)
                  </div>
                </div>
              </div>

              {/* Section: Was bedeutet das? */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-4 mt-10">
                Was bedeutet das für den Sonnenhof?
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Zahlen sind gut &ndash; aber was bedeuten sie konkret für das
                Geschäft?
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                <strong>Sichtbarkeit = Buchungsanfragen.</strong> Wer in
                Herrsching oder am Ammersee eine Ferienwohnung sucht, findet
                jetzt den Sonnenhof. Und zwar nicht irgendwo auf Seite 10,
                sondern auf den vorderen Plätzen &ndash; genau da, wo Gäste
                tatsächlich klicken.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Ein Beispiel: Das Keyword &bdquo;Pension Herrsching&ldquo; hat
                ein Suchvolumen von 90 Anfragen pro Monat. Auf Platz 1 bekommt
                der Sonnenhof davon geschätzt 25&ndash;30 Klicks. Wenn auch nur
                2&ndash;3 davon eine Buchungsanfrage werden, hat sich die
                monatliche Investition mehrfach bezahlt.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Und das ist nur <strong>ein einziges Keyword</strong>. Mit 14
                Keywords in den Top&nbsp;3 und 23 in den Top&nbsp;10
                multipliziert sich dieser Effekt über dutzende Suchanfragen
                hinweg.
              </p>

              {/* Section: Learnings */}
              <h2 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-6 mt-10">
                Was lernt man daraus?
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Diese Case Study zeigt drei Dinge, die für jedes lokale
                Unternehmen gelten:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-accent">1</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary mb-1">
                        Eine gute Website allein reicht nicht.
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Der Sonnenhof hatte mit der neuen Seite bereits einen
                        soliden Grundstein. Aber ohne gezielte SEO-Optimierung
                        blieb die Sichtbarkeit bei 0%. Eine Website ist die
                        Basis &ndash; aber erst die systematische Arbeit an
                        Technik, Content und Keywords macht den Unterschied.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-accent">2</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary mb-1">
                        Technische Sauberkeit ist die Grundlage.
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Bevor Content und Keywords wirken können, muss die
                        technische Basis stimmen. Doppelte Titel, fehlende
                        Meta-Tags, übergroße Bilder &ndash; all das sind Signale
                        an Google, dass eine Seite noch nicht optimal aufgestellt
                        ist. Von Health Score 83 auf 100 zu kommen, war kein
                        Zufall &ndash; es war systematische Arbeit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-accent">3</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary mb-1">
                        Ergebnisse kommen schneller als viele denken.
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Die meisten Unternehmer glauben, dass SEO Monate
                        braucht. Das stimmt für hart umkämpfte nationale
                        Keywords. Aber im lokalen Markt &ndash; wo die
                        Konkurrenz oft selbst schlecht optimiert ist &ndash;
                        können signifikante Verbesserungen in wenigen Wochen
                        eintreten. Der Sonnenhof ging von 0% auf 34,6%
                        Sichtbarkeit in 4 Wochen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                <strong>Wichtig dabei:</strong> SEO ist kein einmaliges Projekt,
                sondern ein laufender Prozess. Die hier gezeigten Ergebnisse
                sind der Anfang &ndash; mit weiterer Optimierung, neuem Content
                und wachsender Domain-Autorität werden die Rankings in den
                kommenden Monaten weiter steigen.
              </p>
            </article>

            {/* CTA Box */}
            <div className="mt-10 md:mt-14 p-6 md:p-8 card-gradient-border glow-accent text-center">
              <h3 className="text-xl md:text-2xl font-inter font-bold text-primary mb-3">
                Wie sichtbar ist Ihr Unternehmen bei Google?
              </h3>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                Wir analysieren Ihre aktuelle Situation kostenlos und zeigen
                Ihnen, wo die Hebel für mehr Sichtbarkeit liegen.
              </p>
              <Link
                href="/kontakt"
                className="btn btn-cta btn-shimmer group relative overflow-hidden text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Kostenlose Erstanalyse anfragen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Related Links */}
            <div className="mt-10 md:mt-14">
              <h3 className="text-lg font-inter font-bold text-primary mb-4">
                Weiterführende Seiten
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/seo"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary group-hover:text-accent transition-colors">
                      Local SEO
                    </div>
                    <div className="text-xs text-slate-500">
                      Unsere SEO-Leistungen im Detail
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-accent ml-auto transition-colors" />
                </Link>
                <Link
                  href="/webdesign"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                    <Smartphone className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary group-hover:text-accent transition-colors">
                      Webdesign
                    </div>
                    <div className="text-xs text-slate-500">
                      Professionelle Websites für KMU
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-accent ml-auto transition-colors" />
                </Link>
              </div>
            </div>

            {/* Back to blog */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zum Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
