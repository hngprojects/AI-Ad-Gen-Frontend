"use client";

import AuthForm from "@/app/(auth)/signin/sign-in-form";
import Loader from "@/components/ui/loader";
import { useAuthStore } from "@/store/auth-store";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const LoginContent = () => {
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as "signin" | "signup") || "signin";
  return <AuthForm type={type} />;
};


const Login = () => {

  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
};
export default Login;

