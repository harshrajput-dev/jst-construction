import { company, formatAddress } from "@/data/company";
import { mainNav, primaryCta } from "@/data/navigation";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const { phone, phoneLink, email } = company.contact;
  const year = 2026;

  return (
    <footer className="relative bg-ink-950 text-concrete-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="h-[3px] w-full bg-gradient-to-r from-gold-500 via-gold-500/60 to-transparent" aria-hidden="true" />

      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo size={64} tone="light" />
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-concrete-400">
              {company.shortDescription}
            </p>
            <a
              href={primaryCta.href}
              className="mt-7 inline-flex items-center gap-2 border-b border-gold-500/60 pb-1 text-sm font-semibold text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              {primaryCta.label}
              <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="lg:col-span-2">
            <h3 className="footer-title">Company</h3>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="footer-title">Services</h3>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="footer-link">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="footer-title">Contact</h3>
            <address className="mt-5 space-y-4 text-[0.9375rem] not-italic">
              <p className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <span>{formatAddress()}</span>
              </p>
              {phone ? (
                <a href={`tel:${phoneLink}`} className="footer-link flex gap-3">
                  <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  {phone}
                </a>
              ) : null}
              {email ? (
                <a href={`mailto:${email}`} className="footer-link flex gap-3 break-all">
                  <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  {email}
                </a>
              ) : null}
            </address>

            <ul className="mt-7 flex gap-2" aria-label="Social media">
              {company.social.map((s) =>
                s.url ? (
                  <li key={s.platform}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center border border-white/15 text-concrete-300 transition-colors hover:border-gold-500 hover:text-gold-400"
                    >
                      <Icon name={s.platform} className="h-[18px] w-[18px]" />
                      <span className="sr-only">{s.label}</span>
                    </a>
                  </li>
                ) : (
                  // Placeholder until the official profile URL is added in data/company.ts
                  <li key={s.platform}>
                    <span
                      title={`${s.label} — coming soon`}
                      className="flex h-10 w-10 cursor-default items-center justify-center border border-white/10 text-concrete-500"
                    >
                      <Icon name={s.platform} className="h-[18px] w-[18px]" />
                      <span className="sr-only">{s.label} (coming soon)</span>
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-[0.8125rem] text-concrete-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {company.legalName}. All Rights Reserved.</p>
          {company.legal.cin || company.legal.gstin ? (
            <p className="flex flex-wrap gap-x-5">
              {company.legal.cin ? <span>CIN: {company.legal.cin}</span> : null}
              {company.legal.gstin ? <span>GSTIN: {company.legal.gstin}</span> : null}
            </p>
          ) : (
            <p>{company.address.locality}, {company.address.state}</p>
          )}
        </Container>
      </div>
    </footer>
  );
}
