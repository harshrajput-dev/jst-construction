# JST Construction Private Limited — Website

Official one-page website for **JST Construction Private Limited**, built with
**Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # TypeScript check
```

Requires Node.js 18.18 or newer. Copy `.env.example` to `.env.local` and set
`NEXT_PUBLIC_SITE_URL` to the live domain before deploying (used for SEO,
Open Graph and the sitemap). Deploys as-is to Vercel, Netlify or any Node host.

## Folder structure

```
jst-construction/
├── public/
│   └── images/
│       ├── README.md            ← which photo goes where (exact file names)
│       ├── logo/jst-logo.png    ← official logo (circular, transparent corners)
│       ├── hero/                ← construction-hero.jpg
│       ├── about/               ← about-construction-site.jpg
│       ├── director/            ← director.jpg
│       ├── projects/            ← project-01.jpg … project-06.jpg
│       ├── services/            ← reserved
│       └── locations/           ← reserved
│
├── src/
│   ├── app/                     ← Next.js App Router
│   │   ├── layout.tsx           ← fonts, SEO metadata, Open Graph
│   │   ├── page.tsx             ← assembles all sections + JSON-LD
│   │   ├── globals.css          ← Tailwind layers, motion, shared styles
│   │   ├── icon.png / apple-icon.png / favicon.ico   ← from the JST logo
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── layout/              ← Navbar (sticky + mobile menu), Footer
│   │   ├── sections/            ← Hero, About, Services, WhyChooseUs, Projects,
│   │   │                          DirectorsMessage, ViksitBharat, Testimonials,
│   │   │                          TrustSection, Contact, ContactForm
│   │   ├── ui/                  ← Button, Container, Icon set, Logo,
│   │   │                          SectionHeading, RevealObserver
│   │   └── illustrations/       ← original blueprint drawings (photo fallbacks)
│   │
│   ├── data/                    ← ALL EDITABLE CONTENT LIVES HERE
│   │   ├── company.ts           ← name, address, phone, email, Google rating,
│   │   │                          map link, social links, director, legal IDs
│   │   ├── content.ts           ← hero/about copy, Director's message (exact),
│   │   │                          Viksit Bharat section, contact copy
│   │   ├── services.ts          ← services, "Why choose JST", form project types
│   │   ├── projects.ts          ← project cards (placeholders for now)
│   │   ├── testimonials.ts      ← empty — section appears when filled
│   │   └── navigation.ts        ← menu links and main CTA
│   │
│   ├── config/
│   │   ├── images.ts            ← central image paths + alt text
│   │   └── site.ts              ← SEO title, description, keywords, URL
│   │
│   ├── lib/                     ← small helpers (image detection, classnames)
│   └── types/                   ← shared TypeScript types
│
├── tailwind.config.ts           ← brand palette taken from the logo
├── next.config.ts
└── package.json
```

## Updating content (no component changes needed)

| To change…                         | Edit                                  |
|------------------------------------|---------------------------------------|
| Phone, email, address, WhatsApp    | `src/data/company.ts` → `contact`, `address` |
| Google rating / review count       | `src/data/company.ts` → `google`      |
| "Visit Us" / directions button     | add the Google Maps link to `google.mapUrl` |
| Embedded map                       | `google.mapEmbedUrl`                  |
| Social media icons → live links    | `social[].url`                        |
| CIN / GSTIN in footer              | `legal`                               |
| Where the enquiry form is sent     | `enquiryEndpoint` (e.g. a Formspree URL). If empty, the form opens the visitor's email app addressed to `contact.email`. |
| Services                           | `src/data/services.ts`                |
| Projects                           | `src/data/projects.ts` + photos in `public/images/projects/` |
| Testimonials                       | `src/data/testimonials.ts`            |

Any contact field set to `""` is hidden everywhere on the site.

## Adding photographs

Place files with the names listed in `public/images/README.md`. The site checks
for them at build time:

- **Director photo** → `public/images/director/director.jpg` replaces the
  "Director's Photograph" placeholder automatically (4:5 portrait works best).
- **Hero photo** → `public/images/hero/construction-hero.jpg` switches the hero
  to a full-bleed photo with a dark overlay.
- **About photo** → `public/images/about/about-construction-site.jpg`.
- **Project photos** → `project-01.jpg` … plus real details in `projects.ts`
  with `isPlaceholder: false`.

Restart `npm run dev` (or rebuild) after adding images.

## Content integrity

No statistics, certifications, awards, project names, testimonials or people
have been invented. Placeholders are clearly marked in the data files.
The phone number, email and office address were taken from the reference
design supplied by the client — please confirm them before going live.
