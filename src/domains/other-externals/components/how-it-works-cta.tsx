"use client"; 

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const CtaHowItWorks: React.FC = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/signin?type=signin");
  };

  return (
    <section
      className="
        relative
        py-0
        bg-[#B800B8]
        overflow-hidden
        text-white
        rounded-[10px]
      "
    >
      <div
        className="
          container
          mx-auto
          px-4
          grid
          grid-cols-1
          md:grid-cols-2
          items-center
          md:gap-8
          relative
        "
      >
        <div className="md:pl-8 py-8">
          <h3 className="text-[20px] text-3xl font-semibold md:font-bold leading-7 md:leading-12 mb-4">
            Simple &amp; Quick Ad Creation.
          </h3>
          <p className="text-base md:text-[28px] leading-6 md:leading-7 mb-6">
            With Genz.ad, you can turn ideas into powerful ads in minutes. No
            complex tools. No expensive software. Just your vision!
          </p>

          <button
            onClick={handleSignIn}
            className="
              inline-block
              px-6
              py-3
              bg-white
              text-[#B800B8]
              font-semibold
              rounded-md
              hover:opacity-90
              transition
              max-md:w-full
            "
          >
            Start Creating Your Ad
          </button>
        </div>

        <div className="flex items-end justify-end overflow-hidden">
          <Image
            src="/man.svg"
            alt="Man with Megaphone"
            width={1200}
            height={800}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CtaHowItWorks;
