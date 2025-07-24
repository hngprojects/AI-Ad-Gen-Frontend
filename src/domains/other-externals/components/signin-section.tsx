import React from "react";
import Image from "next/image";
import OnboardingStep from "./onboarding-step";

const SignInSection = () => {
  return (
    <OnboardingStep
      number={2}
      title="Sign in or Sign up"
      content={
        <>
          <li>Use your Google account for fast and secure access</li>
          <li> No long forms - just a one-click login!</li>
        </>
      }
      image={
        <Image
          src="/howitworks2.svg"
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

export default SignInSection;
