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
  },
};

export default nextConfig;
