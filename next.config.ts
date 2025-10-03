import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // 🔑 isso substitui o antigo next export
};

export default nextConfig;
