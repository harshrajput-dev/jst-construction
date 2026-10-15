/**
 * ============================================================
 *  CENTRAL IMAGE CONFIGURATION
 * ============================================================
 * All image paths used by the website live here (paths are relative
 * to /public). To add a real photograph, simply place the file at the
 * path below — the site detects it at build time and swaps out the
 * placeholder artwork automatically. No code changes needed.
 *
 * Recommended sizes (JPG or WebP, under ~400 KB each):
 *   hero      2400 × 1350  landscape construction / infrastructure photo
 *   about     1200 × 1500  portrait-orientation site or building photo
 *   director  1000 × 1250  professional portrait (4:5), plain background
 *   projects  1600 × 1200  landscape project photographs
 */
export const imagePaths = {
  logo: "/images/logo/jst-logo.png",
  hero: "/images/hero/construction-hero.jpg",
  about: "/images/about/about-construction-site.jpg",
  director: "/images/director/director.jpg",
} as const;

export const imageAlt = {
  logo: "JST Construction Pvt. Ltd. logo — We Build Your Dreams",
  hero: "Two-storey institutional building with orange-trimmed entrance built by JST Construction",
  about: "JST Construction team at a completed project gate",
  director: "Krishan Tomer, Director, JST Construction Private Limited, at his office",
} as const;

/** Intrinsic size of the supplied logo (it is a circular emblem). */
export const logoSize = { width: 483, height: 483 } as const;
