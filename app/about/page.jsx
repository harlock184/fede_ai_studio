import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { corePrinciple, values } from "@/data/philosophy";

export const metadata = {
  title: "Filosofía",
  description:
    "La filosofía de FEDE AI STUDIO: la Inteligencia Artificial no reemplaza a la ingeniería, la potencia. Primero el problema, después la arquitectura, al final las herramientas.",
};

const TILE_TONES = {
  primary: "border-primary/20 bg-primary/10 text-primary",
  secondary: "border-secondary/20 bg-secondary/10 text-secondary",
  tertiary: "border-tertiary/20 bg-tertiary/10 text-tertiary",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero — statement de misión */}
      <section className="relative overflow-hidden">
        <div className="deep-space-glow -right-40 -top-40" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />

        <Container className="relative z-10 py-24 sm:py-32">
          <Reveal className="max-w-3xl">
            <Badge tone="secondary">{corePrinciple.eyebrow}</Badge>

            <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {corePrinciple.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {corePrinciple.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Principios Fundamentales */}
      <Section className="border-t border-border/60">
        <div className="flex items-center gap-4">
          <span className="h-1 w-16 rounded-full bg-primary" />
          <span className="label-mono text-muted-foreground">Cómo pensamos</span>
        </div>
        <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
          Principios fundamentales
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="metallic-sheen rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div
                  className={cn(
                    "grid size-12 place-items-center rounded-lg border",
                    TILE_TONES[value.tone]
                  )}
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Filosofía Técnica */}
      <Section className="border-y border-border/60">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="label-mono text-primary">Sistemas, no demos</span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Filosofía técnica
            </h2>
          </div>

          <div className="mt-10 space-y-6 text-lg text-muted-foreground">
            <p>
              Nacimos de una idea simple: la mayoría del software que se contrata muere
              en el camino — se vuelve imposible de mantener, no escala, o nunca resuelve
              el problema real. Nosotros construimos distinto.
            </p>
            <p>
              Combinamos experiencia en desarrollo full-stack, apps móviles e integración
              de IA para entregar productos completos: bien diseñados, bien construidos y
              listos para operar. De la arquitectura al despliegue.
            </p>
          </div>

          <blockquote className="mt-10 border-l-2 border-primary/40 pl-6 font-display text-xl font-medium italic text-foreground">
            La ventaja real en IA no está en el modelo, sino en la ingeniería que lo
            rodea, lo alimenta y lo mantiene bajo control.
          </blockquote>
        </div>
      </Section>

      {/* CTA final */}
      <Section>
        <div className="metallic-sheen relative overflow-hidden rounded-xl border border-border bg-card p-10 text-center sm:p-16">
          <div
            className="deep-space-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-2xl space-y-6">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Construyamos un sistema que genere valor real.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Cuéntanos qué proceso quieres mejorar, qué producto quieres
              desarrollar o qué operación deseas automatizar.
            </p>
            <div className="flex justify-center pt-2">
              <Link
                href="/contact"
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                Hablar sobre mi proyecto
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
