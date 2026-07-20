import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";

/**
 * Asistente del studio. En esta iteración es un adelanto sin chat funcional:
 * el campo está deshabilitado a propósito para no prometer una capacidad
 * que todavía no existe (ver docs/roadmap.md, Fase 3).
 */
export function AiContact() {
  return (
    <Section id="asistente" className="border-t border-border/60 py-28 sm:py-36">
      <Reveal>
        <div className="metallic-sheen relative overflow-hidden rounded-xl border border-border bg-card p-8 sm:p-12">
          <div className="deep-space-glow -right-40 -top-40" aria-hidden />

          <div className="relative z-10 max-w-2xl">
            <Badge tone="secondary">Próximamente</Badge>

            <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">
              Describe el problema que quieres resolver
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Nuestro asistente puede ayudarte a organizar los requerimientos de tu
              proyecto, identificar componentes técnicos y preparar un resumen antes
              de hablar con Federico.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="assistant-prompt" className="sr-only">
                Describe tu proyecto
              </label>
              <input
                id="assistant-prompt"
                type="text"
                disabled
                placeholder="Ejemplo: quiero automatizar el seguimiento de clientes de mi empresa..."
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-70 sm:flex-1"
              />
              <Link
                href="/contact"
                className={buttonVariants({ variant: "default" })}
              >
                Analizar proyecto
              </Link>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Este asistente no genera cotizaciones definitivas. Su objetivo es
              ayudarte a definir mejor tu proyecto.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
