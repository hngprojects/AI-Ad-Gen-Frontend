import React from "react";
import Image from "next/image";
import OnboardingStep from "./onboarding-step";

const PreviewAd = () => {
  return (
    <OnboardingStep
      number={6}
      title="Preview Your Ad"
      content={
        <>
          <li>Check how your ad looks before sharing</li>
          <li>Make quick edits if needed to perfect your message.</li>
        </>
      }
      image={
        <Image
          src="/hiw6.svg"
          alt="Step 1 illustration"
          width={1200}
          height={800}
          className="object-cover  xl:max-w-none"
          priority
        />
      }
      imagePosition="left"
    />
  );
};

export default PreviewAd;
