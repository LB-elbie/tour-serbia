import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ['upload.wikimedia.org', 'images.unsplash.com'],
  },
  reactStrictMode: true,  // This is often helpful to catch potential issues

};

export default nextConfig;
