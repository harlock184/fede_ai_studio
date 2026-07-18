import { Mail, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { ContactForm } from "./contact-form";

export const metadata = {
  title: "Contacto",
  description:
    "Cuéntanos tu proyecto. Te respondemos con un plan claro sobre alcance, tiempos y siguientes pasos.",
};

const INFO = [
  {
    icon: Mail,
    label: "Correo",
    value: "hola@fedeaistudio.com",
    href: "mailto:hola@fedeaistudio.com",
  },
  {
    icon: Clock,
    label: "Tiempo de respuesta",
    value: "Normalmente en 24–48 h",
  },
  {
    icon: MessageSquare,
    label: "Primera llamada",
    value: "Sin costo, para entender tu caso",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero de sección */}
      <section className="relative overflow-hidden">
        <div className="deep-space-glow -right-40 -top-40" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
        <Container className="relative z-10 pt-20 pb-10 sm:pt-28">
          <Reveal className="max-w-2xl">
            <span className="label-mono text-primary">Contacto</span>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Cuéntanos tu proyecto
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Rellena el formulario y te respondemos con un plan honesto sobre
              alcance, tiempos y siguientes pasos.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Dos columnas: canales directos + formulario */}
      <Container className="pb-24">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
            {/* Izquierda — Canales directos */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Canales directos
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                La vía más rápida para iniciar una conversación con el equipo.
              </p>

              <div className="mt-6 space-y-4">
                {INFO.map((item) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "metallic-sheen group flex items-center gap-4 rounded-xl border border-border bg-card p-4",
                        item.href && "transition-colors hover:border-primary/50"
                      )}
                    >
                      <div className="grid size-11 shrink-0 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="label-mono text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="mt-1.5 truncate text-sm font-medium text-foreground">
                          {item.value}
                        </div>
                      </div>
                      {item.href ? (
                        <ArrowRight className="ml-auto size-4 shrink-0 -translate-x-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100" />
                      ) : null}
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            {/* Derecha — Formulario */}
            <div className="metallic-sheen rounded-xl border border-border bg-card p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
