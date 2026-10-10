import { testimonials } from "@/data/testimonials";
import { revealDelay } from "@/lib/reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Renders only when real testimonials exist in data/testimonials.ts.
 * No reviews are fabricated — while the list is empty this section is hidden.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-concrete-50 py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading id="testimonials-title" eyebrow="Testimonials" title="What our clients say" />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name + i} data-reveal style={revealDelay((i % 3) * 80)}>
              <figure className="flex h-full flex-col border border-concrete-200 bg-white p-8">
                <span className="font-display text-5xl leading-none text-gold-500" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-[1.0625rem] leading-relaxed text-ink-700">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-concrete-200 pt-5">
                  <span className="block font-semibold text-ink-900">{t.name}</span>
                  {t.context ? <span className="text-sm text-ink-500">{t.context}</span> : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
