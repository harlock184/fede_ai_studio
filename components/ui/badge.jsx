import { cn } from "@/lib/utils";

/**
 * Chip técnico monoespaciado (overlines, tags, estados).
 * Fondo desaturado del tono + borde 1px del mismo hue (estilo Stitch).
 * @param {{
 *   tone?: "primary" | "secondary" | "tertiary" | "muted",
 *   dot?: boolean,
 *   className?: string,
 *   children: React.ReactNode
 * }} props
 */
const TONES = {
  primary: "border-primary/25 bg-primary/10 text-primary",
  secondary: "border-secondary/25 bg-secondary/10 text-secondary",
  tertiary: "border-tertiary/25 bg-tertiary/10 text-tertiary",
  muted: "border-border bg-card text-muted-foreground",
};

export function Badge({ tone = "secondary", dot = false, className, children }) {
  return (
    <span
      className={cn(
        "label-mono inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1",
        TONES[tone],
        className
      )}
    >
      {dot ? (
        <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-current" />
      ) : null}
      {children}
    </span>
  );
}
