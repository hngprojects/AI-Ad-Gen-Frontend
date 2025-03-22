import { useQuery } from "@tanstack/react-query";

import { mockImages } from "../utils/step-one-form-options";
import { getRequest } from "@/lib/axios-fetch";



export const useCampaignImage = (imageId: string | null) => {
  return useQuery({
    queryKey: ["campaignImage", imageId],
    queryFn: async () => {
      if (!imageId) {
        throw new Error("Image ID is required");
      }
      const response = await getRequest(`/image/${imageId}`);
      return response.data;
    },
    enabled: !!imageId,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export const useMockImage = (imageId: string) => {
  const image = mockImages.find((img) => img.id === imageId);

  return {
    data: image ? { image } : null,
    isLoading: false,
    error: !image ? "Image not found" : null,
  };
};
