import { SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Sistemas",
  description:
    "Sistemas construidos por FEDE AI STUDIO: productos, integraciones y plataformas creadas para resolver necesidades reales.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero de sección */}
      <section className="relative overflow-hidden">
        <div className="deep-space-glow -right-40 -top-40" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
        <Container className="relative z-10 pt-20 pb-10 sm:pt-28">
          <Reveal>
            <SectionHeading
              className="max-w-3xl"
              eyebrow="Sistemas"
              title="Sistemas que hemos construido"
              description="Productos, integraciones y plataformas creadas para resolver necesidades reales."
            />
          </Reveal>
        </Container>
      </section>

      <Container className="pb-24">
        <Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>
      </Container>
    </>
  );
}
