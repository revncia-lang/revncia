import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/engagement", destination: "/about", permanent: true },
      { source: "/engage", destination: "/about", permanent: true },
      { source: "/blueprint", destination: "/platform", permanent: true },
    ];
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
