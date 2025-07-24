"use client";

import { useState } from "react";
import { toast } from "sonner";
import { getRequest } from "@/lib/api";

export const useGoogleAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

  const googleAuthEndpoint =
    environment === "development"
      ? "/auth/google/initiate?return_json=true&environment=local"
      : environment === "production"
      ? "/auth/google/initiate?return_json=true&environment=prod"
      : environment === "test"
      ? "/auth/google/initiate?return_json=true&environment=staging"
      : "/auth/google/initiate?return_json=true&environment=prod";

console.log("Environment:", environment);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      console.log("Environment:", environment);
      console.log("Google auth endpoint:", googleAuthEndpoint);
      const response = await getRequest(googleAuthEndpoint);

      if (response?.data?.auth_url) {
        console.log("Google login initiated:", response.data.auth_url);

        let authUrl = response.data.auth_url;
        if (authUrl.startsWith("/")) {
          authUrl = `https://staging.api.genz.ad${authUrl}`;
        }

        window.location.href = authUrl;
      } else {
        console.error("Invalid response:", response);
        toast.error("Failed to initiate Google login.");
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Failed to sign in with Google");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleGoogleLogin,
    isLoading,
  };
};
