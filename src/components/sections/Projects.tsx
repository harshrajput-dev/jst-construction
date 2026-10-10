"use client";

import Image from "next/image";
import { useState } from "react";
import { primaryCta } from "@/data/navigation";
import { projectCategories } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** A project whose `image` has been checked on the server (null = no file yet). */
export type ResolvedProject = Omit<Project, "image"> & { image: string | null };

type Filter = "All" | ProjectCategory;

const categoryIcon: Record<ProjectCategory, "home" | "office" | "bridge"> = {
  Residential: "home",
  Commercial: "office",
  Infrastructure: "bridge",
};

export function Projects({ projects }: { projects: ResolvedProject[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...projectCategories];
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const allPlaceholder = projects.every((p) => p.isPlaceholder);

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative bg-concrete-100 py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="projects-title"
            eyebrow="Featured Projects"
            title="Our Work"
            description={
              allPlaceholder
                ? "Our project portfolio is being documented. Photographs and details of JST Construction projects will be published here shortly."
                : "A selection of residential, commercial and infrastructure projects delivered by JST Construction."
            }
          />

          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "min-h-[44px] border px-4 text-sm font-semibold transition-colors duration-300",
                  filter === f
                    ? "border-ink-900 bg-ink-900 text-white"
                    : "border-concrete-300 bg-transparent text-ink-600 hover:border-ink-900 hover:text-ink-900",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visible.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-concrete-300 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-[0.9375rem] text-ink-500">
            Planning a residential, commercial or infrastructure project? Discuss your requirements with our team.
          </p>
          <a
            href={primaryCta.href}
            className="group inline-flex items-center gap-2 border-b border-ink-900 pb-1 text-sm font-semibold text-ink-900 transition-colors hover:border-gold-600 hover:text-gold-700"
          >
            {primaryCta.label}
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </a>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: ResolvedProject }) {
  const placeholder = project.isPlaceholder || !project.image;

  return (
    <article className="group flex h-full flex-col border border-concrete-200 bg-white transition-shadow duration-500 hover:shadow-[0_24px_48px_-24px_rgba(13,19,24,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
        {project.image && !project.isPlaceholder ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-architectural group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-concrete-400">
            <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
            <span className="relative flex h-16 w-16 items-center justify-center border border-white/15 text-gold-500">
              <Icon name={categoryIcon[project.category]} className="h-8 w-8" strokeWidth={1.25} />
            </span>
            <span className="relative mt-4 text-xs font-semibold uppercase tracking-[0.22em]">
              Project photograph
            </span>
          </div>
        )}
        <span className="absolute left-0 top-0 bg-gold-500 px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-ink-950">
          {project.category}
        </span>
        {project.status && !placeholder ? (
          <span className="absolute right-3 top-3 bg-white/95 px-2.5 py-1 text-[0.6875rem] font-semibold text-ink-800">
            {project.status}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {placeholder ? (
          <>
            <h3 className="font-display text-lg font-bold text-ink-900">{project.category} project</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-500">
              Details and photographs coming soon.
            </p>
          </>
        ) : (
          <>
            <h3 className="font-display text-lg font-bold text-ink-900">{project.name}</h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-500">
              <Icon name="pin" className="h-4 w-4 text-gold-600" />
              {project.location}
            </p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">{project.description}</p>
          </>
        )}
      </div>
    </article>
  );
}
