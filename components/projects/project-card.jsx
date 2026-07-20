import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NodeMotif } from "@/components/ui/node-motif";

/**
 * Tarjeta de sistema para grids (home y /projects).
 * Es un <article> (no un <Link> envolvente) para poder ofrecer dos acciones
 * explícitas sin anidar enlaces, que rompería la accesibilidad.
 * La portada es un placeholder sobrio hasta tener capturas reales.
 * @param {{ project: import('@/data/projects').Project, className?: string }} props
 */
export function ProjectCard({ project, className }) {
  const href = `/projects/${project.slug}`;

  return (
    <article
      className={cn(
        "metallic-sheen group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40",
        className
      )}
    >
      {/* Portada: placeholder sobrio con motivo técnico */}
      <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-muted">
        <div className="absolute inset-0 opacity-50" aria-hidden>
          <NodeMotif />
        </div>
        <div className="absolute inset-0 grid place-items-center p-6">
          <span className="text-center font-display text-2xl font-semibold text-foreground/70">
            {project.name}
          </span>
        </div>

        {project.label ? (
          <span className="label-mono absolute left-3 top-3 rounded-full border border-border bg-background/80 px-3 py-1 text-muted-foreground backdrop-blur">
            {project.label}
          </span>
        ) : null}
      </div>

      {/* Cuerpo */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold">
            <Link href={href} className="transition-colors hover:text-primary">
              {project.name}
            </Link>
          </h3>
          <span className="label-mono shrink-0 pt-1 text-muted-foreground/80">
            {project.status}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        {/* Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 ? (
            <span className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              +{project.stack.length - 4}
            </span>
          ) : null}
        </div>

        {/* Acciones */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4">
          <Link
            href={href}
            className="label-mono inline-flex items-center gap-1.5 text-primary transition-colors hover:text-secondary"
          >
            Ver caso de estudio
            <ArrowRight className="size-3.5" />
          </Link>
          <Link
            href={`${href}#arquitectura`}
            className="label-mono text-muted-foreground transition-colors hover:text-foreground"
          >
            Ver arquitectura
          </Link>
        </div>
      </div>
    </article>
  );
}
