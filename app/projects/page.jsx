import { SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Proyectos",
  description:
    "Portafolio de FEDE AI STUDIO: plataformas, apps móviles y sistemas de IA que hemos diseñado y construido.",
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
              eyebrow="Portafolio"
              title="Proyectos seleccionados"
              description="Arquitectura técnica de alto impacto: desde plataformas B2B2C hasta motores de automatización e IA. Ingeniería minimalista pensada para desempeño y confiabilidad. Haz clic en cualquiera para ver el caso completo."
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
