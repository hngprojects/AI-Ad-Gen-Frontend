import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { TopProgressBarProvider } from "@/lib/nprogress/top-progress-bar-provider";
import QueryProvider from "@/lib/react-query/query-provider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./globals.css";
import { SonnerToaster } from "@/lib/sonner/sonner-toaster";

// Initialize the Nunito font
const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "genz.ad",
    template: "%s | genz.ad",
  },
  description:
    "Genz.ad helps you generate High-converting, Smarter Adverts in minutes.",
  keywords: [
    "AI",
    "high-converting ads",
    "adverts",
    "compelling ads",
    "Ad services",
    "on-demand services",
  ],
  authors: [{ name: "HNG12 - Genz.ad" }],
  creator: "HNG12 - Genz.ad",
  publisher: "HNG12 - Genz.ad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://genz.ad",
    siteName: "genz.ad",
    title: "genz.ad - Generate High-converting, Smarter Adverts in minutes",
    description:
      "Genz.ad helps you generate High-converting, Smarter Adverts in minutes.",
  },
  applicationName: "genz.ad",
  category: "Service Provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta
          httpEquiv="Cache-Control"
          content="no-store, no-cache, must-revalidate"
        />
      </head>
      <body
        className="font-nunito bg-[#FFF] overflow-x-hidden"
        cz-shortcut-listen="true"
      >
        <SonnerToaster />
        <QueryProvider>
          <TopProgressBarProvider>{children}</TopProgressBarProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
