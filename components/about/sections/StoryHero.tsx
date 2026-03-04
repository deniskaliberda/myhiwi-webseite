"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ChevronDown, ExternalLink } from "lucide-react";

export default function StoryHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/30"
        style={{ y: backgroundY }}
      />

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 right-[15%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-cyan/5 rounded-full blur-3xl animate-float-delay" />
      <div className="absolute top-1/2 right-[5%] w-4 h-4 bg-accent/30 rounded-full animate-float-slow" />
      <div className="absolute top-1/3 left-[8%] w-3 h-3 bg-cyan/40 rounded-full animate-float" />

      <motion.div
        className="container-custom relative z-10"
        style={{ opacity: textOpacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 rounded-full border border-accent/20"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm md:text-base font-semibold text-accent">
                Meine Geschichte
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 md:mb-6 text-primary"
            >
              Vom Leistungssport zu{" "}
              <span className="gradient-text">MyHiwi</span>
            </motion.h1>

            {/* Statement */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed"
            >
              Seit 1999 im Volleyball, seit 2009 Profi. &Uuml;ber 200 L&auml;nderspiele
              f&uuml;r Deutschland, Olympia 2012, WM-Bronze 2014, EM-Silber 2017.
              Der Leistungssport hat mich gelehrt, analytisch zu denken und
              Probleme systematisch anzugehen.
            </motion.p>

            {/* Wikipedia Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://de.wikipedia.org/wiki/Denis_Kaliberda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-accent transition-colors text-sm animated-underline"
              >
                Mehr &uuml;ber meinen sportlichen Hintergrund auf Wikipedia
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Visual Placeholder */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-accent/10 via-cyan/10 to-accent/5 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-accent/5 to-cyan/5 rounded-2xl border-2 border-dashed border-accent/20 p-8 md:p-12 aspect-[4/3] flex flex-col items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center mb-6 shadow-xl">
                  <Award className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-lg md:text-xl font-bold text-primary mb-2">Denis Kaliberda</p>
                  <p className="text-sm md:text-base text-slate-500">Profi-Volleyballer &amp; Gr&uuml;nder</p>
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">200+</div>
                      <div className="text-xs text-slate-500">L&auml;nderspiele</div>
                    </div>
                    <div className="w-px h-8 bg-slate-200" />
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">WM</div>
                      <div className="text-xs text-slate-500">Bronze 2014</div>
                    </div>
                    <div className="w-px h-8 bg-slate-200" />
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">25+</div>
                      <div className="text-xs text-slate-500">Jahre Sport</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-400 uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
}
