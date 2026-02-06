import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Target, Zap, TrendingUp, Award, Users, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Über mich - Denis Kaliberda | MyHiwi",
  description: "Aktiver Volleyball-Profi und SEO-Experte. Erfahren Sie, wie ich analytisches Denken aus dem Sport für Ihr Online-Marketing einsetze.",
};

export default function AboutMePage() {
  const mentalityPrinciples = [
    {
      icon: Target,
      title: "Analytisches Denken",
      description: "Jedes Spiel erfordert Gegner-Analyse. Bei Ihrem SEO analysiere ich Ihre Konkurrenz und finde die Schwachstellen.",
    },
    {
      icon: Zap,
      title: "Probleme systematisch lösen",
      description: "Im Sport wie im Marketing: Ich erkenne Probleme, verstehe sie und gehe sie strukturiert an.",
    },
    {
      icon: TrendingUp,
      title: "Dranbleiben",
      description: "Erfolg kommt nicht über Nacht – weder im Sport noch bei SEO. Ich bleibe konsequent an Ihrem Projekt dran.",
    },
  ];

  const journeySteps = [
    {
      year: "Seit 2005",
      title: "Aktiver Volleyball-Profi",
      description: "Über 20 Jahre Erfahrung im Profi-Volleyball, davon 2 Länderspiele für die deutsche Nationalmannschaft. Der Sport hat mich gelehrt, analytisch zu denken und Probleme systematisch anzugehen.",
      icon: Award,
    },
    {
      year: "Parallel zum Sport",
      title: "Leidenschaft für Technik & Marketing",
      description: "Neben dem Sport habe ich meine Begeisterung für Webentwicklung und Online-Marketing entdeckt. Ich wollte verstehen, wie Unternehmen online sichtbar werden.",
      icon: Heart,
    },
    {
      year: "Heute",
      title: "Beides verbinden",
      description: "Mit MyHiwi bringe ich das analytische Denken aus dem Sport in die digitale Welt. Ich helfe lokalen Unternehmen, online gefunden zu werden – mit der gleichen Gründlichkeit, die ich aus dem Sport kenne.",
      icon: Users,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm md:text-base font-semibold text-accent">
                Meine Geschichte
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-8 text-primary">
              Mein Weg zu MyHiwi
            </h1>

            {/* Subheadline / Quote */}
            <blockquote className="text-2xl md:text-3xl font-poppins font-semibold text-slate-700 italic mb-12 leading-relaxed">
              "Der Sport hat mich gelehrt, Situationen zu analysieren und Probleme systematisch anzugehen. 
              Genau das mache ich heute für Ihr Unternehmen."
            </blockquote>

            {/* Wikipedia Link - Dezent */}
            <div className="flex justify-center">
              <a
                href="https://de.wikipedia.org/wiki/Denis_Kaliberda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-accent transition-colors text-sm"
              >
                Mehr über meinen sportlichen Hintergrund auf Wikipedia
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Magazine Layout */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Main Story */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-8">
                Sport und Marketing – was sie verbindet
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
                    Was ich im Sport gelernt habe
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    Seit 2005 spiele ich Profi-Volleyball. In über 20 Jahren habe ich gelernt, 
                    dass Erfolg kein Zufall ist. Vor jedem Spiel analysieren wir den Gegner: 
                    Wo sind die Stärken? Wo die Schwächen? Wie können wir gewinnen?
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Diese analytische Denkweise ist mir in Fleisch und Blut übergegangen. 
                    Probleme erkennen, verstehen und systematisch lösen – das ist mein Ansatz.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
                    Wie ich zu SEO kam
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    Neben dem Sport habe ich mich immer für Technik interessiert. 
                    Ich begann, mich mit Webentwicklung zu beschäftigen und wollte verstehen, 
                    wie Google funktioniert und warum manche Unternehmen gefunden werden – und andere nicht.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Dabei fiel mir auf: Viele großartige lokale Unternehmen sind online praktisch unsichtbar. 
                    Das wollte ich ändern.
                  </p>
                </div>
              </div>

              {/* The "Why" Factor */}
              <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-8 mb-12">
                <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
                  Warum ich mache, was ich mache
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Ich habe gesehen, wie viele tolle lokale Unternehmen – Handwerker, Dienstleister, 
                  Familienbetriebe – online unsichtbar sind, während große Ketten die Top-Positionen 
                  bei Google besetzen. Das ist nicht fair. Mit MyHiwi ändere ich das: durch technisches 
                  Know-how, transparente Arbeit und persönlichen Service. Jeder verdient es, gefunden zu werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary text-center mb-16">
              Mein Weg
            </h2>

            <div className="space-y-8">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="card flex flex-col md:flex-row gap-6 items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4 md:mb-0">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                        {step.year}
                      </div>
                      <h3 className="text-2xl font-poppins font-bold text-primary mb-3">
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

      {/* Leistungssport-Mentalität Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">
                Was das für Sie bedeutet
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Die Denkweise aus dem Sport bringe ich in jedes Projekt ein.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mentalityPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={index}
                    className="card text-center group"
                  >
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-primary mb-4">
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


      {/* CTA Section - Back to Contact */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">
              Bereit, Ihre lokale Sichtbarkeit zu steigern?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden, 
              wie ich Ihnen helfen kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-lg hover:bg-cta-hover hover:shadow-xl transition-all duration-300 group"
              >
                Kostenlose Erstberatung vereinbaren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
