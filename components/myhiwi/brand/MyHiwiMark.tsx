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

const LOGO_SRC: Record<NonNullable<MyHiwiMarkProps["variant"]>, string> = {
  default: "/brand/myhiwi-h-logo.svg",
  "mono-on-light": "/brand/myhiwi-h-logo-dark.svg",
  "mono-on-dark": "/brand/myhiwi-h-logo-white.svg",
};

/**
 * MyHiwi Redesign 2026 — MyHiwiMark
 * Rendert die echte Logo-SVG aus `public/brand/`, nicht den frühen H-Placeholder.
 */
export function MyHiwiMark({
  variant = "default",
  size = 32,
  href = "/",
  className,
}: MyHiwiMarkProps) {
  const inner = (
    <span
      className={cn("inline-flex items-center leading-none", className)}
      aria-label="MyHiwi"
    >
      <img
        src={LOGO_SRC[variant]}
        alt="MyHiwi"
        width={Math.round(size * 3.44)}
        height={size}
        className="block h-auto w-auto"
        style={{ height: size }}
      />
    </span>
  );

  if (href === null) return inner;
  return (
    <Link
      href={href}
      aria-label="MyHiwi Startseite"
      className="inline-flex items-center transition-opacity duration-mh-fast ease-mh-default hover:opacity-80"
    >
      {inner}
    </Link>
  );
}

export default MyHiwiMark;
