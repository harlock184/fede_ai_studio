import { Gauge, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";

/**
 * Contenido de identidad del studio: principio central, creencias y manifiesto.
 * Se usa en la home (Philosophy, Beliefs, Manifesto) y en /about (Filosofía).
 */

/** Idea central de la marca. */
export const corePrinciple = {
  eyebrow: "Nuestra filosofía",
  title: "La IA no reemplaza a la ingeniería. La potencia.",
  body: "En FEDE AI STUDIO utilizamos Inteligencia Artificial como parte de sistemas bien diseñados. No agregamos IA por moda. Primero entendemos el problema, después diseñamos la arquitectura y finalmente elegimos las herramientas adecuadas.",
};

/**
 * Los tres principios que sostienen el principio central.
 * @type {{ title: string, description: string }[]}
 */
export const principles = [
  {
    title: "El problema antes que la tecnología",
    description:
      "No comenzamos preguntando qué modelo usar. Comenzamos entendiendo qué necesita resolver el negocio.",
  },
  {
    title: "Arquitectura antes que improvisación",
    description:
      "Construimos sistemas mantenibles, conectados y preparados para crecer.",
  },
  {
    title: "Automatización con propósito",
    description:
      "Automatizamos tareas para reducir fricción, ahorrar tiempo y mejorar decisiones.",
  },
];

/**
 * Declaraciones de la sección "Lo que creemos".
 * Son protagonistas tipográficas: sin íconos ni decoración.
 * @type {string[]}
 */
export const beliefs = [
  "La tecnología debe simplificar, no complicar.",
  "El software debe resolver problemas reales.",
  "La arquitectura importa más que la moda.",
  "Automatizar significa liberar tiempo para crear valor.",
  "La Inteligencia Artificial debe integrarse con propósito.",
  "Construimos sistemas preparados para crecer.",
];

/**
 * Valores que definen cómo trabaja el studio. Se usan en /about (Filosofía).
 * @type {{ icon: import('lucide-react').LucideIcon, tone: string, title: string, description: string }[]}
 */
export const values = [
  {
    icon: Gauge,
    tone: "primary",
    title: "Ingeniería, no improvisación",
    description:
      "Escribimos código pensado para mantenerse y crecer. Nada de prototipos frágiles disfrazados de producto.",
  },
  {
    icon: ShieldCheck,
    tone: "secondary",
    title: "Honestidad técnica",
    description:
      "Te decimos qué se puede, qué no, y cuánto cuesta de verdad. Sin humo ni promesas infladas.",
  },
  {
    icon: TrendingUp,
    tone: "tertiary",
    title: "Foco en el negocio",
    description:
      "La tecnología es un medio. Construimos lo que mueve tu negocio, no lo que se ve bonito en un pitch.",
  },
  {
    icon: Sparkles,
    tone: "primary",
    title: "IA con criterio",
    description:
      "Usamos IA donde genera valor real, con las barreras de seguridad correctas — no porque esté de moda.",
  },
];

/**
 * Manifiesto editorial. Cada entrada es un párrafo.
 * @type {string[]}
 */
export const manifesto = [
  "En FEDE AI STUDIO creemos que la tecnología debe resolver problemas, no crearlos.",
  "La Inteligencia Artificial no reemplaza a la ingeniería; la potencia.",
  "Diseñamos sistemas pensando en el largo plazo, priorizando arquitecturas sólidas, automatización inteligente y software que aporte valor real.",
  "No perseguimos tendencias. Construimos soluciones que las empresas puedan mantener, escalar y aprovechar durante años.",
  "Cada proyecto es una oportunidad para simplificar procesos, mejorar decisiones y liberar tiempo para que las personas se concentren en lo que realmente importa.",
];
