// Server-side helper — only import from Server Components (e.g. app/page.tsx).
import fs from "node:fs";
import path from "node:path";
import { imagePaths } from "@/config/images";
import type { SiteImages } from "@/types";

/**
 * Returns the public path if the file exists in /public, otherwise null.
 * Runs at build/render time on the server only, so dropping a photo into
 * /public/images/... is all that is needed to replace a placeholder.
 */
export function resolvePublicImage(publicPath: string): string | null {
  try {
    const filePath = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
    return fs.existsSync(filePath) ? publicPath : null;
  } catch {
    return null;
  }
}

export function getSiteImages(): SiteImages {
  return {
    hero: resolvePublicImage(imagePaths.hero),
    about: resolvePublicImage(imagePaths.about),
    director: resolvePublicImage(imagePaths.director),
  };
}
