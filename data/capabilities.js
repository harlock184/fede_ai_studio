import { Bot, Workflow, MonitorSmartphone, Network } from "lucide-react";

/**
 * Capacidades de ingeniería del studio.
 * Se usan en la home (sección Capacidades) y en /services.
 *
 * Los `items` son el desglose explícito de cada descripción — no son promesas
 * adicionales, sino los componentes que la propia capacidad enumera.
 *
 * @typedef {Object} Capability
 * @property {string} slug
 * @property {string} title
 * @property {string} description
 * @property {import('lucide-react').LucideIcon} icon
 * @property {string[]} items
 */

/** @type {Capability[]} */
export const capabilities = [
  {
    slug: "sistemas-con-ia",
    title: "Sistemas con Inteligencia Artificial",
    description:
      "Agentes, asistentes, RAG y flujos inteligentes integrados a operaciones reales.",
    icon: Bot,
    items: [
      "Agentes y asistentes",
      "Recuperación aumentada (RAG)",
      "Flujos inteligentes",
      "Integración a operaciones existentes",
    ],
  },
  {
    slug: "automatizacion-empresarial",
    title: "Automatización empresarial",
    description:
      "Procesos conectados, reducción de trabajo manual y herramientas internas que ahorran tiempo.",
    icon: Workflow,
    items: [
      "Procesos conectados",
      "Reducción de trabajo manual",
      "Herramientas internas",
    ],
  },
  {
    slug: "plataformas-web-y-moviles",
    title: "Plataformas web y móviles",
    description:
      "Productos SaaS, paneles operativos, aplicaciones móviles y sistemas administrativos.",
    icon: MonitorSmartphone,
    items: [
      "Productos SaaS",
      "Paneles operativos",
      "Aplicaciones móviles",
      "Sistemas administrativos",
    ],
  },
  {
    slug: "integraciones-y-arquitectura",
    title: "Integraciones y arquitectura",
    description:
      "APIs, pagos, autenticación, datos, servicios externos y modernización de sistemas.",
    icon: Network,
    items: [
      "APIs",
      "Pagos y autenticación",
      "Datos y servicios externos",
      "Modernización de sistemas",
    ],
  },
];

/** @param {string} slug */
export function getCapabilityBySlug(slug) {
  return capabilities.find((c) => c.slug === slug);
}
