import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type CardTone = "paper" | "subtle" | "ink";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  tone?: CardTone;
  /** padding-Variante. `default` = 32px (DESIGN.md §7 card-Token). */
  padded?: "default" | "compact" | "none";
  /** Hover-Lift + Border-Akzent aus DESIGN.md §11. */
  interactive?: boolean;
  children: ReactNode;
};

const TONE: Record<CardTone, string> = {
  paper: "bg-mh-paper text-mh-text-primary border border-mh-divider",
  subtle: "bg-mh-subtle text-mh-text-primary border border-mh-divider",
  ink: "bg-mh-ink-950 text-mh-text-on-dark border border-mh-text-on-dark/10",
};

const PADDED: Record<NonNullable<CardProps["padded"]>, string> = {
  default: "p-mh-6",
  compact: "p-mh-5",
  none: "",
};

/**
 * MyHiwi Redesign 2026 — Card primitive
 * DESIGN.md §7 radius-lg, components.md §4 card-Token.
 */
export function Card({
  as: Tag = "div",
  tone = "paper",
  padded = "default",
  interactive = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-mh-lg shadow-mh-card",
        TONE[tone],
        PADDED[padded],
        interactive &&
          "transition-all duration-mh-medium ease-mh-default hover:-translate-y-0.5 hover:border-mh-accent hover:shadow-mh-hover",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Card;
