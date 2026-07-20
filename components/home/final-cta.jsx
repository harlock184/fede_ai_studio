import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="border-t border-border/60 py-28 sm:py-36">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
            Construyamos un sistema que genere valor real.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Cuéntanos qué proceso quieres mejorar, qué producto quieres
            desarrollar o qué operación deseas automatizar.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Hablar sobre mi proyecto
              <ArrowRight />
            </Link>
            <Link
              href="#asistente"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Conversar con el asistente
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
