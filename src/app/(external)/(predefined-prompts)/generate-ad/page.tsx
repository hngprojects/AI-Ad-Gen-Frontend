"use client";

import { CardContent } from "@/components/ui/card";
import AdGenerationProgress from "@/domains/ads-gen/components/ad-generation-progress";
import PromptSelection from "@/domains/ads-gen/components/prompt-selection";
import { useState } from "react";

const Page = () => {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState<number | null>(
    null
  );
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSelectPrompt = (index: number) => {
    setSelectedPromptIndex(index);
  };

  const handleGenerateAd = () => {
    setIsGenerating(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-10 px-6 ">
      <CardContent
        className={`${
          isGenerating ? "p-8" : "p-6"
        } max-w-[1200px] w-full mx-auto bg-white flex flex-col gap-10  rounded-[20px]`}
      >
        {isGenerating ? (
          <AdGenerationProgress />
        ) : (
          <div>
            <PromptSelection
              selectedPromptIndex={selectedPromptIndex}
              onSelectPrompt={handleSelectPrompt}
              onGenerateAd={handleGenerateAd}
            />
          </div>
        )}
      </CardContent>
    </div>
  );
};

export default Page;
