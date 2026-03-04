"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { BarChart3, TrendingUp, Users, Search, Eye } from "lucide-react";

const metrics = [
  {
    icon: Eye,
    label: "Sichtbarkeit",
    value: 94,
    suffix: "%",
    color: "from-accent to-blue-600",
  },
  {
    icon: Users,
    label: "Website-Besucher",
    value: 340,
    suffix: "%",
    prefix: "+",
    color: "from-cyan to-accent",
  },
  {
    icon: Search,
    label: "Google-Position",
    value: 3,
    suffix: "",
    prefix: "Top ",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: TrendingUp,
    label: "Kundenanfragen",
    value: 280,
    suffix: "%",
    prefix: "+",
    color: "from-primary to-accent",
  },
];

function MetricBar({
  metric,
  index,
  isInView,
}: {
  metric: (typeof metrics)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = metric.icon;
  const barWidth = metric.label === "Google-Position" ? 95 : metric.value > 100 ? 85 : metric.value;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
      className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg`}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-white/80 font-medium text-sm md:text-base">
            {metric.label}
          </span>
        </div>
        <motion.span
          className="text-xl md:text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
        >
          {metric.prefix}
          {metric.value}
          {metric.suffix}
        </motion.span>
      </div>
      {/* Progress bar */}
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${barWidth}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.5 + index * 0.15, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function StoryDataDriven() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-28 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg-animated" />

      {/* Decorative elements */}
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-10 md:mb-14"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-white/10 rounded-full border border-white/20">
              <BarChart3 className="w-4 h-4 text-white/80" />
              <span className="text-sm font-semibold text-white/80">
                Messbare Ergebnisse
              </span>
            </div>
            <h2 className="text-white mb-6">
              Das Sch&ouml;ne an digitaler Arbeit:{" "}
              <span className="text-cyan-300">Alles ist messbar</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Es ist nicht ausgedacht. Man kann nachweisbar sehen, wie die
              Sichtbarkeit steigt. Daten l&uuml;gen nicht &ndash; und genau das
              macht den Erfolg messbar und nachvollziehbar.
            </p>
          </motion.div>

          {/* Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8"
          >
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg gradient-bg-animated flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    Beispiel-Dashboard
                  </div>
                  <div className="text-white/50 text-xs">
                    Typische Ergebnisse nach 3 Monaten
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full border border-green-400/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-300 font-medium">Live-Daten</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <MetricBar
                  key={metric.label}
                  metric={metric}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>

          {/* Bottom statement */}
          <motion.p
            className="text-center text-white/60 text-sm mt-6 italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            * Beispielhafte Werte basierend auf typischen Projektergebnissen
          </motion.p>
        </div>
      </div>
    </section>
  );
}
