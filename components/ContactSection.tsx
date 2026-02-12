import { ArrowRight, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
      <div className="absolute top-10 right-[15%] w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[10%] w-48 h-48 bg-cyan/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4 md:mb-6">
            Bereit für mehr Sichtbarkeit?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10">
            Beantworten Sie 5 kurze Fragen und erhalten Sie eine individuelle
            Einschätzung — kostenlos und unverbindlich.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="btn btn-cta btn-shimmer flex items-center gap-2 px-8 py-4 text-lg"
            >
              <MessageSquare size={20} />
              Jetzt Anfrage starten
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://calendly.com/denis-kaliberda/beratung"
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex items-center gap-2 px-6 py-4 text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/10"
            >
              <Calendar size={18} />
              Direkt Termin buchen
            </a>
          </div>

          <p className="text-sm text-slate-400 mt-6">
            Keine Verpflichtung. Nur echte Einblicke in Ihr Potenzial.
          </p>
        </div>
      </div>
    </section>
  );
}
