/**
 * Shared content types for the JST Construction website.
 * All editable content lives in /src/data and is typed here.
 */

export type IconName =
  | "home"
  | "office"
  | "landmark"
  | "bridge"
  | "road"
  | "clipboard"
  | "renovate"
  | "shield"
  | "badge"
  | "cpu"
  | "clock"
  | "handshake"
  | "smile"
  | "phone"
  | "mail"
  | "pin"
  | "whatsapp"
  | "arrow"
  | "star"
  | "leaf"
  | "users"
  | "growth"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "image"
  | "user";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface Principle {
  title: string;
  description: string;
  icon: IconName;
}

export type ProjectCategory = "Residential" | "Commercial" | "Infrastructure";

export interface Project {
  id: string;
  /** Set to false once real project details & photo are added. */
  isPlaceholder: boolean;
  name: string;
  location: string;
  category: ProjectCategory;
  description: string;
  /** Path inside /public, e.g. "/images/projects/project-01.jpg" */
  image: string;
  imageAlt: string;
  status?: "Completed" | "Ongoing";
  /** Contract value as shown on the card, e.g. "₹330 Lakh". */
  cost?: string;
}

export interface Testimonial {
  name: string;
  /** e.g. "Homeowner, Pilkhuwa" — only use with the client's permission. */
  context?: string;
  quote: string;
}

export interface SocialLink {
  platform: "facebook" | "instagram" | "linkedin" | "youtube";
  label: string;
  /** Leave empty until the official profile URL is available. */
  url: string;
}

export interface SiteImages {
  hero: string | null;
  about: string | null;
  director: string | null;
}
