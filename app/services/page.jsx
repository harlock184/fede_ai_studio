import Link from "next/link";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { capabilities } from "@/data/capabilities";

export const metadata = {
  title: "Capacidades",
  description:
    "Capacidades de ingeniería de FEDE AI STUDIO: sistemas con Inteligencia Artificial, automatización empresarial, plataformas web y móviles, e integraciones y arquitectura.",
};

const TILE_TONES = [
  "border-primary/20 bg-primary/10 text-primary",
  "border-secondary/20 bg-secondary/10 text-secondary",
  "border-tertiary/20 bg-tertiary/10 text-tertiary",
  "border-primary/20 bg-primary/10 text-primary",
];

const CHECK_TONES = [
  "text-primary",
  "text-secondary",
  "text-tertiary",
  "text-primary",
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero de sección */}
      <section className="relative overflow-hidden">
        <div className="deep-space-glow -right-40 -top-40" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
        <Container className="relative z-10 py-24 sm:py-32">
          <Reveal>
            <SectionHeading
              className="max-w-3xl"
              eyebrow="Capacidades"
              title="Capacidades de ingeniería"
              description="Diseñamos sistemas completos, desde la arquitectura hasta la implementación."
            />
          </Reveal>
        </Container>
      </section>

      <Container className="pb-28 sm:pb-36">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {capabilities.map((capability, i) => {
              const Icon = capability.icon;
              return (
                <div
                  key={capability.slug}
                  className="metallic-sheen flex flex-col rounded-xl border border-border bg-card p-8"
                >
                  <div
                    className={cn(
                      "grid size-12 place-items-center rounded-lg border",
                      TILE_TONES[i % TILE_TONES.length]
                    )}
                  >
                    <Icon className="size-6" />
                  </div>

                  <h2 className="mt-6 font-display text-xl font-semibold leading-snug">
                    {capability.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>

                  <ul className="mt-7 space-y-3 border-t border-border pt-6">
                    {capability.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check
                          className={cn(
                            "mt-0.5 size-4 shrink-0",
                            CHECK_TONES[i % CHECK_TONES.length]
                          )}
                        />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="metallic-sheen relative mt-16 overflow-hidden rounded-xl border border-border bg-card p-10 text-center sm:p-14">
            <div className="deep-space-glow -right-40 -top-40" aria-hidden />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-balance text-2xl font-semibold sm:text-3xl">
                ¿Tu caso no encaja exactamente en una capacidad?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Cuéntanos qué proceso quieres mejorar o qué producto quieres
                desarrollar. Te decimos con honestidad si somos el equipo indicado.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: "default", size: "lg" })}
                >
                  Hablar sobre mi proyecto
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
