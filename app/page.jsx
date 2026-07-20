import { Hero } from "@/components/home/hero";
import { Philosophy } from "@/components/home/philosophy";
import { Capabilities } from "@/components/home/capabilities";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Beliefs } from "@/components/home/beliefs";
import { Process } from "@/components/home/process";
import { Technologies } from "@/components/home/technologies";
import { Manifesto } from "@/components/home/manifesto";
import { AiContact } from "@/components/home/ai-contact";
import { FinalCta } from "@/components/home/final-cta";

/**
 * Arco narrativo de la home:
 * idea central → qué hacemos → qué construimos → en qué creemos →
 * cómo trabajamos → con qué → manifiesto → asistente → contacto.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Capabilities />
      <FeaturedProjects />
      <Beliefs />
      <Process />
      <Technologies />
      <Manifesto />
      <AiContact />
      <FinalCta />
    </>
  );
}
