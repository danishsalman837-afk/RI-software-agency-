import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Allow viewing the dev server over the LAN IP (e.g. from a phone). Next 16
  // blocks cross-origin dev resources (JS/HMR/fonts) by default — when the site
  // is opened via 192.168.x.x instead of localhost, that block stops the client
  // JS from loading, leaving framer-motion reveal animations stuck hidden.
  allowedDevOrigins: ["192.168.100.17"],
  // Pin the workspace root so the stray parent lockfile doesn't get picked up.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
