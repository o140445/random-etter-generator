/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now stable and enabled by default

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 