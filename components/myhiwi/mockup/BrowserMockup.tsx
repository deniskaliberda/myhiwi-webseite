import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BrowserMockupProps = {
  /** Domain-Pill im Window-Chrome, z. B. „myhiwi.de". */
  domain: string;
  /** Page-Body Inhalt. */
  children?: ReactNode;
  /** Tone der Chrome-Leiste. */
  tone?: "paper" | "subtle" | "ink";
  className?: string;
};

/**
 * MyHiwi Redesign 2026 — BrowserMockup
 * components.md §7: stilisierter Browser-Frame mit 3-Punkte-Chrome,
 * Domain-Pill und Page-Body. Verwendung: FeWo, Sonnenhof-Case-Hero,
 * Leistung-Detail-Hero. Schatten: shadow-mh-hero.
 */
export function BrowserMockup({
  domain,
  children,
  tone = "paper",
  className,
}: BrowserMockupProps) {
  const isDark = tone === "ink";
  return (
    <div
      className={cn(
        "rounded-mh-lg border overflow-hidden shadow-mh-hero",
        isDark
          ? "bg-mh-ink-950 border-mh-text-on-dark/10 text-mh-text-on-dark"
          : tone === "subtle"
            ? "bg-mh-subtle border-mh-divider text-mh-text-primary"
            : "bg-mh-paper border-mh-divider text-mh-text-primary",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-mh-3 border-b px-mh-4 py-mh-3",
          isDark ? "border-mh-text-on-dark/10" : "border-mh-divider",
        )}
      >
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-mh-divider" />
          <span className="h-2.5 w-2.5 rounded-full bg-mh-divider" />
          <span className="h-2.5 w-2.5 rounded-full bg-mh-divider" />
        </div>
        <div
          className={cn(
            "flex-1 truncate rounded-mh-pill px-mh-3 py-1 mh-label-mono-sm",
            isDark
              ? "bg-mh-text-on-dark/5 text-mh-text-on-dark/80"
              : "bg-mh-subtle text-mh-text-secondary",
          )}
        >
          {domain}
        </div>
      </div>
      {children ? <div className="relative">{children}</div> : null}
    </div>
  );
}

export default BrowserMockup;
