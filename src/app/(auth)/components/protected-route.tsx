"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { toast } from "sonner";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated && !token) {
      toast.error("You're signed out");
      router.push("/");
    }
  }, [token, router, isHydrated]);

  if (!isHydrated) return null; 

  return token ? <>{children}</> : null;
}
