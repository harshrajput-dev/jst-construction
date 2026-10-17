import { company } from "@/data/company";

/**
 * Public URL of the site. Uses NEXT_PUBLIC_SITE_URL when set (custom domain),
 * otherwise the production domain Vercel provides at build time, so canonical
 * links and the sitemap never point at localhost on a live deployment.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit && !explicit.includes("localhost")) return explicit;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return explicit || "http://localhost:3000";
}

/** SEO & site-wide settings. */
export const siteConfig = {
  url: resolveSiteUrl().replace(/\/$/, ""),
  title: "JST Construction Pvt Ltd | Civil Contractor & Builders in Pilkhuwa, Hapur (UP)",
  description:
    "JST Construction Private Limited is a civil contractor and builder in Pilkhuwa, Hapur, Uttar Pradesh, delivering government buildings, jail barracks, Kisan Kalyan Kendras, residences and road works across Hapur, Mathura, Bulandshahr and Gautam Buddh Nagar.",
  locale: "en_IN",
  themeColor: "#141C23",
  /** Optional Google Search Console HTML-tag verification code. */
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  /** Districts JST has delivered projects in — used for local SEO (areaServed). */
  areaServed: [
    "Hapur",
    "Pilkhuwa",
    "Gautam Buddh Nagar",
    "Bulandshahr",
    "Mathura",
    "Uttar Pradesh",
  ],
  keywords: [
    "JST Construction",
    "JST Construction Private Limited",
    "civil contractor Pilkhuwa",
    "civil contractor Hapur",
    "construction company Hapur",
    "construction company Pilkhuwa",
    "builders in Hapur",
    "government contractor Uttar Pradesh",
    "building contractor Mathura",
    "building contractor Bulandshahr",
    "road construction contractor Uttar Pradesh",
    "construction company Uttar Pradesh",
    "real estate builders Sikhera",
    "residential construction",
    "commercial construction",
    "infrastructure development",
  ],
} as const;
