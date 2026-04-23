'use client';

import { useState, useCallback } from 'react';
import {
  Globe, Search, Puzzle,
  CheckCircle, XCircle,
  UtensilsCrossed, Wrench, Stethoscope, ShoppingBag, Briefcase, MoreHorizontal,
  EyeOff, Monitor, UserMinus, ThumbsDown,
  Zap, Calendar, BookOpen,
  ArrowLeft, ArrowRight,
} from 'lucide-react';

import QuizProgress from './QuizProgress';
import QuizStep from './QuizStep';
import QuizOptionCard from './QuizOptionCard';
import QuizSummary from './QuizSummary';
import QuizSuccess from './QuizSuccess';
import { initialQuizData, TOTAL_QUIZ_STEPS, type QuizData, type ServiceInterest, type HasWebsite, type BusinessCategory, type Challenge, type Timeline } from './types';

export default function QuizContainer() {
  const [data, setData] = useState<QuizData>({ ...initialQuizData });
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const goNext = useCallback(() => {
    setDirection('forward');
    setCurrentStep(prev => prev + 1);
  }, []);

  const goBack = useCallback(() => {
    setDirection('backward');
    setCurrentStep(prev => Math.max(0, prev - 1));
  }, []);

  const goToStep = useCallback((step: number) => {
    setDirection(step < currentStep ? 'backward' : 'forward');
    setCurrentStep(step);
  }, [currentStep]);

  const selectAndAdvance = useCallback((updater: () => void) => {
    updater();
    setTimeout(() => {
      setDirection('forward');
      setCurrentStep(prev => prev + 1);
    }, 300);
  }, []);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Fehler beim Senden');
      }

      setIsSuccess(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur rounded-2xl border border-slate-200 shadow-lg p-6 md:p-10">
        <QuizSuccess />
      </div>
    );
  }

  const isSummary = currentStep === TOTAL_QUIZ_STEPS;
  const showBackButton = currentStep > 0;

  const needsCustomInput = (
    (currentStep === 2 && data.business === 'sonstiges') ||
    (currentStep === 3 && data.challenge === 'anderes')
  );

  const canAdvanceContactStep = data.name.trim() !== '' && data.email.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

  return (
    <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur rounded-2xl border border-slate-200 shadow-lg p-6 md:p-10">
      {!isSummary && <QuizProgress currentStep={currentStep} />}

      {/* Step 0: Service Interest */}
      {currentStep === 0 && (
        <QuizStep question="Wofür interessieren Sie sich?" subtitle="Wählen Sie den Bereich, der Sie am meisten interessiert." direction={direction}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <QuizOptionCard icon={Globe} label="Webdesign" subtitle="Neue oder bessere Website" selected={data.service === 'webdesign'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, service: 'webdesign' as ServiceInterest })))} />
            <QuizOptionCard icon={Search} label="Local SEO" subtitle="Bei Google gefunden werden" selected={data.service === 'seo'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, service: 'seo' as ServiceInterest })))} />
            <QuizOptionCard icon={Puzzle} label="Beides" subtitle="Website + Sichtbarkeit" selected={data.service === 'beides'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, service: 'beides' as ServiceInterest })))} />
          </div>
        </QuizStep>
      )}

      {/* Step 1: Has Website */}
      {currentStep === 1 && (
        <QuizStep question="Haben Sie bereits eine Website?" subtitle="Das hilft mir, den besten Ansatz für Sie zu finden." direction={direction}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <QuizOptionCard icon={CheckCircle} label="Ja" subtitle="Ich habe eine bestehende Website" selected={data.hasWebsite === 'ja'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, hasWebsite: 'ja' as HasWebsite })))} />
            <QuizOptionCard icon={XCircle} label="Nein" subtitle="Ich brauche eine neue Website" selected={data.hasWebsite === 'nein'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, hasWebsite: 'nein' as HasWebsite })))} />
          </div>
        </QuizStep>
      )}

      {/* Step 2: Business Category */}
      {currentStep === 2 && (
        <QuizStep question="In welcher Branche sind Sie tätig?" direction={direction}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <QuizOptionCard icon={UtensilsCrossed} label="Gastronomie" selected={data.business === 'gastronomie'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, business: 'gastronomie' as BusinessCategory, businessCustom: '' })))} />
            <QuizOptionCard icon={Wrench} label="Handwerk" selected={data.business === 'handwerk'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, business: 'handwerk' as BusinessCategory, businessCustom: '' })))} />
            <QuizOptionCard icon={Stethoscope} label="Arztpraxis / Gesundheit" selected={data.business === 'arztpraxis'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, business: 'arztpraxis' as BusinessCategory, businessCustom: '' })))} />
            <QuizOptionCard icon={ShoppingBag} label="Einzelhandel" selected={data.business === 'einzelhandel'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, business: 'einzelhandel' as BusinessCategory, businessCustom: '' })))} />
            <QuizOptionCard icon={Briefcase} label="Dienstleister" selected={data.business === 'dienstleister'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, business: 'dienstleister' as BusinessCategory, businessCustom: '' })))} />
            <QuizOptionCard icon={MoreHorizontal} label="Sonstiges" selected={data.business === 'sonstiges'} onClick={() => setData(d => ({ ...d, business: 'sonstiges' as BusinessCategory }))} />
          </div>
          {data.business === 'sonstiges' && (
            <div className="mt-4 animate-fade-in">
              <input
                type="text"
                placeholder="Welche Branche?"
                value={data.businessCustom}
                onChange={e => setData(d => ({ ...d, businessCustom: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-slate-900"
                autoFocus
              />
            </div>
          )}
        </QuizStep>
      )}

      {/* Step 3: Challenge */}
      {currentStep === 3 && (
        <QuizStep question="Was ist Ihre größte Herausforderung?" direction={direction}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <QuizOptionCard icon={EyeOff} label="Keine Google-Sichtbarkeit" selected={data.challenge === 'sichtbarkeit'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, challenge: 'sichtbarkeit' as Challenge, challengeCustom: '' })))} />
            <QuizOptionCard icon={Monitor} label="Veraltete Website" selected={data.challenge === 'veraltete-website'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, challenge: 'veraltete-website' as Challenge, challengeCustom: '' })))} />
            <QuizOptionCard icon={UserMinus} label="Wenig Kundenanfragen" selected={data.challenge === 'wenig-anfragen'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, challenge: 'wenig-anfragen' as Challenge, challengeCustom: '' })))} />
            <QuizOptionCard icon={ThumbsDown} label="Schlechte Bewertungen" selected={data.challenge === 'schlechte-bewertungen'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, challenge: 'schlechte-bewertungen' as Challenge, challengeCustom: '' })))} />
            <QuizOptionCard icon={MoreHorizontal} label="Anderes" selected={data.challenge === 'anderes'} onClick={() => setData(d => ({ ...d, challenge: 'anderes' as Challenge }))} />
          </div>
          {data.challenge === 'anderes' && (
            <div className="mt-4 animate-fade-in">
              <input
                type="text"
                placeholder="Beschreiben Sie Ihre Herausforderung..."
                value={data.challengeCustom}
                onChange={e => setData(d => ({ ...d, challengeCustom: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-slate-900"
                autoFocus
              />
            </div>
          )}
        </QuizStep>
      )}

      {/* Step 4: Timeline */}
      {currentStep === 4 && (
        <QuizStep question="Wann möchten Sie starten?" subtitle="Keine Sorge — auch 'Erst mal informieren' ist völlig okay." direction={direction}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <QuizOptionCard icon={Zap} label="Sofort" subtitle="Am liebsten diese Woche" selected={data.timeline === 'sofort'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, timeline: 'sofort' as Timeline })))} />
            <QuizOptionCard icon={Calendar} label="In 1–3 Monaten" subtitle="Ich plane voraus" selected={data.timeline === '1-3-monate'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, timeline: '1-3-monate' as Timeline })))} />
            <QuizOptionCard icon={BookOpen} label="Erst informieren" subtitle="Noch unentschlossen" selected={data.timeline === 'informieren'} onClick={() => selectAndAdvance(() => setData(d => ({ ...d, timeline: 'informieren' as Timeline })))} />
          </div>
        </QuizStep>
      )}

      {/* Step 5: Contact Details */}
      {currentStep === 5 && (
        <QuizStep question="Wie kann ich Sie erreichen?" subtitle="Ihre Daten werden vertraulich behandelt." direction={direction}>
          <div className="space-y-4">
            <div>
              <label htmlFor="quiz-name" className="block text-sm font-medium text-slate-700 mb-1">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                id="quiz-name"
                type="text"
                required
                value={data.name}
                onChange={e => setData(d => ({ ...d, name: e.target.value }))}
                placeholder="Ihr Name"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-slate-900"
              />
            </div>
            <div>
              <label htmlFor="quiz-email" className="block text-sm font-medium text-slate-700 mb-1">
                E-Mail <span className="text-red-400">*</span>
              </label>
              <input
                id="quiz-email"
                type="email"
                required
                value={data.email}
                onChange={e => setData(d => ({ ...d, email: e.target.value }))}
                placeholder="ihre@email.de"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-slate-900"
              />
            </div>
            <div>
              <label htmlFor="quiz-phone" className="block text-sm font-medium text-slate-700 mb-1">
                Telefon <span className="text-slate-400">(optional)</span>
              </label>
              <input
                id="quiz-phone"
                type="tel"
                value={data.phone}
                onChange={e => setData(d => ({ ...d, phone: e.target.value }))}
                placeholder="+49 ..."
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-slate-900"
              />
            </div>
            <div>
              <label htmlFor="quiz-website" className="block text-sm font-medium text-slate-700 mb-1">
                Website / Firma <span className="text-slate-400">(optional)</span>
              </label>
              <input
                id="quiz-website"
                type="text"
                value={data.website}
                onChange={e => setData(d => ({ ...d, website: e.target.value }))}
                placeholder="https://ihre-firma.de oder Firmenname"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-slate-900"
              />
            </div>
            <div>
              <label htmlFor="quiz-message" className="block text-sm font-medium text-slate-700 mb-1">
                Nachricht <span className="text-slate-400">(optional)</span>
              </label>
              <textarea
                id="quiz-message"
                rows={3}
                value={data.message}
                onChange={e => setData(d => ({ ...d, message: e.target.value }))}
                placeholder="Gibt es etwas, das Sie mir vorab mitteilen möchten?"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-slate-900 resize-none"
              />
            </div>
          </div>
        </QuizStep>
      )}

      {/* Step 6: Summary */}
      {isSummary && (
        <QuizSummary
          data={data}
          onEdit={goToStep}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          error={submitError}
        />
      )}

      {/* Navigation */}
      {!isSummary && (
        <div className="flex items-center justify-between mt-8">
          {showBackButton ? (
            <button
              type="button"
              onClick={goBack}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium"
            >
              <ArrowLeft size={18} />
              Zurück
            </button>
          ) : (
            <div />
          )}

          {(needsCustomInput || currentStep === 5) && (
            <button
              type="button"
              onClick={goNext}
              disabled={currentStep === 5 && !canAdvanceContactStep}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/40 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
            >
              {currentStep === 5 ? 'Zur Zusammenfassung' : 'Weiter'}
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      )}

      {isSummary && (
        <div className="mt-4">
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            Zurück
          </button>
        </div>
      )}
    </div>
  );
}
