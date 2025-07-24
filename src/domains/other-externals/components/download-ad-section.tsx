import React from "react";
import Image from "next/image";
import OnboardingStep from "./onboarding-step";

const DownloadAd = () => {
  return (
    <OnboardingStep
      number={7}
      title="Download Your Ad"
      content={
        <>
          <li>Click the download button to save your ad to your device</li>
          <li>Keep it for future use or make edits anytime.</li>
        </>
      }
      image={
        <Image
          src="/hiw7.svg"
          alt="Step 1 illustration"
          width={1200}
          height={800}
          className="object-cover  xl:max-w-none"
          priority
        />
      }
      imagePosition="right"
    />
  );
};

export default DownloadAd;
