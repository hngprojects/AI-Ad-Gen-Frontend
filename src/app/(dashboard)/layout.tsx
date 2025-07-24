import { ProtectedRoute } from "@/app/(auth)/components/protected-route";
import { AdsProvider } from "@/domains/ads-gen/context/AdsContext";
import Header from "@/domains/external/components/common/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProtectedRoute>
        <Header />
        <AdsProvider>{children}</AdsProvider>
      </ProtectedRoute>
    </>
  );
}
