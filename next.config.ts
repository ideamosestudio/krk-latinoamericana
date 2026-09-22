import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/krk-latinoamericana" : "";
const siteUrl = process.env.SITE_URL ?? (isGitHubPages
  ? "https://ideamosestudio.github.io/krk-latinoamericana"
  : "https://krk.com.ar");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  compress: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;