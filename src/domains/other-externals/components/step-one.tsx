import React from "react";
import Image from "next/image";
import OnboardingStep from "./onboarding-step";

const StepOne = () => {
  return (
    <OnboardingStep
      number={1}
      title="Click on Generate Ad"
      content={
        <>
          <li>Tap the &ldquo;Generate Ad&rdquo; button to get started</li>
          <li>No experience needed! Just follow the easy steps!</li>
        </>
      }
      image={
        <Image
          src="/howitworks1.svg"
          alt="Step 1 illustration"
          width={1200}
          height={800}
          className="object-cover xl:max-w-none"
        />
      }
      imagePosition="right"
    />
  );
};

export default StepOne;
