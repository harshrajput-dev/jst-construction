import type { ReactNode } from "react";
import type { IconName } from "@/types";

/**
 * Lightweight, consistent line-icon set (24×24, 1.5px stroke).
 * Inline SVG keeps the bundle small and needs no icon library.
 */
const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9v12h14V9" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
  office: (
    <>
      <path d="M4 21V4h11v17" />
      <path d="M15 9h5v12" />
      <path d="M2.5 21h19" />
      <path d="M7.5 7.5h1M11 7.5h1M7.5 11h1M11 11h1M7.5 14.5h1M11 14.5h1M17.5 13h.5M17.5 16.5h.5" />
    </>
  ),
  landmark: (
    <>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M4 21h16M5 18h14" />
      <path d="M6.5 10.5V18M10 10.5V18M14 10.5V18M17.5 10.5V18" />
    </>
  ),
  bridge: (
    <>
      <path d="M2 16h20" />
      <path d="M3 16c2.5-6 5.5-8 9-8s6.5 2 9 8" />
      <path d="M7 11.2V16M12 8v8M17 11.2V16" />
      <path d="M4 16v4M20 16v4" />
    </>
  ),
  road: (
    <>
      <path d="M8 3 4 21M16 3l4 18" />
      <path d="M12 4v3M12 10.5v3M12 17v3" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="1" />
      <path d="M9 4V3h6v1" />
      <path d="m8.5 12.5 2 2 4-4.5" />
      <path d="M8.5 17.5h7" />
    </>
  ),
  renovate: (
    <>
      <path d="M14.5 6.5 17.5 3.5l3 3-3 3" />
      <path d="M17.5 3.5 10 11" />
      <path d="M3 21v-6l6-5 6 5v6H3Z" />
      <path d="M7.5 21v-3.5h3V21" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.3 7.5 9.5 4.4-1.2 7.5-4.9 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m9.5 9 1.7 1.7L14.5 7.5" />
      <path d="m8.5 13.8-1.5 7.2 5-2.5 5 2.5-1.5-7.2" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="1" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
      <path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2l-3.9-3.9a2.8 2.8 0 0 0-4 0l-.9.9a1.4 1.4 0 1 1-2-2l2.8-2.8a5 5 0 0 1 5.9-.8l.5.3a3.5 3.5 0 0 0 2.5.3L21 6" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1.4 1.4 0 0 0 2-2" />
      <path d="M3 4h8" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </>
  ),
  phone: (
    <path d="M21 16.5v3a1.5 1.5 0 0 1-1.6 1.5A18 18 0 0 1 3 4.6 1.5 1.5 0 0 1 4.5 3h3a1.5 1.5 0 0 1 1.5 1.3c.1.9.4 1.8.7 2.6a1.5 1.5 0 0 1-.4 1.6L8 9.8a14 14 0 0 0 6.2 6.2l1.3-1.3a1.5 1.5 0 0 1 1.6-.4c.8.3 1.7.6 2.6.7a1.5 1.5 0 0 1 1.3 1.5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.2L3.5 20.5Z" />
      <path d="M9 8.5c0 3.5 2.9 6.5 6.5 6.5l1-1.5-2-1-1 1c-1.3-.5-2.5-1.7-3-3l1-1-1-2L9 8.5Z" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
      <path d="M5 19 13 11" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.5-3.5 3.2-6 6.5-6s6 2.5 6.5 6" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.4c1.9.8 3.2 2.9 3.5 5.6" />
    </>
  ),
  growth: (
    <>
      <path d="M3 21h18" />
      <path d="M6 17v-4M10 17V10M14 17v-6M18 17V7" />
      <path d="m4 9 5-4 4 3 7-5" />
    </>
  ),
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7h.01" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 10.5V16M8 7.8v.01M11.5 16v-5.5M11.5 13c0-1.5 1-2.5 2.3-2.5S16 11.3 16 13v3" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="m10 9 5 3-5 3V9Z" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m21 16-5-5-9 9" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c.8-4 4-6.5 8-6.5s7.2 2.5 8 6.5" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  /** Provide a label only when the icon conveys meaning on its own. */
  title?: string;
}

export function Icon({ name, className = "h-6 w-6", strokeWidth = 1.5, title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
