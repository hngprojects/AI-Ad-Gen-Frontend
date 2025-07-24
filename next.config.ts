import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "genz.ad",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "2.img-dpreview.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.sciencebuddies.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.lucidpic.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
