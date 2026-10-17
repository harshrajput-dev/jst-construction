import { company, whatsappLink } from "@/data/company";
import { Icon } from "@/components/ui/Icon";

/** Floating WhatsApp shortcut shown on every screen. Hidden when no number is set. */
export function WhatsAppButton() {
  if (!company.contact.whatsapp) return null;

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${company.shortName} on WhatsApp`}
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6"
    >
      <Icon name="whatsapp" className="h-7 w-7" strokeWidth={1.75} />
    </a>
  );
}
