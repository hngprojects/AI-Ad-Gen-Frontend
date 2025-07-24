import React from "react";
import Image from "next/image";
import OnboardingStep from "./onboarding-step";

const CustomizeSection = () => {
  return (
    <OnboardingStep
      number={4}
      title="Customize Your Ad"
      content={
        <>
          <li>
            {" "}
            Type a clear and simple description of your product or service
          </li>
          <li> A well-written description helps generate an effective ad</li>
          <li> Choose your platform - Facebook, Instagram, or other options</li>
          <li>
            {" "}
            Select your audience - Pick who should see your ad for better
            results
          </li>
          <li>
            {" "}
            Upload a product image (optional) - Add a visual to make your ad
            stand out
          </li>
        </>
      }
      image={
        <Image
          src="/hiw4.svg"
          alt="Step 1 illustration"
          width={1200}
          height={800}
          className="object-cover xl:max-w-none"
          priority
        />
      }
      imagePosition="left"
    />
  );
};

export default CustomizeSection;
