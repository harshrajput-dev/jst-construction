import Image from "next/image";
import { imageAlt } from "@/config/images";
import { company } from "@/data/company";
import { directorMessage } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

interface DirectorsMessageProps {
  /** Director portrait if /public/images/director/director.jpg exists, otherwise null. */
  photo: string | null;
}

export function DirectorsMessage({ photo }: DirectorsMessageProps) {
  const { name, designation, organisation } = company.director;
  const [lead, ...rest] = directorMessage.paragraphs;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section id="director" aria-labelledby="director-title" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Subtle structural lines */}
      <div className="pointer-events-none absolute inset-y-0 left-[8%] hidden w-px bg-concrete-200 lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-[22%] hidden h-px bg-concrete-200 lg:block" aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <figure className="lg:sticky lg:top-28" data-reveal>
              <div className="relative">
                <div className="absolute -right-3 -top-3 bottom-8 left-8 border border-gold-500/70 sm:-right-4 sm:-top-4" aria-hidden="true" />
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-900">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={imageAlt.director}
                      fill
                      sizes="(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 100vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    // Placeholder — replaced automatically when director.jpg is added.
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950/80 to-transparent" aria-hidden="true" />
                      <span
                        className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/20 font-display text-4xl font-bold tracking-wider text-white/80 sm:h-32 sm:w-32"
                        aria-hidden="true"
                      >
                        {initials}
                      </span>
                      <span className="relative mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
                        <Icon name="image" className="h-4 w-4" />
                        Director&rsquo;s Photograph
                      </span>
                      <span className="sr-only">Portrait of {name} to be added</span>
                    </div>
                  )}
                </div>
              </div>
              <figcaption className="relative -mt-px ml-0 mr-8 bg-ink-900 px-6 py-5 text-white sm:mr-12">
                <span className="block font-display text-xl font-bold">{name}</span>
                <span className="mt-1 block text-sm text-concrete-300">
                  {designation}, {organisation}
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Message */}
          <div className="lg:col-span-7">
            <div data-reveal>
              <p className="eyebrow text-gold-700">{directorMessage.eyebrow}</p>
              <h2 id="director-title" className="mt-4 font-display text-display-lg font-bold text-ink-900">
                {directorMessage.title}
              </h2>
            </div>

            <blockquote className="relative mt-10" data-reveal>
              <span
                className="pointer-events-none absolute -left-2 -top-10 select-none font-display text-[7.5rem] font-bold leading-none text-gold-500/25 sm:-left-6 sm:-top-14 sm:text-[10rem]"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="relative font-display text-[1.3125rem] font-semibold leading-snug text-ink-900 sm:text-2xl">
                {lead}
              </p>
              <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.8] text-ink-500">
                {rest.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </blockquote>

            <div className="mt-12 flex items-center gap-5" data-reveal>
              <span className="h-px w-14 bg-gold-500" aria-hidden="true" />
              <p className="leading-tight">
                <span className="block font-display text-lg font-bold text-ink-900">{name}</span>
                <span className="mt-1 block text-sm text-ink-500">{designation}</span>
                <span className="block text-sm text-ink-500">{organisation}</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
