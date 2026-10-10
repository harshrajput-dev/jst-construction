import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

/** Consistent eyebrow + H2 + intro used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  tone = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-2xl", className)} data-reveal>
      <p
        className={cn(
          "eyebrow",
          align === "center" && "justify-center",
          dark ? "text-gold-400" : "text-gold-700",
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-4 font-display text-display-lg font-bold text-balance",
          dark ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", dark ? "text-concrete-300" : "text-ink-500")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
