# Design System

Sistema de diseño propio de FEDE AI STUDIO. **Dark-first**, estética de estudio de
ingeniería: sobrio, con acento vivo y un gradiente firma.

## Dónde viven los tokens

Todo en [`app/globals.css`](../app/globals.css), con Tailwind v4:

- Variables CSS en `:root` (colores en formato **OKLCH**, radios).
- `@theme inline` mapea esas variables a utilidades Tailwind (`bg-background`, `text-primary`, …).
- `@layer base` aplica defaults (color de borde, tipografía de headings).
- `@layer utilities` define helpers propios (`.text-gradient`, `.bg-grid`).

## Tokens principales

| Token                     | Uso                                             |
| ------------------------- | ----------------------------------------------- |
| `background` / `foreground` | fondo y texto base de la página               |
| `card` / `card-foreground`  | superficies elevadas (tarjetas)               |
| `muted` / `muted-foreground`| fondos y textos secundarios                   |
| `primary` / `primary-foreground` | acento principal (CTA, links activos)    |
| `secondary`               | segundo color del gradiente firma               |
| `border` / `input`        | bordes y campos                                 |
| `ring`                    | anillo de foco                                  |

## Reglas de uso

- **Siempre tokens.** `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`,
  `bg-primary`, `border-border`. **Nunca** hex hardcodeado ni `text-white` / `text-slate-*`.
- **Gradiente firma** (primary → secondary):
  - En texto: clase `.text-gradient`.
  - En botones: `<Button variant="gradient">`.
- **Tipografía:**
  - Títulos (`h1`–`h4`): `font-display` (Space Grotesk), aplicado por defecto vía `@layer base`.
  - Body: Inter (fuente por defecto del `body`).
- **Radios:** usar `rounded-md` / `rounded-lg` (derivados del token `--radius`).
- **Spacing de secciones:** usar el componente `<Section>` (`py-20 sm:py-28`) y `<Container>`
  (ancho máximo + padding lateral) para mantener ritmo consistente.

## Componentes base

- `components/ui/button.jsx` — variantes `default`, `secondary`, `outline`, `ghost`,
  `gradient`; tamaños `sm`, `default`, `lg`, `icon`. Exporta también `buttonVariants` para
  estilar un `<Link>` como botón.
- `components/ui/container.jsx` — ancho máximo centrado con padding responsivo.
- `components/ui/section.jsx` — envoltura de sección con spacing vertical estándar.

Para primitivos adicionales (card, input, dialog, etc.): `npx shadcn@latest add <nombre>`.
Quedan en `components/ui/` como `.jsx` (modo JS ya configurado).

## Cómo re-brandear

Para cambiar la identidad visual sin tocar componentes:

1. Ajusta los valores OKLCH en `:root` de `app/globals.css` (sobre todo `--primary` y
   `--secondary`, que definen el gradiente firma).
2. Si cambias fuentes, edita los imports de `next/font` en `app/layout.jsx` y las variables
   `--font-*`.
3. Reemplaza logos en `public/logos/`.

Como todo usa tokens, el cambio se propaga a todo el sitio.

## Modo claro (futuro)

La v1 es dark-only (`<html class="dark">`). Para agregar tema claro: definir un bloque
`.light { … }` con la paleta clara en `globals.css` e integrar `next-themes` (como en otros
proyectos del ecosistema). No es prioridad de la v1.
