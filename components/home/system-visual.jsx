import { cn } from "@/lib/utils";

/**
 * Composición técnica del hero: un diagrama de arquitectura operativa
 * (clientes → API → servicios/agentes → datos) con los flujos etiquetados.
 * No es una gráfica decorativa: representa las capas reales de un sistema.
 * Server component, sin dependencias externas.
 */

const LAYERS = [
  {
    label: "Clientes",
    tone: "primary",
    nodes: ["Web", "App móvil", "Panel interno"],
  },
  {
    label: "API",
    tone: "secondary",
    nodes: ["Gateway REST", "Autenticación"],
  },
  {
    label: "Servicios",
    tone: "primary",
    nodes: ["Agente IA", "Workers", "Automatizaciones"],
  },
  {
    label: "Datos",
    tone: "secondary",
    nodes: ["PostgreSQL", "Cola de eventos", "APIs externas"],
  },
];

/** Etiqueta del flujo entre cada par de capas. */
const FLOWS = ["HTTPS", "eventos", "consultas"];

const TONES = {
  primary: "text-primary",
  secondary: "text-secondary",
};

export function SystemVisual() {
  return (
    <div
      className="metallic-sheen relative overflow-hidden rounded-xl border border-border bg-card"
      role="img"
      aria-label="Diagrama de arquitectura: clientes web y móviles conectados a una API, que orquesta agentes de IA, workers y automatizaciones sobre una capa de datos con PostgreSQL, cola de eventos y APIs externas."
    >
      {/* Encabezado tipo panel */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="label-mono text-secondary/80">arquitectura_operativa</span>
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-primary/60" />
          <span className="size-2 rounded-full bg-secondary/60" />
          <span className="size-2 rounded-full bg-muted-foreground/40" />
        </div>
      </div>

      {/* Capas del sistema */}
      <div className="p-5 sm:p-6">
        {LAYERS.map((layer, i) => (
          <div key={layer.label}>
            <div className="rounded-lg border border-border bg-background/40 p-3.5">
              <span className={cn("label-mono", TONES[layer.tone])}>{layer.label}</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {layer.nodes.map((node) => (
                  <span
                    key={node}
                    className="rounded-md border border-border bg-card px-2.5 py-1.5 text-xs text-foreground"
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>

            {/* Conector con etiqueta de flujo */}
            {i < LAYERS.length - 1 ? (
              <div className="flex items-center gap-2 py-2 pl-4" aria-hidden>
                <span className="h-5 w-px bg-border" />
                <span className="label-mono text-[0.625rem] text-muted-foreground">
                  {FLOWS[i]}
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
