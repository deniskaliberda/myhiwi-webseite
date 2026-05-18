import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type SectionBackground =
  | "paper"
  | "subtle"
  | "ink"
  | "calm-paper"
  | "calm-subtle";

export type SectionPadding = "compact" | "default" | "large" | "finalCta" | "none";

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  background?: SectionBackground;
  padding?: SectionPadding;
  /** When true the Final-CTA gradient + glow overlay is applied. */
  finalCta?: boolean;
  children: ReactNode;
};

const BACKGROUND: Record<SectionBackground, string> = {
  paper: "bg-mh-paper text-mh-text-primary",
  subtle: "bg-mh-subtle text-mh-text-primary",
  ink: "bg-mh-ink-950 text-mh-text-on-dark",
  "calm-paper": "bg-mh-calm-paper text-mh-calm-ink",
  "calm-subtle": "bg-mh-calm-subtle text-mh-calm-ink",
};

const PADDING: Record<SectionPadding, string> = {
  none: "",
  compact: "py-mh-7 md:py-mh-9",
  default: "py-mh-section-sm-m md:py-mh-9",
  large: "py-mh-section-lg-m md:py-mh-10",
  finalCta: "py-mh-section-lg-m md:py-mh-11",
};

/**
 * MyHiwi Redesign 2026 — Section
 * Wraps content with vertical padding + an optional background tone.
 * DESIGN.md §5 spacing scale, §3 colour roles.
 */
export function Section({
  as: Tag = "section",
  background = "paper",
  padding = "large",
  finalCta = false,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag
      className={cn(
        "relative",
        BACKGROUND[background],
        PADDING[padding],
        finalCta && "mh-final-cta-bg text-mh-text-on-dark",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Section;
