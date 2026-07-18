import { Hero } from "@/components/home/hero";
import { Capabilities } from "@/components/home/capabilities";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Process } from "@/components/home/process";
import { Technologies } from "@/components/home/technologies";
import { AiContact } from "@/components/home/ai-contact";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <FeaturedProjects />
      <Process />
      <Technologies />
      <AiContact />
      <FinalCta />
    </>
  );
}
