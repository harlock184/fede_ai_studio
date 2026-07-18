import { cn } from "@/lib/utils";

/**
 * Motivo decorativo abstracto de "data nodes" (red de nodos + líneas).
 * Server component, SVG autocontenido, flat y thin-lined. Se coloca como
 * fondo (absolute inset-0) detrás de contenido; es puramente decorativo.
 * @param {{ className?: string }} props
 */
export function NodeMotif({ className }) {
  const nodes = [
    { x: 50, y: 60, r: 4, tone: "var(--primary)" },
    { x: 130, y: 30, r: 3, tone: "var(--secondary)" },
    { x: 190, y: 95, r: 5, tone: "var(--primary)" },
    { x: 95, y: 130, r: 3, tone: "var(--secondary)" },
    { x: 280, y: 55, r: 4, tone: "var(--secondary)" },
    { x: 320, y: 140, r: 3, tone: "var(--primary)" },
    { x: 235, y: 175, r: 4, tone: "var(--secondary)" },
    { x: 60, y: 200, r: 3, tone: "var(--primary)" },
    { x: 355, y: 210, r: 4, tone: "var(--secondary)" },
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [3, 2], [1, 4], [4, 5],
    [2, 5], [2, 6], [6, 5], [3, 7], [6, 8], [5, 8],
  ];

  return (
    <svg
      viewBox="0 0 400 260"
      className={cn("h-full w-full", className)}
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
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
          <circle cx={n.x} cy={n.y} r={n.r + 5} fill={n.tone} opacity="0.1" />
          <circle cx={n.x} cy={n.y} r={n.r} fill={n.tone} opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}
