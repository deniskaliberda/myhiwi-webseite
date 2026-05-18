import { ButtonBase, type MhButtonProps } from "./buttonBase";
import { cn } from "@/lib/utils";

type BtnGhostProps = MhButtonProps & {
  fullWidthOnMobile?: boolean;
};

/**
 * MyHiwi Redesign 2026 — Ghost CTA Button (sekundär)
 * DESIGN.md §12: transparent, ink-Border 1px, ink-Text, padding 16×22,
 * font-size 14–15, font-weight 600, radius sm.
 */
export function BtnGhost({
  className,
  fullWidthOnMobile,
  children,
  ...rest
}: BtnGhostProps) {
  return (
    <ButtonBase
      className={cn(
        "inline-flex items-center justify-center gap-mh-2",
        "bg-transparent text-mh-text-primary",
        "border border-mh-text-primary rounded-mh-sm",
        "font-mh-body text-[15px] font-semibold leading-none",
        "px-mh-5 py-[16px]",
        "transition-colors duration-mh-fast ease-mh-default",
        "hover:bg-mh-text-primary hover:text-mh-text-on-dark",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mh-accent focus-visible:ring-offset-2 focus-visible:ring-offset-mh-paper",
        "disabled:cursor-not-allowed disabled:opacity-60",
        fullWidthOnMobile && "w-full md:w-auto",
        className,
      )}
      {...(rest as MhButtonProps)}
    >
      {children}
    </ButtonBase>
  );
}

export default BtnGhost;
