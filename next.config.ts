import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: false,
  assetPrefix: '',
  basePath: '',
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  skipTrailingSlashRedirect: true,
  
  // For single-page application behavior
  generateEtags: false,
  poweredByHeader: false,
  
  // Generate index.html for root that redirects to /ja
  async generateBuildId() {
    return 'build-id';
  }
};

export default nextConfig;
