import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Pin the workspace root so the stray parent lockfile doesn't get picked up.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
