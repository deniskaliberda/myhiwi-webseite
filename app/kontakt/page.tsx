import type { Metadata } from "next";
import QuizContainer from "@/components/quiz/QuizContainer";
import { Mail, Phone, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt - Kostenloses Erstgespräch | MyHiwi",
  description:
    "Beantworten Sie 5 kurze Fragen und erhalten Sie eine individuelle Einschätzung. Oder buchen Sie direkt einen Termin.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section with Quiz */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/30" />
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-[5%] w-48 h-48 bg-cyan/5 rounded-full blur-3xl animate-float-delay" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 rounded-full border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm md:text-base font-semibold text-accent">
                In 2 Minuten
              </span>
            </div>

            <h1 className="text-primary mb-4 md:mb-6">
              Erzählen Sie mir von Ihrem{" "}
              <span className="gradient-text">Unternehmen</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600">
              5 kurze Fragen — dann melde ich mich mit einer individuellen
              Einschätzung bei Ihnen.
            </p>
          </div>

          <QuizContainer />
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-primary mb-10 md:mb-14">
              Oder kontaktieren Sie mich direkt
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Kontaktinformationen
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-600 mb-0.5">
                        E-Mail
                      </div>
                      <a
                        href="mailto:kontakt@myhiwe.de"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        kontakt@myhiwe.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-600 mb-0.5">
                        Telefon
                      </div>
                      <a
                        href="tel:+49"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        +49 (0) XXX XXXXXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-600 mb-0.5">
                        Region
                      </div>
                      <p className="text-slate-700">Deutschland</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-600 mb-0.5">
                        Verfügbarkeit
                      </div>
                      <p className="text-slate-700">Mo–Fr: 9:00 – 18:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Booking Card */}
              <div className="card-gradient-border glow-accent flex flex-col items-center justify-center text-center p-8 md:p-10">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Lieber direkt sprechen?
                </h3>
                <p className="text-slate-600 mb-6">
                  Buchen Sie ein kostenloses 15-Minuten-Erstgespräch direkt in
                  meinem Kalender.
                </p>
                <a
                  href="https://calendly.com/denis-kaliberda/beratung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-cta flex items-center gap-2 px-6 py-3"
                >
                  Termin buchen
                  <ArrowRight size={18} />
                </a>
                <p className="text-sm text-slate-500 mt-4">
                  Keine Verpflichtung. Kostenlos & unverbindlich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
