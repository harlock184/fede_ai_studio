import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

/**
 * Envoltura de sección con spacing vertical estándar del sitio.
 * @param {{ id?: string, className?: string, containerClassName?: string, children: React.ReactNode }} props
 */
export function Section({ id, className, containerClassName, children }) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Encabezado de sección: etiqueta pequeña + título + descripción opcional. */
export function SectionHeading({ eyebrow, title, description, className }) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <span className="label-mono text-primary">{eyebrow}</span>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
