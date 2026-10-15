import type { Project, ProjectCategory } from "@/types";

export const projectCategories: ProjectCategory[] = ["Residential", "Commercial", "Infrastructure"];

/**
 * ============================================================
 *  PROJECTS
 * ============================================================
 * Photos live in /public/images/projects/ (landscape, ~1600px wide).
 * Names are descriptive — replace with official project names and
 * fill in `location` (left empty = location line is hidden).
 */
export const projects: Project[] = [
  {
    id: "project-01",
    isPlaceholder: false,
    name: "Courtyard Residential Apartments",
    location: "",
    category: "Residential",
    description: "Multi-storey residential blocks arranged around a paved courtyard, with balconies on every floor.",
    image: "/images/projects/project-01.jpg",
    imageAlt: "Yellow and red four-storey apartment blocks around a paved courtyard",
  },
  {
    id: "project-02",
    isPlaceholder: false,
    name: "Multi-Storey Residential Block",
    location: "",
    category: "Residential",
    description: "Four-storey RCC-framed residential building with a stepped facade.",
    image: "/images/projects/project-02.jpg",
    imageAlt: "Long four-storey white residential building",
  },
  {
    id: "project-03",
    isPlaceholder: false,
    name: "Staff Housing Block",
    location: "",
    category: "Residential",
    description: "Four-storey housing block with staggered elevations for light and ventilation.",
    image: "/images/projects/project-03.jpg",
    imageAlt: "Four-storey white housing block with staggered facade",
  },
  {
    id: "project-04",
    isPlaceholder: false,
    name: "EdTech Training Centre",
    location: "Radhakund, Govardhan, Uttar Pradesh",
    category: "Commercial",
    description: "Pre-engineered steel training facility with an insulated roof and a full-length workshop hall.",
    image: "/images/projects/project-04.jpg",
    imageAlt: "Long training centre building with an orange metal roof",
  },
  {
    id: "project-05",
    isPlaceholder: false,
    name: "Skill Development Centre",
    location: "",
    category: "Commercial",
    description: "Two-storey skill development centre with a glazed stair tower and classrooms.",
    image: "/images/projects/project-05.jpg",
    imageAlt: "Cream and red two-storey skill development centre",
  },
  {
    id: "project-06",
    isPlaceholder: false,
    name: "Industrial Training Workshop",
    location: "",
    category: "Commercial",
    description: "Fitted-out workshop interior with epoxy flooring, work benches and machine bays.",
    image: "/images/projects/project-06.jpg",
    imageAlt: "Bright industrial workshop aisle with blue epoxy walkway and work benches",
  },
  {
    id: "project-07",
    isPlaceholder: false,
    name: "Ucch Suraksha Kendra, Ahata No. 12",
    location: "",
    category: "Infrastructure",
    description: "High-security facility building with a covered entrance porch, ramp and stair access.",
    image: "/images/projects/project-07.jpg",
    imageAlt: "Cream building with orange-trimmed entrance porch and Hindi signage",
  },
  {
    id: "project-08",
    isPlaceholder: false,
    name: "Government Office Building",
    location: "",
    category: "Infrastructure",
    description: "Two-storey public building with accessible ramp access and green-trimmed facade.",
    image: "/images/projects/project-08.jpg",
    imageAlt: "Cream government building with green trim and an access ramp",
  },
  {
    id: "project-09",
    isPlaceholder: false,
    name: "Institutional Block",
    location: "",
    category: "Infrastructure",
    description: "Two-storey institutional building with a colonnaded verandah on the ground floor.",
    image: "/images/projects/project-09.jpg",
    imageAlt: "Red and cream two-storey institutional building with verandah",
  },
];
