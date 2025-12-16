import type { NextConfig } from "next";

//const isProd = process.env.NODE_ENV === "production";
//const repo = "runxii.github.io";


const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // It tells Next.js where to find assets (CSS, JS, images).
  //basePath: isProd ? `/${repo}` : "",
  //assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
