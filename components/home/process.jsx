import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const STEPS = [
  {
    icon: Search,
    title: "Descubrimiento",
    description:
      "Entendemos el problema, el negocio y a los usuarios. Definimos alcance y criterios de éxito.",
  },
  {
    icon: PenTool,
    title: "Diseño",
    description:
      "Arquitectura, modelo de datos y experiencia. Decidimos el stack correcto para el caso.",
  },
  {
    icon: Code2,
    title: "Construcción",
    description:
      "Implementación iterativa con entregas visibles. Código mantenible y documentado.",
  },
  {
    icon: Rocket,
    title: "Lanzamiento",
    description:
      "Despliegue, monitoreo y handoff. Acompañamiento post-lanzamiento y evolución.",
  },
];

export function Process() {
  return (
    <Section id="process" className="border-t border-border/60">
      <SectionHeading
        eyebrow="Cómo trabajamos"
        title="Un proceso claro, sin sorpresas"
        description="Cuatro etapas para llevar tu idea de cero a producción con visibilidad en cada paso."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="relative rounded-xl border border-border bg-card p-6">
              <span className="font-display text-sm font-semibold text-muted-foreground/60">
                0{i + 1}
              </span>
              <div className="mt-4 grid size-11 place-items-center rounded-lg bg-gradient-signature/10 text-primary ring-1 ring-inset ring-primary/20">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
