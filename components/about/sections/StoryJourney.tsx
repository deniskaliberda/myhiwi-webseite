"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  Eye,
  BookOpen,
  Rocket,
  BarChart3,
  Building2,
} from "lucide-react";

const milestones = [
  {
    icon: Award,
    year: "1999 \u2013 heute",
    title: "Profi-Volleyball",
    description:
      "\u00dcber 200 L\u00e4nderspiele f\u00fcr Deutschland, Olympia 2012, WM-Bronze 2014, EM-Silber 2017 (bester Au\u00dfenangreifer). Deutscher Meister, italienischer Meister \u2013 der Sport lehrte mich Disziplin, Analyse und systematisches Arbeiten.",
    gradient: "from-accent to-blue-700",
  },
  {
    icon: Eye,
    year: "Parallel zum Sport",
    title: "Das Problem erkannt",
    description:
      "Durch Familie und Freunde sah ich, wie viele lokale Unternehmen online unsichtbar waren \u2013 trotz gro\u00dfartiger Arbeit.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: BookOpen,
    year: "Selbststudium",
    title: "Webentwicklung & SEO gelernt",
    description:
      "Neben dem Sport begann ich, mich intensiv mit Webentwicklung, Google und Online-Marketing zu besch\u00e4ftigen.",
    gradient: "from-cyan to-accent",
  },
  {
    icon: Rocket,
    year: "Erste Projekte",
    title: "Schnelle Erfolge",
    description:
      "Meine ersten Projekte zeigten: Man kann Unternehmen wirklich schnell helfen. Innerhalb weniger Wochen sichtbare Ergebnisse.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    year: "Erkenntnis",
    title: "Alles ist messbar",
    description:
      "Digital generierst du Daten. Du wirst sichtbarer. Und das kann man nachweisen \u2013 nicht ausgedacht, sondern belegbar.",
    gradient: "from-purple-500 to-accent",
  },
  {
    icon: Building2,
    year: "Heute",
    title: "MyHiwi gegr\u00fcndet",
    description:
      "Aus der \u00dcberzeugung, dass jedes lokale Unternehmen es verdient, online gefunden zu werden, entstand MyHiwi.",
    gradient: "from-primary to-accent",
  },
];

export default function StoryJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-16 md:py-28 bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-primary mb-4">
              Mein Weg zu{" "}
              <span className="gradient-text">MyHiwi</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Von der Sporthalle ins digitale Marketing &ndash; eine Reise, die
              auf echten Erfahrungen basiert.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
              <motion.div
                className="w-full bg-gradient-to-b from-accent via-cyan to-accent"
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
              />
            </div>

            {/* Milestones */}
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.2,
                    }}
                    className={`relative flex items-start gap-4 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline node */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + index * 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${milestone.gradient} flex items-center justify-center shadow-lg border-4 border-slate-50`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>

                    {/* Card */}
                    <div
                      className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                      }`}
                    >
                      <div className="card-gradient-border glow-accent">
                        <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-inter font-bold text-primary mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
