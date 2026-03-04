"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Target,
  Zap,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Newspaper,
} from "lucide-react";

const mentalityPrinciples = [
  {
    icon: Target,
    title: "Analytisches Denken",
    description:
      "Jedes Spiel erfordert Gegner-Analyse. Bei Ihrem SEO analysiere ich Ihre Konkurrenz und finde die Schwachstellen.",
    gradient: "from-accent to-blue-700",
  },
  {
    icon: Zap,
    title: "Probleme systematisch l\u00f6sen",
    description:
      "Im Sport wie im Marketing: Ich erkenne Probleme, verstehe sie und gehe sie strukturiert an.",
    gradient: "from-cyan to-accent",
  },
  {
    icon: TrendingUp,
    title: "Dranbleiben",
    description:
      "Erfolg kommt nicht \u00fcber Nacht \u2013 weder im Sport noch bei SEO. Ich bleibe konsequent an Ihrem Projekt dran.",
    gradient: "from-primary to-accent",
  },
];

const pressLinks = [
  {
    name: "Wikipedia",
    url: "https://de.wikipedia.org/wiki/Denis_Kaliberda",
  },
  {
    name: "Tagesspiegel",
    url: "https://www.tagesspiegel.de/sport/vieles-fehlt-um-gut-volleyball-spielen-zu-konnen-denis-kaliberda-ist-der-hoffnungstrager-der-netzhoppers-13148944.html",
  },
  {
    name: "Volleyball-Verband",
    url: "https://www.volleyball-verband.de/de/kader/spieler--amp--trainer/denis-kaliberda/",
  },
  {
    name: "S\u00fcddeutsche Zeitung",
    url: "https://www.sueddeutsche.de/sport/kaliberda-herrsching-volleyball-nationalmannschaft-li.3330428",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function StoryMission() {
  const missionRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.2 });
  const principlesInView = useInView(principlesRef, { once: true, amount: 0.15 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Mission Section */}
      <section ref={missionRef} className="py-16 md:py-28 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-primary mb-6">
                  Was{" "}
                  <span className="gradient-text">MyHiwi</span>{" "}
                  f&uuml;r mich bedeutet
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  MyHiwi ist mehr als ein Business. Es ist die &Uuml;berzeugung,
                  dass bessere digitale Pr&auml;senz echten Unterschied macht &ndash;
                  f&uuml;r Familienbetriebe, Handwerker und lokale Unternehmen, die
                  gro&szlig;artige Arbeit leisten.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Kein Upselling, keine leeren Versprechen. Einfach ehrliche Arbeit
                  mit echtem Interesse an Ihrem Erfolg.
                </p>
              </motion.div>

              {/* Quote Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="card-gradient-border glow-accent">
                  <div className="text-3xl md:text-4xl text-accent/20 mb-3 font-inter">
                    &ldquo;
                  </div>
                  <p className="text-lg md:text-xl text-primary font-inter font-semibold italic leading-relaxed mb-4">
                    Jeder verdient es, gefunden zu werden. Das ist mein Antrieb &ndash;
                    jeden Tag.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-bg-animated flex items-center justify-center text-white font-bold text-sm">
                      DK
                    </div>
                    <div>
                      <div className="text-primary font-semibold text-sm">
                        Denis Kaliberda
                      </div>
                      <div className="text-slate-500 text-xs">
                        Gr&uuml;nder von MyHiwi
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentality Principles */}
      <section ref={principlesRef} className="py-12 md:py-20 bg-slate-50 overflow-hidden">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-8 md:mb-14"
              initial={{ opacity: 0, y: 30 }}
              animate={principlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary mb-4">
                Was das f&uuml;r Sie bedeutet
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Die Denkweise aus dem Sport bringe ich in jedes Projekt ein.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-10"
              variants={containerVariants}
              initial="hidden"
              animate={principlesInView ? "visible" : "hidden"}
            >
              {mentalityPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="card-gradient-border text-center group glow-accent"
                  >
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-inter font-bold text-primary mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {principle.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Press links */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={principlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Newspaper className="w-4 h-4 text-slate-400" />
                <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-semibold">
                  Mehr &uuml;ber meinen Hintergrund
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {pressLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 bg-slate-100 border border-slate-200 rounded-full text-slate-500 hover:text-accent hover:bg-accent/5 hover:border-accent/20 transition-all duration-300 text-xs md:text-sm"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-animated" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-white mb-4 md:mb-6">
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
                Zur&uuml;ck zur Startseite
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
