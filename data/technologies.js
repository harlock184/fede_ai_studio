/**
 * Stack tecnológico del studio, agrupado por categoría.
 * Se usa en components/home/technologies.jsx.
 * @typedef {Object} TechGroup
 * @property {string} category
 * @property {string[]} items
 */

/** @type {TechGroup[]} */
export const technologies = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "React Native", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Zod", "REST APIs"],
  },
  {
    category: "IA",
    items: ["LLMs", "RAG", "Orquestación de agentes", "Embeddings"],
  },
  {
    category: "Infraestructura",
    items: ["Supabase", "Vercel", "Google Cloud", "Stripe", "Expo / EAS"],
  },
];
