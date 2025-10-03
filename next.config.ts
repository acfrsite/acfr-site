import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // cria site estático para Netlify
  images: {
    unoptimized: true, // evita problemas com next/image no export
  },
};

export default nextConfig;
