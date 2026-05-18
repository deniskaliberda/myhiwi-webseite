import Link from "next/link";
import { cn } from "@/lib/utils";

type MyHiwiMarkProps = {
  /** Visueller Variant. */
  variant?: "default" | "mono-on-dark" | "mono-on-light";
  /** Pixel-Höhe der Marke. Default 28 (Header). */
  size?: number;
  /** Wenn gesetzt, rendert ein <Link>. Default „/". */
  href?: string | null;
  className?: string;
};

/**
 * MyHiwi Redesign 2026 — MyHiwiMark
 * Logo = H-Icon + Wordmark. components.md §8.
 * Sub-Komponente für Header + Footer. Bewusst minimal gehalten —
 * volle SVG-Variante landet später unter `public/brand/`.
 */
export function MyHiwiMark({
  variant = "default",
  size = 28,
  href = "/",
  className,
}: MyHiwiMarkProps) {
  const wordmarkColor =
    variant === "mono-on-dark"
      ? "text-mh-text-on-dark"
      : variant === "mono-on-light"
        ? "text-mh-text-primary"
        : "text-mh-text-primary";

  const iconBgClass =
    variant === "default"
      ? "bg-mh-ink-950 text-mh-text-on-dark"
      : variant === "mono-on-dark"
        ? "border border-mh-text-on-dark/40 text-mh-text-on-dark"
        : "border border-mh-text-primary/40 text-mh-text-primary";

  const inner = (
    <span
      className={cn(
        "inline-flex items-center gap-mh-2 leading-none",
        className,
      )}
      aria-label="MyHiwi"
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex items-center justify-center rounded-mh-sm",
          iconBgClass,
        )}
        style={{ height: size, width: size }}
      >
        <span
          className="font-mh-display font-extrabold"
          style={{ fontSize: size * 0.6, lineHeight: 1 }}
        >
          H
        </span>
      </span>
      <span
        className={cn(
          "font-mh-display font-bold tracking-tight",
          wordmarkColor,
        )}
        style={{ fontSize: size * 0.78 }}
      >
        MyHiwi
      </span>
    </span>
  );

  if (href === null) return inner;
  return (
    <Link
      href={href}
      className="inline-flex items-center transition-opacity duration-mh-fast ease-mh-default hover:opacity-80"
    >
      {inner}
    </Link>
  );
}

export default MyHiwiMark;
