/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  distDir: "build", // Avoid conflicts by using a custom build directory
};

module.exports = nextConfig;
