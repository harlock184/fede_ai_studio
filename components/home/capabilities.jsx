import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

// Tonos de acento que rotan por card (azul / turquesa / coral).
const TILE_TONES = [
  "border-primary/20 bg-primary/10 text-primary",
  "border-secondary/20 bg-secondary/10 text-secondary",
  "border-tertiary/20 bg-tertiary/10 text-tertiary",
];

export function Capabilities() {
  return (
    <Section id="capabilities">
      <div className="mb-14 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">¿Por qué FEDE AI STUDIO?</h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={service.slug}
              className="metallic-sheen group flex flex-col rounded-xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={cn(
                  "grid size-12 place-items-center rounded-lg border",
                  TILE_TONES[i % TILE_TONES.length]
                )}
              >
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.summary}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/services"
          className="label-mono inline-flex items-center gap-2 text-primary transition-colors hover:text-secondary"
        >
          Ver todos los servicios
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </Section>
  );
}
