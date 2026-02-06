import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-sm md:text-base font-semibold text-accent">
                Professionell. Persönlich. Lokal.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-primary">
              Mehr Kunden aus Ihrer Region – mit professioneller Website & Local SEO
            </h1>

            {/* Sub-Headline */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Ich helfe kleinen Unternehmen, online gefunden zu werden – 
              mit <strong>individueller Beratung</strong> und Lösungen, 
              die zu Ihrem Budget passen.
            </p>

            {/* Value Proposition */}
            <div className="mb-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-slate-700">
                <span className="font-semibold text-primary">Keine Standard-Pakete.</span>{" "}
                Ich nehme mir Zeit, Ihr Unternehmen zu verstehen und erstelle ein 
                Angebot, das wirklich zu Ihnen passt.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <Link
                href="/kontakt"
                className="btn btn-cta group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Kostenloses Erstgespräch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/preise"
                className="btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                So arbeite ich
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <span className="text-sm text-slate-600">Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <span className="text-sm text-slate-600">Individuelle Angebote</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <span className="text-sm text-slate-600">ab 199€/Monat</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              {/* Decorative Background Element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative bg-white rounded-2xl p-4 shadow-lg">
                <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden bg-slate-200">
                  {/* Placeholder for Denis Kaliberda Image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-accent">
                    <div className="text-center text-white p-8">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                        <svg
                          className="w-16 h-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <p className="font-poppins font-semibold text-lg">
                        Denis Kaliberda
                      </p>
                      <p className="text-sm opacity-90">
                        Business Portrait
                      </p>
                      <p className="text-xs mt-2 opacity-75">
                        [PLACEHOLDER IMAGE]
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Personal Approach */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Persönliche
                    </div>
                    <div className="text-sm font-bold text-primary">
                      Beratung
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-400 uppercase tracking-wider">Scroll</span>
        <svg
          className="w-6 h-6 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
