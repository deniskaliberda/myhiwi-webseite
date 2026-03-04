import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Search, ArrowRight, Award, CheckCircle, Zap, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Alle Leistungen — SEO & Webdesign aus einer Hand | MyHiwi",
  description: "Professionelles Webdesign und Local SEO für kleine, lokale Unternehmen. Individuelle Lösungen, die zu Ihrem Budget passen.",
  keywords: ["Webdesign für KMU", "Google Business Profil optimieren", "Local SEO", "mobile-optimierte Websites"],
  alternates: {
    canonical: "https://myhiwi.de/leistungen",
  },
};

export default function LeistungenPage() {
  const whyChooseUs = [
    {
      icon: Award,
      title: "Leistungssport-Mentalität",
      description: "Mit der Disziplin eines ehemaligen Nationalspielers arbeite ich für Ihren Erfolg.",
    },
    {
      icon: CheckCircle,
      title: "100% KMU-Fokus",
      description: "Keine Großkonzerne, keine Agenturen – nur lokale Unternehmen wie Ihres.",
    },
    {
      icon: Zap,
      title: "Transparenz & Ehrlichkeit",
      description: "Keine versteckten Kosten, keine leeren Versprechungen. Nur echte Arbeit.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm md:text-base font-semibold text-accent">
                Unsere Leistungen
              </span>
            </div>

            <h1 className="mb-6 text-primary">
              Digitale Kundenmagneten für lokale Unternehmen
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Wir helfen kleinen Unternehmen, online gefunden zu werden –
              mit individuellen Lösungen, die zu Ihrem Budget passen.
            </p>
          </div>
        </div>
      </section>

      {/* Two Service Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SEO Card */}
            <div className="card border-2 border-slate-100 hover:border-accent/30 transition-colors group">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-inter font-bold text-primary mb-3">
                Local SEO
              </h2>
              <p className="text-lg text-accent font-semibold mb-4">
                Werden Sie in Ihrer Region bei Google gefunden
              </p>
              <p className="text-slate-600 mb-6">
                Google Business Profil Optimierung, Keyword-Strategie, Content-Erstellung
                und monatliches Reporting – alles, damit Ihre Kunden Sie finden.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Google Business Profil Optimierung</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Keyword-Recherche & Konkurrenzanalyse</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Monatliches Reporting</span>
                </li>
              </ul>
              <Link
                href="/seo"
                className="btn btn-primary w-full justify-center inline-flex items-center gap-2"
              >
                Mehr über Local SEO
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Webdesign Card */}
            <div className="card border-2 border-slate-100 hover:border-accent/30 transition-colors group">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-inter font-bold text-primary mb-3">
                Webdesign
              </h2>
              <p className="text-lg text-accent font-semibold mb-4">
                Ihre digitale Visitenkarte – professionell und verkaufsstark
              </p>
              <p className="text-slate-600 mb-6">
                Mobile-optimierte Websites, die nicht nur gut aussehen,
                sondern auch Kunden bringen. Inklusive SEO-Grundoptimierung.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Mobile-First Design</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">SEO-Grundoptimierung inklusive</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">DSGVO-konform & SSL</span>
                </li>
              </ul>
              <Link
                href="/webdesign"
                className="btn btn-primary w-full justify-center inline-flex items-center gap-2"
              >
                Mehr über Webdesign
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-primary text-center mb-16">
              Warum MyHiwi?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="card text-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-inter font-bold text-primary mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-700">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Trust Link to About Page */}
            <div className="card bg-white text-center">
              <User className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-inter font-bold text-primary mb-3">
                Wer steckt hinter MyHiwi?
              </h3>
              <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
                Denis Kaliberda – ehemaliger Volleyball-Nationalspieler, heute SEO-Experte.
                Mit der Disziplin des Leistungssports arbeite ich für Ihren Online-Erfolg.
              </p>
              <Link
                href="/ueber-mich"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors"
              >
                Mehr über meine Story erfahren
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">
              Bereit für mehr lokale Sichtbarkeit?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden,
              wie ich Ihnen am besten helfen kann.
            </p>
            <Link
              href="/kontakt"
              className="btn btn-cta inline-flex items-center gap-2"
            >
              Jetzt Anfrage starten
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
