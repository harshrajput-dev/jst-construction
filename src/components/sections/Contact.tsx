import { company, formatAddress } from "@/data/company";
import { contactContent } from "@/data/content";
import { projectTypes } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { phone, phoneLink, email, whatsapp } = company.contact;
  const { mapUrl, mapEmbedUrl } = company.google;

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative bg-white py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid overflow-hidden border border-concrete-200 lg:grid-cols-12">
          {/* Details panel */}
          <div className="relative isolate bg-ink-900 p-8 text-white sm:p-10 lg:col-span-5 lg:p-12">
            <div className="blueprint-grid absolute inset-0 -z-10" aria-hidden="true" />
            <p className="eyebrow text-gold-400">{contactContent.eyebrow}</p>
            <h2 id="contact-title" className="mt-4 font-display text-display-md font-bold text-balance">
              {contactContent.title}
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-concrete-300">{contactContent.description}</p>

            <ul className="mt-10 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-gold-400">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-concrete-400">Office</p>
                  <address className="mt-1 text-[0.9375rem] not-italic leading-relaxed text-white">{formatAddress()}</address>
                  {mapUrl ? (
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 hover:text-gold-300"
                    >
                      Get directions <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2} />
                    </a>
                  ) : null}
                </div>
              </li>
              {phone ? (
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-gold-400">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-concrete-400">Call us</p>
                    <a href={`tel:${phoneLink}`} className="mt-1 block text-[0.9375rem] text-white hover:text-gold-400">
                      {phone}
                    </a>
                  </div>
                </li>
              ) : null}
              {email ? (
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-gold-400">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-concrete-400">Email us</p>
                    <a href={`mailto:${email}`} className="mt-1 block break-all text-[0.9375rem] text-white hover:text-gold-400">
                      {email}
                    </a>
                  </div>
                </li>
              ) : null}
            </ul>

            {whatsapp ? (
              <a
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hello ${company.shortName}, I would like to discuss a construction project.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex min-h-[48px] items-center gap-3 border border-white/25 px-5 text-sm font-semibold text-white transition-colors hover:border-[#25D366] hover:text-[#25D366]"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            ) : null}
          </div>

          {/* Form */}
          <div className="bg-white p-8 sm:p-10 lg:col-span-7 lg:p-12">
            <h3 className="font-display text-xl font-bold text-ink-900">Send us an enquiry</h3>
            <p className="mt-2 text-sm text-ink-500">
              Fields marked <span className="text-gold-700">*</span> are required.
            </p>
            <ContactForm
              projectTypes={projectTypes}
              email={email}
              endpoint={company.enquiryEndpoint}
            />
          </div>
        </div>

        {mapEmbedUrl ? (
          <div className="mt-8 aspect-[16/7] w-full overflow-hidden border border-concrete-200">
            <iframe
              src={mapEmbedUrl}
              title={`Map showing ${company.legalName} office location`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
