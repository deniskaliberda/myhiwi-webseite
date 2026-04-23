import { Pencil, Send } from 'lucide-react';
import type { QuizData } from './types';
import {
  serviceLabels,
  websiteLabels,
  businessLabels,
  challengeLabels,
  timelineLabels,
} from './types';

interface QuizSummaryProps {
  data: QuizData;
  onEdit: (step: number) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  error: string | null;
}

export default function QuizSummary({ data, onEdit, onSubmit, isSubmitting, error }: QuizSummaryProps) {
  const businessDisplay = data.business === 'sonstiges' && data.businessCustom
    ? data.businessCustom
    : data.business ? businessLabels[data.business] : '–';

  const challengeDisplay = data.challenge === 'anderes' && data.challengeCustom
    ? data.challengeCustom
    : data.challenge ? challengeLabels[data.challenge] : '–';

  const rows = [
    { label: 'Interesse', value: data.service ? serviceLabels[data.service] : '–', step: 0 },
    { label: 'Website vorhanden', value: data.hasWebsite ? websiteLabels[data.hasWebsite] : '–', step: 1 },
    { label: 'Branche', value: businessDisplay, step: 2 },
    { label: 'Herausforderung', value: challengeDisplay, step: 3 },
    { label: 'Zeitplan', value: data.timeline ? timelineLabels[data.timeline] : '–', step: 4 },
  ];

  return (
    <div className="animate-slide-in-right">
      <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 mb-2">
        Zusammenfassung
      </h3>
      <p className="text-slate-500 mb-6">
        Prüfen Sie Ihre Angaben und senden Sie die Anfrage ab.
      </p>

      <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden mb-6">
        {/* Quiz answers */}
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between px-5 py-3.5 ${i < rows.length - 1 ? 'border-b border-slate-100' : ''}`}
          >
            <div>
              <span className="text-sm text-slate-500">{row.label}</span>
              <p className="font-medium text-slate-900">{row.value}</p>
            </div>
            <button
              type="button"
              onClick={() => onEdit(row.step)}
              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label={`${row.label} bearbeiten`}
            >
              <Pencil size={16} />
            </button>
          </div>
        ))}

        {/* Contact details */}
        <div className="bg-slate-50 px-5 py-4 border-t border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-600">Kontaktdaten</span>
            <button
              type="button"
              onClick={() => onEdit(5)}
              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="Kontaktdaten bearbeiten"
            >
              <Pencil size={16} />
            </button>
          </div>
          <p className="font-medium text-slate-900">{data.name}</p>
          <p className="text-sm text-slate-600">{data.email}</p>
          {data.phone && <p className="text-sm text-slate-600">{data.phone}</p>}
          {data.website && <p className="text-sm text-slate-600">{data.website}</p>}
          {data.message && (
            <p className="text-sm text-slate-500 mt-2 italic">&ldquo;{data.message}&rdquo;</p>
          )}
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <button
        type="button"
        onClick={onSubmit}
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-4 text-base font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            <Send size={20} />
            Anfrage absenden
          </>
        )}
      </button>
    </div>
  );
}
