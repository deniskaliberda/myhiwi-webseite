import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Target, Zap, TrendingUp, Award, Users, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "\u00dcber mich - Denis Kaliberda | MyHiwi",
  description: "Aktiver Volleyball-Profi und SEO-Experte. Erfahren Sie, wie ich analytisches Denken aus dem Sport f\u00fcr Ihr Online-Marketing einsetze.",
};

export default function AboutMePage() {
  const mentalityPrinciples = [
    {
      icon: Target,
      title: "Analytisches Denken",
      description: "Jedes Spiel erfordert Gegner-Analyse. Bei Ihrem SEO analysiere ich Ihre Konkurrenz und finde die Schwachstellen.",
      gradient: "from-accent to-blue-700",
    },
    {
      icon: Zap,
      title: "Probleme systematisch l\u00f6sen",
      description: "Im Sport wie im Marketing: Ich erkenne Probleme, verstehe sie und gehe sie strukturiert an.",
      gradient: "from-cyan to-accent",
    },
    {
      icon: TrendingUp,
      title: "Dranbleiben",
      description: "Erfolg kommt nicht \u00fcber Nacht \u2013 weder im Sport noch bei SEO. Ich bleibe konsequent an Ihrem Projekt dran.",
      gradient: "from-primary to-accent",
    },
  ];

  const journeySteps = [
    {
      year: "Seit 2005",
      title: "Aktiver Volleyball-Profi",
      description: "\u00dcber 20 Jahre Erfahrung im Profi-Volleyball, davon 2 L\u00e4nderspiele f\u00fcr die deutsche Nationalmannschaft. Der Sport hat mich gelehrt, analytisch zu denken und Probleme systematisch anzugehen.",
      icon: Award,
      gradient: "from-accent to-blue-700",
    },
    {
      year: "Parallel zum Sport",
      title: "Leidenschaft f\u00fcr Technik & Marketing",
      description: "Neben dem Sport habe ich meine Begeisterung f\u00fcr Webentwicklung und Online-Marketing entdeckt. Ich wollte verstehen, wie Unternehmen online sichtbar werden.",
      icon: Heart,
      gradient: "from-cyan to-accent",
    },
    {
      year: "Heute",
      title: "Beides verbinden",
      description: "Mit MyHiwi bringe ich das analytische Denken aus dem Sport in die digitale Welt. Ich helfe lokalen Unternehmen, online gefunden zu werden \u2013 mit der gleichen Gr\u00fcndlichkeit, die ich aus dem Sport kenne.",
      icon: Users,
      gradient: "from-primary to-accent",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/30" />
        <div className="absolute top-20 right-[15%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-[10%] w-80 h-80 bg-cyan/5 rounded-full blur-3xl animate-float-delay" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Kicker */}
            <div className="animate-fade-in-up stagger-1 inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 rounded-full border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm md:text-base font-semibold text-accent">
                Meine Geschichte
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-in-up stagger-2 mb-6 md:mb-8 text-primary">
              Mein Weg zu{" "}
              <span className="gradient-text">MyHiwi</span>
            </h1>

            {/* Quote */}
            <blockquote className="animate-fade-in-up stagger-3 text-xl md:text-3xl font-inter font-semibold text-slate-700 italic mb-8 md:mb-12 leading-relaxed">
              &ldquo;Der Sport hat mich gelehrt, Situationen zu analysieren und Probleme systematisch anzugehen.
              Genau das mache ich heute f&uuml;r Ihr Unternehmen.&rdquo;
            </blockquote>

            {/* Wikipedia Link */}
            <div className="animate-fade-in-up stagger-4 flex justify-center">
              <a
                href="https://de.wikipedia.org/wiki/Denis_Kaliberda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-accent transition-colors text-sm animated-underline"
              >
                Mehr \u00fcber meinen sportlichen Hintergrund auf Wikipedia
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-primary mb-8 md:mb-12 animate-fade-in-up">
              Sport und Marketing &ndash; was sie verbindet
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12">
              <div className="card-gradient-border glow-accent">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center mb-4 shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-inter font-bold text-primary mb-4">
                  Was ich im Sport gelernt habe
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Seit 2005 spiele ich Profi-Volleyball. In \u00fcber 20 Jahren habe ich gelernt,
                  dass Erfolg kein Zufall ist. Vor jedem Spiel analysieren wir den Gegner:
                  Wo sind die St\u00e4rken? Wo die Schw\u00e4chen? Wie k\u00f6nnen wir gewinnen?
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Diese analytische Denkweise ist mir in Fleisch und Blut \u00fcbergegangen.
                  Probleme erkennen, verstehen und systematisch l\u00f6sen &ndash; das ist mein Ansatz.
                </p>
              </div>

              <div className="card-gradient-border glow-accent">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-accent flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-inter font-bold text-primary mb-4">
                  Wie ich zu SEO kam
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Neben dem Sport habe ich mich immer f\u00fcr Technik interessiert.
                  Ich begann, mich mit Webentwicklung zu besch\u00e4ftigen und wollte verstehen,
                  wie Google funktioniert und warum manche Unternehmen gefunden werden &ndash; und andere nicht.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Dabei fiel mir auf: Viele gro\u00dfartige lokale Unternehmen sind online praktisch unsichtbar.
                  Das wollte ich \u00e4ndern.
                </p>
              </div>
            </div>

            {/* Why section */}
            <div className="card-gradient-border glow-accent">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-inter font-bold text-primary mb-4">
                    Warum ich mache, was ich mache
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Ich habe gesehen, wie viele tolle lokale Unternehmen &ndash; Handwerker, Dienstleister,
                    Familienbetriebe &ndash; online unsichtbar sind, w\u00e4hrend gro\u00dfe Ketten die Top-Positionen
                    bei Google besetzen. Das ist nicht fair. Mit MyHiwi \u00e4ndere ich das: durch technisches
                    Know-how, transparente Arbeit und pers\u00f6nlichen Service. Jeder verdient es, gefunden zu werden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-primary text-center mb-10 md:mb-16 animate-fade-in-up">
              Mein Weg
            </h2>

            <div className="space-y-5 md:space-y-8">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="card-gradient-border glow-accent flex flex-col md:flex-row gap-6 items-start group"
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                        {step.year}
                      </div>
                      <h3 className="text-2xl font-inter font-bold text-primary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mentality Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-inter font-bold text-primary mb-4 md:mb-6">
                Was das f&uuml;r Sie bedeutet
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Die Denkweise aus dem Sport bringe ich in jedes Projekt ein.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
              {mentalityPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={index}
                    className="card-gradient-border text-center group glow-accent"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-inter font-bold text-primary mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-animated" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
        }} />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4 md:mb-6 animate-fade-in-up">
              Bereit, Ihre lokale Sichtbarkeit zu steigern?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              Lassen Sie uns in einem kostenlosen Erstgespr&auml;ch herausfinden,
              wie ich Ihnen helfen kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="btn bg-white text-primary hover:bg-white/90 btn-shimmer group text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Jetzt Anfrage starten
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/"
                className="btn bg-white/10 text-white border border-white/30 hover:bg-white/20 px-6 py-3 md:px-8 md:py-4"
              >
                Zur\u00fcck zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
