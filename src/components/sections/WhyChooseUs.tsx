import { principles } from "@/data/services";
import { revealDelay } from "@/lib/reveal";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section
      id="why-jst"
      aria-labelledby="why-title"
      className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              id="why-title"
              tone="dark"
              eyebrow="Why JST"
              title="Why Choose JST Construction?"
              description="Six principles guide every site we work on — from the first drawing to the final handover."
            />
          </div>

          <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:col-span-8">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="group bg-ink-900 p-7 transition-colors duration-500 hover:bg-ink-800 sm:p-8"
                data-reveal
                style={revealDelay((i % 2) * 90)}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold-500/40 text-gold-400 transition-colors duration-500 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-ink-950">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase tracking-[0.06em]">{p.title}</h3>
                </div>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-concrete-300">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
