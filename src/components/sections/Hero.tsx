import Image from "next/image";
import { imageAlt } from "@/config/images";
import { company } from "@/data/company";
import { heroContent } from "@/data/content";
import { BlueprintDrawing } from "@/components/illustrations/BlueprintDrawing";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

interface HeroProps {
  /** Real hero photograph if present in /public, otherwise null (drawing is shown). */
  image: string | null;
}

export function Hero({ image }: HeroProps) {
  const c = heroContent;
  const { rating, reviewCount } = company.google;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-ink-950 text-white"
    >
      {/* Background */}
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt.hero}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/95 via-ink-950/75 to-ink-950/30"
            aria-hidden="true"
          />
        </>
      ) : (
        <div className="blueprint-grid absolute inset-0 -z-10" aria-hidden="true" />
      )}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-950 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative pb-14 pt-[132px] sm:pb-16 lg:pb-20 lg:pt-[188px]">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className={cn(image ? "lg:col-span-8" : "lg:col-span-7")}>
            <p className="eyebrow text-gold-400 hero-in" style={{ animationDelay: "60ms" }}>
              {c.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="mt-6 font-display text-display-xl font-extrabold text-balance hero-in"
              style={{ animationDelay: "140ms" }}
            >
              {c.titleLead} <span className="text-gold-500">{c.titleAccent}</span>
            </h1>
            <p
              className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-concrete-300 sm:text-lg hero-in"
              style={{ animationDelay: "220ms" }}
            >
              {c.description}
            </p>
            <div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 hero-in"
              style={{ animationDelay: "300ms" }}
            >
              <ButtonLink href={c.primaryCta.href} withArrow>
                {c.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={c.secondaryCta.href} variant="outline-light">
                {c.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          {!image ? (
            <div className="relative lg:col-span-5 hero-in" style={{ animationDelay: "200ms" }}>
              <div className="relative mx-auto max-w-[560px] border border-white/10 bg-ink-900/40 p-3 sm:p-4">
                <span className="corner-mark left-0 top-0" aria-hidden="true" />
                <span className="corner-mark right-0 top-0 rotate-90" aria-hidden="true" />
                <span className="corner-mark bottom-0 right-0 rotate-180" aria-hidden="true" />
                <span className="corner-mark bottom-0 left-0 -rotate-90" aria-hidden="true" />
                <BlueprintDrawing className="h-auto w-full text-concrete-200" />
              </div>
            </div>
          ) : null}
        </div>

        {/* Trust strip — qualitative, plus the verified Google rating */}
        <div
          className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between lg:mt-20 hero-in"
          style={{ animationDelay: "380ms" }}
        >
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-concrete-200 sm:text-sm sm:tracking-[0.22em]">
            {c.trustLine.map((word, i) => (
              <span key={word} className="flex items-center gap-x-4">
                {i > 0 ? <span className="h-1 w-1 rounded-full bg-gold-500" aria-hidden="true" /> : null}
                {word}
              </span>
            ))}
          </p>
          <a
            href="#reviews"
            className="group flex items-center gap-3 text-sm text-concrete-300 transition-colors hover:text-white"
          >
            <span className="flex text-gold-500" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-4 w-4 fill-current" strokeWidth={1} />
              ))}
            </span>
            <span>
              <strong className="font-semibold text-white">{rating.toFixed(1)}</strong> rating on Google ·{" "}
              {reviewCount} reviews
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
