"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SystemVisual } from "@/components/home/system-visual";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="deep-space-glow -right-40 -top-52" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />

      <Container className="relative z-10 grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-2 lg:gap-16">
        {/* Columna de texto */}
        <div className="flex flex-col gap-6">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Badge tone="secondary" dot>
              FEDE AI STUDIO — AI Engineering
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-balance text-4xl font-bold sm:text-5xl lg:text-6xl"
          >
            Construimos software que trabaja por ti.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Diseñamos plataformas, automatizaciones y sistemas de Inteligencia
            Artificial que simplifican procesos, conectan operaciones y ayudan a
            las empresas a crecer.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-2 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/services" className={buttonVariants({ variant: "default", size: "lg" })}>
              Explorar capacidades
              <ArrowRight />
            </Link>
            <Link href="/projects" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Ver sistemas construidos
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="text-sm text-muted-foreground"
          >
            Ingeniería primero. Inteligencia Artificial cuando aporta valor.
          </motion.p>
        </div>

        {/* Diagrama de arquitectura */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="relative"
        >
          <SystemVisual />
        </motion.div>
      </Container>
    </section>
  );
}
