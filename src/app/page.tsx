import { siteConfig } from "@/config/site";
import { imagePaths } from "@/config/images";
import { company } from "@/data/company";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
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
  const url = siteConfig.url;
  const orgId = `${url}/#organization`;

  const business: Record<string, unknown> = {
    "@type": "GeneralContractor",
    "@id": orgId,
    name: company.legalName,
    alternateName: [company.displayName, company.shortName],
    description: siteConfig.description,
    slogan: company.logoTagline,
    url,
    logo: `${url}${imagePaths.logo}`,
    image: [`${url}${imagePaths.hero}`, ...projects.map((p) => `${url}${p.image}`)],
    address: {
      "@type": "PostalAddress",
      streetAddress: a.line1,
      addressLocality: a.locality,
      addressRegion: a.state,
      addressCountry: "IN",
      ...(a.postalCode ? { postalCode: a.postalCode } : {}),
    },
    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    knowsAbout: services.map((s) => s.title),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.description },
    })),
    employee: {
      "@type": "Person",
      name: company.director.name,
      jobTitle: company.director.designation,
    },
  };
  if (company.contact.phone) {
    business.telephone = company.contact.phone;
    business.contactPoint = {
      "@type": "ContactPoint",
      telephone: company.contact.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    };
  }
  if (company.contact.email) business.email = company.contact.email;
  if (company.google.mapUrl) business.hasMap = company.google.mapUrl;
  const sameAs = [company.google.mapUrl, ...company.social.map((s) => s.url)].filter(Boolean);
  if (sameAs.length) business.sameAs = sameAs;

  const portfolio = {
    "@type": "ItemList",
    name: `${company.shortName} projects`,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.name,
        description: p.description,
        image: `${url}${p.image}`,
        ...(p.location ? { locationCreated: { "@type": "Place", name: p.location } } : {}),
        creator: { "@id": orgId },
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: company.legalName,
        inLanguage: "en-IN",
        publisher: { "@id": orgId },
      },
      business,
      portfolio,
    ],
  };
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
