import { primaryCta } from "@/data/navigation";
import { services } from "@/data/services";
import { revealDelay } from "@/lib/reveal";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-white py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Our Services"
            title="Construction services, end to end."
            description="From a single home to public infrastructure, these are the areas in which JST Construction offers its expertise."
          />
        </div>

        <ul className="mt-14 grid border-l border-t border-concrete-200 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <li
              key={service.id}
              className="group relative border-b border-r border-concrete-200 bg-white transition-colors duration-500 hover:bg-concrete-50"
              data-reveal
              style={revealDelay((i % 4) * 70)}
            >
              <span
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold-500 transition-transform duration-500 ease-architectural group-hover:scale-x-100"
                aria-hidden="true"
              />
              <div className="flex h-full flex-col p-7 lg:p-8">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center border border-concrete-200 text-ink-700 transition-colors duration-500 group-hover:border-gold-500 group-hover:bg-ink-900 group-hover:text-gold-400">
                    <Icon name={service.icon} className="h-7 w-7" strokeWidth={1.4} />
                  </span>
                  <span className="font-display text-sm font-semibold text-concrete-400" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-xl font-bold text-ink-900">{service.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">{service.description}</p>
              </div>
            </li>
          ))}

          {/* Closing CTA tile completes the grid */}
          <li className="relative border-b border-r border-concrete-200 bg-ink-900 text-white" data-reveal>
            <div className="blueprint-grid absolute inset-0 opacity-70" aria-hidden="true" />
            <div className="relative flex h-full min-h-[260px] flex-col justify-between p-7 lg:p-8">
              <p className="font-display text-xl font-bold leading-snug">
                Have a project in mind? Let&rsquo;s talk about it.
              </p>
              <a
                href={primaryCta.href}
                className="group mt-6 inline-flex items-center gap-2 self-start border-b border-gold-500 pb-1 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
              >
                {primaryCta.label}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </a>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
