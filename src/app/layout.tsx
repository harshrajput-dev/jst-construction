import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { imageAlt, imagePaths, logoSize } from "@/config/images";
import { siteConfig } from "@/config/site";
import { company } from "@/data/company";
import "./globals.css";

// Fonts are self-hosted by Next.js at build time (no runtime request to Google).
const display = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${company.legalName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: company.legalName,
  authors: [{ name: company.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: company.legalName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: imagePaths.logo,
        width: logoSize.width,
        height: logoSize.height,
        alt: imageAlt.logo,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [imagePaths.logo],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JavaScript is available. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
