/**
 * Sistemas construidos por el studio.
 * - `featured: true` → aparece en la home.
 * - Cada sistema genera la ruta /projects/[slug].
 * - `label` es la categoría corta que se muestra como chip en la tarjeta.
 *
 * NOTA: los textos de `name`, `label` y `tagline` son los definitivos.
 * Los campos `year`, `role`, `status`, `stack` y `architecture` de ARK y TBO
 * son andamiaje provisional derivado de la descripción — CONFIRMAR con datos
 * reales antes de publicar. No se registran métricas ni resultados todavía.
 *
 * @typedef {Object} ProjectLayer
 * @property {string} label
 * @property {string[]} items
 *
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} name
 * @property {string} label
 * @property {string} tagline
 * @property {string} description
 * @property {string} year
 * @property {string} role
 * @property {boolean} featured
 * @property {string} status
 * @property {string} [url]
 * @property {string[]} stack
 * @property {string[]} [highlights]
 * @property {{ layers: ProjectLayer[] }} [architecture]
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: "zayra",
    name: "Zayra",
    label: "Fitness SaaS",
    tagline:
      "Plataforma para entrenadores y alumnos con rutinas, evaluaciones, pagos, calendario, chat y automatización de procesos.",
    description:
      "Plataforma para entrenadores y alumnos con rutinas, evaluaciones, pagos, calendario, chat y automatización de procesos. Los instructores diseñan y supervisan el entrenamiento desde web; los alumnos lo consumen desde una app móvil.",
    year: "2026",
    role: "Diseño de producto + ingeniería full-stack",
    featured: true,
    status: "En producción",
    stack: ["Next.js", "React Native", "Expo", "Express", "Supabase", "Stripe", "Cloud Run"],
    highlights: [
      "Cuatro roles (admin, instructor, nutriólogo, alumno) con control de acceso",
      "App móvil con reproductor de entrenamiento guiado",
      "Pagos y reconciliación con Stripe Connect",
      "Expediente del alumno como bitácora de eventos",
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
    slug: "ark-construction",
    name: "ARK Construction",
    label: "Construction Software",
    tagline:
      "Sistema para digitalizar operaciones de construcción, centralizar información y dar seguimiento a proyectos.",
    description:
      "Sistema para digitalizar operaciones de construcción, centralizar información y dar seguimiento a proyectos. Sustituye el registro disperso por una fuente única de información operativa.",
    year: "2026",
    role: "Ingeniería full-stack",
    featured: true,
    status: "Caso de estudio",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    architecture: {
      layers: [
        { label: "Cliente", items: ["Panel de administración (Next.js)"] },
        { label: "API", items: ["Node.js", "Control de acceso por rol"] },
        { label: "Datos", items: ["PostgreSQL"] },
      ],
    },
  },
  {
    slug: "tbo-hotel-integration",
    name: "TBO Hotel Integration",
    label: "Travel Technology",
    tagline:
      "Integración de búsqueda, disponibilidad, reservas y cancelaciones mediante una API hotelera empresarial.",
    description:
      "Integración de búsqueda, disponibilidad, reservas y cancelaciones mediante una API hotelera empresarial, expuesta a la plataforma con un modelo de datos propio y manejo de errores del proveedor.",
    year: "2026",
    role: "Integración e ingeniería backend",
    featured: true,
    status: "Caso de estudio",
    stack: ["Next.js", "Node.js", "REST APIs"],
    architecture: {
      layers: [
        { label: "Cliente", items: ["Buscador y flujo de reserva (Next.js)"] },
        { label: "Capa de integración", items: ["Node.js", "Normalización de respuestas", "Manejo de errores"] },
        { label: "Servicios externos", items: ["TBO Hotel API"] },
      ],
    },
  },
];

/** Sistemas marcados como destacados (para la home). */
export const featuredProjects = projects.filter((p) => p.featured);

/** @param {string} slug */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
