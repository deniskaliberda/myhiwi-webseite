import { ButtonBase, type MhButtonProps } from "./buttonBase";
import { cn } from "@/lib/utils";

/**
 * MyHiwi Redesign 2026 — Tertiary Text-Link CTA
 * DESIGN.md §12: ink-Text, border-bottom 1px solid accent,
 * padding-bottom 4px, font-weight 600, font-size 14.
 */
export function BtnTertiary({
  className,
  children,
  ...rest
}: MhButtonProps) {
  return (
    <ButtonBase
      className={cn(
        "inline-flex items-center gap-mh-1",
        "text-mh-text-primary",
        "border-b border-mh-accent",
        "pb-1",
        "font-mh-body text-[14px] font-semibold leading-none",
        "transition-colors duration-mh-fast ease-mh-default",
        "hover:border-mh-accent-hover hover:text-mh-accent-hover",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mh-accent focus-visible:ring-offset-2 focus-visible:ring-offset-mh-paper",
        className,
      )}
      {...(rest as MhButtonProps)}
    >
      {children}
    </ButtonBase>
  );
}

export default BtnTertiary;
