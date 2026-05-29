import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set the workspace root to the project directory
    // Use an absolute path to fully silence Turbopack's inference
    root: __dirname
  }
};

export default nextConfig;
