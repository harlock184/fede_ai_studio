# CLAUDE.md

Este archivo configura a Claude Code (y a cualquier agente de IA) dentro del repositorio de **FEDE AI STUDIO**.
No es la fuente de verdad del proyecto. La verdad vive en `README.md`, `docs/`, `agent_log.md` y el código.

## Qué es este proyecto

Sitio web / landing de **FEDE AI STUDIO**: un estudio de ingeniería de software y sistemas de IA.
Objetivo de negocio: **presentar los servicios y proyectos del studio y convertir visitantes en prospectos** (clientes que contratan desarrollo a la medida).

No es una app con sesión de usuario. Es un sitio de marketing con contenido curado (servicios, portafolio, journal) y, más adelante, captación de leads y un asistente de IA.

## Stack

- **Framework:** Next.js (App Router).
- **Lenguaje:** **JavaScript** (no TypeScript). Archivos `.jsx` para componentes/páginas, `.js` para lógica y datos. Alias de imports `@/*` vía `jsconfig.json`.
- **Estilos:** Tailwind CSS v4 (CSS-first, `@import "tailwindcss"` + `@theme inline`). Tokens en `app/globals.css`.
- **Componentes base:** shadcn/ui en **modo JavaScript** (`components.json` con `"tsx": false`). Se agregan con `npx shadcn@latest add <componente>` y quedan en `components/ui/`.
- **Íconos:** `lucide-react`.
- **Animación:** `framer-motion`, **solo para micro-animaciones sutiles** (fade/slide de entrada). Nada estridente.
- **Contenido del Journal:** por ahora data-driven simple; ruta de crecimiento hacia MDX (ver `docs/content.md`).
- **Deploy:** Vercel.
- **Backend futuro:** Supabase para prospectos (formulario de contacto) y conversaciones del asistente de IA. **Aún no integrado** — ver `docs/roadmap.md`.

## Orden de lectura

Antes de analizar, proponer, editar o ejecutar:

1. `README.md` — visión general, cómo correr el proyecto.
2. `docs/roadmap.md` — **en qué fase estamos** y qué existe / qué falta hoy. Fuente de verdad de ejecución.
3. `docs/architecture.md` — estructura de carpetas y convenciones.
4. `docs/design-system.md` — tokens, tipografía, colores, cómo re-brandear. Léelo si tocas UI.
5. `docs/content.md` — modelo de contenido (proyectos, servicios, tecnologías, journal) y cómo agregar entradas.
6. `docs/deployment.md` — deploy en Vercel y variables de entorno.
7. `agent_log.md` — memoria viva del proyecto.

Si `README.md` o `docs/` quedan desactualizados frente al código real, declárarlo explícitamente.

## Reglas de arquitectura (obligatorias)

- **JavaScript, no TypeScript.** No introducir `.ts`/`.tsx`, `tsconfig.json` ni anotaciones de tipos. Si necesitas tipos como ayuda, usa JSDoc (`/** @type {...} */`).
- **App Router.** Cada ruta es una carpeta bajo `app/` con su `page.jsx`. Layout raíz en `app/layout.jsx`.
- **Server Components por defecto.** Marca `"use client"` **solo** cuando el componente use estado, efectos, eventos o `framer-motion`.
- **Datos separados de la UI.** El contenido (proyectos, servicios, tecnologías) vive en `data/*.js`. Los componentes leen de ahí; no hardcodear listas dentro del JSX.
- **Componentes por dominio:**
  - `components/ui/` — primitivos reutilizables (shadcn + propios: `button`, `container`, `section`).
  - `components/layout/` — `navbar`, `footer`.
  - `components/home/` — secciones de la home (una por archivo).
  - `components/projects/` — piezas del portafolio (`project-card`, `architecture-diagram`).
- **Reutilizar antes de crear.** Revisa `components/ui/` antes de escribir un componente nuevo. Extiende por props/variantes antes de duplicar.

## Sistema de diseño

Design system propio del studio (dark-first). Tokens MD-style en `app/globals.css`.

- Usar **siempre tokens** (`bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `bg-primary`, `border-border`, etc.). **Jamás** hex hardcodeado ni `text-white` / `text-slate-*`.
- Gradiente firma primary → secondary: usar la utilidad `.text-gradient` o la variante `gradient` del `<Button>`.
- Tipografía: `font-display` (Space Grotesk) para títulos; body por defecto (Inter).
- Reglas completas en `docs/design-system.md`.

## Protocolo operativo

- Comunicarse **siempre en español (mexicano)**.
- `agent_log.md` es memoria viva: append-only, no sobrescribir entradas previas, firmar como `Atte. Claude Code.`.
- Separar siempre: **hallazgos observados** / **hallazgos confirmados en código** / **siguiente paso recomendado**.
- Si no se pueden correr pruebas, builds o validaciones, declararlo explícitamente.
- **Nunca** registrar secretos, tokens ni claves (Supabase, Vercel, etc.) en `agent_log.md` ni en el repo.

## Validación

Desde la raíz del repo:

- `npm install` — instala dependencias (primera vez).
- `npm run dev` — servidor de desarrollo (http://localhost:3000).
- `npm run lint` — ESLint (next/core-web-vitals).
- `npm run build` — build de producción (validación antes de deploy).

Si una tarea no requiere validación o no puede validarse localmente, dejarlo explícito.

## Después de ejecutar una tarea

Documentar en `agent_log.md` lo que se hizo, en modo append-only, firmando como `Atte. Claude Code.`.
