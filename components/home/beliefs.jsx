import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { beliefs } from "@/data/philosophy";

/**
 * "Lo que creemos": declaraciones grandes, una por fila.
 * Sin íconos ni tarjetas — la tipografía es la protagonista.
 */
export function Beliefs() {
  return (
    <Section id="creencias" className="border-t border-border/60 py-28 sm:py-36">
      <Reveal>
        <h2 className="text-3xl font-bold sm:text-4xl">Lo que creemos</h2>
      </Reveal>

      <Reveal>
        <ul className="mt-16 border-t border-border">
          {beliefs.map((belief, i) => (
            <li
              key={belief}
              className="flex items-baseline gap-6 border-b border-border py-8 sm:gap-10 sm:py-10"
            >
              <span className="label-mono shrink-0 text-muted-foreground/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-balance font-display text-xl font-medium leading-snug tracking-tight sm:text-2xl lg:text-3xl">
                {belief}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
