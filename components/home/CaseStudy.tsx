"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionReveal from "@/components/shared/SectionReveal";

export default function CaseStudy() {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <section id="case-study" className="relative py-24 md:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <Container className="relative">
        <SectionReveal>
          <p className="text-blue-500 font-medium text-xs tracking-widest uppercase mb-4">
            Ergebnis
          </p>
          <h2 className="text-white max-w-xl mb-4">
            Von unsichtbar zu Seite 1 — in 4 Wochen.
          </h2>
          <p className="text-slate-400 max-w-lg mb-12">
            Sonnenhof Herrsching — eine Familienpension am Ammersee.
            Vorher bei Google nicht auffindbar. Heute auf Platz 1.
          </p>
        </SectionReveal>

        {/* Before / After Toggle */}
        <SectionReveal>
          <div className="relative">
            {/* Toggle buttons */}
            <div className="flex gap-1 mb-6 bg-navy-800/50 rounded-lg p-1 w-fit">
              <button
                onClick={() => setShowAfter(false)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                  !showAfter
                    ? "bg-navy-700 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-300"
                }`}
              >
                Vorher
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                  showAfter
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-300"
                }`}
              >
                Nachher
              </button>
            </div>

            {/* Image container */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/9] md:aspect-[2/1] bg-navy-800">
              {/* Before image */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  showAfter ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image
                  src="/case-studies/sonnenhof/sonnenhof-alt.png"
                  alt="Sonnenhof Herrsching — alte Website"
                  fill
                  className="object-cover object-top grayscale"
                />
                <div className="absolute inset-0 bg-navy-900/30" />
              </div>

              {/* After image */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  showAfter ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src="/case-studies/sonnenhof/sonnenhof-neu.png"
                  alt="Sonnenhof Herrsching — neue Website von MyHiwi"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Label overlay */}
              <div className="absolute bottom-4 left-4">
                <span
                  className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                    showAfter
                      ? "bg-blue-500 text-white"
                      : "bg-navy-900/80 text-slate-300 border border-white/10"
                  }`}
                >
                  {showAfter ? "Neue Website von MyHiwi" : "Alte Website"}
                </span>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Metrics bar */}
        <SectionReveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden">
            {[
              { value: "34,6%", label: "Sichtbarkeit", sub: "von 0% gestartet" },
              { value: "14", label: "Top-3 Keywords", sub: "vorher nur 2" },
              { value: "3+", label: "Buchungen/Woche", sub: "organisch" },
              { value: "100", label: "Health Score", sub: "von 100 Punkten" },
            ].map((m) => (
              <div key={m.label} className="bg-navy-800/50 p-5 md:p-6 text-center">
                <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                  {m.value}
                </p>
                <p className="text-sm text-slate-300">{m.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{m.sub}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="mt-8 text-center">
            <Link
              href="/blog/sonnenhof-case-study"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
            >
              Vollständige Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
