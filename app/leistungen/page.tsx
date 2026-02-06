import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Search, TrendingUp, CheckCircle, Award, ArrowRight, User, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungen - Local SEO & Webdesign für KMU | MyHiwi",
  description: "Wir bauen nicht nur Webseiten, wir bauen digitale Kundenmagneten. Professionelles Webdesign und Local SEO für kleine, lokale Unternehmen.",
  keywords: ["Webdesign für KMU", "Google Business Profil optimieren", "Local SEO", "mobile-optimierte Websites"],
};

export default function LeistungenPage() {
  const services = [
    {
      icon: Globe,
      title: "Webdesign für KMU",
      tagline: "Ihre digitale Visitenkarte – professionell und verkaufsstark",
      description: "Wir bauen nicht nur Webseiten, wir bauen digitale Kundenmagneten. Jede Website ist mobile-optimiert, schnell und inklusive SEO-Basis.",
      features: [
        "Mobile-First Design für optimale Darstellung auf allen Geräten",
        "SEO-Grundoptimierung (Meta-Tags, Struktur, Ladezeiten)",
        "Kontaktformular und Google Maps Integration",
        "SSL-Zertifikat und DSGVO-konforme Umsetzung",
        "Content Management System (optional)",
        "Hosting-Setup und Domain-Einrichtung",
      ],
      benefits: [
        "Professioneller erster Eindruck bei potenziellen Kunden",
        "Bessere Auffindbarkeit bei Google",
        "Mehr Anfragen durch klare Call-to-Actions",
        "Keine technischen Vorkenntnisse nötig",
      ],
    },
    {
      icon: Search,
      title: "Google Business Profil optimieren",
      tagline: "Werden Sie in Ihrer Region gefunden – bei Google Maps und der lokalen Suche",
      description: "Ihr Google Business Profil ist der wichtigste Faktor für lokale Sichtbarkeit. Wir optimieren es vollständig, damit Sie bei 'Dienstleister + Stadt' ganz oben erscheinen.",
      features: [
        "Vollständige Profil-Optimierung (Kategorien, Beschreibung, Attribute)",
        "Keyword-Optimierung für lokale Suchanfragen",
        "Foto- und Video-Upload (sofern vorhanden)",
        "Bewertungsmanagement und Antwort-Strategien",
        "Regelmäßige Posts und Updates",
        "Google Maps Ranking-Tracking",
      ],
      benefits: [
        "Top-Platzierungen bei lokalen Suchanfragen",
        "Mehr Anrufe und Routenplanungen",
        "Vertrauensaufbau durch vollständiges Profil",
        "Wettbewerbsvorteil gegenüber anderen lokalen Anbietern",
      ],
    },
    {
      icon: TrendingUp,
      title: "Local SEO Strategien",
      tagline: "Langfristige Sichtbarkeit durch datengetriebene SEO-Arbeit",
      description: "SEO ist kein Sprint, sondern ein Marathon. Wir entwickeln eine maßgeschneiderte Local SEO Strategie, die Sie nachhaltig nach vorne bringt.",
      features: [
        "Keyword-Recherche und Konkurrenzanalyse",
        "On-Page SEO (Meta-Tags, Überschriften, interne Verlinkung)",
        "Technisches SEO (Ladezeiten, Mobile-Optimierung, Schema Markup)",
        "Local Citations Aufbau (Branchenverzeichnisse)",
        "Content-Erstellung (Blogposts, Service-Seiten)",
        "Monatliches Reporting und Strategie-Calls",
      ],
      benefits: [
        "Kontinuierliches Wachstum bei Google Rankings",
        "Mehr organischer Traffic auf Ihrer Website",
        "Langfristige Unabhängigkeit von bezahlter Werbung",
        "Messbare Ergebnisse durch transparentes Reporting",
      ],
    },
  ];

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
              Wir bauen nicht nur Webseiten, wir bauen digitale Kundenmagneten. 
              Alle Leistungen sind mobile-optimiert und inklusive SEO-Basis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn btn-cta">
                Kostenlose Erstberatung
              </Link>
              <Link href="/preise" className="btn btn-primary">
                Preise ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <div key={index} className="card">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Icon & Title Column */}
                    <div className="lg:col-span-2">
                      <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-poppins font-bold text-primary mb-3">
                        {service.title}
                      </h2>
                      <p className="text-lg text-accent font-semibold mb-4">
                        {service.tagline}
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features & Benefits Columns */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Features */}
                      <div>
                        <h3 className="text-lg font-poppins font-bold text-primary mb-4">
                          Was Sie bekommen:
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h3 className="text-lg font-poppins font-bold text-primary mb-4">
                          Ihre Vorteile:
                        </h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ArrowRight className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700 font-medium">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Local SEO Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-white mb-6">
                Warum Local SEO?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                SEO ist kein Kostenfaktor, sondern ein Investment. 
                Während Anzeigen sofort stoppen, wenn das Budget leer ist, bringt SEO nachhaltig Kunden – Monat für Monat.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-poppins font-bold text-white mb-2">46%</div>
                <p className="text-white/90">
                  aller Google-Suchanfragen haben lokalen Intent
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-5xl font-poppins font-bold text-white mb-2">78%</div>
                <p className="text-white/90">
                  der lokalen Smartphone-Suchen führen zu einem Geschäftsbesuch
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-poppins font-bold text-white mb-2">4/5</div>
                <p className="text-white/90">
                  Konsumenten nutzen Suchmaschinen für lokale Informationen
                </p>
              </div>
            </div>

            {/* Success Timeline */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-poppins font-bold text-white text-center mb-4">
                Ihre SEO-Erfolgs-Timeline
              </h3>
              <p className="text-white/90 text-center mb-12 max-w-2xl mx-auto">
                SEO ist ein Marathon, kein Sprint. So entwickelt sich Ihre Sichtbarkeit typischerweise:
              </p>

              {/* Timeline Visual */}
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-white/20 hidden md:block"></div>
                
                {/* Timeline Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Month 1-2 */}
                  <div className="relative">
                    <div className="bg-white rounded-xl p-6 text-center relative z-10">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-accent uppercase mb-2">Monat 1-2</div>
                      <h4 className="font-poppins font-bold text-primary mb-2">Grundlagen</h4>
                      <p className="text-sm text-slate-600">
                        Technische Optimierung, Keyword-Recherche, erste Inhalte
                      </p>
                    </div>
                  </div>

                  {/* Month 3-4 */}
                  <div className="relative">
                    <div className="bg-white rounded-xl p-6 text-center relative z-10">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-accent uppercase mb-2">Monat 3-4</div>
                      <h4 className="font-poppins font-bold text-primary mb-2">Erste Erfolge</h4>
                      <p className="text-sm text-slate-600">
                        Ranking-Verbesserungen, mehr Besucher, erste Anfragen
                      </p>
                    </div>
                  </div>

                  {/* Month 5-6 */}
                  <div className="relative">
                    <div className="bg-white rounded-xl p-6 text-center relative z-10">
                      <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-cta uppercase mb-2">Monat 5-6</div>
                      <h4 className="font-poppins font-bold text-primary mb-2">Durchbruch</h4>
                      <p className="text-sm text-slate-600">
                        Top-10 Rankings, deutlich mehr Traffic, regelmäßige Anfragen
                      </p>
                    </div>
                  </div>

                  {/* Month 6+ */}
                  <div className="relative">
                    <div className="bg-white rounded-xl p-6 text-center relative z-10 border-2 border-cta">
                      <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-cta uppercase mb-2">Monat 6+</div>
                      <h4 className="font-poppins font-bold text-primary mb-2">Volle Kraft</h4>
                      <p className="text-sm text-slate-600">
                        Dominanz in Ihrer Region, nachhaltiger Kundenfluss
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-12 text-center">
                <p className="text-white/90 text-lg">
                  <strong>Der Unterschied zu Anzeigen:</strong> SEO-Traffic bleibt, auch wenn Sie keine monatlichen Kosten mehr zahlen. 
                  Ihre Rankings bleiben bestehen und bringen kontinuierlich neue Kunden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary text-center mb-16">
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
                    <h3 className="text-xl font-poppins font-bold text-primary mb-4">
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
              <h3 className="text-xl font-poppins font-bold text-primary mb-3">
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
              welche Leistungen am besten zu Ihrem Unternehmen passen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn btn-cta">
                Kostenlose Erstberatung buchen
              </Link>
              <Link href="/preise" className="btn bg-white text-primary hover:bg-white/90">
                Preise ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
