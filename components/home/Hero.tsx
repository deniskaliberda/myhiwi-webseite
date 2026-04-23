"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-950">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise" />

      {/* Diagonal gradient accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, #06b6d4 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-blue-400 text-xs font-medium tracking-wide uppercase">
                SEO & Webdesign Agentur
              </span>
            </div>

            <h1 className="text-white mb-6">
              Ihre Kunden{" "}
              <span className="relative">
                suchen
                <span className="absolute -bottom-1 left-0 right-0 h-1 gradient-line rounded-full" />
              </span>{" "}
              Sie.
              <br />
              <span className="text-slate-500">Finden sie Sie auch?</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Ich mache lokale Unternehmen bei Google sichtbar —
              mit professionellen Websites und Local SEO, das nachweisbar funktioniert.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-7 py-3.5 rounded-lg transition-all"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#case-study"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium px-4 py-3.5 transition-colors text-sm"
              >
                Ergebnis ansehen
              </a>
            </div>
          </div>

          {/* Right — Screenshot */}
          <div className="relative hidden lg:block">
            <div className="relative -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="screenshot-glow rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/case-studies/sonnenhof/sonnenhof-neu.png"
                  alt="Sonnenhof Herrsching — Website von MyHiwi"
                  width={480}
                  height={320}
                  className="w-[480px] h-auto"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 shadow-xl">
                <p className="text-xs text-slate-400">Sichtbarkeit</p>
                <p className="text-xl font-heading font-bold text-white">
                  0% → <span className="text-blue-500">34,6%</span>
                </p>
                <p className="text-xs text-slate-500">in 4 Wochen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Credential bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="text-slate-500">
              Gegründet von <span className="text-slate-300">Denis Kaliberda</span> — Ex-Volleyball-Nationalspieler
            </span>
            <a
              href="https://de.wikipedia.org/wiki/Denis_Kaliberda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors"
            >
              Wikipedia <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
