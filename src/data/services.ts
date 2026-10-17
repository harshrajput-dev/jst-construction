import type { Principle, Service } from "@/types";

/**
 * Service areas offered by JST Construction.
 * These describe capabilities — not claims of specific completed projects.
 * Add, remove or reorder freely; the layout adapts automatically.
 */
export const services: Service[] = [
  {
    id: "residential",
    title: "Residential Construction",
    description:
      "Homes, villas and residential buildings planned around the family's needs and built with careful workmanship.",
    icon: "home",
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    description:
      "Shops, offices and commercial buildings designed for durability, efficient use of space and smooth operations.",
    icon: "office",
  },
  {
    id: "real-estate",
    title: "Real Estate Development",
    description:
      "Development of residential and commercial property with attention to planning, compliance and long-term value.",
    icon: "landmark",
  },
  {
    id: "civil",
    title: "Civil Construction",
    description:
      "Structural and civil works carried out with sound engineering practice, quality materials and site discipline.",
    icon: "road",
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development",
    description:
      "Roads, bridges and public works that connect communities and support regional growth.",
    icon: "bridge",
  },
  {
    id: "execution",
    title: "Project Execution",
    description:
      "Planning, scheduling, procurement and site supervision to keep work on track and within scope.",
    icon: "clipboard",
  },
  {
    id: "renovation",
    title: "Renovation & Redevelopment",
    description:
      "Upgrading, strengthening and redeveloping existing structures to give them a longer, safer life.",
    icon: "renovate",
  },
];

/** "Why choose JST" principles — no numerical claims. */
export const principles: Principle[] = [
  {
    title: "Quality Workmanship",
    description: "Strong focus on construction quality and attention to detail.",
    icon: "badge",
  },
  {
    title: "Safety First",
    description: "Safety-conscious approach throughout project execution.",
    icon: "shield",
  },
  {
    title: "Modern Technology",
    description: "Use of modern construction methods and technology.",
    icon: "cpu",
  },
  {
    title: "Timely Execution",
    description: "Commitment to disciplined project execution.",
    icon: "clock",
  },
  {
    title: "Transparency",
    description: "Building long-term relationships through honest and professional communication.",
    icon: "handshake",
  },
  {
    title: "Customer Satisfaction",
    description: "Understanding client requirements and delivering dependable solutions.",
    icon: "smile",
  },
];
