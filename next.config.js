/** @type {import('next').NextConfig} */
const isLocalBuild = process.env.IS_LOCAL === "true";

const nextConfig = {
  basePath: isLocalBuild ? "" : "",
  output: "export",
  images: {
    unoptimized: true
  },
  experimental: {
    typedRoutes: true
  },
  // Disable source maps
  productionBrowserSourceMaps: false
};

module.exports = nextConfig;