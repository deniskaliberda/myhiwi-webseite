import Link from "next/link";
import { Target, CheckCircle, MapPin, ExternalLink } from "lucide-react";

export default function TrustSection() {
  const keyFacts = [
    {
      icon: Target,
      title: "Analytisches Denken",
      description: "Probleme erkennen, verstehen und systematisch lösen",
    },
    {
      icon: CheckCircle,
      title: "Zielorientiert",
      description: "Klare Ziele setzen und konsequent daran arbeiten",
    },
    {
      icon: MapPin,
      title: "Lokaler Fokus",
      description: "SEO-Strategien speziell für KMU in Ihrer Region",
    },
  ];

  return (
    <section className="relative bg-primary text-white py-20 md:py-24">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-white mb-6">
            Was ich aus dem Sport mitgenommen habe.
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Im Leistungssport habe ich gelernt, Situationen zu analysieren und 
            Probleme systematisch anzugehen. Diese Denkweise bringe ich heute in 
            jedes Projekt ein – um für Ihr Unternehmen die beste Lösung zu finden.
          </p>
        </div>

        {/* Key Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {keyFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-white mb-2">
                  {fact.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {fact.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Wikipedia Link - Dezent */}
        <div className="text-center mb-8">
          <a
            href="https://de.wikipedia.org/wiki/Denis_Kaliberda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
          >
            Mehr über meinen Hintergrund auf Wikipedia
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/ueber-mich"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300 group"
          >
            Mehr über mich erfahren
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 text-secondary"
          viewBox="0 0 1440 48"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,48 L1440,48 L1440,24 C1200,8 960,0 720,0 C480,0 240,8 0,24 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
}
