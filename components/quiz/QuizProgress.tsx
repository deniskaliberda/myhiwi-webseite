import { TOTAL_QUIZ_STEPS } from './types';

interface QuizProgressProps {
  currentStep: number;
}

export default function QuizProgress({ currentStep }: QuizProgressProps) {
  const progress = Math.min(((currentStep + 1) / TOTAL_QUIZ_STEPS) * 100, 100);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
          Schritt {Math.min(currentStep + 1, TOTAL_QUIZ_STEPS)} von {TOTAL_QUIZ_STEPS}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-blue-600">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ease-out shadow-[0_0_12px_rgba(59,130,246,0.4)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
