"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { company } from "@/data/company";
import { mainNav, primaryCta } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Solid header after scrolling past the top of the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = mainNav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Mobile menu: lock scroll, close on Escape, keep focus inside.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Close the mobile menu if the viewport grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const solid = scrolled;
  const { phone, phoneLink, email } = company.contact;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar (desktop only) — collapses after scroll */}
      <div
        className={cn(
          "hidden overflow-hidden bg-ink-950 text-[0.8125rem] text-concrete-300 transition-[max-height,opacity] duration-500 ease-architectural lg:block",
          solid ? "max-h-0 opacity-0" : "max-h-12 border-b border-white/10 opacity-100",
        )}
      >
        <div className="mx-auto flex h-10 max-w-site items-center justify-between gap-6 px-10">
          <p className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4 text-gold-500" />
            {company.address.line1}, {company.address.locality}, {company.address.district}
          </p>
          <div className="flex items-center gap-6">
            {phone ? (
              <a href={`tel:${phoneLink}`} className="flex items-center gap-2 transition-colors hover:text-white">
                <Icon name="phone" className="h-4 w-4 text-gold-500" />
                {phone}
              </a>
            ) : null}
            {email ? (
              <a href={`mailto:${email}`} className="flex items-center gap-2 transition-colors hover:text-white">
                <Icon name="mail" className="h-4 w-4 text-gold-500" />
                {email}
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "transition-[background-color,box-shadow,border-color] duration-500 ease-architectural",
          solid
            ? "border-b border-concrete-200 bg-white shadow-[0_8px_30px_-12px_rgba(13,19,24,0.18)]"
            : "border-b border-white/10 bg-transparent",
        )}
      >
        <nav
          aria-label="Main"
          className={cn(
            "mx-auto flex max-w-site items-center justify-between gap-6 px-5 transition-[height] duration-500 sm:px-8 lg:px-10",
            solid ? "h-[72px]" : "h-[84px]",
          )}
        >
          <a href="#home" className="shrink-0 rounded-full" aria-label={`${company.legalName} — home`}>
            <Logo size={solid ? 48 : 56} tone={solid ? "dark" : "light"} priority />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative px-3 py-2 text-[0.875rem] font-medium transition-colors duration-300 xl:px-3.5",
                      solid ? "text-ink-600 hover:text-ink-950" : "text-white/80 hover:text-white",
                      isActive && (solid ? "text-ink-950" : "text-white"),
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-[2px] origin-left bg-gold-500 transition-transform duration-500 ease-architectural xl:inset-x-3.5",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={primaryCta.href}
              className="hidden min-h-[44px] items-center gap-2 bg-gold-500 px-5 text-[0.875rem] font-semibold text-ink-950 transition-colors duration-300 hover:bg-gold-400 xl:inline-flex"
            >
              {primaryCta.label}
              <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden",
                solid ? "border-concrete-300 text-ink-900" : "border-white/30 text-white",
              )}
            >
              <span className="sr-only">Open menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M3 7h18M3 12h18M9 17h12" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "fixed inset-0 z-50 flex-col overflow-y-auto bg-ink-950 text-white lg:hidden",
          open ? "flex" : "hidden",
        )}
      >
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative flex h-[84px] items-center justify-between px-5 sm:px-8">
          <a href="#home" onClick={() => setOpen(false)} className="rounded-full">
            <Logo size={52} tone="light" />
          </a>
          <button
            type="button"
            onClick={close}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/30"
          >
            <span className="sr-only">Close menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="relative mt-4 flex flex-col border-t border-white/10 px-5 sm:px-8">
          {mainNav.map((item, i) => (
            <li key={item.href} className="border-b border-white/10">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-4 font-display text-[1.375rem] font-semibold tracking-tight text-white/90 transition-colors hover:text-gold-400"
              >
                <span className="w-6 font-sans text-xs font-medium text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative mt-auto space-y-5 px-5 pb-10 pt-8 sm:px-8">
          <a
            href={primaryCta.href}
            onClick={() => setOpen(false)}
            className="flex min-h-[52px] items-center justify-center gap-2 bg-gold-500 font-semibold text-ink-950"
          >
            {primaryCta.label}
            <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
          </a>
          <div className="space-y-2 text-sm text-concrete-300">
            {phone ? (
              <a href={`tel:${phoneLink}`} className="flex items-center gap-3">
                <Icon name="phone" className="h-4 w-4 text-gold-500" /> {phone}
              </a>
            ) : null}
            {email ? (
              <a href={`mailto:${email}`} className="flex items-center gap-3 break-all">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-gold-500" /> {email}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
