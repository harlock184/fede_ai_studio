import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { manifesto } from "@/data/philosophy";

/**
 * Manifiesto del studio: sección editorial, amplia y sobria.
 * Tipografía grande y ancho de lectura cómodo. Deliberadamente NO son tarjetas.
 */
export function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="relative overflow-hidden border-t border-border/60 py-32 sm:py-40"
    >
      <div className="deep-space-glow -left-40 top-0" aria-hidden />

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-3xl">
          <span className="label-mono text-secondary">Manifiesto</span>

          <div className="mt-12 space-y-8">
            {manifesto.map((paragraph, i) => (
              <p
                key={paragraph}
                className={
                  i === 0
                    ? "text-balance font-display text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl"
                    : "text-lg leading-relaxed text-muted-foreground sm:text-xl"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
