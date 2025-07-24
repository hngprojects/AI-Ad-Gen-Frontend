import { postRequest } from "@/lib/axios-fetch";
import { useMutation } from "@tanstack/react-query";

export function useAdGoal() {
  const mutation = useMutation({
    mutationFn: async (adGoal: string) => {
      const response = await postRequest("/image/target-audience", {
        ad_goal: adGoal,
      });
      if (response?.data?.target_audience?.length > 5) {
        return {
          ...response,
          data: {
            ...response.data,
            target_audience: response.data.target_audience.slice(0, 5),
          },
        };
      }
      return response;
    },
    onError: (error: Error) => {
      console.error("Error submitting ad goal:", error);
    },
  });

  return {
    submitAdGoal: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    targetAudience: mutation.data?.data?.target_audience || [],
    reset: mutation.reset,
  };
}