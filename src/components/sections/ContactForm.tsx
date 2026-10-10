"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

interface ContactFormProps {
  projectTypes: string[];
  /** Recipient used for the mailto fallback. */
  email: string;
  /** Optional POST endpoint (Formspree, Getform, custom API). */
  endpoint: string;
}

type Field = "name" | "phone" | "email" | "projectType" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "submitting" | "sent" | "mailto" | "error";

const initial: Values = { name: "", phone: "", email: "", projectType: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  const digits = v.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) e.phone = "Please enter a valid phone number.";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.projectType) e.projectType = "Please select a project type.";
  if (v.message.trim().length < 10) e.message = "Please tell us a little about your project.";
  return e;
}

export function ContactForm({ projectTypes, email, endpoint }: ContactFormProps) {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: Field) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      document.getElementById(`enquiry-${firstInvalid}`)?.focus();
      return;
    }

    if (endpoint) {
      setStatus("submitting");
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        setValues(initial);
      } catch {
        setStatus("error");
      }
      return;
    }

    if (email) {
      const subject = `Project enquiry: ${values.projectType} — ${values.name}`;
      const lines = [`Name: ${values.name}`, `Phone: ${values.phone}`];
      if (values.email) lines.push(`Email: ${values.email}`);
      lines.push(`Project type: ${values.projectType}`, "", values.message);
      const body = lines.join("\n");
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("error");
  }

  if (status === "sent") {
    return (
      <div className="mt-8 border border-concrete-200 bg-concrete-50 p-8" role="status">
        <Icon name="badge" className="h-10 w-10 text-gold-600" />
        <p className="mt-4 font-display text-xl font-bold text-ink-900">Thank you — your enquiry has been sent.</p>
        <p className="mt-2 text-[0.9375rem] text-ink-500">Our team will get in touch with you shortly.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-ink-900 underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2" aria-describedby="enquiry-status">
      <FormField id="name" label="Full name" required error={errors.name}>
        <input
          id="enquiry-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={update("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "enquiry-name-error" : undefined}
          className={inputClass(errors.name)}
        />
      </FormField>

      <FormField id="phone" label="Phone" required error={errors.phone}>
        <input
          id="enquiry-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={update("phone")}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
          className={inputClass(errors.phone)}
        />
      </FormField>

      <FormField id="email" label="Email" error={errors.email}>
        <input
          id="enquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={update("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "enquiry-email-error" : undefined}
          className={inputClass(errors.email)}
        />
      </FormField>

      <FormField id="projectType" label="Project type" required error={errors.projectType}>
        <div className="relative">
          <select
            id="enquiry-projectType"
            name="projectType"
            value={values.projectType}
            onChange={update("projectType")}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "enquiry-projectType-error" : undefined}
            className={cn(inputClass(errors.projectType), "appearance-none pr-10", !values.projectType && "text-ink-500")}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t} className="text-ink-900">
                {t}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </FormField>

      <FormField id="message" label="Message" required error={errors.message} className="sm:col-span-2">
        <textarea
          id="enquiry-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          placeholder="Tell us about the site, scope and expected timeline."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "enquiry-message-error" : undefined}
          className={cn(inputClass(errors.message), "min-h-[140px] resize-y py-3")}
        />
      </FormField>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex min-h-[52px] shrink-0 items-center whitespace-nowrap justify-center gap-2.5 bg-gold-500 px-8 font-semibold text-ink-950 transition-colors duration-300 hover:bg-gold-400 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Send Enquiry"}
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
        </button>
        <p id="enquiry-status" role="status" className="text-sm text-ink-500">
          {status === "mailto"
            ? "Your email app has opened with the enquiry ready — just press send."
            : status === "error"
              ? "Sorry, the enquiry could not be sent. Please call or email us directly."
              : "We respect your privacy. Your details are used only to respond to your enquiry."}
        </p>
      </div>
    </form>
  );
}

function inputClass(error?: string) {
  return cn(
    "block w-full min-h-[48px] border bg-concrete-50 px-4 text-[0.9375rem] text-ink-900 placeholder:text-ink-500/70 transition-colors duration-200",
    "focus:border-ink-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/40",
    error ? "border-red-600" : "border-concrete-300 hover:border-concrete-400",
  );
}

function FormField({
  id,
  label,
  required,
  error,
  className,
  children,
}: {
  id: Field;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={`enquiry-${id}`} className="mb-2 block text-sm font-semibold text-ink-800">
        {label}
        {required ? (
          <span className="ml-0.5 text-gold-700" aria-hidden="true">
            *
          </span>
        ) : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`enquiry-${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
