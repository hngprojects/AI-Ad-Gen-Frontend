import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
  ads_created: number;
  is_subscribed: boolean;
  created_at: string;
}

interface SubscriptionFeatures {
  inpainting: boolean;
  predefined_prompts: boolean;
  advanced_editing: boolean;
  high_resolution: boolean;
  inpainting_cost: number;
  ad_generation_cost: number;
  can_download: boolean;
}
export interface SubScriptionData {
  message: string;
  status: string;
  data: {
    subscription: {
      has_subscription: boolean;
      plan_type: string;
      credits: number;
      expiry_date: string;
      feature: SubscriptionFeatures;
    };
  };
}

interface AuthStore {
  user: User | null;
  token: string | null;
  subscriptionData: SubScriptionData | null;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  setSubsciptionData: (subscriptionData: SubScriptionData) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      subscriptionData: null,
      setUser: (user) => set({ user }),
      setSubsciptionData: (subscriptionData) => set({ subscriptionData }),
      setToken: (token) => set({ token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
