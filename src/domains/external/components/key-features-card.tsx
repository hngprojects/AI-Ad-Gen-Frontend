import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Nunito } from "next/font/google";
import Image from "next/image";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

interface Feature {
  title: string;
  description: string;
  img: string;
}

interface FeatureCardProps {
  featuresData?: Feature[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ featuresData }) => {
  return (
    <div
      className={`flex flex-col md:flex-row font-${nunito.variable}  gap-4 bg-white w-full lg:max-w-[1168px]`}
    >
      {featuresData?.map((feature, index) => (
        <Card
          key={index}
          className="rounded-2xl border border-[#F8E6F8] bg-[#FEFBFE] hover:border-b-[6px] duration-500 flex flex-col gap-2 w-full flex-[1]"
        >
          <picture className="w-full h-fit">
            <Image
              src={feature.img}
              height={306}
              width={373}
              alt="card picture"
              className="w-full h-auto"
            />
          </picture>
          <div className="p-4 pb-9">
            <CardHeader className="p-0">
              <CardTitle className="text-[#121316] p-0 text-[24px] font-bold leading-normal">
                <h3> {feature.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription
                className={`${nunito.variable} text-[#787878] p-0 text-[16px] font-normal leading-[24px]`}
              >
                {feature.description}
              </CardDescription>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FeatureCard;
