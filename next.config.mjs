/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cuando sirvamos imágenes remotas (Supabase Storage, CDN), declararlas aquí.
    remotePatterns: [],
  },
};

export default nextConfig;
