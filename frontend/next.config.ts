import type { NextConfig } from "next";

// A backend URL-ből kinyerjük a hostot, hogy a `next/image` engedélyezze
// a backend-en tárolt feltöltött képeket (pl. /api/upload/files/*).
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [];

if (apiUrl) {
  try {
    const u = new URL(apiUrl);
    remotePatterns.push({
      protocol: u.protocol.replace(":", "") as "http" | "https",
      hostname: u.hostname,
      port: u.port || undefined,
      pathname: "/**",
    });
  } catch {
    // invalid URL — figyelmen kívül hagyjuk
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
    formats: ["image/avif", "image/webp"],
    // next/image csak a listázott quality értékeket engedi (default: [75])
    qualities: [75, 80, 82],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
