import { viksitBharatContent } from "@/data/content";
import { primaryCta } from "@/data/navigation";
import { revealDelay } from "@/lib/reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

/** 24-spoke wheel motif, drawn as fine lines — a quiet nod to India, not a flag graphic. */
function WheelMotif({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="84" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 24;
        return (
          <path
            key={i}
            d={`M${(100 + Math.cos(a) * 10).toFixed(2)} ${(100 + Math.sin(a) * 10).toFixed(2)}L${(100 + Math.cos(a) * 84).toFixed(2)} ${(100 + Math.sin(a) * 84).toFixed(2)}`}
            stroke="currentColor"
            strokeWidth="0.6"
          />
        );
      })}
    </svg>
  );
}

export function ViksitBharat() {
  const c = viksitBharatContent;
  return (
    <section
      id="viksit-bharat"
      aria-labelledby="vb-title"
      className="relative isolate overflow-hidden bg-ink-950 py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Tricolour hairline */}
      <div className="absolute inset-x-0 top-0 flex h-1" aria-hidden="true">
        <span className="flex-1 bg-[#E8863A]" />
        <span className="flex-1 bg-white/90" />
        <span className="flex-1 bg-[#2E8B57]" />
      </div>
      <WheelMotif className="absolute -right-24 top-1/2 -z-10 h-[520px] w-[520px] -translate-y-1/2 text-white/[0.05] sm:h-[640px] sm:w-[640px]" />
      <div className="blueprint-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <p className="eyebrow text-gold-400">{c.eyebrow}</p>
            <h2 id="vb-title" className="mt-4 font-display text-display-lg font-bold text-balance">
              {c.title}
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-concrete-300">{c.description}</p>
            <p
              className="mt-10 select-none font-display text-[5.5rem] font-extrabold leading-none tracking-tight text-transparent sm:text-[7rem]"
              style={{ WebkitTextStroke: "1px rgba(227,169,43,0.55)" }}
              aria-hidden="true"
            >
              2047
            </p>
            <div className="mt-10">
              <ButtonLink href={primaryCta.href} withArrow>
                Build with JST
              </ButtonLink>
            </div>
          </div>

          <ul className="grid gap-px self-start bg-white/10 sm:grid-cols-2 lg:col-span-7">
            {c.pillars.map((p, i) => (
              <li key={p.title} className="bg-ink-950/95 p-7 sm:p-8" data-reveal style={revealDelay((i % 2) * 90)}>
                <Icon name={p.icon} className="h-7 w-7 text-gold-400" strokeWidth={1.4} />
                <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-concrete-400">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
