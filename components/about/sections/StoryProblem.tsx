"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Search,
  Smartphone,
  TrendingDown,
  X,
  Star,
  AlertTriangle,
} from "lucide-react";

export default function StoryProblem() {
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
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-red-50 rounded-full border border-red-100">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-sm font-semibold text-red-500">
                Was mir auffiel
              </span>
            </div>
            <h2 className="text-primary mb-4">
              W&auml;hrend meiner Sportkarriere sah ich ein Problem
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Gro&szlig;artige lokale Unternehmen &ndash; Handwerker, Dienstleister,
              Familienbetriebe &ndash; die online praktisch unsichtbar waren.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Durch Familie und Freunde habe ich gesehen, wie viele Unternehmen
                  k&auml;mpfen, online sichtbar zu werden. Sie hatten{" "}
                  <strong className="text-primary">veraltete Webseiten</strong>,
                  wurden bei Google nicht gefunden und verloren Kunden an die Konkurrenz.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Nicht weil sie schlecht waren &ndash; sondern weil ihnen die Zeit
                  und das Know-how fehlten, sich um ihre digitale Pr&auml;senz zu k&uuml;mmern.
                </p>

                {/* Problem badges */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {[
                    "Seite 5 bei Google",
                    "Veraltet",
                    "Nicht mobilfreundlich",
                    "Keine Bewertungen",
                  ].map((badge, i) => (
                    <motion.span
                      key={badge}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 border border-red-100 rounded-full text-sm text-red-600 font-medium"
                    >
                      <X className="w-3 h-3" />
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Visual: Old website mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 p-4 md:p-6">
                {/* Outdated website mockup */}
                <div className="bg-white rounded-lg border border-slate-300 overflow-hidden mb-4 shadow-sm">
                  {/* Browser Bar */}
                  <div className="bg-slate-200 px-3 py-2 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    </div>
                    <div className="flex-1 bg-slate-300 rounded h-4 ml-1 flex items-center px-2">
                      <div className="w-20 h-2 bg-slate-400 rounded" />
                    </div>
                  </div>
                  {/* Page content */}
                  <div className="p-3 md:p-4">
                    <div className="w-full h-4 bg-amber-200/60 rounded-sm mb-2" />
                    <div className="flex gap-2">
                      <div className="w-1/4 space-y-1.5">
                        <div className="w-full h-2.5 bg-slate-300 rounded-sm" />
                        <div className="w-full h-2.5 bg-slate-300 rounded-sm" />
                        <div className="w-full h-2.5 bg-slate-300 rounded-sm" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="w-2/3 h-3 bg-slate-200 rounded-sm" />
                        <div className="w-full h-16 md:h-20 bg-slate-100 rounded-sm border border-dashed border-slate-300 flex items-center justify-center">
                          <Monitor className="w-5 h-5 text-slate-300" />
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-sm" />
                        <div className="w-4/5 h-2 bg-slate-200 rounded-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bad Google rating */}
                <div className="bg-white rounded-lg border border-slate-300 p-3 mb-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-xs text-slate-400 font-medium">Google Business</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-bold text-slate-500">4.2</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${s <= 4 ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">nur 3 Bewertungen</div>
                </div>

                {/* Problem indicators */}
                <div className="space-y-2">
                  {[
                    { icon: Smartphone, text: "Nicht mobiloptimiert" },
                    { icon: TrendingDown, text: "Kunden gehen zur Konkurrenz" },
                    { icon: Search, text: "Unsichtbar bei Google" },
                  ].map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3 h-3 text-red-400" />
                      </div>
                      <span className="text-xs md:text-sm text-slate-500">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative label */}
                <div className="absolute -top-3 -right-3 inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 rounded-full">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                    Realit&auml;t vieler Unternehmen
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
