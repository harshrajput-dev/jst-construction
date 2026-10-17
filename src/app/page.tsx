import { siteConfig } from "@/config/site";
import { imagePaths } from "@/config/images";
import { company } from "@/data/company";
import { projects } from "@/data/projects";
import { getSiteImages, resolvePublicImage } from "@/lib/images";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { DirectorsMessage } from "@/components/sections/DirectorsMessage";
import { Hero } from "@/components/sections/Hero";
import { Projects, type ResolvedProject } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustSection } from "@/components/sections/TrustSection";
import { ViksitBharat } from "@/components/sections/ViksitBharat";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/** Structured data for search engines — only verified facts are included. */
function buildJsonLd() {
  const a = company.address;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: company.legalName,
    alternateName: company.displayName,
    description: company.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${imagePaths.logo}`,
    image: `${siteConfig.url}${imagePaths.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.line1,
      addressLocality: a.locality,
      addressRegion: a.state,
      addressCountry: "IN",
      ...(a.postalCode ? { postalCode: a.postalCode } : {}),
    },
  };
  if (company.contact.phone) data.telephone = company.contact.phone;
  if (company.contact.email) data.email = company.contact.email;
  if (company.google.mapUrl) data.hasMap = company.google.mapUrl;
  const sameAs = company.social.map((s) => s.url).filter(Boolean);
  if (sameAs.length) data.sameAs = sameAs;
  return data;
}

export default function HomePage() {
  const images = getSiteImages();
  const resolvedProjects: ResolvedProject[] = projects.map((p) => ({
    ...p,
    image: resolvePublicImage(p.image),
  }));

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero image={images.hero} />
        <About image={images.about} />
        <Services />
        <WhyChooseUs />
        <Projects projects={resolvedProjects} />
        <DirectorsMessage photo={images.director} />
        <ViksitBharat />
        <Testimonials />
        <TrustSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <RevealObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
      />
    </>
  );
}
