import Footer from "@/domains/external/components/common/secondary-footer";
import Header from "@/domains/external/components/common/header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen items-center gap-8 bg-[#F9FAFB]">
      <Header />
      <main className="">{children}</main>

      <Footer />
    </div>
  );
}
