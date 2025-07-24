import { getRequest, postRequest } from "@/lib/axios-fetch";
import { Query, useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface GenerateAdParams {
  ad_goal: string;
  ad_size: string;
  product_name: string;
  target_audience: string;
  productImage?: File | null;
}

interface AdTaskResponse {
  status: string;
  status_code: number;
  message: string;
  data: {
    task_id: string;
  };
}

interface TaskStatusResponse {
  status: string;
  status_code: number;
  message: string;
  data: {
    status: string;
    image_url?: string;
    success?: boolean;
    image_id?: string;
    prompt_used?: string;
    keywords?: string[];
    target_audience?: string;
    ad_description?: string;
    product_name?: string;
    is_published?: boolean;
  };
}

export function useGenerateAdImage() {
  const [taskId, setTaskId] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [completedData, setCompletedData] = useState<TaskStatusResponse | null>(
    null
  );

  const generateAd = useMutation({
    mutationFn: async (data: GenerateAdParams) => {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("ad_goal", data.ad_goal);
      formData.append("ad_size", data.ad_size);
      formData.append("product_name", data.product_name);
      formData.append("target_audience", data.target_audience);
      if (data.productImage) {
        formData.append("product_image", data.productImage);
      }
      return postRequest("/image/generate", formData, {
        "Content-Type": "multipart/form-data",
      });
    },
    onSuccess: (response: AdTaskResponse) => {
      setTaskId(response?.data?.task_id);
      setProgress(10);
      setError(null);
      setCompletedData(null);
    },
    onError: (error: Error) => {
      console.error("Error generating ad image:", error);
      setError(error.message);
      setProgress(0);
      setIsLoading(false);
    },
  });

  const adDataQuery = useQuery({
    queryKey: ["adTask", taskId],
    queryFn: async (): Promise<TaskStatusResponse> => {
      if (!taskId) throw new Error("No task ID");
      const response = await getRequest(`/image/task/${taskId}`);
      // console.log("Image generation status:", response);

      if (response.status_code === 200 && response.data.status === "pending") {
        setProgress((prev) => Math.min(prev + 30, 90));
      } else if (
        response.status_code === 201 ||
        response.data.status !== "pending"
      ) {
        // console.log("Image generation completed:", response);
        setCompletedData(response);
        setProgress(100);
      }
      // console.log("Image generation progress:", response.data.status);

      return response;
    },
    enabled: !!taskId && !completedData,
    refetchInterval: (query: Query<TaskStatusResponse, Error>) => {
      const data = query.state.data;
      if (
        !data ||
        (data.status_code === 200 && data.data.status === "pending")
      ) {
        return 3000;
      }
      return false;
    },
    select: (data) => ({
      ...data,
      data: {
        ...data.data,
        image_id: taskId,
        product_name: data.data.product_name,
      },
    }),
  });

  // Handle errors from the query
  useEffect(() => {
    if (adDataQuery.error) {
      setError("Failed to fetch image generation status. Please try again.");
      setProgress(0);
      setIsLoading(false);
    }
  }, [adDataQuery.error]);

  useEffect(() => {
    if (adDataQuery.data?.data?.image_url) {
      setProgress(100);
      setIsLoading(false);
    }
  }, [adDataQuery.data]);

  return {
    generateAd: generateAd.mutate,
    isGenerating: generateAd.isPending || (!!taskId && progress < 100),
    adData: completedData,
    isFetchingAd: isLoading,
    progress,
    error,
    reset: () => {
      setTaskId(null);
      setProgress(0);
      setError(null);
      setCompletedData(null);
    },
  };
}
