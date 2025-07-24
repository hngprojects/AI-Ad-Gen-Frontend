"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  LayoutGrid,
  CheckCircle2,
  ImageIcon,
  ScissorsIcon,
  DownloadIcon,
  SparklesIcon,
  TextIcon,
} from "lucide-react";
import { useAuthStore } from "@/store/auth-store";
import { useEffect, useState } from "react";
import { getRequest } from "@/lib/axios-fetch";
import BackButton from "@/domains/ads-gen/components/back-button";
import { useSubscriptionStatus } from "@/hooks/use-subscription-status";

interface UserCountState {
  ads: number;
  publishedAds: number;
}

const FeatureIcon = {
  predefined_prompts: TextIcon,
  inpainting: ScissorsIcon,
  high_resolution: ImageIcon,
  advanced_editing: SparklesIcon,
  can_download: DownloadIcon,
};

const FeatureLabels = {
  predefined_prompts: "Predefined Prompts",
  inpainting: "Inpainting",
  high_resolution: "High Resolution",
  advanced_editing: "Advanced Editing",
  can_download: "Download Images",
};

const Profile = () => {
  const user = useAuthStore((state) => state.user);

  const [userCount, setUserCount] = useState<UserCountState>({
    ads: 0,
    publishedAds: 0,
  });

  const { data: userSubscription } = useSubscriptionStatus();

  const userSub = userSubscription?.data?.subscription;
  // console.log("SUBSCRIPTION", userSub);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const [userResponse] = await Promise.all([
          getRequest(`/users/${user?.id}`),
        ]);

        if (userResponse.status === "success") {
          setUserCount({
            ads: userResponse.data.number_of_generated_ads,
            publishedAds: userResponse.data.number_of_published_ads,
          });
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, [user?.id]);

  const formatJoinDate = (dateString: string | undefined) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  return (
    <div className="h-full p-0 md:p-12 flex flex-col overflow-hidden">
      <div className="p-2 md:p-4 flex flex-col">
        <BackButton
          label="Back to Dashboard"
          fallbackUrl="/dashboard"
          className="my-5"
        />
        <Card className="w-full flex-1 shadow-sm border-gray-200">
          <CardHeader className="mb-4 md:mb-8 p-4 md:p-6">
            <h1 className="text-3xl font-bold">Account</h1>
            <p className="text-gray-500">View your profile info</p>
          </CardHeader>
          <CardContent className="mx-2 md:mx-8 p-4 md:p-6 border border-[#ECECEC] rounded-md">
            <div className="max-w-3xl">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 bg-[#B800B8] text-white text-xl">
                    {user?.avatar_url ? (
                      <AvatarImage
                        src={user.avatar_url}
                        alt={`${user?.first_name} ${user?.last_name}`}
                      />
                    ) : (
                      <AvatarFallback className="bg-[#B800B8] text-white text-xl">
                        {(user?.first_name?.[0] ?? "") +
                          (user?.last_name?.[0] ?? "")}
                      </AvatarFallback>
                    )}
                  </Avatar>

                  <div>
                    <h2 className="text-xl font-semibold">
                      {user?.first_name} {user?.last_name}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <LayoutGrid className="h-4 w-4" />
                      <span>Joined: {formatJoinDate(user?.created_at)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-md font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      value={user?.email}
                      readOnly
                      className="bg-[#F5F7FB] text-[#A1A1A1] text-sm cursor-not-allowed"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="accountType"
                      className="text-md font-medium"
                    >
                      Account type
                    </Label>
                    {userSub?.plan_type === "FREE" ? (
                      <div className="bg-[#F5F7FB] rounded-md border border-gray-200 px-3 py-2 text-[#A1A1A1] text-sm cursor-not-allowed">
                        Unsubscribed - Free Plan
                      </div>
                    ) : userSub?.credits ? (
                      <div className="bg-[#F5F7FB] rounded-md border border-gray-200 px-3 py-2 text-[#A1A1A1] text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Subscribed - {userSub.plan_type} Plan</span>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-[#F5F7FB] rounded-md border border-gray-200 px-3 py-2 text-[#A1A1A1] text-sm cursor-not-allowed">
                        Free plan
                      </div>
                    )}
                  </div>

                  {userSub?.feature && (
                    <>
                      <div className="space-y-1">
                        <Label
                          htmlFor="credits"
                          className="text-md font-medium"
                        >
                          Available Credits
                        </Label>
                        <div className="px-1 py-1 text-[#121316] text-sm font-medium">
                          {userSub.credits} credits
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label className="text-md font-medium">
                          Plan Features
                        </Label>
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(userSub?.feature)
                            .filter(([key]) =>
                              [
                                "predefined_prompts",
                                "inpainting",
                                "high_resolution",
                                "advanced_editing",
                                "can_download",
                              ].includes(key)
                            )
                            .map(([key]) => {
                              const Icon =
                                FeatureIcon[key as keyof typeof FeatureIcon];
                              return (
                                <div
                                  key={key}
                                  className="flex items-center gap-2 bg-[#F5F7FB] rounded-md px-2 py-1"
                                >
                                  <Icon className="h-4 w-4 text-[#B800B8]" />
                                  <span className="text-xs text-gray-700">
                                    {
                                      FeatureLabels[
                                        key as keyof typeof FeatureLabels
                                      ]
                                    }
                                  </span>
                                </div>
                              );
                            })}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label className="text-md font-medium">
                          Pricing Details
                        </Label>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm max-w-[50%]">
                            <span>Ad Generation Cost</span>
                            <span className="font-medium">
                              {userSub.feature.ad_generation_cost} credits
                            </span>
                          </div>
                          <div className="flex justify-between text-sm max-w-[50%]">
                            <span>Inpainting Cost</span>
                            <span className="font-medium">
                              {userSub.feature.inpainting_cost} credits
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="space-y-1">
                    <Label htmlFor="adsCreated" className="text-md font-medium">
                      Ads Created
                    </Label>
                    <div className="px-1 py-1 text-[#121316] text-sm font-medium">
                      {userCount?.ads.toString().padStart(2, "0") || "02"}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="publishedAds"
                      className="text-md font-medium"
                    >
                      Published Ads
                    </Label>
                    <div className="px-1 py-1 text-[#121316] text-sm font-medium">
                      {userCount?.publishedAds?.toString().padStart(2, "0") ||
                        "02"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
