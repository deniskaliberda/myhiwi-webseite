import Link from "next/link";
import { Target, MapPin, ExternalLink, Heart, ArrowRight, Newspaper } from "lucide-react";

export default function TrustSection() {
  const values = [
    {
      icon: Heart,
      title: "Echtes Interesse",
      description:
        "Ich arbeite mit Unternehmen, weil ich daran glaube, dass bessere digitale Pr\u00e4senz echten Unterschied macht. Kein Upselling, keine leeren Versprechen.",
      gradient: "from-accent to-blue-700",
    },
    {
      icon: Target,
      title: "Analytisch & Zielorientiert",
      description:
        "Im Leistungssport lernt man, Probleme zu erkennen, systematisch daran zu arbeiten und langfristig besser zu werden. Genau so gehe ich Ihr Projekt an.",
      gradient: "from-cyan to-blue-600",
    },
    {
      icon: MapPin,
      title: "Pers\u00f6nlich & Lokal",
      description:
        "Bei mir arbeiten Sie nicht mit einer gro\u00dfen Agentur, sondern mit jemandem, der wirklich Interesse hat, dass Ihre Firma digital besser dasteht.",
      gradient: "from-primary to-accent",
    },
  ];

  const pressLinks = [
    {
      name: "Wikipedia",
      url: "https://de.wikipedia.org/wiki/Denis_Kaliberda",
    },
    {
      name: "Sportschau",
      url: "https://www.sportschau.de/volleyball/denis-kaliberda-100.html",
    },
    {
      name: "Volleyball-Magazin",
      url: "https://www.volleyball-magazin.de/tag/denis-kaliberda/",
    },
  ];

  return (
    <section className="relative bg-primary text-white py-12 md:py-24 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 gradient-bg-animated opacity-80" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Personal Story */}
        <div className="max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-white mb-6 animate-fade-in-up">
              Warum ich das mache
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            {/* Left: Story Text */}
            <div className="animate-fade-in-up stagger-1">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4 md:mb-6">
                Durch Familie und Freunde habe ich gesehen, wie viele
                Unternehmen k&auml;mpfen, online sichtbar zu werden. Nicht weil
                sie schlecht sind &ndash; sondern weil{" "}
                <strong className="text-white">
                  ihnen die Zeit und das Know-how fehlen
                </strong>
                .
              </p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Das ist v&ouml;llig okay. Nicht jeder muss sich mit Google,
                SEO und Webdesign auskennen. Aber genau deshalb gibt es mich:
                Ich helfe Unternehmen, digital besser dazustehen &ndash; fair,
                pers&ouml;nlich und mit echtem Interesse an Ihrem Erfolg.
              </p>
            </div>

            {/* Right: Quote Card */}
            <div className="animate-fade-in-up stagger-2">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 md:p-8">
                <div className="text-3xl md:text-4xl text-white/20 mb-3 font-inter">
                  &ldquo;
                </div>
                <p className="text-lg md:text-xl text-white font-inter font-semibold italic leading-relaxed mb-4">
                  Es ist ein Win-Win: Ich glaube daran, dass bessere digitale
                  Pr&auml;senz Unternehmen wirklich weiterbringt. Und genau das
                  motiviert mich jeden Tag.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg-animated flex items-center justify-center text-white font-bold text-sm">
                    DK
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      Denis Kaliberda
                    </div>
                    <div className="text-white/60 text-xs">
                      Gr&uuml;nder von MyHiwi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-10 md:mb-14">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 md:p-8 hover:bg-white/15 hover:border-white/40 transition-all duration-500 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-inter font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Press / Background References */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-5">
              <Newspaper className="w-4 h-4 text-white/50" />
              <span className="text-xs md:text-sm text-white/50 uppercase tracking-wider font-semibold">
                Mehr &uuml;ber meinen Hintergrund
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {pressLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-xs md:text-sm"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/ueber-mich"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 hover:shadow-xl transition-all duration-300 group glow-accent"
          >
            Mehr &uuml;ber mich erfahren
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
