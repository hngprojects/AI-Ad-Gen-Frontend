import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axios-fetch";
import { useAdsContext } from "../context/AdsContext";

export const useAdsData = () => {
  const { userPage, communityPage, setUserPage, setCommunityPage } =
    useAdsContext();

  const PAGE_SIZE = 10;

  const fetchAds = async (url: string, page: number) => {
    const response = await getRequest(url, { page, page_size: PAGE_SIZE });
    return response.data;
  };

  const publishedQuery = useQuery({
    queryKey: ["published-ads", communityPage],
    queryFn: () => fetchAds("/image/all/published", communityPage),
    placeholderData: (prevData) => prevData ?? [],
  });

  const userQuery = useQuery({
    queryKey: ["user-ads", userPage],
    queryFn: () => fetchAds("/image/", userPage),
    placeholderData: (prevData) => prevData ?? [],
  });

  return {
    publishedImages: publishedQuery.data || [],
    userImages: userQuery.data || [],
    isLoading: publishedQuery.isLoading || userQuery.isLoading,
    isError: publishedQuery.isError || userQuery.isError,

    nextUserPage: () =>
      setUserPage((prev) => Math.min(userQuery.data.total_count, prev + 1)),
    prevUserPage: () => setUserPage((prev) => Math.max(1, prev - 1)),
    nextCommunityPage: () =>
      setCommunityPage((prev) =>
        Math.min(publishedQuery.data.total_count, prev + 1)
      ),
    prevCommunityPage: () => setCommunityPage((prev) => Math.max(1, prev - 1)),
  };
};
