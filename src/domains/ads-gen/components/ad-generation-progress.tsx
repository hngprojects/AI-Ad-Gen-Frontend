"use client";

import BackButton from "@/domains/ads-gen/components/back-button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import progressImage from "../../../../public/progressImage.png";

const steps = [
  "Analysed your brand audience",
  "Crafting engaging copy & headlines...",
  "Add high impact visuals",
  "Optimize for performance and reach",
  "Finalize your AI-powered Ad",
];

const AdGenerationProgress: React.FC = () => {
  const [progress, setProgress] = useState(20);
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress((prev) => prev + 20);
        setCurrentStep((prev) => prev + 1);
      } else {
        clearInterval(interval);
        router.push("/preview-ad");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentStep, router]);

  return (
    <div className="max-w-[1280px] w-full py-2">
      <BackButton fallbackUrl="/generate-ad" />
      <div className="w-full flex max-lg:flex-col gap-10 justify-between">
        <div className="max-w-[540px] w-full ">
          <h2 className="text-[32px] text-[#121316] leading-10 font-semibold">
            Generating Your Image Ad... {progress}%
          </h2>
          <p className="text-[#5F5F5F]  font-medium leading-7 text-[18px] pt-4 pb-6 ">
            Our AI is working behind the scenes to craft the perfect ad for you.
            Sit tight, your ad is almost ready!
          </p>
          <div className="space-y-1">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-5">
                {index + 1 < currentStep ? (
                  <div className="flex flex-col gap-2 items-center">
                    <CheckCircle className="text-blue-500" size={20} />
                    {index + 1 !== steps.length && (
                      <div className="w-[1px] h-[22px] bg-[#A1A1A1]"></div>
                    )}
                  </div>
                ) : index + 1 === currentStep ? (
                  <div className="flex flex-col gap-2 items-center">
                    <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                    {index + 1 !== steps.length && (
                      <div className="w-[1px] h-[22px] bg-[#A1A1A1]"></div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C13.11 14 14 13.11 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10Z"
                        fill="#A1A1A1"
                      />
                    </svg>
                    {index + 1 !== steps.length && (
                      <div className="w-[1px] h-[22px] bg-[#A1A1A1]"></div>
                    )}
                  </div>
                )}
                <span
                  className={
                    index + 1 < currentStep
                      ? " font-medium leading-7 text-[18px] "
                      : index + 1 === currentStep
                      ? "text-[#458DE1]"
                      : "text-[#A1A1A1]"
                  }
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Image
            className="rounded-lg w-full h-auto object-cover"
            src={progressImage}
            height={495}
            width={395}
            alt={"Progress Image"}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default AdGenerationProgress;
