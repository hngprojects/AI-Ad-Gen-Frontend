import clsx from 'clsx';
import type { Metadata } from 'next';

import { Manrope, Nunito, ADLaM_Display } from 'next/font/google';

import { TopProgressBarProvider } from '@/lib/nprogress/top-progress-bar-provider';
import QueryProvider from '@/lib/react-query/query-provider';

import { SonnerToaster } from '@/components/sonner-toaster';
import './globals.css';


const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
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
  title: 'AI Adgen',
  description: 'AI Adgen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(manrope.variable, nunito.variable, adlam_display.variable)}>
      <body className="font-nunito">
      <SonnerToaster />
      <QueryProvider>
        <TopProgressBarProvider>{children}</TopProgressBarProvider>
      </QueryProvider>
      </body>
    </html>
  );
}
