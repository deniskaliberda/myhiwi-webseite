import { cn } from "@/lib/utils";

type SectionMarkProps = {
  /** Sektion-Nummer, z. B. "01" oder "A". Wird als Mono dargestellt. */
  index: string | number;
  /** Label rechts der Hairline, z. B. "DIAGNOSE". */
  label: string;
  /** muted = neutrale Hairline, accent = Hero/Final-CTA. */
  tone?: "muted" | "accent";
  /** glow = auf dunklen Sektionen (Glow-Strich). */
  onDark?: boolean;
  className?: string;
};

/**
 * MyHiwi Redesign 2026 — SectionMark / Eyebrow
 * DESIGN.md §15: [NN] ─── LABEL with mono number, 28px hairline,
 * uppercase mono label with 0.18em tracking.
 */
export function SectionMark({
  index,
  label,
  tone = "muted",
  onDark = false,
  className,
}: SectionMarkProps) {
  const formattedIndex =
    typeof index === "number" ? index.toString().padStart(2, "0") : index;

  const numberColor = onDark
    ? tone === "accent"
      ? "text-mh-glow"
      : "text-mh-text-on-dark/85"
    : tone === "accent"
      ? "text-mh-accent"
      : "text-mh-text-secondary";

  const lineColor = onDark
    ? tone === "accent"
      ? "bg-mh-glow"
      : "bg-mh-text-on-dark/30"
    : tone === "accent"
      ? "bg-mh-accent"
      : "bg-mh-divider";

  const labelColor = onDark
    ? "text-mh-text-on-dark/90"
    : "text-mh-text-primary";

  return (
    <div
      className={cn(
        "flex items-center gap-mh-3 mh-label-mono",
        className,
      )}
      aria-hidden="false"
    >
      <span className={cn("font-mh-mono", numberColor)}>{formattedIndex}</span>
      <span
        aria-hidden="true"
        className={cn("h-px w-7 shrink-0", lineColor)}
      />
      <span className={cn("font-mh-mono", labelColor)}>{label}</span>
    </div>
  );
}

export default SectionMark;
