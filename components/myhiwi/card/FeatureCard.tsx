import type { LucideIcon } from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  /** Sektion-Nummer (z. B. „01"). Wird als Big-Number Display-2 dargestellt. */
  index: string | number;
  /** Lucide-Icon. Optional — Icon-Row kann auch leer bleiben. */
  icon?: LucideIcon;
  /** Display-5-Headline der Karte. */
  title: string;
  /** Mono-Subline unter der Headline. Optional. */
  subtitle?: string;
  /** Body-Small Outcome-Satz. */
  outcome: string;
  /** Bullet-Liste mit Hairline-Trennern. */
  bullets?: string[];
  className?: string;
};

/**
 * MyHiwi Redesign 2026 — FeatureCard
 * components.md §4: big-Number + Icon-Row + Display-5 Titel + Mono-Subtitel +
 * Body-Small Outcome + Bullet-Liste mit Hairline-Trennern.
 */
export function FeatureCard({
  index,
  icon: Icon,
  title,
  subtitle,
  outcome,
  bullets,
  className,
}: FeatureCardProps) {
  const formattedIndex =
    typeof index === "number" ? index.toString().padStart(2, "0") : index;

  return (
    <Card className={cn("flex flex-col gap-mh-5", className)} interactive>
      <div className="flex items-start justify-between gap-mh-4">
        <span
          aria-hidden="true"
          className="mh-display-2 text-mh-accent font-normal"
        >
          {formattedIndex}
        </span>
        {Icon ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
            <Icon className="h-[22px] w-[22px]" strokeWidth={1.6} aria-hidden="true" />
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-mh-2">
        <h3 className="mh-display-5">{title}</h3>
        {subtitle ? (
          <p className="mh-label-mono text-mh-text-secondary">{subtitle}</p>
        ) : null}
      </div>

      <p className="mh-body-small text-mh-text-secondary">{outcome}</p>

      {bullets && bullets.length > 0 ? (
        <ul className="mt-auto flex flex-col">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="mh-body-small border-t border-mh-divider py-mh-3 first:border-t-0 first:pt-0"
            >
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}

export default FeatureCard;
