import { type LucideIcon } from 'lucide-react';

interface QuizOptionCardProps {
  icon: LucideIcon;
  label: string;
  subtitle?: string;
  selected: boolean;
  onClick: () => void;
}

export default function QuizOptionCard({ icon: Icon, label, subtitle, selected, onClick }: QuizOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`
        relative w-full text-left rounded-xl p-5 border-2 transition-all duration-200
        cursor-pointer group
        ${selected
          ? 'border-accent bg-accent/5 shadow-md shadow-accent/10'
          : 'border-slate-200 bg-white hover:border-accent/30 hover:shadow-md'
        }
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`
          flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200
          ${selected
            ? 'bg-accent text-white'
            : 'bg-slate-100 text-slate-500 group-hover:bg-accent/10 group-hover:text-accent'
          }
        `}>
          <Icon size={22} />
        </div>
        <div className="flex-1 min-w-0">
          <p className={`font-semibold transition-colors duration-200 ${selected ? 'text-accent' : 'text-primary'}`}>
            {label}
          </p>
          {subtitle && (
            <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>
          )}
        </div>
        {selected && (
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center animate-scale-in">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
    </button>
  );
}
