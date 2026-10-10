import type { Project, ProjectCategory } from "@/types";

export const projectCategories: ProjectCategory[] = ["Residential", "Commercial", "Infrastructure"];

/**
 * ============================================================
 *  PROJECTS
 * ============================================================
 * These are PLACEHOLDER entries — no real JST projects have been
 * supplied yet, so no names, locations or photos are claimed.
 *
 * To publish a real project:
 *  1. Put the photo in /public/images/projects/ (e.g. project-01.jpg,
 *     landscape, ~1600px wide).
 *  2. Replace the [BRACKETED] values below.
 *  3. Set `isPlaceholder: false`.
 * The photo appears automatically once the file exists.
 */
export const projects: Project[] = [
  {
    id: "project-01",
    isPlaceholder: true,
    name: "[PROJECT NAME]",
    location: "[PROJECT LOCATION]",
    category: "Residential",
    description: "[Short description of the project]",
    image: "/images/projects/project-01.jpg",
    imageAlt: "[Describe the project photograph]",
  },
  {
    id: "project-02",
    isPlaceholder: true,
    name: "[PROJECT NAME]",
    location: "[PROJECT LOCATION]",
    category: "Commercial",
    description: "[Short description of the project]",
    image: "/images/projects/project-02.jpg",
    imageAlt: "[Describe the project photograph]",
  },
  {
    id: "project-03",
    isPlaceholder: true,
    name: "[PROJECT NAME]",
    location: "[PROJECT LOCATION]",
    category: "Infrastructure",
    description: "[Short description of the project]",
    image: "/images/projects/project-03.jpg",
    imageAlt: "[Describe the project photograph]",
  },
  {
    id: "project-04",
    isPlaceholder: true,
    name: "[PROJECT NAME]",
    location: "[PROJECT LOCATION]",
    category: "Residential",
    description: "[Short description of the project]",
    image: "/images/projects/project-04.jpg",
    imageAlt: "[Describe the project photograph]",
  },
  {
    id: "project-05",
    isPlaceholder: true,
    name: "[PROJECT NAME]",
    location: "[PROJECT LOCATION]",
    category: "Commercial",
    description: "[Short description of the project]",
    image: "/images/projects/project-05.jpg",
    imageAlt: "[Describe the project photograph]",
  },
  {
    id: "project-06",
    isPlaceholder: true,
    name: "[PROJECT NAME]",
    location: "[PROJECT LOCATION]",
    category: "Infrastructure",
    description: "[Short description of the project]",
    image: "/images/projects/project-06.jpg",
    imageAlt: "[Describe the project photograph]",
  },
];
