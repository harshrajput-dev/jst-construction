import Image from "next/image";
import { imageAlt, imagePaths, logoSize } from "@/config/images";
import { cn } from "@/lib/cn";

interface LogoProps {
  /** Rendered diameter of the circular emblem, in px. */
  size?: number;
  /** Show the company wordmark next to the emblem. */
  withWordmark?: boolean;
  tone?: "light" | "dark";
  priority?: boolean;
  className?: string;
}

/**
 * The official JST emblem, used unmodified (aspect ratio preserved).
 * The wordmark beside it is set in type for legibility at small sizes.
 */
export function Logo({ size = 56, withWordmark = true, tone = "dark", priority, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src={imagePaths.logo}
        alt={withWordmark ? "" : imageAlt.logo}
        width={logoSize.width}
        height={logoSize.height}
        priority={priority}
        sizes={`${size}px`}
        style={{ width: size, height: size }}
        className="shrink-0 rounded-full"
      />
      {withWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.375rem] font-extrabold tracking-[0.02em]",
              tone === "dark" ? "text-ink-900" : "text-white",
            )}
          >
            JST
          </span>
          <span
            className={cn(
              "mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.2em]",
              tone === "dark" ? "text-ink-500" : "text-concrete-300",
            )}
          >
            Construction Pvt. Ltd.
          </span>
        </span>
      ) : null}
    </span>
  );
}
