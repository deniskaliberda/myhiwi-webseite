import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  CheckCircle,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export default function CaseStudySection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-green-50 rounded-full border border-green-200">
            <Award className="w-4 h-4 text-green-600" />
            <span className="text-sm md:text-base font-semibold text-green-700">
              Echte Ergebnisse
            </span>
          </div>
          <h2 className="mb-4 md:mb-6">
            Von <span className="gradient-text">unsichtbar</span> zu Seite 1
            bei Google
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Wie eine Pension am Ammersee in nur 4 Wochen von 0% auf 34,6%
            Sichtbarkeit kam.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Before/After Images */}
            <div className="space-y-4 animate-fade-in-up stagger-1">
              {/* Before */}
              <div className="relative rounded-xl border border-red-200 bg-red-50/30 p-3 opacity-80">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-100 rounded-full mb-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">
                    Vorher
                  </span>
                </div>
                <div className="rounded-lg overflow-hidden border border-slate-200">
                  <Image
                    src="/case-studies/sonnenhof/sonnenhof-alt.png"
                    alt="Alte Sonnenhof Website – veraltetes Design ohne mobile Optimierung"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* After */}
              <div className="relative rounded-xl border-2 border-green-200 bg-green-50/20 p-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 rounded-full mb-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">
                    Nachher
                  </span>
                </div>
                <div className="rounded-lg overflow-hidden border border-accent/20 shadow-md">
                  <Image
                    src="/case-studies/sonnenhof/sonnenhof-neu.png"
                    alt="Neue Sonnenhof Website – modern, professionell und mobiloptimiert"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right: Key Results + CTA */}
            <div className="animate-fade-in-up stagger-2">
              <h3 className="text-2xl md:text-3xl font-inter font-bold text-primary mb-6">
                Sonnenhof Herrsching am Ammersee
              </h3>

              {/* Hero stat */}
              <div className="mb-6 p-4 md:p-6 bg-gradient-to-r from-accent/5 to-cyan/5 rounded-2xl border border-accent/15">
                <div className="text-sm text-slate-500 mb-1">
                  Sichtbarkeit bei Google
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-lg text-slate-400 line-through">
                    0%
                  </span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                  <span className="text-4xl md:text-5xl font-inter font-bold text-accent">
                    34,6%
                  </span>
                </div>
                <div className="text-sm text-accent font-semibold mt-1">
                  in nur 4 Wochen
                </div>
              </div>

              {/* Result highlights */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-slate-700">
                    <strong className="text-primary">
                      14 Keywords in den Top 3
                    </strong>{" "}
                    &ndash; darunter &bdquo;Pension Herrsching&ldquo; auf
                    Platz&nbsp;1
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-slate-700">
                    <strong className="text-primary">
                      Health Score: 83 auf 100/100
                    </strong>{" "}
                    &ndash; null Fehler, null Warnungen
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-slate-700">
                    <strong className="text-primary">Backlinks: +512%</strong>{" "}
                    &ndash; von 16 auf 98 Verlinkungen
                  </span>
                </div>
              </div>

              {/* CTA link */}
              <Link
                href="/blog/sonnenhof-case-study"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors animated-underline text-lg"
              >
                Zur vollständigen Case Study
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
