import Link from "next/link";
import { forwardRef } from "react";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/** Shared base props for all MyHiwi CTA buttons. */
type BaseProps = {
  children: ReactNode;
  className?: string;
};

type AsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> & {
    href: string;
    external?: boolean;
  };

type AsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

export type MhButtonProps = AsLink | AsButton;

/**
 * Polymorphic renderer used by BtnPrimary / BtnGhost / BtnTertiary.
 * Renders `<Link>` (or `<a>` for external) when `href` is present,
 * otherwise renders `<button type="button">`. Keeps the visual
 * tokens in the caller — this helper only handles the element.
 */
export const ButtonBase = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  MhButtonProps
>(function ButtonBase(props, ref) {
  const { children, className } = props;

  if ("href" in props && props.href !== undefined) {
    const { href, external, ...rest } = props;
    const isExternal =
      external ?? (href.startsWith("http") || href.startsWith("mailto:"));
    if (isExternal) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          className={cn(className)}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cn(className)}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={cn(className)}
      {...rest}
    >
      {children}
    </button>
  );
});

export default ButtonBase;
