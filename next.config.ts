import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      basePath: "/krk-latinoamericana",
      assetPrefix: "/krk-latinoamericana/",
      trailingSlash: true,
      typescript: { ignoreBuildErrors: true },
      env: { NEXT_PUBLIC_BASE_PATH: "/krk-latinoamericana" },
    }
  : { env: { NEXT_PUBLIC_BASE_PATH: "" } };

export default nextConfig;
