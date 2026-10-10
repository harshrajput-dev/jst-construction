import type { CSSProperties } from "react";

/** Staggers the scroll-reveal animation of an element marked with `data-reveal`. */
export function revealDelay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
