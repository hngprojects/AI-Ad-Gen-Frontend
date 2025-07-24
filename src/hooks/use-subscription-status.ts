import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axios-fetch"; 
import { SubScriptionData, useAuthStore } from "@/store/auth-store";

const fetchSubscriptionStatus = async () => {
  const response = await getRequest("/subscriptions/me");
  return response as SubScriptionData;
};

export const useSubscriptionStatus = () => {
  const setSubscriptionData = useAuthStore((state) => state.setSubsciptionData);


  return useQuery({
    queryKey: ["subscriptionStatus"],
    queryFn: async () => {
      const subscriptionData = await fetchSubscriptionStatus();
      setSubscriptionData(subscriptionData);
      return subscriptionData;
    },
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false, 
  });
};
