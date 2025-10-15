/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
    allowedDevOrigins: ['http://localhost:3000','http://127.0.0.1:3000', 'https://digital-hub-togo.vercel.app/'],
}

export default nextConfig
