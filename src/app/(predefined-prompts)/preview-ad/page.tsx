"use client";

import { Button } from "@/components/ui/button";
import { useImageContext } from "@/domains/ads-gen/context/ImageContext";
import { DesktopAdPreviewNavigation } from "@/domains/external/components/common/desktop-ad-preview-navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const { imageUrl, promptData, setImageUrl, setPromptData } =
    useImageContext();
  const [isLoaded, setIsLoaded] = useState(false);
  const details = promptData ? JSON.parse(promptData) : {};

  useEffect(() => {
    const storedImageUrl = localStorage.getItem("imageUrl");
    const storedPromptData = localStorage.getItem("promp  tData");
    if (storedImageUrl) setImageUrl(storedImageUrl);
    if (storedPromptData) setPromptData(storedPromptData);
    setIsLoaded(true);
  }, [setImageUrl, setPromptData]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div>
      <div className="">
        <div className="w-full mx-auto flex flex-col gap-6 max-sm:p-6">
          <div className="w-full rounded-[8px] overflow-hidden flex-col-reverse sm:flex-row flex border border-[#F2F2F2] max-sm:bg-white">
            <div className="bg-white p-[24px]">
              <h1 className="text-[#2A2A2A] text-[24px] leading-[32px] font-[500] mb-10 hidden md:inline-block">
                Customize Your Ad
              </h1>
              <div className="text-[#121316] text-base font-medium leading-6 mb-3">
                <p>Ad Prompt</p>
              </div>

              <div className="bg-[#FCFCFC] border border-[#E4E7EC] p-4 text-base md:text-[18px] font-normal leading-7  text-[#7D7D7D] rounded-[9px]">
                <p className="max-w-[362px]">{details.text}</p>
              </div>

              <Link href={"/signin"}>
                <Button className="mt-3 bg-light-purple cursor-pointer text-white px-6 py-5 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 w-full mx-auto">
                  <p>Generate Your Ad</p> <ArrowRight />
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-6 justify-self-stretch w-full pb-6">
              <DesktopAdPreviewNavigation
                className="w-full px-5 py-3 bg-white"
                imageUrl={imageUrl}
                type="demo"
              />

              <div className="max-md:bg-white max-md:px-4 flex items-center justify-center">
                <div className="bg-[#F0F3F5]  rounded-lg p-4 md:p-6 sm:p-[32px] min-h-[274px] lg:min-w-[598px] max-w-[598px] w-full max-h-[350px] md:max-h-[598px] self-center overflow-hidden">
                  <Image
                    className="rounded-[4px] w-full h-auto object-cover"
                    src={imageUrl || "/progressImage.png"}
                    height={598}
                    width={395}
                    alt={"Progress Image"}
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
