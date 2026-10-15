# Website images

Drop real photographs into these folders using the exact file names below.
The website detects them at build time and replaces the placeholder artwork automatically.

| Folder        | File name                                   | Shape / size (approx.)  |
|---------------|---------------------------------------------|-------------------------|
| `logo/`       | `jst-logo.png` (already added)              | 483 × 483, transparent  |
| `hero/`       | `construction-hero.jpg`                     | 2400 × 1350 landscape   |
| `about/`      | `about-construction-site.jpg`               | 1200 × 1500 portrait    |
| `director/`   | `director.jpg`                              | 1000 × 1250 (4:5)       |
| `projects/`   | `project-01.jpg` … `project-09.jpg`         | 1600 × 1200 landscape   |
| `services/`   | reserved for future service photos          |                         |
| `locations/`  | reserved for office / site location photos  |                         |

Keep each file under ~400 KB (JPG quality 80 or WebP). Next.js resizes and converts them automatically.
For project photos, also update `src/data/projects.ts` and set `isPlaceholder: false`.
