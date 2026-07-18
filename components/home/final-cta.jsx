import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="border-t border-border/60 py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-3xl text-3xl font-semibold sm:text-5xl">
          ¿Tienes una idea? <span className="text-gradient">Hagámosla real.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Cuéntanos qué quieres construir. Te respondemos con un plan claro y
          honesto sobre alcance, tiempos y siguientes pasos.
        </p>
        <div className="mt-10">
          <Link href="/contact" className={buttonVariants({ variant: "gradient", size: "lg" })}>
            Iniciar un proyecto
            <ArrowRight />
          </Link>
        </div>
      </Container>
    </section>
  );
}
