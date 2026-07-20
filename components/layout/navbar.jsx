"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button, buttonVariants } from "@/components/ui/button";

/**
 * Rutas conservadas a propósito: solo cambian las etiquetas visibles.
 * Renombrar los paths (/services → /capabilities, etc.) exigiría redirects
 * y romper enlaces existentes; se puede hacer después como tarea aparte.
 */
const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Capacidades" },
  { href: "/projects", label: "Sistemas" },
  { href: "/about", label: "Filosofía" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-lg font-bold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            F
          </span>
          <span>
            FEDE <span className="text-primary">AI STUDIO</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className={buttonVariants({ variant: "default", size: "sm" })}>
            Hablemos
          </Link>
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </Container>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-border/40 bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: "default" }), "mt-2")}
            >
            Hablemos
          </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
