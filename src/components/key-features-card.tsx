import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define the structure of a feature item
interface Feature {
  title: string;
  description: string;
}

// Data for the feature cards
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

// FeatureCard component that renders the feature cards
const FeatureCard = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 max-w-7xl bg-white mx-auto px-8">
      {/* Loop through featuresData to generate cards dynamically */}
      {featuresData.map((feature, index) => (
        <Card
          key={index}
          className="px-10 py-8 gap-6 items-start rounded-2xl border border-[#FCFCFC] bg-[#F8E6F8]/50"
        >
          {/* Card Header containing the feature title */}
          <CardHeader className="p-0">
            <CardTitle className="text-[#520052] text-[32px] font-semibold leading-[40px] pr-28">
              {feature.title}
            </CardTitle>
          </CardHeader>
          {/* Card Content containing the feature description */}
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
