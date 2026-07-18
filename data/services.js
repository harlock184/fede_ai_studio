import { Code2, Bot, Boxes, Workflow, LineChart, Smartphone } from "lucide-react";

/**
 * Servicios del studio. Se usan en la home (capabilities) y en /services.
 * Reemplaza los textos placeholder por la oferta real del studio.
 * @typedef {Object} Service
 * @property {string} slug
 * @property {string} title
 * @property {string} summary
 * @property {string} description
 * @property {import('lucide-react').LucideIcon} icon
 * @property {string[]} deliverables
 */

/** @type {Service[]} */
export const services = [
  {
    slug: "producto-a-medida",
    title: "Producto digital a la medida",
    summary: "Del concepto al producto en producción, con ingeniería sólida.",
    description:
      "Diseñamos y construimos productos web completos: arquitectura, frontend, backend y despliegue. Código mantenible, no un prototipo desechable.",
    icon: Code2,
    deliverables: [
      "Descubrimiento y definición de alcance",
      "Diseño de arquitectura y modelo de datos",
      "Implementación full-stack",
      "Despliegue y handoff documentado",
    ],
  },
  {
    slug: "sistemas-de-ia",
    title: "Sistemas de IA aplicada",
    summary: "Asistentes, automatizaciones y flujos con LLMs integrados a tu negocio.",
    description:
      "Integramos modelos de lenguaje donde generan valor real: asistentes, extracción de información, clasificación y automatización de procesos, con las barreras de seguridad correctas.",
    icon: Bot,
    deliverables: [
      "Diseño del caso de uso y evaluación",
      "Integración de LLMs y orquestación",
      "Guardrails y control de costos",
      "Métricas de calidad y monitoreo",
    ],
  },
  {
    slug: "plataformas-saas",
    title: "Plataformas y SaaS",
    summary: "Multi-rol, pagos, paneles y todo lo que exige un producto que escala.",
    description:
      "Construimos plataformas con múltiples roles, control de acceso, pasarela de pagos y paneles de administración. Infraestructura pensada para crecer.",
    icon: Boxes,
    deliverables: [
      "Autenticación y control de acceso por rol",
      "Integración de pagos (Stripe)",
      "Paneles de administración",
      "Infraestructura lista para escalar",
    ],
  },
  {
    slug: "apps-moviles",
    title: "Apps móviles",
    summary: "Aplicaciones nativas multiplataforma con React Native + Expo.",
    description:
      "Apps para iOS y Android desde una sola base de código, con publicación en las tiendas y actualizaciones over-the-air.",
    icon: Smartphone,
    deliverables: [
      "Desarrollo con React Native + Expo",
      "Publicación en App Store y Google Play",
      "Actualizaciones OTA",
      "Integración con tu backend",
    ],
  },
  {
    slug: "automatizacion",
    title: "Automatización de procesos",
    summary: "Menos trabajo manual: integramos tus herramientas y flujos.",
    description:
      "Conectamos tus sistemas y eliminamos tareas repetitivas mediante integraciones, webhooks y jobs programados.",
    icon: Workflow,
    deliverables: [
      "Mapeo de procesos y puntos de fricción",
      "Integraciones y webhooks",
      "Jobs programados y monitoreo",
      "Documentación operativa",
    ],
  },
  {
    slug: "consultoria",
    title: "Consultoría técnica",
    summary: "Segunda opinión sobre arquitectura, stack y decisiones difíciles.",
    description:
      "Acompañamos a equipos y fundadores en decisiones de arquitectura, elección de stack y revisión de código, con criterio de ingeniería.",
    icon: LineChart,
    deliverables: [
      "Revisión de arquitectura y código",
      "Recomendaciones de stack",
      "Plan de escalabilidad",
      "Roadmap técnico",
    ],
  },
];

/** @param {string} slug */
export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
