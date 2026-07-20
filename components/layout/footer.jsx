import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";

const FOOTER_LINKS = [
  { href: "/services", label: "Capacidades" },
  { href: "/projects", label: "Sistemas" },
  { href: "/about", label: "Filosofía" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contacto" },
];

const SOCIAL = [
  { href: "mailto:hola@fedeaistudio.com", label: "Email", icon: Mail },
  { href: "https://github.com/", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/", label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card/40">
      <Container className="flex flex-col gap-8 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="font-display text-lg font-bold tracking-tight">
            FEDE <span className="text-primary">AI STUDIO</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Ingeniería de software y sistemas de IA a la medida. Diseñamos y
            construimos productos que escalan.
          </p>
          <p className="mt-4 text-sm text-secondary/80">
            © {year} FEDE AI STUDIO. Engineering Excellence.
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          <span className="label-mono mb-1 text-muted-foreground">Navegación</span>
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-secondary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="label-mono mb-1 text-muted-foreground">Contacto</span>
          <div className="flex gap-3">
            {SOCIAL.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
