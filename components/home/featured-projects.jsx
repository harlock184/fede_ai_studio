import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  if (!featuredProjects.length) return null;

  return (
    <Section id="sistemas" className="border-t border-border/60 py-28 sm:py-36">
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Sistemas"
            title="Sistemas que hemos construido"
            description="Productos, integraciones y plataformas creadas para resolver necesidades reales."
          />
          <Link
            href="/projects"
            className="label-mono inline-flex shrink-0 items-center gap-2 text-primary transition-colors hover:text-secondary"
          >
            Ver todos
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
