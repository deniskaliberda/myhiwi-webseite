import type { Metadata } from "next";
import QuizContainer from "@/components/quiz/QuizContainer";
import { Mail, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Kontakt — Kostenloses Erstgespräch | MyHiwi",
  description:
    "Beantworten Sie 5 kurze Fragen und erhalten Sie eine individuelle Einschätzung. Oder buchen Sie direkt einen 15-Min-Termin.",
  alternates: {
    canonical: "https://myhiwi.de/kontakt",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* ================= QUIZ HERO ================= */}
      <section className="relative overflow-hidden bg-slate-50 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 grid-pattern-light mask-radial pointer-events-none" />
        <div
          className="absolute top-[-120px] right-[-80px] h-[420px] w-[420px] rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.18), transparent 60%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <SectionReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-blue-700">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
                </span>
                Erstgespräch · in 2 Minuten erzählt
              </span>

              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[56px]">
                Erzählen Sie mir von{" "}
                <span className="gradient-text">Ihrem Unternehmen.</span>
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                5 kurze Fragen — dann melde ich mich mit einer individuellen
                Einschätzung bei Ihnen. Kein Sales-Funnel, keine
                Auto-Responder.
              </p>
            </SectionReveal>
          </div>

          <div className="mx-auto max-w-6xl">
            <QuizContainer />
          </div>
        </div>
      </section>

      {/* ================= DIRECT CONTACT ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <SectionReveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                Oder direkt
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Lieber sofort{" "}
                <span className="gradient-text">Termin oder Mail?</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {/* Contact Info */}
            <SectionReveal>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  Kontaktinformationen
                </p>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        E-Mail
                      </p>
                      <a
                        href="mailto:kontakt@myhiwi.de"
                        className="text-base font-medium text-slate-900 transition-colors hover:text-blue-600"
                      >
                        kontakt@myhiwi.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        Standorte
                      </p>
                      <p className="text-base font-medium text-slate-900">
                        Ahrensfelde · Berlin
                      </p>
                      <p className="text-sm text-slate-600">
                        Starnberg / Ammersee · Bayern
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        Verfügbarkeit
                      </p>
                      <p className="text-base font-medium text-slate-900">
                        Mo – Fr · 9:00 – 18:00 Uhr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Calendly */}
            <SectionReveal delay={100}>
              <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-900 to-[#0b1a3a] p-8 text-white shadow-xl">
                <div className="absolute inset-0 grid-pattern opacity-60" />
                <div
                  className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.35), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                    <Calendar className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold leading-tight tracking-tight text-white">
                    Lieber direkt sprechen?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Buchen Sie sich ein kostenloses 15-Min-Erstgespräch direkt
                    in meinem Kalender.
                  </p>
                  <a
                    href="https://calendly.com/denis-kaliberda/beratung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy-900 shadow-md transition-all hover:bg-slate-100"
                  >
                    Termin buchen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                    Kostenlos · unverbindlich
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
