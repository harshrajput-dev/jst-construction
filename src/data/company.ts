/**
 * ============================================================
 *  COMPANY INFORMATION — edit this file to update the website
 * ============================================================
 *
 * Rules followed when filling this file:
 *  - Only information supplied by JST Construction is used.
 *  - Unknown values are left as empty strings ("") — the website
 *    automatically hides any field that is empty.
 *  - Never add statistics, certifications or awards here unless
 *    they are verified.
 */

import type { SocialLink } from "@/types";

const social: SocialLink[] = [
  { platform: "facebook", label: "Facebook", url: "" },
  { platform: "instagram", label: "Instagram", url: "" },
  { platform: "linkedin", label: "LinkedIn", url: "" },
  { platform: "youtube", label: "YouTube", url: "" },
];

export const company = {
  legalName: "JST Construction Private Limited",
  shortName: "JST Construction",
  displayName: "JST Construction Pvt Ltd",
  logoTagline: "We Build Your Dreams",
  category: "Real Estate Builders & Construction Company",

  description:
    "JST Construction Private Limited is a construction and real estate company based in Sikhera, Pilkhuwa (Hapur), Uttar Pradesh, focused on quality workmanship, safety, modern technology, timely execution, and customer satisfaction.",

  shortDescription:
    "A construction and real estate company from Uttar Pradesh, committed to quality workmanship, safety, modern technology and timely execution.",

  contact: {
    /**
     * Phone, e-mail and office address below were taken from the
     * reference design supplied by the client. Please verify them.
     * Set any value to "" to hide it across the website.
     */
    phone: "+91 6000796007",
    /** Digits only with country code, used for tel: and WhatsApp links. */
    phoneLink: "+916000796007",
    whatsapp: "916000796007",
    email: "jstconstructionpvtltd@gmail.com",
  },

  address: {
    line1: "Opp. Sikhera Police Station, Dholana Pilkhuwa Road",
    locality: "Pilkhuwa",
    district: "Distt. Hapur",
    /** Locality name as it appears on the Google Business listing. */
    area: "Sikhera",
    state: "Uttar Pradesh",
    country: "India",
    postalCode: "", // [PIN CODE] — add when available
  },

  /**
   * Google Business listing details (as shown on the listing).
   * Update the rating / count whenever the listing changes.
   */
  google: {
    rating: 5.0,
    reviewCount: 9,
    /**
     * Paste the official Google Maps share link of the listing here.
     * The "Visit Us" / "Get Directions" buttons only appear once it is set.
     */
    mapUrl: "",
    /** Optional: Google Maps embed URL (Share → Embed a map → src). */
    mapEmbedUrl: "",
  },

  /** Optional legal identifiers — shown in the footer only when filled. */
  legal: {
    cin: "", // [CIN]
    gstin: "", // [GSTIN]
  },

  director: {
    name: "Krishan Tomer",
    designation: "Director",
    organisation: "JST Construction Private Limited",
  },

  /**
   * Social profiles. Icons are shown as inactive placeholders until a URL is added.
   */
  social,

  foundingYear: "", // [YEAR] — leave empty unless verified
};

/** Full single-line address built from the parts above. */
export function formatAddress(): string {
  const a = company.address;
  return [a.line1, a.locality, a.district, a.state, a.postalCode, a.country]
    .filter(Boolean)
    .join(", ");
}

/** wa.me chat link to the company number, with a greeting pre-filled. */
export function whatsappLink(): string {
  const text = `Hello ${company.shortName}, I would like to discuss a construction project.`;
  return `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}
