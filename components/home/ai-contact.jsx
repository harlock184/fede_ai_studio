import Link from "next/link";
import { Bot, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";

/**
 * Teaser del asistente de IA. En la v1 es un adelanto (sin chat funcional).
 * Se vuelve funcional en la Fase 3 (ver docs/roadmap.md).
 */
export function AiContact() {
  return (
    <Section id="ai-assistant" className="border-t border-border/60">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gradient-signature opacity-20 blur-3xl" aria-hidden />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Próximamente
          </span>

          <div className="mt-6 flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-xl bg-gradient-signature/10 text-primary ring-1 ring-inset ring-primary/20">
              <Bot className="size-6" />
            </div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Asistente del studio</h2>
          </div>

          <p className="mt-4 text-lg text-muted-foreground">
            Estamos construyendo un asistente de IA que responderá tus dudas sobre
            servicios, tiempos y alcance — y te ayudará a definir tu proyecto antes
            de siquiera agendar una llamada. Mientras tanto, escríbenos directamente.
          </p>

          <div className="mt-8">
            <Link href="/contact" className={buttonVariants({ variant: "gradient" })}>
              Cuéntanos tu idea
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
