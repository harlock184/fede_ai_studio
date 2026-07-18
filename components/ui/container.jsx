import { cn } from "@/lib/utils";

/** Ancho máximo centrado con padding lateral responsivo. */
export function Container({ className, ...props }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
