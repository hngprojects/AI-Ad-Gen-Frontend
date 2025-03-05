import clsx from "clsx";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "../globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Adgen",
  description: "AI Adgen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable)}>
      <body className="font-nunito flex flex-col items-center bg-[#FAFAFA]">
        {children}
      </body>
    </html>
  );
}
