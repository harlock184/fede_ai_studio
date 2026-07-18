import Link from "next/link";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";

export const metadata = {
  title: "Servicios",
  description:
    "Nuestras capacidades de ingeniería: producto digital a la medida, sistemas de IA aplicada, plataformas SaaS, apps móviles, automatización de procesos y consultoría técnica.",
};

/**
 * Tonos rotados para el tile de ícono y los checks de cada tarjeta.
 * Clases estáticas (Tailwind no puede compilar clases dinámicas).
 */
const TONES = [
  { tile: "border-primary/20 bg-primary/10 text-primary", check: "text-primary" },
  { tile: "border-secondary/20 bg-secondary/10 text-secondary", check: "text-secondary" },
  { tile: "border-tertiary/20 bg-tertiary/10 text-tertiary", check: "text-tertiary" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero de sección */}
      <section className="relative overflow-hidden">
        <div className="deep-space-glow -right-40 -top-40" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
        <Container className="relative z-10 py-20 sm:py-28">
          <Reveal>
            <SectionHeading
              className="mx-auto max-w-3xl text-center"
              eyebrow="Capacidades"
              title="Nuestras Capacidades de Ingeniería"
              description="Soluciones de ingeniería pensadas para escalar. Diseñamos y construimos sistemas inteligentes que mueven la operación y sostienen el crecimiento del negocio."
            />
          </Reveal>
        </Container>
      </section>

      <Container className="pb-24">
        {/* Tarjetas de servicio */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const tone = TONES[i % TONES.length];
            return (
              <div
                key={service.slug}
                className="metallic-sheen flex flex-col rounded-xl border border-border bg-card p-6"
              >
                <div
                  className={cn(
                    "grid size-12 place-items-center rounded-lg border",
                    tone.tile
                  )}
                >
                  <Icon className="size-6" />
                </div>

                <h2 className="mt-6 font-display text-xl font-semibold">
                  {service.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{service.description}</p>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="label-mono text-muted-foreground">Entregables</p>
                  <ul className="mt-4 space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check
                          className={cn("mt-0.5 size-4 shrink-0", tone.check)}
                        />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloque CTA */}
        <div className="metallic-sheen relative mt-16 overflow-hidden rounded-xl border border-border bg-card p-10 text-center sm:p-14">
          <div
            aria-hidden
            className="deep-space-glow pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-4">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              ¿No ves exactamente lo que necesitas?
            </h2>
            <p className="text-muted-foreground">
              Cada proyecto es distinto. Cuéntanos tu caso y te decimos con honestidad
              si somos el equipo indicado para construirlo.
            </p>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "mt-2")}
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
