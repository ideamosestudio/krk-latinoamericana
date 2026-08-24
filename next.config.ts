import type { NextConfig } from "next";

const siteUrl = process.env.SITE_URL ?? "https://krk.com.ar";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  compress: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
