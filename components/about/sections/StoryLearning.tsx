"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Search, BarChart3, Lightbulb, Heart } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Webentwicklung",
    description:
      "Moderne Websites, die schnell laden, gut aussehen und auf allen Ger\u00e4ten funktionieren.",
    gradient: "from-accent to-blue-700",
  },
  {
    icon: Search,
    title: "SEO & Google",
    description:
      "Verstehen, wie Google funktioniert und wie man lokale Unternehmen sichtbar macht.",
    gradient: "from-cyan to-accent",
  },
  {
    icon: BarChart3,
    title: "Marketing-Strategie",
    description:
      "Datenbasierte Ans\u00e4tze, die nachweisbar Ergebnisse liefern \u2013 keine leeren Versprechen.",
    gradient: "from-primary to-accent",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
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

export default function StoryLearning() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-16 md:py-28 bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Text block */}
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/20">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">
                Die L&ouml;sung
              </span>
            </div>
            <h2 className="text-primary mb-6">
              Ich wollte verstehen, wie man das &auml;ndert &ndash;{" "}
              <span className="gradient-text">und habe es gelernt</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Neben dem Sport habe ich mich intensiv mit Webentwicklung und
              Online-Marketing besch&auml;ftigt. Ich wollte verstehen, wie Google
              funktioniert und warum manche Unternehmen gefunden werden &ndash; und
              andere nicht.
            </p>
          </motion.div>

          {/* Skill Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-10 md:mb-14"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="card-gradient-border text-center group glow-accent"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-inter font-bold text-primary mb-4">
                    {skill.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Conviction statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="card-gradient-border glow-accent"
          >
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-inter font-bold text-primary mb-4">
                  &Uuml;berzeugung
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Ich glaube wirklich daran, dass ich Menschen helfen kann. Nicht
                  jeder muss sich mit Google, SEO und Webdesign auskennen &ndash; aber
                  genau deshalb gibt es mich. Ich helfe Unternehmen, digital besser
                  dazustehen &ndash; fair, pers&ouml;nlich und mit echtem Interesse an
                  Ihrem Erfolg.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
