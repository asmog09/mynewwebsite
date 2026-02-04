import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ["sdmntprsouthcentralus.oaiusercontent.com", "static.wixstatic.com"],
  },
};

export default nextConfig;
