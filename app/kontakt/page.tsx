import type { Metadata } from "next";
import QuizContainer from "@/components/quiz/QuizContainer";
import { Mail, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Kontakt — Kostenloses Erstgespräch",
  description:
    "Beantworten Sie 5 kurze Fragen und erhalten Sie eine individuelle Einschätzung. Oder buchen Sie direkt einen Termin.",
  alternates: {
    canonical: "https://myhiwi.de/kontakt",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Quiz Section */}
      <section className="bg-slate-50 pt-28 pb-16 md:pt-36 md:pb-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <SectionReveal>
              <p className="text-blue-500 font-medium text-sm tracking-wide mb-4">
                In 2 Minuten
              </p>
              <h1 className="text-navy-900 mb-4">
                Erzählen Sie mir von Ihrem Unternehmen
              </h1>
              <p className="text-slate-500 text-lg">
                5 kurze Fragen — dann melde ich mich mit einer individuellen
                Einschätzung bei Ihnen.
              </p>
            </SectionReveal>
          </div>

          <QuizContainer />
        </Container>
      </section>

      {/* Direct Contact */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-center text-navy-900 mb-10">
                Oder kontaktieren Sie mich direkt
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact Info */}
              <SectionReveal>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 h-full">
                  <h3 className="text-lg font-heading font-bold text-navy-900 mb-6">
                    Kontaktinformationen
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 mb-0.5">
                          E-Mail
                        </p>
                        <a
                          href="mailto:kontakt@myhiwi.de"
                          className="text-navy-900 hover:text-blue-500 transition-colors text-sm"
                        >
                          kontakt@myhiwi.de
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 mb-0.5">
                          Region
                        </p>
                        <p className="text-navy-900 text-sm">
                          Ahrensfelde, Brandenburg
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 mb-0.5">
                          Verfügbarkeit
                        </p>
                        <p className="text-navy-900 text-sm">
                          Mo–Fr: 9:00 – 18:00 Uhr
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              {/* Calendly */}
              <SectionReveal delay={100}>
                <div className="bg-navy-900 rounded-xl p-6 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-5">
                    <Calendar className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    Lieber direkt sprechen?
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Buchen Sie ein kostenloses 15-Minuten-Erstgespräch direkt in
                    meinem Kalender.
                  </p>
                  <a
                    href="https://calendly.com/denis-kaliberda/beratung"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white gap-2">
                      Termin buchen
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                  <p className="text-xs text-slate-500 mt-4">
                    Kostenlos & unverbindlich
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
