import clsx from "clsx";
import type { Metadata,Nunito, ADLaM_Display } from "next";
import { Manrope } from "next/font/google";




import { TopProgressBarProvider } from "@/lib/nprogress/top-progress-bar-provider";
import QueryProvider from "@/lib/react-query/query-provider";
import { SonnerToaster } from "@/components/sonner-toast"

import Header from "@/components/Header";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ["300", "400", "500", "700", "900"]
});

// NB: ADLaM Display font is for the logo only
const adlam_display = ADLaM_Display({
  variable: '--font-adlam-display',
  subsets: ['latin'],
  weight: "400"
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


    <html lang="en" className={clsx(manrope.variable, nunito.variable, adlam_display.variabl)}>
      <body className="dark font-manrope">
        <QueryProvider>
          <TopProgressBarProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <SonnerToaster />
            </div>
          </TopProgressBarProvider>
        </QueryProvider>

      </body>
    </html>
  );
}
