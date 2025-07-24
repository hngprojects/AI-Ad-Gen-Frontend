// import AuthNav from "../../domains/auth/components/AuthNav";
// import AuthFooter from "../../domains/auth/components/AuthFooter";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <div className="flex flex-col min-h-screen items-center gap-8 bg-[#F9FAFB]">
    //   {/* <AuthNav /> */}
    //   <main className="">{children}</main>

    //   {/* <AuthFooter /> */}
    // </div>
    <main className="">{children}</main>
  );
}
