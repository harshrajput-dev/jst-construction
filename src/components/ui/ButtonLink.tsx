import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type Variant = "primary" | "outline-light" | "outline-dark" | "dark";

const variants: Record<Variant, string> = {
  primary: "bg-gold-500 text-ink-950 hover:bg-gold-400 border border-gold-500 hover:border-gold-400",
  dark: "bg-ink-900 text-white hover:bg-ink-700 border border-ink-900 hover:border-ink-700",
  "outline-light": "border border-white/35 text-white hover:border-white hover:bg-white/5",
  "outline-dark": "border border-ink-900/25 text-ink-900 hover:border-ink-900 hover:bg-ink-900/[0.03]",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  external?: boolean;
}

/**
 * Anchor styled as a button. Uses a plain <a> because every target on
 * this one-page site is an in-page anchor, tel:, mailto: or external URL.
 */
export function ButtonLink({ href, children, variant = "primary", withArrow, className, external }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex min-h-[48px] items-center justify-center gap-2.5 px-6 py-3 text-[0.9375rem] font-semibold tracking-[0.01em] transition-colors duration-300",
        variants[variant],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {withArrow ? (
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform duration-300 ease-architectural group-hover:translate-x-1"
          strokeWidth={2}
        />
      ) : null}
    </a>
  );
}
