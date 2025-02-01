/** @type {import('next').NextConfig} */
const isLocalBuild = process.env.IS_LOCAL === "true";

const nextConfig = {
  basePath: isLocalBuild ? "" : "",
  output: "export",
  experimental: {
    typedRoutes: true
  }
};

module.exports = nextConfig;