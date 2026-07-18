# Arquitectura

Sitio construido con **Next.js (App Router)** en **JavaScript**. Renderizado estático por
defecto (marketing site); sin sesión de usuario en la v1.

## Estructura de carpetas

```
app/                    # rutas — cada carpeta = una ruta
  layout.jsx            # layout raíz: fuentes, navbar, footer, <main>
  globals.css           # design tokens (Tailwind v4)
  page.jsx              # home (compone las secciones de components/home)
  services/page.jsx     # /services
  projects/page.jsx     # /projects — grid del portafolio
  projects/[slug]/page.jsx  # /projects/:slug — detalle dinámico
  about/page.jsx        # /about
  journal/page.jsx      # /journal
  contact/page.jsx      # /contact

components/
  layout/               # navbar.jsx, footer.jsx
  home/                 # una sección por archivo (hero, capabilities, ...)
  projects/             # project-card.jsx, architecture-diagram.jsx
  ui/                   # primitivos: button, container, section (+ shadcn)

data/                   # contenido del sitio (fuente de verdad de la UI)
  projects.js
  services.js
  technologies.js

lib/
  utils.js              # cn() y helpers

public/
  projects/  images/  logos/    # assets estáticos
```

## Convenciones

### JavaScript, no TypeScript
Todo el proyecto es JS. Componentes/páginas en `.jsx`, lógica y datos en `.js`.
Para pistas de tipos, usar JSDoc. No introducir `tsconfig.json` ni archivos `.ts`/`.tsx`.

### Server vs Client Components
- **Server Component por defecto** (sin directiva). Ideal para páginas y secciones estáticas.
- `"use client"` **solo** si el componente usa `useState`/`useEffect`, maneja eventos del
  usuario o usa `framer-motion`. Ejemplos actuales: `navbar` (menú móvil), `hero` (animación).

### Datos separados de la presentación
El contenido vive en `data/*.js` y se importa en los componentes. Nunca hardcodear listas
de proyectos/servicios dentro del JSX. Para agregar contenido, editar `data/`, no la UI.
Ver [`content.md`](content.md).

### Rutas dinámicas
`app/projects/[slug]/page.jsx` usa `generateStaticParams()` para pre-generar una página por
proyecto en build, y `notFound()` si el slug no existe.

### Alias de imports
`@/*` apunta a la raíz (definido en `jsconfig.json`). Ejemplo:
`import { Button } from "@/components/ui/button"`.

## Flujo de renderizado

1. `app/layout.jsx` monta fuentes (`next/font`), `Navbar`, `<main>` y `Footer`.
2. Cada `page.jsx` es un Server Component que importa datos de `data/` y compone secciones.
3. shadcn/ui aporta primitivos; los propios (`Container`, `Section`) estandarizan spacing.

## Decisiones

- **Sin base de datos en v1.** Todo el contenido es estático en `data/`. Supabase entra en
  fases posteriores (leads + asistente IA). Ver [`roadmap.md`](roadmap.md).
- **shadcn en modo JS.** Los componentes se generan como `.jsx`. `components.json` fija
  `"tsx": false`, alias y `baseColor`.
- **Tailwind v4 CSS-first.** No hay `tailwind.config.js`; los tokens se declaran en
  `globals.css` con `@theme inline`. Ver [`design-system.md`](design-system.md).
