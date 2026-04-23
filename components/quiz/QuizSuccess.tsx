import { CheckCircle, Calendar, Home } from 'lucide-react';
import Link from 'next/link';

export default function QuizSuccess() {
  return (
    <div className="text-center py-8 animate-fade-in">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6 animate-scale-in">
        <CheckCircle size={40} className="text-green-600" />
      </div>

      <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3">
        Vielen Dank!
      </h3>
      <p className="text-lg text-slate-600 mb-2 max-w-md mx-auto">
        Ihre Anfrage ist bei mir eingegangen.
      </p>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        Ich melde mich innerhalb von 24 Stunden mit einer individuellen Einschätzung bei Ihnen.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="https://calendly.com/denis-kaliberda/beratung"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600"
        >
          <Calendar size={18} />
          Direkt Termin buchen
        </a>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
        >
          <Home size={18} />
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
