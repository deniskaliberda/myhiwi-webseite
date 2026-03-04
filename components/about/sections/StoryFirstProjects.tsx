"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Check,
  Globe,
  Wifi,
  Search,
  Star,
  TrendingUp,
  Rocket,
} from "lucide-react";

export default function StoryFirstProjects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-28 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section intro */}
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
              <Rocket className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-green-600">
                Die ersten Erfolge
              </span>
            </div>
            <h2 className="text-primary mb-4">
              Meine ersten Projekte zeigten:{" "}
              <span className="gradient-text">Ich kann schnell helfen</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Innerhalb weniger Wochen sichtbare Ergebnisse &ndash; keine leeren
              Versprechen, sondern nachweisbarer Fortschritt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Visual: Modern website mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative rounded-2xl bg-white border-2 border-accent/30 p-4 md:p-6 shadow-lg shadow-accent/10">
                {/* Modern website mockup */}
                <div className="bg-white rounded-lg border border-accent/20 overflow-hidden mb-4 shadow-sm shadow-accent/10">
                  <div className="bg-slate-50 px-3 py-2 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-white rounded h-4 ml-1 border border-slate-200 flex items-center px-2">
                      <Wifi className="w-2.5 h-2.5 text-green-500" />
                      <div className="ml-1 w-16 h-2 bg-accent/30 rounded" />
                    </div>
                  </div>
                  <div className="p-3 md:p-4 space-y-2.5">
                    <div className="w-3/4 h-3 bg-gradient-to-r from-accent to-cyan rounded" />
                    <div className="w-full h-2 bg-slate-100 rounded" />
                    <div className="w-5/6 h-2 bg-slate-100 rounded" />
                    <div className="w-full h-14 md:h-20 bg-gradient-to-br from-accent/10 to-cyan/10 rounded mt-2 flex items-center justify-center border border-accent/10">
                      <Globe className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-1/3 h-6 bg-gradient-to-r from-accent to-cyan rounded flex items-center justify-center">
                        <span className="text-[9px] text-white font-bold">CTA</span>
                      </div>
                      <div className="w-1/3 h-2 bg-slate-100 rounded self-center" />
                    </div>
                  </div>
                </div>

                {/* Good Google Rating */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 p-3 mb-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Search className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-xs text-green-600 font-medium">Google</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-bold text-green-700">4.9</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-[10px] text-green-600 mt-0.5">47 Bewertungen</div>
                </div>

                {/* Success metrics */}
                <div className="space-y-2">
                  {[
                    { icon: Check, text: "Top 3 bei Google" },
                    { icon: TrendingUp, text: "Mehr Besucher & Anfragen" },
                    { icon: Star, text: "Mehr Bewertungen" },
                  ].map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-xs md:text-sm text-slate-700 font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Label */}
                <div className="absolute -top-3 -right-3 inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 rounded-full shadow-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                    Nach MyHiwi
                  </span>
                </div>

                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/5 to-cyan/5 rounded-2xl -z-10 blur-sm" />
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Bei meinen ersten Projekten merkte ich schnell:{" "}
                  <strong className="text-primary">
                    Man kann Unternehmen wirklich in kurzer Zeit helfen
                  </strong>
                  . Eine professionelle Website, ein optimiertes Google-Profil &ndash; und
                  schon werden sie gefunden.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Das Feedback war &uuml;berw&auml;ltigend. Kunden berichteten von
                  mehr Anfragen, mehr Besuchen und einem professionelleren Auftreten
                  gegen&uuml;ber der Konkurrenz.
                </p>

                {/* Success badges */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {[
                    "+340% Sichtbarkeit",
                    "Seite 1 bei Google",
                    "Mehr Kundenanfragen",
                  ].map((badge, i) => (
                    <motion.span
                      key={badge}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-100 rounded-full text-sm text-green-600 font-medium"
                    >
                      <Check className="w-3 h-3" />
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
