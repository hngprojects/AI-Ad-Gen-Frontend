import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Feature {
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    title: "AI-powered Visuals",
    description:
      "Get automated image and video suggestions that fit your campaign.",
  },
  {
    title: "Analytics Insights",
    description: "AI analyzes your past campaigns to enhance future ads.",
  },
  {
    title: "Multi-Platform",
    description: "Download Ads in the perfect format for every platform.",
  },
];

const FeatureCard = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 max-w-7xl bg-white mx-auto px-8">
      {featuresData.map((feature, index) => (
        <Card
          key={index}
          className="px-10 py-8 gap-6 items-start rounded-2xl border border-[#FCFCFC]  bg-[#F8E6F8]/50"
        >
          <CardHeader className="p-0">
            <CardTitle className="text-[#520052] text-[32px] font-semibold leading-[40px] pr-28">
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <CardDescription className="text-[#7D7D7D] text-2xl font-normal leading-[32px]">
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeatureCard;
