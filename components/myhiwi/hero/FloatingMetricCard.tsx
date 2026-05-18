import { cn } from "@/lib/utils";

type FloatingMetricCardProps = {
  /** Hauptzahl/-zeile, z. B. „108 Anfragen / 100 Tage". */
  value: string;
  /** Caption mit Kontext, z. B. „Sonnenhof Herrsching". */
  caption: string;
  /** Status-Tag, z. B. „belegter Case 2026". */
  tag?: string;
  /** Optional: Italic-Highlight innerhalb von `value` (Wort wird gesucht und ersetzt). */
  italicWord?: string;
  className?: string;
};

/**
 * MyHiwi Redesign 2026 — FloatingMetricCard
 * components.md §2 Hero: 1 Floating-Stat-Card auf der Hero-Plate
 * („108 Anfragen / 100 Tage · Sonnenhof · belegter Case 2026").
 *
 * Soll typischerweise absolut positioniert über einem Mockup-Plate liegen —
 * der Caller setzt das Positioning (absolute / top / right).
 */
export function FloatingMetricCard({
  value,
  caption,
  tag,
  italicWord,
  className,
}: FloatingMetricCardProps) {
  const renderValue = () => {
    if (!italicWord) return value;
    const idx = value.indexOf(italicWord);
    if (idx === -1) return value;
    return (
      <>
        {value.slice(0, idx)}
        <span className="mh-italic-accent">{italicWord}</span>
        {value.slice(idx + italicWord.length)}
      </>
    );
  };

  return (
    <div
      className={cn(
        "inline-flex flex-col gap-mh-2",
        "rounded-mh-lg border border-mh-divider bg-mh-paper text-mh-text-primary",
        "px-mh-5 py-mh-4 shadow-mh-hover",
        "max-w-[280px]",
        className,
      )}
    >
      <span className="mh-display-5">{renderValue()}</span>
      <div className="flex flex-col gap-1">
        <span className="mh-body-xs text-mh-text-secondary">{caption}</span>
        {tag ? (
          <span className="mh-label-mono-sm text-mh-accent">{tag}</span>
        ) : null}
      </div>
    </div>
  );
}

export default FloatingMetricCard;
