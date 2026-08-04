/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from "axios";
import { useAuthStore } from "@/store/auth-store";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://staging.api.genz.ad/api/v1";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

const getHeaders = (headers?: Record<string, string>) => {
  const token = useAuthStore.getState().token;

  return {
    "Content-Type": headers?.["Content-Type"] || "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...headers,
  };
};

const refreshAccessToken = async () => {
  try {
    const response = await axiosInstance.post("/auth/refresh-access-token");
    const newAccessToken = response.data.data.access_token;

    useAuthStore.setState({ token: newAccessToken });

    return newAccessToken;
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    useAuthStore.getState().logout();
    throw new Error("Session expired. Please log in again.");
  }
};

const requestWithRetry = async (
  method: "get" | "post" | "patch" | "delete",
  url: string,
  data?: Record<string, any>,
  headers?: Record<string, string>
) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      ...(method === "get" ? { params: data } : { data: data }),

      headers: getHeaders(headers),
    });

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response?.status === 401) {
      try {
        const newToken = await refreshAccessToken();

        const retryResponse = await axiosInstance({
          method,
          url,
          ...(method === "get" ? { params: data } : { data: data }),

          headers: getHeaders({ Authorization: `Bearer ${newToken}` }),
        });

        return retryResponse.data;
      } catch (refreshError: any) {
        throw new Error(
          "Authentication failed. Please log in again.",
          refreshError
        );
      }
    }

    throw new Error(
      (axiosError.response?.data as { message?: string })?.message ||
        "Something went wrong"
    );
  }
};

// Exporting functions
export const getRequest = (
  url: string,
  params?: Record<string, any>,
  headers?: Record<string, string>
) => requestWithRetry("get", url, params, headers);

export const postRequest = (
  endpoint: string,
  data: Record<string, any>,
  headers?: Record<string, string>
) => requestWithRetry("post", endpoint, data, headers);

export const patchRequest = (
  endpoint: string,
  data: Record<string, any>,
  headers?: Record<string, string>
) => requestWithRetry("patch", endpoint, data, headers);

export const deleteRequest = (
  endpoint: string,
  headers?: Record<string, string>
) => requestWithRetry("delete", endpoint, undefined, headers);
