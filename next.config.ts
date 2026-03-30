import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(:path*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            // Recommended: Modern version of X-Frame-Options
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;