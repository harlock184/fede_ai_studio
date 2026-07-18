# Contenido

El contenido del sitio vive en `data/*.js`. Editar ahí actualiza la UI en todo el sitio.
Los componentes **leen** de estos archivos; no se hardcodea contenido en el JSX.

## `data/services.js`

Lista de servicios del studio. Cada servicio:

```js
{
  slug: "producto-a-medida",        // id único
  title: "Producto digital a la medida",
  summary: "Frase corta para tarjetas.",
  description: "Párrafo más largo para la página /services.",
  icon: Code2,                       // componente de lucide-react
  deliverables: ["...", "..."],      // qué entrega el studio
}
```

Se usa en la home (`components/home/capabilities.jsx`) y en `/services`.

## `data/technologies.js`

Stack agrupado por categoría. Cada grupo:

```js
{
  category: "Frontend",
  items: ["Next.js", "React", "Tailwind CSS", "..."],
}
```

Se usa en `components/home/technologies.jsx`. Los logos opcionales van en `public/logos/`.

## `data/projects.js`

Portafolio. Cada proyecto:

```js
{
  slug: "zayra",                     // define la URL /projects/zayra
  name: "Zayra",
  tagline: "Frase corta.",
  description: "Descripción para el detalle.",
  year: "2026",
  role: "Diseño de producto + ingeniería full-stack",
  featured: true,                    // aparece en la home
  status: "En producción",           // etiqueta de estado
  cover: "/projects/zayra.jpg",       // imagen en public/projects (opcional)
  url: "https://…",                  // link externo (opcional)
  stack: ["Next.js", "Supabase", "..."],
  highlights: ["Logro 1", "Logro 2"],
  architecture: {                    // alimenta <ArchitectureDiagram>
    layers: [
      { label: "Cliente", items: ["Web (Next.js)", "Mobile (Expo)"] },
      { label: "API",     items: ["Express (ESM)"] },
      { label: "Datos",   items: ["Supabase / Postgres"] },
    ],
  },
}
```

- `featured: true` → aparece en `components/home/featured-projects.jsx`.
- La página de detalle `/projects/[slug]` se genera automáticamente por cada proyecto
  (`generateStaticParams`). Si el slug no existe, se muestra `notFound()`.
- Imágenes de portada: colócalas en `public/projects/` y referencia la ruta en `cover`.

## Engineering Journal (`/journal`)

**v1:** entradas simples definidas como data (array en la propia página o en un
`data/journal.js` si crece). Cada entrada: `slug`, `title`, `date`, `summary`, `tags`.

**Ruta de crecimiento (MDX):** cuando el journal tenga artículos largos, migrar a MDX:

1. `npm install @next/mdx @mdx-js/loader @mdx-js/react`
2. Configurar `next.config.mjs` con `createMDX()`.
3. Un archivo `.mdx` por artículo (o cargar desde `content/journal/`).

Mantener la v1 simple hasta que el volumen justifique MDX.

## Checklist para agregar un proyecto

1. Añadir el objeto a `data/projects.js` (con `slug` único).
2. Colocar la portada en `public/projects/<slug>.jpg` (opcional).
3. `featured: true` si quieres que salga en la home.
4. Verificar `/projects` y `/projects/<slug>` en `npm run dev`.
