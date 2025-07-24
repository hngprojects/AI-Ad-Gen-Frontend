import React from "react";
import Image from "next/image";
import OnboardingStep from "./onboarding-step";

const ShareAd = () => {
  return (
    <OnboardingStep
      number={8}
      title="Share Your Ad"
      content={
        <>
          <li>Post your ad directly to your selected platform.</li>

          <li> Reach your audience and start getting results!</li>
        </>
      }
      image={
        <Image
          src="/hiw8.svg"
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

export default ShareAd;
