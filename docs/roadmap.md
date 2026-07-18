# Roadmap

Fases del proyecto y **estado actual**. Esta es la fuente de verdad de ejecución:
qué existe hoy, qué falta y en qué orden.

## Estado de fases

| Fase | Nombre                        | Estado        |
| ---- | ----------------------------- | ------------- |
| 1    | Landing estática              | 🟢 En curso   |
| 2    | Captación de leads (contacto) | ⚪ Pendiente  |
| 3    | Asistente de IA + Supabase    | ⚪ Pendiente  |
| 4    | Engineering Journal en MDX    | ⚪ Pendiente  |

Leyenda: 🟢 construido / en curso · 🟡 parcial · ⚪ pendiente.

---

## Fase 1 — Landing estática (🟢)

Objetivo: sitio presentable que comunique el valor del studio y su portafolio.

**Incluye:**
- Home con secciones: hero, capacidades, proyectos destacados, proceso, tecnologías,
  teaser del asistente, CTA final.
- Páginas: `/services`, `/projects`, `/projects/[slug]`, `/about`, `/journal`, `/contact`.
- Navbar + footer, design system dark-first, contenido en `data/`.

**Qué NO hace todavía:**
- El formulario de contacto es **UI sin backend** (no envía nada aún).
- El asistente de IA es un **teaser** (sin chat funcional).

**Para cerrar la fase:** reemplazar contenido placeholder de `data/*.js` por proyectos y
servicios reales, y definir branding final (colores/logo).

---

## Fase 2 — Captación de leads (⚪)

Objetivo: que el formulario de `/contact` capture prospectos de verdad.

**Trabajo:**
- Endpoint (Route Handler `app/api/contact/route.js`) que reciba el formulario.
- Persistir el lead (Supabase tabla `leads`) y/o notificar por correo (`CONTACT_TO_EMAIL`).
- Validación (Zod) y manejo de errores/estado de envío en el cliente.
- Anti-spam básico (honeypot / rate-limit).

---

## Fase 3 — Asistente de IA + Supabase (⚪)

Objetivo: convertir el teaser del asistente en un chat real que califique prospectos.

**Trabajo:**
- Supabase: tablas de conversaciones y mensajes; auth anónima si aplica.
- Route Handler que hable con el proveedor de IA (streaming).
- UI de chat (component en `components/home/ai-contact.jsx` → versión funcional).
- Registrar leads calificados por el asistente.

> Nota: las credenciales sensibles van en variables de entorno; **nunca** en el repo.

---

## Fase 4 — Engineering Journal en MDX (⚪)

Objetivo: journal con artículos largos y buen SEO.

**Trabajo:**
- Migrar de data-driven a MDX (`@next/mdx`), un archivo por artículo.
- Índice con tags y fechas; página de detalle por artículo.
- OpenGraph por artículo.

---

## Principios

- No dejar capacidad de backend sin UI usable, ni UI que prometa algo que el backend no hace:
  el teaser del asistente deja claro que "viene pronto" hasta que la fase 3 exista.
- Contenido siempre en `data/` (o MDX), separado de la presentación.
- Validar con `npm run build` antes de cada deploy.
