/**
 * Portafolio del studio.
 * - `featured: true` → aparece en la home.
 * - Cada proyecto genera la ruta /projects/[slug].
 * - `cover` es una ruta dentro de public/ (opcional; si no existe, se muestra un placeholder).
 *
 * @typedef {Object} ProjectLayer
 * @property {string} label
 * @property {string[]} items
 *
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} name
 * @property {string} tagline
 * @property {string} description
 * @property {string} year
 * @property {string} role
 * @property {boolean} featured
 * @property {string} status
 * @property {string} [cover]
 * @property {string} [url]
 * @property {string[]} stack
 * @property {string[]} highlights
 * @property {{ layers: ProjectLayer[] }} [architecture]
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: "zayra",
    name: "Zayra",
    tagline: "Plataforma B2B2C para digitalizar métodos de entrenamiento clínico.",
    description:
      "Plataforma completa para coaches y clínicas fitness: los instructores diseñan rutinas y supervisan el progreso de sus alumnos, que consumen el entrenamiento desde una app móvil. Incluye expediente vivo del alumno, pagos con Stripe Connect y paneles por rol.",
    year: "2026",
    role: "Diseño de producto + ingeniería full-stack",
    featured: true,
    status: "En producción",
    cover: "/projects/zayra.jpg",
    stack: ["Next.js", "React Native", "Expo", "Express", "Supabase", "Stripe", "Cloud Run"],
    highlights: [
      "4 roles (admin, instructor, nutriólogo, alumno) con control de acceso",
      "App móvil con reproductor de entrenamiento guiado",
      "Pagos y reconciliación con Stripe Connect",
      "Expediente vivo del alumno como bitácora de eventos",
    ],
    architecture: {
      layers: [
        { label: "Cliente", items: ["Web admin/instructor (Next.js)", "App alumno (Expo)"] },
        { label: "API", items: ["Express (ESM)", "Zod", "Route Handlers"] },
        { label: "Datos & servicios", items: ["Supabase / Postgres", "Stripe Connect", "Cloud Run"] },
      ],
    },
  },
  {
    slug: "proyecto-demo-2",
    name: "Proyecto Demo 2",
    tagline: "Reemplaza este proyecto por uno real del portafolio.",
    description:
      "Descripción de ejemplo. Edita este objeto en data/projects.js con un caso real: el problema, tu solución y el resultado medible.",
    year: "2025",
    role: "Ingeniería full-stack",
    featured: true,
    status: "Caso de estudio",
    cover: "/projects/placeholder.jpg",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    highlights: [
      "Logro medible #1 (ej. -40% tiempo de proceso)",
      "Logro medible #2",
      "Logro medible #3",
    ],
    architecture: {
      layers: [
        { label: "Cliente", items: ["Web (Next.js)"] },
        { label: "API", items: ["Node.js"] },
        { label: "Datos", items: ["PostgreSQL"] },
      ],
    },
  },
  {
    slug: "proyecto-demo-3",
    name: "Proyecto Demo 3",
    tagline: "Otro slot de portafolio listo para tu contenido.",
    description:
      "Descripción de ejemplo. Cuenta una historia corta: contexto, reto técnico y cómo lo resolvió el studio.",
    year: "2025",
    role: "Consultoría + implementación",
    featured: false,
    status: "Caso de estudio",
    cover: "/projects/placeholder.jpg",
    stack: ["React", "Supabase", "Vercel"],
    highlights: ["Logro #1", "Logro #2"],
    architecture: {
      layers: [
        { label: "Cliente", items: ["React"] },
        { label: "Backend", items: ["Supabase"] },
      ],
    },
  },
];

/** Proyectos marcados como destacados (para la home). */
export const featuredProjects = projects.filter((p) => p.featured);

/** @param {string} slug */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
