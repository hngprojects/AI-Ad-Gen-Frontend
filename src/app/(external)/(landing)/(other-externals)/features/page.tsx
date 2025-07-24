"use client";

import { useAuthStore } from "@/store/auth-store";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="relative">
      <section className="text-center bg-[#F8E6F8] w-screen h-auto flex flex-col justify-between py-8 px-4 md:py-12 md:px-8 lg:py-16 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#b800b8] font-[400] text-[24px] leading-[32px]  md:font-[700] lg:font-[700]  md:text-[40px]  lg:text-[40px]md:leading-[48px] lg:leading-[48px] tracking-[0%]">
            Features & Benefits
          </h1>
          <p className="text-[28px] leading-[48px] font-[600]  md:text-[40px] lg:text-[40px] md:font-bold lg:font-bold text-[#16151E] mt-4">
            Effortless AI-Powered Ad Creation for Maximum Impact
          </p>
          <p className="text-[#16151E]  md:font-[400] lg:font-[400] md:text-[20px] lg:text-[20px]  md:leading-[28px] lg:leading-[28px] tracking-[0%] max-w-3xl mx-auto mt-4">
            Generate high-converting ads instantly with AI-powered automation
            and real-time optimization.
          </p>
          <Link
            href={user ? "/dashboard" : "/signin?type=signin"}
            className="bg-[#b800b8] text-white text-[18px] tracking-[0%] px-6 py-3 rounded-[6px] hover:bg-dark-purple font-medium flex items-center justify-center mx-auto mt-6 w-fit"
          >
            Get Started Now <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
        <h2 className="font-[600] text-[28px] leading-[36px] md:text-[40px] lg:text-[40px] md:font-bold lg:font-bold text-center md:leading-[48px] lg:leading-[48px] tracking-[0%] text-[#16151E] mb-4">
          AI-Powered Ad Creation
        </h2>
        <p className="text-[#5F5F5F] text-[20px] leading-[28px] md:text-[24px] lg:text-[24px] md:leading-[32px] lg:leading-[32px] md:font-[500] lg:font-[500] tracking-[0%] text-center max-w-3xl mx-auto mb-12">
          Automatically generates engaging ad copy & visuals, adapting easily to
          your brand tone and audience needs. Effortless, effective, and
          tailored for impact.
        </p>
        <div className="flex justify-center">
          <div className="overflow-hidden w-full">
            <Image
              src="/ai-powered-ad.svg"
              alt="AI-Powered Ad Creation Interface"
              width={1280}
              height={914}
              className="w-full h-auto border border-[#E3E3E3] rounded-[20px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#E8F1FB] w-screen py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[600] text-[28px] leading-[36px] md:text-[40px] lg:text-[40px] md:font-bold lg:font-bold text-center md:leading-[48px] lg:leading-[48px] tracking-[0%] text-[#16151E] mb-4">
            Smarter Adverts
          </h2>
          <p className="text-[#5F5F5F] text-[20px] leading-[28px] md:text-[24px] lg:text-[24px] md:leading-[32px] lg:leading-[32px] md:font-[500] lg:font-[500] tracking-[0%] text-center max-w-3xl mx-auto mb-12">
            Genz.ad AI enables you to create image ads optimized for various
            platforms and audiences no design or marketing expertise required.
          </p>
          <div className="flex justify-center">
            <div className="overflow-hidden w-full">
              <Image
                src="/smart-advert-ad.svg"
                alt="AI-Powered Ad Creation Interface"
                width={1280}
                height={914}
                className="w-full h-auto border-[0.5px] border-[#E3E3E3] rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
        <h2 className="font-[600] text-[28px] leading-[36px] md:text-[40px] lg:text-[40px] md:font-bold lg:font-bold text-center md:leading-[48px] lg:leading-[48px] tracking-[0%] text-[#16151E] mb-4">
          Community Inspiration & Success Stories
        </h2>
        <p className="text-[#5F5F5F] text-[20px] leading-[28px] md:text-[24px] lg:text-[24px] md:leading-[32px] lg:leading-[32px] md:font-[500] lg:font-[500] tracking-[0%] text-center max-w-3xl mx-auto mb-12">
          Discover how businesses are revolutionizing ad creation with AI. See
          their success stories and get inspired!
        </p>
        <div className="flex justify-center">
          <div className="overflow-hidden w-full">
            <Image
              src="/community-ad.svg"
              alt="AI-Powered Ad Creation Interface"
              width={1280}
              height={914}
              className="w-full h-auto border-[0.5px] border-[#E3E3E3] rounded-[20px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F8EFFE] rounded-[16px] px-6 md:px-20 py-12 md:py-16 lg:py-20 mx-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="font-[600] text-[24px] leading-[32px] md:text-[40px] lg:text-[40px] md:font-bold lg:font-bold md:leading-[48px] lg:leading-[48px] tracking-[0%] text-[#16151E]">
              Stop Wasting Time on Ad Design, Let AI Do It in Minutes
            </h1>
            <p className="text-[#151412] md:font-[400] lg:font-[400] md:leading-[28px] lg:[28px] md:text-[20px] lg:text-[20px] tracking-[0%] mt-4">
              Generate high converting ads without starting from scratch. Our
              AI-powered tool handles the design work for you, so you can focus
              on growing your business.
            </p>
            <Link
              href="/signin?type=signin"
              className="mt-6 bg-[#B800B8] text-white px-6 py-3 rounded-[6px] text-[18px] leading-[28px] tracking-[0%] font-medium flex items-center gap-[10px] hover:bg-dark-purple mx-auto md:mx-0 w-fit"
            >
              Get Started Now <ArrowRight className="w-6 h-6" />
            </Link>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[300px] md:h-[427px] rounded-lg overflow-hidden">
              <Image
                src="/wasting-time-image.svg"
                alt="Woman working on a computer"
                width={544}
                height={444}
                className="rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
