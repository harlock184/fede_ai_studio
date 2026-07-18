import { Section, SectionHeading } from "@/components/ui/section";
import { technologies } from "@/data/technologies";

export function Technologies() {
  return (
    <Section id="technologies" className="border-t border-border/60">
      <SectionHeading
        eyebrow="Stack"
        title="Tecnologías que usamos"
        description="Herramientas modernas y probadas, elegidas por caso de uso — no por moda."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {technologies.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
