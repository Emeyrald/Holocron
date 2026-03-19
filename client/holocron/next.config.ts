import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "/holocron";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? repo : "",
  assetPrefix: isProd ? `${repo}/` : "",
};

export default nextConfig;