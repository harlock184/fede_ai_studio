# Deployment

Deploy en **Vercel**. Next.js App Router funciona sin configuración especial.

## Primer deploy

1. Sube el repo a GitHub (o GitLab/Bitbucket).
2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Framework: Vercel detecta **Next.js** automáticamente.
   - Build command: `next build` (default)
   - Output: gestionado por Vercel
   - Install: `npm install`
4. Configura variables de entorno (ver abajo) si aplican.
5. **Deploy.**

Cada push a la rama principal genera un deploy de producción; cada PR, un preview.

## Variables de entorno

Copiar de `.env.example`. En la v1 (sitio estático) **ninguna es obligatoria**.
Se vuelven necesarias en fases posteriores:

| Variable                        | Fase | Uso                                         |
| ------------------------------- | ---- | ------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | 1    | URL canónica (metadata, OpenGraph)          |
| `CONTACT_TO_EMAIL`              | 2    | Destino de leads del formulario de contacto |
| `NEXT_PUBLIC_SUPABASE_URL`      | 3    | Supabase (prospectos + asistente IA)        |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 3    | Supabase (cliente)                          |
| `SUPABASE_SERVICE_ROLE_KEY`     | 3    | Supabase (server-only, **nunca** al cliente)|

En Vercel: **Project → Settings → Environment Variables**. Marca las `NEXT_PUBLIC_*` para los
entornos que correspondan. **Nunca** subas `.env.local` al repo.

## Dominio

En **Project → Settings → Domains**, agrega el dominio del studio y sigue las instrucciones
de DNS. Actualiza `NEXT_PUBLIC_SITE_URL` al dominio final.

## Validación antes de deployar

```bash
npm run lint
npm run build
```

Si `build` pasa en local, el deploy en Vercel debería pasar también.

## Notas

- **Imágenes remotas:** si sirves imágenes desde Supabase Storage o un CDN, decláralas en
  `next.config.mjs` → `images.remotePatterns`.
- **Node:** el proyecto fija Node 20 (`.nvmrc`); Vercel respeta esa versión.
