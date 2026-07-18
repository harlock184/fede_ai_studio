import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-6xl font-bold text-gradient">404</span>
      <h1 className="mt-6 text-2xl font-semibold">Página no encontrada</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        La página que buscas no existe o cambió de lugar.
      </p>
      <Link href="/" className={`${buttonVariants({ variant: "gradient" })} mt-8`}>
        Volver al inicio
      </Link>
    </Container>
  );
}
