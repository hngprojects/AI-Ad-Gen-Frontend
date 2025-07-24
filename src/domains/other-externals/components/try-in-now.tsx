import React from "react";
import Image from "next/image";
import OnboardingStep from "./onboarding-step";

const TryInNow = () => {
  return (
    <OnboardingStep
      number={3}
      title="Click &ldquo;Try it Now&rdquo;"
      content={
        <>
          <li>Test how genz.ad works instantly</li>
          <li>No payment is required - just explore and create</li>
        </>
      }
      image={
        <Image
          src="/hiw3.svg"
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

export default TryInNow;
