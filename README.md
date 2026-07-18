# FEDE AI STUDIO

Sitio web del studio: ingeniería de software y sistemas de IA a la medida.
Landing multipágina para presentar servicios, portafolio y captar prospectos.

> **Stack:** Next.js (App Router) · JavaScript · Tailwind CSS v4 · shadcn/ui · Lucide · Framer Motion · Vercel.
> **Backend futuro:** Supabase (prospectos + asistente de IA). Ver [`docs/roadmap.md`](docs/roadmap.md).

## Requisitos

- Node.js 20+ (ver `.nvmrc`)
- npm

## Arrancar en local

```bash
npm install
cp .env.example .env.local   # rellena valores cuando apliquen
npm run dev                  # http://localhost:3000
```

## Scripts

| Script          | Qué hace                                            |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo con hot reload               |
| `npm run build` | Build de producción (úsalo antes de deployar)       |
| `npm run start` | Sirve el build de producción                        |
| `npm run lint`  | ESLint (`next/core-web-vitals`)                     |

## Estructura

```
fede_ai_studio/
├── app/                      # rutas (App Router)
│   ├── page.jsx              # home
│   ├── services/             # /services
│   ├── projects/             # /projects  y  /projects/[slug]
│   ├── about/                # /about
│   ├── journal/              # /journal (engineering journal)
│   ├── contact/              # /contact
│   ├── layout.jsx            # layout raíz (navbar + footer + fuentes)
│   └── globals.css           # design tokens (Tailwind v4)
├── components/
│   ├── layout/               # navbar, footer
│   ├── home/                 # secciones de la home
│   ├── projects/             # project-card, architecture-diagram
│   └── ui/                   # primitivos (shadcn + propios)
├── data/                     # contenido: projects.js, services.js, technologies.js
├── lib/                      # utilidades (cn, helpers)
├── public/                   # assets estáticos (projects/, images/, logos/)
└── docs/                     # documentación del proyecto
```

## Documentación

- [`docs/architecture.md`](docs/architecture.md) — estructura y convenciones
- [`docs/design-system.md`](docs/design-system.md) — tokens, tipografía, colores, re-brand
- [`docs/content.md`](docs/content.md) — cómo agregar proyectos, servicios y entradas del journal
- [`docs/deployment.md`](docs/deployment.md) — deploy en Vercel + variables de entorno
- [`docs/roadmap.md`](docs/roadmap.md) — fases del proyecto y estado actual

## Convención importante

Este proyecto usa **JavaScript, no TypeScript**. No agregues archivos `.ts`/`.tsx` ni `tsconfig.json`.
shadcn/ui está configurado en modo JS (`components.json` → `"tsx": false`).

## Licencia

Privado — © FEDE AI STUDIO.
