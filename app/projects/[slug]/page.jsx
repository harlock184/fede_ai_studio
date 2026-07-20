import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Cpu,
  ExternalLink,
  Lightbulb,
  Target,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { projects, getProjectBySlug } from "@/data/projects";

/** Pre-genera una página por proyecto en build. */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: project.name,
    description: project.tagline,
  };
}

/* Tiles de ícono con acento rotado (patrón Stitch). */
const TILE_TONES = {
  primary: "bg-primary/10 text-primary ring-primary/20",
  secondary: "bg-secondary/10 text-secondary ring-secondary/20",
  tertiary: "bg-tertiary/10 text-tertiary ring-tertiary/20",
};

const OVERLINE_TONES = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

function SectionHeading({ overline, title, icon: Icon, tone = "primary" }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={cn(
          "grid size-11 shrink-0 -rotate-3 place-items-center rounded-xl ring-1",
          TILE_TONES[tone]
        )}
      >
        <Icon className="size-5" />
      </span>
      <div>
        <span className={cn("label-mono", OVERLINE_TONES[tone])}>{overline}</span>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
      </div>
    </div>
  );
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="deep-space-glow left-1/2 -top-88 -translate-x-1/2" />
        <div className="pointer-events-none absolute inset-0 bg-grid" />

        <Container className="relative z-10 max-w-4xl py-16 sm:py-24">
          <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Volver a proyectos
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <Badge tone="secondary">{project.label ?? "Caso de estudio"}</Badge>
            <Badge tone="primary" dot>
              {project.status}
            </Badge>
            <span className="label-mono rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
              {project.year}
            </span>
            <span className="label-mono rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
              {project.role}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {project.tagline}
          </p>

          {project.url ? (
            <div className="mt-8">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "outline" })}
              >
                Visitar
                <ExternalLink />
              </a>
            </div>
          ) : null}
          </Reveal>
        </Container>
      </section>

      {/* Contenido */}
      <Container className="max-w-4xl">
        <div className="space-y-20 py-16 sm:space-y-28 sm:py-24">
          {/* 01 — El proyecto */}
          <section>
            <SectionHeading
              overline="01 — Contexto"
              title="El proyecto"
              icon={Target}
              tone="primary"
            />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </section>

          {/* 02 — Lo más relevante */}
          {project.highlights?.length ? (
            <section>
              <SectionHeading
                overline="02 — Resultados"
                title="Lo más relevante"
                icon={Lightbulb}
                tone="secondary"
              />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="metallic-sheen flex items-start gap-3 rounded-xl border border-border bg-card p-5"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-secondary/10 text-secondary ring-1 ring-secondary/20">
                      <Check className="size-4" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* 03 — Arquitectura del sistema */}
          {project.architecture ? (
            <section id="arquitectura" className="scroll-mt-24">
              <SectionHeading
                overline="03 — Ingeniería"
                title="Arquitectura del sistema"
                icon={Workflow}
                tone="primary"
              />
              <div className="mt-8">
                <ArchitectureDiagram architecture={project.architecture} />
              </div>
            </section>
          ) : null}

          {/* 04 — Tecnologías core */}
          {project.stack?.length ? (
            <section>
              <SectionHeading
                overline="04 — Stack"
                title="Tecnologías core"
                icon={Cpu}
                tone="tertiary"
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          ) : null}

          {/* CTA final */}
          <section className="metallic-sheen flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-10 text-center sm:p-14">
            <span className="label-mono text-secondary">
              ¿Siguiente proyecto?
            </span>
            <h2 className="max-w-xl text-2xl font-semibold sm:text-3xl">
              ¿Quieres algo así para tu negocio?
            </h2>
            <p className="max-w-md text-muted-foreground">
              Construyamos tu producto con la misma ingeniería. Cuéntanos qué
              necesitas y te proponemos un plan.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Iniciar un proyecto
              <ArrowRight />
            </Link>
          </section>
        </div>
      </Container>
    </article>
  );
}
