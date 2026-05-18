import { ArrowRight } from "lucide-react";
import { ButtonBase, type MhButtonProps } from "./buttonBase";
import { cn } from "@/lib/utils";

type BtnPrimaryProps = MhButtonProps & {
  /** Pill-Variante für Final-CTA-Sektionen (DESIGN.md §7). */
  pill?: boolean;
  /** Pfeil-Icon rechts ausblenden (default: zeigen). */
  hideArrow?: boolean;
  /** Auf Mobile voll-breit (DESIGN.md §3 Components). */
  fullWidthOnMobile?: boolean;
};

/**
 * MyHiwi Redesign 2026 — Primary CTA Button
 * DESIGN.md §12: ink-Hintergrund, weißer Text, shadow-cta, padding 18×26,
 * font-size 16, font-weight 700, radius sm (default) bzw. pill (Final-CTA).
 */
export function BtnPrimary({
  pill,
  hideArrow,
  fullWidthOnMobile,
  className,
  children,
  ...rest
}: BtnPrimaryProps) {
  return (
    <ButtonBase
      className={cn(
        "group inline-flex items-center justify-center gap-mh-3",
        "bg-mh-ink-950 text-mh-text-on-dark",
        "shadow-mh-cta",
        "font-mh-body text-[16px] font-bold tracking-[-0.005em] leading-none",
        "px-mh-6 py-[18px]",
        pill ? "rounded-mh-pill" : "rounded-mh-sm",
        "transition-colors duration-mh-fast ease-mh-default",
        "hover:bg-mh-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mh-accent focus-visible:ring-offset-2 focus-visible:ring-offset-mh-paper",
        "disabled:cursor-not-allowed disabled:opacity-60",
        fullWidthOnMobile && "w-full md:w-auto",
        className,
      )}
      {...(rest as MhButtonProps)}
    >
      <span>{children}</span>
      {!hideArrow ? (
        <ArrowRight
          className="h-[18px] w-[18px] shrink-0 transition-transform duration-mh-fast ease-mh-default group-hover:translate-x-0.5"
          strokeWidth={1.6}
          aria-hidden="true"
        />
      ) : null}
    </ButtonBase>
  );
}

export default BtnPrimary;
