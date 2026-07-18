import { ArrowRight, Sparkles } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { NodeMotif } from "@/components/ui/node-motif";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Journal",
  description:
    "Engineering Journal de FEDE AI STUDIO: notas sobre arquitectura, IA aplicada y decisiones técnicas.",
};

/**
 * Entradas del journal (v1: data inline).
 * Ruta de crecimiento hacia MDX en docs/content.md → Fase 4.
 * La primera entrada se renderiza como Featured Deep-Dive.
 * @typedef {{ slug: string, title: string, date: string, summary: string, tags: string[], readingTime: number }} Entry
 * @type {Entry[]}
 */
const ENTRIES = [
  {
    slug: "agentes-llm-escala-empresarial",
    title: "Arquitectura de agentes LLM autónomos para escala empresarial",
    date: "2026-07-14",
    summary:
      "Un análisis a fondo de las estructuras de memoria, la orquestación de herramientas y los mecanismos de fallback determinista necesarios para llevar agentes de IA confiables a producción.",
    tags: ["agentes", "ia"],
    readingTime: 12,
  },
  {
    slug: "futuro-rag-mas-alla-busqueda-vectorial",
    title: "El futuro de RAG: más allá de la búsqueda vectorial simple",
    date: "2026-06-30",
    summary:
      "Exploramos recuperación híbrida, ruteo semántico e integración con grafos de conocimiento para generar respuestas con alta precisión y trazabilidad.",
    tags: ["rag", "ia"],
    readingTime: 8,
  },
  {
    slug: "optimizando-react-dashboards-datos",
    title: "Optimizando React para dashboards de datos empresariales",
    date: "2026-06-18",
    summary:
      "Estrategias para manejar datasets grandes, memoización efectiva y render de visualizaciones WebGL complejas sin perder frames en la interacción.",
    tags: ["performance", "frontend"],
    readingTime: 6,
  },
  {
    slug: "seguridad-apis-microservicios-ia",
    title: "Seguridad de APIs para microservicios impulsados por IA",
    date: "2026-06-05",
    summary:
      "Rate limiting robusto, autenticación por servicio y validación de payloads para proteger endpoints de modelos que son caros de operar.",
    tags: ["seguridad", "apis"],
    readingTime: 5,
  },
  {
    slug: "sistemas-event-driven-pipelines-ia",
    title: "Diseñando sistemas event-driven para pipelines de IA",
    date: "2026-05-22",
    summary:
      "Cómo desacoplar ingesta, inferencia y post-proceso con colas y eventos para lograr pipelines de IA resilientes, observables y fáciles de escalar.",
    tags: ["arquitectura"],
    readingTime: 9,
  },
];

/** Mapea el tag principal a un tono del sistema de diseño. */
const TAG_TONES = {
  arquitectura: "primary",
  rag: "primary",
  apis: "primary",
  ia: "secondary",
  agentes: "secondary",
  performance: "tertiary",
  frontend: "tertiary",
  seguridad: "tertiary",
};

function toneForTag(tag) {
  return TAG_TONES[tag] ?? "muted";
}

function formatDate(iso) {
  const [y, m, d] = iso.split("-");
  const meses = [
    "ene", "feb", "mar", "abr", "may", "jun",
    "jul", "ago", "sep", "oct", "nov", "dic",
  ];
  return `${d} ${meses[Number(m) - 1]} ${y}`;
}

export default function JournalPage() {
  const [featured, ...dispatches] = ENTRIES;

  return (
    <>
      {/* Hero de sección */}
      <section className="relative overflow-hidden">
        <div className="deep-space-glow -right-40 -top-40" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
        <Container className="relative z-10 py-20 text-center sm:py-28">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center">
            <span className="label-mono text-secondary">Journal</span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
              Perspectivas de ingeniería
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Deep dives técnicos, patrones de arquitectura y notas desde la
              frontera de la ingeniería de IA aplicada.
            </p>
          </Reveal>
        </Container>
      </section>

      <div className="space-y-20 pb-24 sm:space-y-28 sm:pb-28">
        {/* Featured Deep-Dive */}
        {featured ? (
          <Container>
            <h2 className="label-mono mb-6 flex items-center gap-2 text-secondary">
              <Sparkles className="size-4" />
              Featured Deep-Dive
            </h2>

            <Reveal>
            <article className="metallic-sheen group relative grid overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/60 md:grid-cols-2">
              {/* Panel de meta con motivo de nodos (reemplaza la imagen del diseño) */}
              <div className="bg-grid relative flex min-h-56 flex-col justify-between gap-8 overflow-hidden border-b border-border p-8 md:border-b-0 md:border-r md:p-10">
                <div className="pointer-events-none absolute inset-0 opacity-60">
                  <NodeMotif />
                </div>
                <Badge tone="secondary" className="relative z-10">
                  Destacado
                </Badge>
                <div className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="label-mono text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                  <span className="label-mono text-muted-foreground">
                    {featured.readingTime} min de lectura
                  </span>
                </div>
              </div>

              {/* Panel de contenido */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <time className="label-mono text-muted-foreground">
                  {formatDate(featured.date)}
                </time>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-muted-foreground">{featured.summary}</p>
                <a
                  href="#"
                  className="label-mono mt-8 inline-flex w-fit items-center gap-2 text-primary transition-colors hover:text-primary/80"
                >
                  Leer análisis
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
            </Reveal>
          </Container>
        ) : null}

        {/* Últimos dispatches */}
        {dispatches.length > 0 ? (
          <Container>
            <h2 className="label-mono mb-6 border-b border-border pb-3 text-muted-foreground">
              Últimos dispatches
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dispatches.map((entry) => (
                <article
                  key={entry.slug}
                  className="metallic-sheen group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Badge tone={toneForTag(entry.tags[0])}>
                      {entry.tags[0]}
                    </Badge>
                    <span className="label-mono text-muted-foreground">
                      {entry.readingTime} min
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary">
                    {entry.title}
                  </h3>
                  <p className="mt-2 grow text-sm text-muted-foreground">
                    {entry.summary}
                  </p>

                  <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
                    <time className="label-mono text-muted-foreground">
                      {formatDate(entry.date)}
                    </time>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        ) : null}

        {/* Suscríbete al log */}
        <Container>
          <div className="metallic-sheen relative overflow-hidden rounded-xl border border-border bg-card p-8 sm:p-10">
            <div className="deep-space-glow -right-40 -top-40" aria-hidden />
            <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-md">
                <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Suscríbete al log
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Recibe un resumen mensual de nuestros mejores escritos
                  técnicos, tear-downs de arquitectura y novedades del studio.
                  Sin relleno.
                </p>
              </div>

              <form className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  aria-label="Correo electrónico"
                  className={cn(
                    "label-mono w-full rounded-md border border-border bg-background px-4 py-2 text-foreground transition-colors sm:w-64",
                    "placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  )}
                />
                <Button type="button" className="whitespace-nowrap">
                  Suscribirme
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
