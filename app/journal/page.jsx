import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Journal",
  description:
    "Engineering Journal de FEDE AI STUDIO: decisiones de arquitectura, aprendizajes técnicos y casos reales de desarrollo.",
};

/**
 * Journal — estado inicial.
 *
 * La ruta se conserva, pero todavía no hay entradas publicadas. En lugar de
 * mostrar contenido de relleno, se muestra un estado vacío sobrio.
 * Al publicar la primera entrada, sustituir esta sección por el listado
 * (ruta de crecimiento hacia MDX en docs/content.md → Fase 4).
 */
export default function JournalPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="deep-space-glow -right-40 -top-40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />

      <Container className="relative z-10 py-28 sm:py-40">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label-mono text-secondary">Journal</span>

          <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
            Engineering Journal
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Próximamente publicaremos decisiones de arquitectura, aprendizajes
            técnicos y casos reales de desarrollo.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/projects"
              className={buttonVariants({ variant: "outline" })}
            >
              Ver sistemas construidos
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "default" })}>
              Hablar sobre mi proyecto
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
