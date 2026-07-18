/**
 * Visual abstracto tipo "latent space / data nodes" para el hero.
 * SVG autocontenido, flat y thin-lined (design system: sin 3D, turquesa + azul).
 * Server component — es estático.
 */
export function DataNodeVisual() {
  // Nodos de la red (coordenadas en viewBox 400x300).
  const nodes = [
    { x: 60, y: 80, r: 5, tone: "var(--primary)" },
    { x: 150, y: 45, r: 4, tone: "var(--secondary)" },
    { x: 210, y: 120, r: 6, tone: "var(--primary)" },
    { x: 120, y: 160, r: 4, tone: "var(--secondary)" },
    { x: 300, y: 70, r: 5, tone: "var(--secondary)" },
    { x: 330, y: 165, r: 4, tone: "var(--primary)" },
    { x: 250, y: 210, r: 5, tone: "var(--secondary)" },
    { x: 90, y: 235, r: 4, tone: "var(--primary)" },
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [3, 2], [1, 4], [4, 5],
    [2, 5], [2, 6], [6, 5], [3, 7], [7, 6], [4, 2],
  ];

  return (
    <div className="metallic-sheen relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-card">
      {/* Header tipo panel */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="label-mono text-secondary/70">DATA_NODE_SYS_09</span>
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-primary/60" />
          <span className="size-2 rounded-full bg-secondary/60" />
          <span className="size-2 rounded-full bg-muted-foreground/40" />
        </div>
      </div>

      {/* Red de nodos */}
      <svg
        viewBox="0 0 400 300"
        className="h-[68%] w-full"
        fill="none"
        aria-hidden
        preserveAspectRatio="xMidYMid meet"
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--border)"
            strokeWidth="1"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r + 6} fill={n.tone} opacity="0.08" />
            <circle cx={n.x} cy={n.y} r={n.r} fill={n.tone} opacity="0.9" />
          </g>
        ))}
      </svg>

      {/* Sparklines / métricas */}
      <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-px border-t border-border bg-border">
        {[
          { label: "LATENCY", value: "38ms", tone: "text-secondary" },
          { label: "UPTIME", value: "99.9%", tone: "text-primary" },
          { label: "TOKENS/S", value: "1.2K", tone: "text-secondary" },
        ].map((m) => (
          <div key={m.label} className="bg-card px-3 py-3">
            <div className="label-mono text-[0.625rem] text-muted-foreground">{m.label}</div>
            <div className={`mt-1 font-display text-sm font-semibold ${m.tone}`}>{m.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
