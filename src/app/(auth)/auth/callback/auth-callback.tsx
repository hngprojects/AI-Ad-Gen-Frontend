"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/auth-store";
import { getRequest } from "@/lib/api";
import Loader from "@/components/ui/loader";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  const [tokenSet, setTokenSet] = useState(false);

  const token = searchParams.get("access_token");

  useEffect(() => {
    if (token) {
      setToken(token);
      setTokenSet(true); // Ensure token is set before fetching user
    } else {
      router.push("/signin?error=missing_token");
    }
  }, [token, router, setToken]);

  const {
    data: user,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getRequest("/users/me"),
    enabled: tokenSet, // Fetch user only after token is set
    retry: 1,
  });

  useEffect(() => {
    if (isSuccess && user) {
      setUser(user.data);
      router.push("/dashboard");
    }
  }, [user, isSuccess, setUser, router]);

  if (error) {
    console.error("Failed to fetch user:", error);
    return <p>Error authenticating. Redirecting...</p>;
  }

  return;
  <Loader />;
}
