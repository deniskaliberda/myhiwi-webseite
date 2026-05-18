import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CtaRowProps = HTMLAttributes<HTMLDivElement> & {
  /** Wenn gesetzt, gilt der Row als „Hero-Row" und stackt auf Mobile mit Primary oben. */
  stackOnMobile?: boolean;
  /** Optionale Microcopy unterhalb der Row (z. B. „kostenlos · unverbindlich · 20 Minuten"). */
  microcopy?: ReactNode;
  children: ReactNode;
};

/**
 * MyHiwi Redesign 2026 — CTA Row
 * DESIGN.md §12: flex, gap 14, flex-wrap, items-center.
 * Mobile: stack mit Primary oben.
 */
export function CtaRow({
  className,
  stackOnMobile = true,
  microcopy,
  children,
  ...rest
}: CtaRowProps) {
  return (
    <div className={cn("flex flex-col gap-mh-3", className)} {...rest}>
      <div
        className={cn(
          "flex flex-wrap items-center gap-[14px]",
          stackOnMobile && "max-md:flex-col max-md:items-stretch",
        )}
      >
        {children}
      </div>
      {microcopy ? (
        <p className="mh-body-xs text-mh-text-secondary">{microcopy}</p>
      ) : null}
    </div>
  );
}

export default CtaRow;
