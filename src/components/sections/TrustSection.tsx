import { company } from "@/data/company";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

/**
 * Small trust band based on the company's public Google Business listing.
 * Shows only what is visible on the listing — this is not a Google widget.
 */
export function TrustSection() {
  const { rating, reviewCount, mapUrl } = company.google;
  const fullStars = Math.round(rating);

  return (
    <section id="reviews" aria-labelledby="trust-title" className="bg-concrete-100 py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 border border-concrete-300 bg-white p-8 sm:p-10 lg:grid-cols-12 lg:gap-8 lg:p-12" data-reveal>
          <div className="flex items-center gap-6 lg:col-span-4 lg:border-r lg:border-concrete-200 lg:pr-8">
            <p className="font-display text-6xl font-extrabold leading-none text-ink-900" aria-hidden="true">
              {rating.toFixed(1)}
            </p>
            <div>
              <p className="flex text-gold-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    className={i < fullStars ? "h-5 w-5 fill-current" : "h-5 w-5"}
                    strokeWidth={1}
                  />
                ))}
              </p>
              <p className="mt-2 text-sm font-medium text-ink-600">Based on {reviewCount} reviews</p>
              <p className="text-xs uppercase tracking-[0.18em] text-ink-500">Google rating</p>
              <span className="sr-only">
                Rated {rating.toFixed(1)} out of 5 on Google, based on {reviewCount} reviews.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 id="trust-title" className="font-display text-2xl font-bold text-ink-900">
              {company.displayName}
            </h2>
            <p className="mt-1 text-[0.9375rem] text-ink-500">{company.category}</p>
            <p className="mt-3 flex items-center gap-2 text-[0.9375rem] font-medium text-ink-700">
              <Icon name="pin" className="h-4 w-4 text-gold-600" />
              {company.address.area}, {company.address.state}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-3 lg:flex-col lg:items-stretch">
            {mapUrl ? (
              <ButtonLink href={mapUrl} variant="dark" external withArrow>
                Visit Us
              </ButtonLink>
            ) : null}
            <ButtonLink href="#contact" variant={mapUrl ? "outline-dark" : "dark"} withArrow={!mapUrl}>
              Get a Consultation
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
