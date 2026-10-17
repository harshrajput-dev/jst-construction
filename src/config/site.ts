import { company } from "@/data/company";

/** SEO & site-wide settings. */
export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  title: "JST Construction Private Limited | Construction & Real Estate",
  description: company.description,
  locale: "en_IN",
  themeColor: "#141C23",
  keywords: [
    "JST Construction",
    "JST Construction Private Limited",
    "construction company Uttar Pradesh",
    "builders Pilkhuwa",
    "construction company Hapur",
    "real estate builders Sikhera",
    "residential construction",
    "commercial construction",
    "infrastructure development",
  ],
} as const;
