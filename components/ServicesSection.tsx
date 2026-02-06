import Link from "next/link";
import { Check, Globe, Search, Cloud, ArrowRight, MessageCircle, Target, Puzzle, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Website-Erstellung",
      description: "Professionelle, mobile-optimierte Websites für lokale Unternehmen",
      startingPrice: 790,
      unit: "einmalig",
      features: [
        "5-8 Seiten nach Bedarf",
        "Responsive Design",
        "SEO-Grundoptimierung",
        "Kontaktformular & Maps",
      ],
    },
    {
      icon: Search,
      title: "Local SEO",
      description: "Mehr Sichtbarkeit bei Google für Kunden in Ihrer Region",
      startingPrice: 199,
      unit: "pro Monat",
      features: [
        "Google Business Optimierung",
        "Keyword-Recherche",
        "Monatliches Reporting",
        "Kontinuierliche Optimierung",
      ],
    },
    {
      icon: Cloud,
      title: "Hosting & Wartung",
      description: "Schnelles, sicheres Hosting mit persönlichem Support",
      startingPrice: 39,
      unit: "pro Monat",
      features: [
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
      title: "Erstgespräch",
      description: "Wir lernen uns kennen und ich verstehe Ihre Ziele",
    },
    {
      number: "02",
      icon: Target,
      title: "Analyse",
      description: "Ich analysiere Ihre aktuelle Situation",
    },
    {
      number: "03",
      icon: Puzzle,
      title: "Angebot",
      description: "Sie erhalten ein maßgeschneidertes Angebot",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Umsetzung",
      description: "Wir starten mit klaren Meilensteinen",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">
            Individuelle Lösungen für Ihr Unternehmen
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Diese Bausteine kombiniere ich flexibel – je nachdem, was Sie wirklich brauchen. 
            Keine Standard-Pakete, sondern ein Angebot, das zu Ihnen passt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                
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

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Individual Approach Highlight */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="card bg-primary/5 border-2 border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
                  Warum individuelle Beratung?
                </h3>
                <p className="text-slate-600 mb-4">
                  Ein Handwerksbetrieb hat andere Bedürfnisse als ein Friseursalon. 
                  Standard-Pakete ignorieren das.
                </p>
                <p className="text-slate-600">
                  Ich nehme mir die Zeit, <strong>Ihr Unternehmen zu verstehen</strong> – 
                  Ihre Ziele, Ihre Konkurrenz, Ihr Budget. Erst dann erstelle ich ein 
                  Angebot, das wirklich Sinn macht.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-5xl mb-3">🎯</div>
                  <p className="text-lg font-semibold text-primary">
                    &quot;Sie zahlen nur für das, was Sie wirklich brauchen.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-poppins font-bold text-primary text-center mb-8">
            So läuft die Zusammenarbeit
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center p-4">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary flex items-center justify-center mb-3">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xs font-bold text-accent mb-1">
                    SCHRITT {step.number}
                  </div>
                  <h4 className="font-poppins font-bold text-primary text-sm mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-white rounded-2xl shadow-md">
            <div className="w-16 h-16 rounded-full bg-cta/10 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-cta" />
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-primary mb-2">
                Lassen Sie uns sprechen
              </h3>
              <p className="text-slate-600 mb-4">
                In 15 Minuten finden wir heraus, wie ich Ihnen am besten helfen kann.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="btn btn-cta flex items-center gap-2"
            >
              Kostenloses Erstgespräch buchen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-slate-500">
              Kostenlos & unverbindlich
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
