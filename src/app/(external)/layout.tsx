import { ImageProvider } from "@/domains/ads-gen/context/ImageContext";
import Header from "@/domains/external/components/common/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ImageProvider>
        <Header />
        {children}
      </ImageProvider>
    </>
  );
}
