"use client";

import { useImageContext } from "@/domains/ads-gen/context/ImageContext";
import { DesktopAdPreviewNavigation } from "@/domains/external/components/desktop-ad-preview-navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageAdPreviewPage = () => {
  const { setImageUrl, setPromptData } = useImageContext();
  const [isLoaded, setIsLoaded] = useState(false);
  const details = JSON.parse(localStorage.getItem("imageAdData") || "{}");

  useEffect(() => {
    const storedImageUrl = localStorage.getItem("generatedImageUrl");
    if (storedImageUrl) setImageUrl(storedImageUrl);
    setPromptData(JSON.stringify({
      text: details.adGoal,
      productName: details.productName,
      aspectRatio: details.adSize,
      language: details.language,
      resolution: "1080x1080", // Example resolution
      targetAudience: details.demographics,
      region: details.region,
    }));
    setIsLoaded(true);
  }, [setImageUrl, setPromptData]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div>
      <div className="pt-8">
        <div className="bg-white max-w-[1200px] w-full mx-auto py-8 flex flex-col gap-6 rounded-[12px]">
          <div className="px-6">
            <DesktopAdPreviewNavigation />
          </div>

          <div className="px-6 flex max-lg:flex-col gap-6">
            <div className="rounded-[8px] lg:min-w-[598px] max-w-[598px] rounded=[8px] overflow-hidden">
              <Image
                className="rounded-[8px] w-full h-auto object-cover"
                src={localStorage.getItem("generatedImageUrl") || "/progressImage.png"}
                height={598}
                width={395}
                alt={"Generated Ad Image"}
                priority
                unoptimized
              />
            </div>

            <div className="max-w-[455px] w-full px-4 py-6 rounded-[8px] flex flex-col gap-4 border border-[#F2F2F2] bg-[#FCFCFC] ">
              <div>
                <p className="text-[#121316] text-base font-medium leading-6 mb-3">
                  Ad Prompt
                </p>

                <div className="bg-[#FCFCFC] border border-[#E4E7EC] p-4 text-[18px] font-medium leading-7  text-[#7D7D7D] rounded-[9px]">
                  <p className="max-w-[362px]">{details.adGoal}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 ">
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316] ">Product Name</h4>
                  <p className="text-[#5F5F5F]">{details.productName}</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316] ">Aspect Ratio</h4>
                  <p className="text-[#5F5F5F]">{details.adSize}</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316] ">Language</h4>
                  <p className="text-[#5F5F5F]">{details.language}</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316] ">Resolution</h4>
                  <p className="text-[#5F5F5F]">1080x1080</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316] ">Target Audience</h4>
                  <p className="text-[#5F5F5F]">{details.demographics}</p>
                </div>
                <div className="flex flex-col gap-1 font-normal text-base leading-6 py-1">
                  <h4 className="text-[#121316] ">Region</h4>
                  <p className="text-[#5F5F5F]">{details.region}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAdPreviewPage;
