import Image from "next/image";
import { imageAlt } from "@/config/images";
import { aboutContent } from "@/data/content";
import { ElevationDrawing } from "@/components/illustrations/ElevationDrawing";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About({ image }: { image: string | null }) {
  const c = aboutContent;
  return (
    <section id="about" aria-labelledby="about-title" className="relative bg-concrete-50 py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Visual */}
          <div className="relative order-2 lg:order-1 lg:col-span-5" data-reveal>
            <div className="absolute -left-3 -top-3 h-24 w-24 border-l-[3px] border-t-[3px] border-gold-500 sm:-left-4 sm:-top-4" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden border border-concrete-200 bg-white">
              {image ? (
                <Image
                  src={image}
                  alt={imageAlt.about}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <ElevationDrawing className="h-full w-full" />
              )}
            </div>
            <div className="absolute -bottom-6 right-4 max-w-[15rem] bg-ink-900 px-6 py-5 text-white shadow-xl sm:right-[-1.5rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Our promise</p>
              <p className="mt-2 font-display text-lg font-semibold leading-snug">We Build Your Dreams</p>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <SectionHeading id="about-title" eyebrow={c.eyebrow} title={c.title} />
            <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-ink-500" data-reveal>
              {c.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <dl className="mt-10 grid border-y border-concrete-200 sm:grid-cols-3" data-reveal>
              {c.highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={
                    "py-5 sm:px-5 sm:first:pl-0 " +
                    (i > 0 ? "border-t border-concrete-200 sm:border-l sm:border-t-0" : "")
                  }
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">{h.label}</dt>
                  <dd className="mt-2 text-[0.9375rem] font-medium leading-snug text-ink-800">{h.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10" data-reveal>
              <ButtonLink href={c.cta.href} variant="dark" withArrow>
                {c.cta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
