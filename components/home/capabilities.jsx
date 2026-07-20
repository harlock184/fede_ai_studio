import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { capabilities } from "@/data/capabilities";
import { cn } from "@/lib/utils";

// Tonos de acento que rotan por tarjeta.
const TILE_TONES = [
  "border-primary/20 bg-primary/10 text-primary",
  "border-secondary/20 bg-secondary/10 text-secondary",
  "border-tertiary/20 bg-tertiary/10 text-tertiary",
  "border-primary/20 bg-primary/10 text-primary",
];

export function Capabilities() {
  return (
    <Section id="capacidades" className="border-t border-border/60 py-28 sm:py-36">
      <Reveal>
        <SectionHeading
          eyebrow="Capacidades"
          title="Capacidades de ingeniería"
          description="Diseñamos sistemas completos, desde la arquitectura hasta la implementación."
        />
      </Reveal>

      <Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {capabilities.map((capability, i) => {
            const Icon = capability.icon;
            return (
              <div
                key={capability.slug}
                className="metallic-sheen flex flex-col rounded-xl border border-border bg-card p-7"
              >
                <div
                  className={cn(
                    "grid size-12 place-items-center rounded-lg border",
                    TILE_TONES[i % TILE_TONES.length]
                  )}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug">
                  {capability.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {capability.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-12">
        <Link
          href="/services"
          className="label-mono inline-flex items-center gap-2 text-primary transition-colors hover:text-secondary"
        >
          Ver todas las capacidades
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </Section>
  );
}
