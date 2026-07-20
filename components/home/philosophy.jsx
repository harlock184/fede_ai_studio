import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { corePrinciple, principles } from "@/data/philosophy";

/**
 * Principio central del studio: la idea que ordena todo lo demás.
 * Sin íconos ni tarjetas decorativas — es un manifiesto técnico.
 */
export function Philosophy() {
  return (
    <Section id="filosofia" className="border-t border-border/60 py-28 sm:py-36">
      <Reveal className="max-w-3xl">
        <span className="label-mono text-primary">{corePrinciple.eyebrow}</span>
        <h2 className="mt-6 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
          {corePrinciple.title}
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          {corePrinciple.body}
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-20 grid gap-10 sm:mt-24 md:grid-cols-3 md:gap-8">
          {principles.map((principle, i) => (
            <div key={principle.title} className="border-t border-border pt-6">
              <span className="label-mono text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
                {principle.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
