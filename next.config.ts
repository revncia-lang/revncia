import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/engagement", destination: "/about", permanent: true },
      { source: "/engage", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
