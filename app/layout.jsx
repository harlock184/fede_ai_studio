import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Geist — tipografía display/headline con rigor geométrico (dev-centric).
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// Geist Mono — acentos técnicos (overlines, chips, metadata).
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FEDE AI STUDIO — Ingeniería de software y sistemas de IA",
    template: "%s · FEDE AI STUDIO",
  },
  description:
    "Estudio de ingeniería de software y sistemas de IA. Diseñamos y construimos productos digitales, plataformas SaaS, apps móviles y automatizaciones a la medida.",
  keywords: [
    "desarrollo de software",
    "inteligencia artificial",
    "Next.js",
    "aplicaciones a la medida",
    "SaaS",
    "consultoría técnica",
  ],
  openGraph: {
    title: "FEDE AI STUDIO",
    description:
      "Ingeniería de software y sistemas de IA a la medida.",
    url: siteUrl,
    siteName: "FEDE AI STUDIO",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${geist.variable} ${geistMono.variable} dark`}>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
