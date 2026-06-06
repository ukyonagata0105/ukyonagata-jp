import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  assetPrefix: '',
  basePath: '',
  images: {
    unoptimized: true
  },
  skipTrailingSlashRedirect: true,
  generateEtags: false,
  poweredByHeader: false,
};

export default nextConfig;
