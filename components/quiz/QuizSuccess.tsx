import { CheckCircle, Calendar, Home } from 'lucide-react';
import Link from 'next/link';

export default function QuizSuccess() {
  return (
    <div className="text-center py-8 animate-fade-in">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6 animate-scale-in">
        <CheckCircle size={40} className="text-green-500" />
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
        Vielen Dank!
      </h3>
      <p className="text-lg text-slate-600 mb-2 max-w-md mx-auto">
        Ihre Anfrage ist bei mir eingegangen.
      </p>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        Ich melde mich innerhalb von 24 Stunden mit einer individuellen Einschätzung bei Ihnen.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://calendly.com/denis-kaliberda/beratung"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-cta flex items-center gap-2 px-6 py-3"
        >
          <Calendar size={18} />
          Direkt Termin buchen
        </a>
        <Link
          href="/"
          className="btn flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-primary hover:border-accent/30"
        >
          <Home size={18} />
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
