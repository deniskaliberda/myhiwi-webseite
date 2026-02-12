import { TOTAL_QUIZ_STEPS } from './types';

interface QuizProgressProps {
  currentStep: number;
}

export default function QuizProgress({ currentStep }: QuizProgressProps) {
  const progress = Math.min(((currentStep + 1) / TOTAL_QUIZ_STEPS) * 100, 100);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-500">
          Schritt {Math.min(currentStep + 1, TOTAL_QUIZ_STEPS)} von {TOTAL_QUIZ_STEPS}
        </span>
        <span className="text-sm font-medium text-accent">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-cyan transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
