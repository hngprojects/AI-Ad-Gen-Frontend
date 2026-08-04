import React from "react";
import Image from "next/image";
import OnboardingStep from "./onboarding-step";

const GenerateSec = () => {
  return (
    <OnboardingStep
      number={5}
      title="Generate Your Ad"
      content={
        <>
          <li>
            Click the &quot;Generate&quot; button to create a professional ad
          </li>
          <li>Genz.ad does the work - no design skills needed!</li>
        </>
      }
      image={
        <Image
          src="/hiw5.svg"
          alt="Step 1 illustration"
          width={1200}
          height={800}
          className="object-cover xl:max-w-none"
          priority
        />
      }
      imagePosition="right"
    />
  );
};

export default GenerateSec;
