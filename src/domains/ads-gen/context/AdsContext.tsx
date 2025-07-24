"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

export interface Ad {
  ad_description: string;
  author_info: { name: string; avatar: string };
  created_at: string;
  final_url: string;
  id: string;
  image_url: string;
  is_published: boolean;
  prompt: string;
  target_audience: string;
  updated_at: string;
  product_name: string;
  ad_size: string;
}
interface Ads {
  user: Ad[];
  community: Ad[];
}

interface AdsContextType {
  adData: Ads;
  setAdData: (ad: Ads) => void;
  userPage: number;
  setUserPage: React.Dispatch<React.SetStateAction<number>>;
  communityPage: number;
  setCommunityPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
}

const AdsContext = createContext<AdsContextType | undefined>(undefined);

export const AdsProvider = ({ children }: { children: ReactNode }) => {
  const [adData, setAdData] = useState<Ads>({ user: [], community: [] });
  const [userPage, setUserPage] = useState<number>(1);
  const [communityPage, setCommunityPage] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <AdsContext.Provider
      value={{
        adData,
        setAdData,
        userPage,
        setUserPage,
        communityPage,
        setCommunityPage,
        isLoading,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};

export const useAdsContext = (): AdsContextType => {
  const context = useContext(AdsContext);
  if (!context) {
    throw new Error("useAdsContext must be used within an AdsProvider");
  }
  return context;
};
