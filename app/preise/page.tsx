"use client";

import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Target, Puzzle, TrendingUp } from "lucide-react";

const services = [
  {
    icon: "🌐",
    title: "Website-Erstellung",
    description: "Professionelle, mobile-optimierte Websites für lokale Unternehmen",
    startingPrice: 790,
    unit: "einmalig",
    includes: [
      "5-8 Seiten nach Bedarf",
      "Responsive Design",
      "SEO-Grundoptimierung",
      "Kontaktformular & Maps",
    ],
  },
  {
    icon: "🔍",
    title: "Local SEO",
    description: "Mehr Sichtbarkeit bei Google für Kunden in Ihrer Region",
    startingPrice: 199,
    unit: "pro Monat",
    includes: [
      "Google Business Optimierung",
      "Keyword-Recherche",
      "Monatliches Reporting",
      "Kontinuierliche Optimierung",
    ],
  },
  {
    icon: "☁️",
    title: "Hosting & Wartung",
    description: "Schnelles, sicheres Hosting mit persönlichem Support",
    startingPrice: 39,
    unit: "pro Monat",
    includes: [
      "Schnelle Ladezeiten",
      "SSL-Zertifikat inklusive",
      "Regelmäßige Backups",
      "Technischer Support",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Kostenloses Erstgespräch",
    description: "Wir lernen uns kennen und ich verstehe Ihre Situation, Ziele und Herausforderungen.",
  },
  {
    number: "02",
    icon: Target,
    title: "Individuelle Analyse",
    description: "Ich analysiere Ihre aktuelle Online-Präsenz und identifiziere die größten Hebel.",
  },
  {
    number: "03",
    icon: Puzzle,
    title: "Maßgeschneidertes Angebot",
    description: "Sie erhalten ein Angebot, das genau auf Ihre Bedürfnisse und Ihr Budget zugeschnitten ist.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Umsetzung & Betreuung",
    description: "Wir starten – mit klaren Meilensteinen und regelmäßigen Updates zu Ihren Fortschritten.",
  },
];

export default function PreisePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-primary">
              Faire Preise, individuell für Sie
            </h1>

            <p className="text-xl text-slate-600 mb-8">
              Jedes Unternehmen ist anders. Deshalb erhalten Sie von mir keine 
              Standard-Pakete, sondern ein <strong>maßgeschneidertes Angebot</strong>, 
              das zu Ihren Zielen und Ihrem Budget passt.
            </p>

            <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/5 rounded-2xl">
              <div className="text-3xl font-poppins font-bold text-primary">ab 199€</div>
              <div className="text-left">
                <div className="text-sm font-semibold text-primary">pro Monat</div>
                <div className="text-xs text-slate-600">für Local SEO Betreuung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-poppins font-bold text-primary mb-4">
                Meine Leistungsbereiche
              </h2>
              <p className="text-slate-600">
                Diese Bausteine kombiniere ich flexibel – je nachdem, was Sie wirklich brauchen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="card hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  
                  <h3 className="text-xl font-poppins font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-4">
                    {service.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <span className="text-3xl font-poppins font-bold text-primary">
                      ab {service.startingPrice}€
                    </span>
                    <span className="text-sm text-slate-500 ml-2">
                      {service.unit}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {service.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Individual Approach */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card bg-white border-2 border-primary/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-poppins font-bold text-primary mb-4">
                    Warum keine starren Pakete?
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Ein Handwerksbetrieb in München hat andere Bedürfnisse als ein 
                    Friseursalon in einer Kleinstadt. Standard-Pakete ignorieren das.
                  </p>
                  <p className="text-slate-600 mb-6">
                    Ich nehme mir die Zeit, <strong>Ihr Unternehmen zu verstehen</strong> – 
                    Ihre Ziele, Ihre Konkurrenz, Ihr Budget. Erst dann erstelle ich ein 
                    Angebot, das wirklich Sinn macht.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-slate-700">Keine unnötigen Leistungen</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-slate-700">Flexibel anpassbar</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-slate-700">Transparente Kalkulation</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl">
                    <div className="text-6xl mb-4">🎯</div>
                    <p className="text-lg font-semibold text-primary">
                      &quot;Sie zahlen nur für das, was Sie wirklich brauchen.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-poppins font-bold text-primary mb-4">
                So läuft die Zusammenarbeit
              </h2>
              <p className="text-slate-600">
                Von der ersten Anfrage bis zu messbaren Ergebnissen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-accent mb-1">
                      SCHRITT {step.number}
                    </div>
                    <h3 className="font-poppins font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-xl text-white/90 mb-8">
              In 15 Minuten finden wir heraus, wie ich Ihnen am besten helfen kann – 
              kostenlos und unverbindlich.
            </p>
            
            <Link 
              href="/kontakt" 
              className="btn btn-cta text-lg px-8 py-4 inline-flex items-center gap-2"
            >
              Kostenloses Erstgespräch buchen
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <p className="mt-6 text-white/70 text-sm">
              Keine Verpflichtung. Kein Verkaufsdruck. Nur ein ehrliches Gespräch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
