/** @type {import('next').NextConfig} */
const isLocalBuild = process.env.IS_LOCAL === "true";

const nextConfig = {
  basePath: isLocalBuild ? "" : "/portfolio-ru",
  output: "export",
};

module.exports = nextConfig;
