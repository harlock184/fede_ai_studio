import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NodeMotif } from "@/components/ui/node-motif";

/**
 * Tarjeta de proyecto para grids (home y /projects).
 * Look Stitch: superficie `bg-card` con brillo metálico, portada con placeholder
 * de gradiente firma + nombre, chip de status mono arriba y chips de stack.
 * @param {{ project: import('@/data/projects').Project, className?: string }} props
 */
export function ProjectCard({ project, className }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "metallic-sheen group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60",
        className
      )}
    >
      {/* Portada: placeholder con motivo de nodos + gradiente firma sutil + nombre */}
      <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-muted">
        <div className="absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-70">
          <NodeMotif />
        </div>
        <div className="absolute inset-0 bg-gradient-signature opacity-15 transition-opacity duration-500 group-hover:opacity-25" />
        <div className="absolute inset-0 grid place-items-center p-6">
          <span className="text-center font-display text-2xl font-semibold text-foreground/70 transition-colors group-hover:text-foreground">
            {project.name}
          </span>
        </div>

        {/* Chip de status (label-mono) */}
        <span className="label-mono absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-muted-foreground backdrop-blur">
          <span className="size-1.5 shrink-0 rounded-full bg-secondary" />
          {project.status}
        </span>
      </div>

      {/* Cuerpo */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {project.name}
          </h3>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{project.tagline}</p>

        {/* Chips de stack */}
        <div className="mt-4 flex flex-wrap gap-2">
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
      </div>
    </Link>
  );
}
