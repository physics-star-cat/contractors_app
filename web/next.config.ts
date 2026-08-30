import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 'export' removed 2026-08-30: /api route handlers (agent API + MCP) need
  // serverless functions. All pages remain statically prerendered by Vercel.
  trailingSlash: true,
};

export default nextConfig;
