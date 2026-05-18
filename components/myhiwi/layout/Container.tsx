import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
};

/**
 * MyHiwi Redesign 2026 — Container
 * DESIGN.md §6: max-width 1240px, padding 20px mobile / 64px desktop.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-mh-container px-5 md:px-16",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Container;
