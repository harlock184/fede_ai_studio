import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { ProjectCard } from "@/components/projects/project-card";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  if (!featuredProjects.length) return null;

  return (
    <Section id="projects" className="border-t border-border/60">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos destacados"
          description="Una muestra de lo que hemos diseñado y construido."
        />
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Ver todo el portafolio
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
