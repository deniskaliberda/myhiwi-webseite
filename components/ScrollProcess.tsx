"use client";

import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Search,
  FileText,
  Users,
  CheckCircle,
  Zap,
  TrendingUp,
  MessageCircle,
  Target,
  Puzzle,
} from "lucide-react";

/* ── Step 1 Visual: Video Call / Erstgespr\u00e4ch ── */
function ErstgespraechVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Call header */}
        <div className="bg-slate-800 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-xs font-semibold">
              Erstgespr&auml;ch l&auml;uft...
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-green-400" />
            <span className="text-white/60 text-xs">15:00</span>
          </div>
        </div>

        <div className="p-5">
          {/* Two participants */}
          <div className="flex justify-center gap-8 mb-5">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center mb-1.5 shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="text-[10px] font-semibold text-slate-500">
                Sie
              </div>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-1.5 shadow-lg">
                <span className="text-white font-bold">DK</span>
              </div>
              <div className="text-[10px] font-semibold text-slate-500">
                Denis
              </div>
            </div>
          </div>

          {/* Chat bubbles */}
          <div className="space-y-2.5">
            <div className="flex justify-end">
              <div className="bg-accent/10 text-accent text-[11px] px-3 py-1.5 rounded-xl rounded-tr-sm max-w-[220px]">
                Was genau macht Ihr Unternehmen?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-xl rounded-tl-sm max-w-[220px]">
                Wir sind ein Friseursalon in der Innenstadt...
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-accent/10 text-accent text-[11px] px-3 py-1.5 rounded-xl rounded-tr-sm max-w-[220px]">
                Wer sind Ihre typischen Kunden?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-xl rounded-tl-sm max-w-[220px]">
                Vor allem Frauen zwischen 25 und 45...
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-2.5 -right-2.5 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
        Kostenlos &amp; unverbindlich
      </div>
    </div>
  );
}

/* ── Step 2 Visual: Analyse Dashboard ── */
function AnalyseVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-gradient-to-r from-primary to-accent px-4 py-2.5">
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-white" />
            <span className="text-white text-xs font-semibold">
              Analyse: Ihr Unternehmen
            </span>
          </div>
        </div>

        <div className="p-4">
          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-2 gap-2.5 mb-3">
            <div className="bg-green-50 rounded-lg p-2.5 border border-green-100">
              <div className="text-[10px] font-bold text-green-600 uppercase mb-1.5">
                St&auml;rken
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] text-slate-600">
                    Guter Standort
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] text-slate-600">
                    Stammkunden
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] text-slate-600">
                    Top Bewertungen
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-red-50 rounded-lg p-2.5 border border-red-100">
              <div className="text-[10px] font-bold text-red-500 uppercase mb-1.5">
                Schw&auml;chen
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <span className="text-red-400 text-[10px] font-bold">
                    &times;
                  </span>
                  <span className="text-[10px] text-slate-600">
                    Keine Website
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-red-400 text-[10px] font-bold">
                    &times;
                  </span>
                  <span className="text-[10px] text-slate-600">
                    Google: Seite 5
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-red-400 text-[10px] font-bold">
                    &times;
                  </span>
                  <span className="text-[10px] text-slate-600">
                    Kein GMB-Profil
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Competitor comparison */}
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">
              Google-Sichtbarkeit vs. Konkurrenz
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[10px] text-slate-600 mb-0.5">
                  <span>Konkurrent A</span>
                  <span className="font-semibold">78%</span>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-red-400 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-slate-600 mb-0.5">
                  <span>Konkurrent B</span>
                  <span className="font-semibold">52%</span>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-[52%] bg-orange-400 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-bold text-primary mb-0.5">
                  <span>Ihr Unternehmen</span>
                  <span>12%</span>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-[12%] bg-accent rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-2.5 -right-2.5 bg-accent text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
        <Search className="w-3 h-3" /> Potenzial erkannt
      </div>
    </div>
  );
}

/* ── Step 3 Visual: Individuelles Angebot ── */
function AngebotVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-gradient-to-r from-accent to-cyan px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-white" />
            <span className="text-white text-xs font-semibold">
              Ihr individuelles Angebot
            </span>
          </div>
          <div className="bg-white/20 text-white text-[9px] px-2 py-0.5 rounded-full font-semibold">
            Ma&szlig;geschneidert
          </div>
        </div>

        <div className="p-4">
          {/* Proposal line items */}
          <div className="space-y-2.5 mb-4">
            <div className="flex items-start gap-2 p-2 bg-green-50 rounded-lg border border-green-100">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[11px] font-semibold text-slate-700">
                  Professionelle Website
                </div>
                <div className="text-[10px] text-slate-500">
                  6 Seiten, Mobile-First, SEO-optimiert
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-green-50 rounded-lg border border-green-100">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[11px] font-semibold text-slate-700">
                  Google Business Setup
                </div>
                <div className="text-[10px] text-slate-500">
                  Profil-Optimierung &amp; lokale Sichtbarkeit
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-green-50 rounded-lg border border-green-100">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[11px] font-semibold text-slate-700">
                  Laufende Betreuung
                </div>
                <div className="text-[10px] text-slate-500">
                  Monatliches Reporting &amp; Optimierung
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-200 pt-3 text-center">
            <p className="text-[10px] text-slate-400 mb-0.5">
              Keine versteckten Kosten
            </p>
            <p className="text-xs font-bold text-primary">
              Individuell auf Ihr Budget zugeschnitten
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -top-2.5 -left-2.5 bg-white rounded-xl shadow-lg p-1.5 border border-slate-100 animate-float-slow">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-3 h-3 text-green-600" />
          </div>
          <span className="text-[10px] font-bold text-primary">
            Transparent &amp; fair
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Step 4 Visual: Website wird gebaut ── */
function UmsetzungVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Browser chrome */}
        <div className="bg-slate-100 px-3 py-2 flex items-center gap-2.5 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-2 py-0.5 text-[10px] text-slate-400 border border-slate-200">
            www.ihr-neues-unternehmen.de
          </div>
        </div>

        <div className="p-4">
          {/* Website being built */}
          <div className="space-y-3">
            {/* Nav */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md gradient-bg-animated" />
                <div className="w-14 h-2 bg-primary/30 rounded-full" />
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-8 h-1.5 bg-slate-200 rounded-full" />
                <div className="w-8 h-1.5 bg-slate-200 rounded-full" />
                <div className="w-12 h-5 bg-accent rounded text-[6px] text-white flex items-center justify-center font-bold">
                  Kontakt
                </div>
              </div>
            </div>

            {/* Hero */}
            <div className="bg-gradient-to-br from-accent/10 to-cyan/10 rounded-lg p-3 border border-accent/10">
              <div className="w-3/4 h-3 bg-primary/60 rounded-full mb-2" />
              <div className="w-full h-2 bg-slate-200 rounded-full mb-1" />
              <div className="w-4/5 h-2 bg-slate-200 rounded-full mb-2" />
              <div className="w-16 h-5 bg-accent rounded-md" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-lg p-2 border border-slate-100"
                >
                  <div className="w-5 h-5 rounded bg-accent/20 mb-1" />
                  <div className="w-full h-1.5 bg-slate-200 rounded-full mb-0.5" />
                  <div className="w-2/3 h-1.5 bg-slate-100 rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3 pt-3 border-t border-slate-100">
            <div className="flex justify-between text-[10px] mb-1">
              <span className="font-semibold text-accent">Fortschritt</span>
              <span className="font-bold text-primary">85%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-gradient-to-r from-accent to-cyan rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -bottom-2.5 -left-2.5 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
        <Zap className="w-3 h-3" /> Fast fertig!
      </div>
      <div className="absolute -top-2.5 -right-2.5 bg-white rounded-xl shadow-lg p-1.5 border border-slate-100 animate-float-slow">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-green-500" />
          <span className="text-[10px] font-bold text-green-600">
            Live in 4 Wochen
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Step data ── */
const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Erstgespr\u00e4ch",
    subtitle: "Wir lernen uns kennen",
    description:
      "In einem kostenlosen 15-Minuten-Gespr\u00e4ch erz\u00e4hlen Sie mir von Ihrem Unternehmen. Ich stelle Fragen: Was machen Sie? Wer sind Ihre Kunden? Was l\u00e4uft gut, was nicht? So verstehe ich, wie ich Ihnen am besten helfen kann.",
    shortDesc:
      "Wir lernen uns kennen, ich verstehe Ihre Ziele und Ihr Unternehmen.",
    gradient: "from-accent to-blue-700",
    Visual: ErstgespraechVisual,
  },
  {
    number: "02",
    icon: Search,
    title: "Analyse",
    subtitle: "Ich schaue mir alles genau an",
    description:
      "Ich analysiere Ihre aktuelle Online-Pr\u00e4senz, Ihre Konkurrenz und Ihre Region. Wo sind Ihre St\u00e4rken? Wo die Schw\u00e4chen? Und vor allem: Wo liegt das gr\u00f6\u00dfte Potenzial, um neue Kunden zu gewinnen?",
    shortDesc:
      "Ich analysiere Ihre Situation und finde Ihre St\u00e4rken und Schw\u00e4chen.",
    gradient: "from-cyan to-accent",
    Visual: AnalyseVisual,
  },
  {
    number: "03",
    icon: FileText,
    title: "Angebot",
    subtitle: "Ma\u00dfgeschneidert f\u00fcr Sie",
    description:
      "Basierend auf der Analyse erstelle ich ein individuelles Angebot \u2013 genau zugeschnitten auf Ihr Unternehmen, Ihre Ziele und Ihr Budget. Keine Standard-Pakete, sondern nur das, was Sie wirklich brauchen.",
    shortDesc:
      "Sie erhalten ein ma\u00dfgeschneidertes Angebot, das zu Ihnen passt.",
    gradient: "from-green-500 to-emerald-700",
    Visual: AngebotVisual,
  },
  {
    number: "04",
    icon: Puzzle,
    title: "Umsetzung",
    subtitle: "Ihre Website entsteht",
    description:
      "Wir starten die Zusammenarbeit! Ich setze Ihre Website und SEO-Strategie um, halte Sie regelm\u00e4\u00dfig auf dem Laufenden und hole Ihr Feedback ein. Sie sehen in Echtzeit, wie Ihr Projekt w\u00e4chst.",
    shortDesc:
      "Wir starten \u2013 mit klaren Meilensteinen und regelm\u00e4\u00dfigen Updates.",
    gradient: "from-primary to-accent",
    Visual: UmsetzungVisual,
  },
];

/* ── Main Component ── */
export default function ScrollProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const rawProgress = -rect.top / (sectionHeight - viewportHeight);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setProgress(clampedProgress);
      setActiveStep(Math.min(3, Math.floor(clampedProgress * 4)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Desktop: Immersive Scroll Experience ── */}
      <div
        ref={sectionRef}
        className="hidden md:block relative bg-white"
        style={{ height: "400vh" }}
      >
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="container-custom w-full">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-10">
                <h2 className="text-primary mb-3">So entsteht Ihre Website</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Von der ersten Idee bis zur fertigen Website &ndash;
                  transparent und ohne &Uuml;berraschungen.
                </p>
              </div>

              {/* Main content: Text left, Visual right */}
              <div className="grid grid-cols-2 gap-16 items-center">
                {/* Left: Text content */}
                <div className="relative" style={{ minHeight: "380px" }}>
                  {steps.map((step, index) => {
                    const isActive = index === activeStep;
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : index < activeStep
                            ? "opacity-0 -translate-y-12"
                            : "opacity-0 translate-y-12"
                        }`}
                        style={{ pointerEvents: isActive ? "auto" : "none" }}
                      >
                        {/* Big step number watermark */}
                        <div className="text-[140px] font-inter font-extrabold text-slate-100 absolute -top-10 -left-4 leading-none select-none pointer-events-none">
                          {step.number}
                        </div>

                        <div className="relative">
                          <div className="text-sm font-bold text-accent uppercase tracking-wider mb-3">
                            Schritt {step.number}
                          </div>

                          <h3 className="text-3xl font-inter font-bold text-primary mb-2">
                            {step.title}
                          </h3>

                          <p className="text-base font-semibold text-slate-500 mb-5">
                            {step.subtitle}
                          </p>

                          <p className="text-slate-600 leading-relaxed text-lg">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right: Visual illustration */}
                <div className="relative" style={{ minHeight: "380px" }}>
                  {steps.map((step, index) => {
                    const Visual = step.Visual;
                    const isActive = index === activeStep;
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 flex items-center transition-all duration-700 ease-out ${
                          isActive
                            ? "opacity-100 translate-y-0 scale-100"
                            : index < activeStep
                            ? "opacity-0 -translate-y-8 scale-95"
                            : "opacity-0 translate-y-8 scale-95"
                        }`}
                        style={{ pointerEvents: isActive ? "auto" : "none" }}
                      >
                        <Visual />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Progress dots + bar */}
              <div className="mt-10 flex flex-col items-center gap-4">
                {/* Dots */}
                <div className="flex gap-3">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        i === activeStep
                          ? "w-10 bg-gradient-to-r from-accent to-cyan"
                          : i < activeStep
                          ? "w-2 bg-accent/40"
                          : "w-2 bg-slate-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Scroll hint */}
                {progress < 0.85 && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 animate-bounce">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7"
                      />
                    </svg>
                    <span>Weiter scrollen</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: Simple grid version ── */}
      <section className="py-12 bg-white md:hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-primary text-center mb-4">
              So entsteht Ihre Website
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto text-sm">
              Von der ersten Idee bis zur fertigen Website.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="text-center card-gradient-border glow-accent"
                  >
                    <div
                      className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-3 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-xs font-bold text-accent mb-1">
                      SCHRITT {step.number}
                    </div>
                    <h4 className="font-inter font-bold text-primary text-sm mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600">{step.shortDesc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
