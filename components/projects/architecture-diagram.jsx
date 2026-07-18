import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* Acento rotativo por capa (patrón Stitch: cada capa con su tono). */
const LAYER_TONES = [
  { text: "text-primary", tile: "bg-primary/10 text-primary ring-primary/20" },
  { text: "text-secondary", tile: "bg-secondary/10 text-secondary ring-secondary/20" },
  { text: "text-tertiary", tile: "bg-tertiary/10 text-tertiary ring-tertiary/20" },
];

/**
 * Diagrama de arquitectura: capas apiladas (cards) con sus componentes.
 * Recibe `architecture.layers` de un proyecto (data/projects.js).
 * @param {{ architecture?: { layers: { label: string, items: string[] }[] } }} props
 */
export function ArchitectureDiagram({ architecture }) {
  if (!architecture?.layers?.length) return null;

  return (
    <div className="flex flex-col items-stretch">
      {architecture.layers.map((layer, i) => {
        const tone = LAYER_TONES[i % LAYER_TONES.length];
        const isLast = i === architecture.layers.length - 1;

        return (
          <div key={layer.label} className="flex flex-col items-stretch">
            <div className="metallic-sheen w-full rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "label-mono grid size-8 shrink-0 place-items-center rounded-lg ring-1",
                    tone.tile
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={cn("label-mono", tone.text)}>{layer.label}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {!isLast ? (
              <div className="flex justify-center py-2" aria-hidden="true">
                <ChevronDown className="size-5 text-muted-foreground" />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
