"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import aboutUs from "@/lottie/about-us.json";
import aiCreative from "@/lottie/ai-power-creative.json";
import localizedInclusive from "@/lottie/localized-inclusive.json";
import userFriendlyTools from "@/lottie/user-friendly-tools.json";
import dynamic from "next/dynamic";

const LottieComponent = dynamic(
  () => import("@/domains/external/components/common/lottie-animation"),
  {
    ssr: false,
  }
);
const AboutUs = () => {
  return (
    <div className="w-full xl:mx-auto bg-[#F8E6F8] max-lg:px-4 flex flex-col items-center ">
      <motion.div
        className="relative z-10 max-w-[1037px] w-full px-4 mt-16 md:mt-[100px] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <h2 className="text-[#B800B8] text-[32px] mb-2">About us</h2>
        <motion.h1
          className="text-3xl md:text-[64px] font-medium text-[#121316] tracking-tight mb-4 lg:max-w-5xl text-center lg:mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Transforming Advertising <br className="hidden xl:block" /> with AI
          Innovation
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          At Genz.ad, we believe that every business deserves high-quality,
          engaging ads without the need for a design or marketing team.
          That&apos;s why we built an AI-powered ad generator that simplifies ad
          creation, making it fast, effortless, and accessible to everyone.
        </motion.p>

        <div className="flex justify-center mb-10">
          <LottieComponent
            animationData={aboutUs}
            className="max-w-[700px] h-auto"
          />
        </div>
      </motion.div>

      <div className="bg-[#F9FAFB]">
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-[392px] lg:max-w-6xl mx-auto grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-[40px] lg:gap-12 text-center lg:text-left">
            <div className="bg-white p-8 rounded-lg border">
              <h2 className="text-xl font-bold text-[#520052] mb-2">
                Our Mission
              </h2>
              <p className="text-gray-700 text-[18px] lg:text-[20px]">
                We&apos;re on a mission to democratize ad creation by providing
                product owners, startups, and businesses with an intuitive
                platform that generates customized, localized, and
                high-performing ads with ease.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border">
              <h2 className="text-xl font-bold text-[#520052] mb-2">
                Our Story
              </h2>
              <p className="text-gray-700 text-[18px] lg:text-[20px]">
                Born out of the need for simple, effective, and automated
                advertising, Genz.ad was founded by a team of passionate
                designers, marketers, and AI experts. We saw a gap: small
                businesses struggling with ad creation, wasting time and money
                on complex tools.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-[392px] lg:max-w-6xl mx-auto">
            <h2 className="text-[28px] lg:text-[40px] md:text-3xl font-[600] lg:font-[700] text-center mb-8">
              We make sure your ideas are brought to life
            </h2>
            <p className="text-center text-[#121316] mb-12 max-w-[1201px] font-[400] text-[20px] leading-[28px]">
              We ensure your ideas and creations reach the right audience. Our
              AI-powered platform simplifies ad generation, helping you craft
              localized, inclusive, and high-performing campaigns. From
              AI-driven suggestions to simple customization and multi-platform
              publishing, we make sure your message is delivered with impact.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <LottieComponent
                    animationData={aiCreative}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <h3 className="text-[24px] font-[600] leading-[32px] mb-4">
                  AI Power Creative
                </h3>
                <p className="text-gray-600 text-[18px] font-[600] leading-[28px]">
                  Instantly generate texts, visuals, and layouts tailored to
                  your brand, saving time and boosting engagement.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <LottieComponent
                    animationData={userFriendlyTools}
                    style={{ width: 100, height: 100 }}
                  />
                </div>
                <h3 className="text-[24px] font-[600] leading-[32px] mb-4">
                  User Friendly Tools
                </h3>
                <p className="text-gray-600 text-[18px] font-[600] leading-[28px]">
                  Access hundreds of professional templates designed to connect
                  with your target audience.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <LottieComponent
                    animationData={localizedInclusive}
                    style={{ width: 40, height: 40 }}
                  />
                </div>
                <h3 className="text-[24px] font-[600] leading-[32px] mb-4">
                  Localized & Inclusive Ads
                </h3>
                <p className="text-gray-600 text-[18px] font-[600] leading-[28px]">
                  Edit text, images, and layouts with a live preview for instant
                  updates, ensuring a smooth workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[392px] lg:max-w-7xl py-16 px-6 md:px-[75px] lg:px-24 bg-[#520052] text-white mx-auto rounded-[16px]">
          <div className="mx-auto">
            <h2 className="text-[32px] lg:text-[40px] md:text-3xl font-[600] lg:font-[700] text-center mb-12">
              People Behind Genz.ad
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="lg:w-[296px] h-[346px] overflow-hidden rounded-[8px] mx-auto mb-4">
                  <Image
                    src="/images/ebiye-ikiriko.png"
                    alt="Ebiye Kiriko"
                    className="w-full h-full object-cover"
                    width={192}
                    height={192}
                  />
                </div>
                <h3 className="text-xl font-semibold">Ebiye Kiriko</h3>
                <p className="text-purple-200">CEO</p>
              </div>

              <div className="text-center">
                <div className="lg:w-[296px] h-[346px] overflow-hidden rounded-[8px] mx-auto mb-4">
                  <Image
                    src="/images/iretiola-adekola.png"
                    alt="Iretola Adeola"
                    className="w-full h-full object-cover"
                    width={192}
                    height={192}
                  />
                </div>
                <h3 className="text-xl font-semibold">Iretola Adeola</h3>
                <p className="text-purple-200">CTO</p>
              </div>

              <div className="text-center">
                <div className="lg:w-[296px] h-[346px] overflow-hidden rounded-[8px] mx-auto mb-4">
                  <Image
                    src="/images/apeli-ziworitin.png"
                    alt="April Ziweriltin"
                    className="w-full h-full object-cover"
                    width={192}
                    height={192}
                  />
                </div>
                <h3 className="text-xl font-semibold">April Ziweriltin</h3>
                <p className="text-purple-200">Marketing Analyst</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[392px] lg:max-w-7xl mx-auto py-16 lg:px-12">
          <div className="mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-[392px] lg:w-[548px] lg:h-[411px]">
              <Image
                src="/images/turn-ideas.png"
                alt="Platform interface"
                className="rounded-lg shadow-md w-full"
                width={1248}
                height={700}
              />
            </div>

            <div>
              <h2 className="text-[28px] lg:text-[40px] font-[600] lg:font-[700] mb-6">
                Turn Ideas into Stunning Visuals Instantly
              </h2>
              <p className="text-gray-700 font-[400] text-[20px] mb-6">
                Our AI-powered platform helps you create visually compelling
                content in seconds—no design skills needed! Whether you&apos;re
                a creator, marketer, or entrepreneur, our intuitive tools let
                you bring your vision to life effortlessly.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-[392px] lg:max-w-7xl mx-auto py-16 md:px-12 lg:px-24 bg-[#F8E6F8] rounded-[16px] text-center lg:text-left">
          <div className="mx-auto grid lg:grid-cols-2 gap-12 items-center px-[20px]">
            <div className="order-2 lg:order-1">
              <h2 className="text-[28px] lg:text-[40px] font-[600] lg:font-[700] leading-[36px] mb-6">
                We help small businesses grow faster & smarter
              </h2>
              <p className="text-gray-700 text-[20px] lg:text-[24px] font-[500] leading-[30px] mb-8">
                We empower small businesses to grow faster and smarter with
                AI-driven ad creation. Our platform simplifies marketing,
                enhances engagement, and helps businesses reach the right
                audience effortlessly.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={"/signup"}
                  className="cursor-pointer px-6 py-3 rounded-sm text-[#FFFFFF] transition-colors flex justify-center gap-2 border border-[#B800B8] bg-[#B800B8] hover:bg-[#B800B8] lg:w-fit"
                >
                  <p>
                    Get Started <span className="hidden lg:inline">Now</span>
                  </p>{" "}
                  <ArrowRight className="hidden lg:inline" />
                </Link>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2">
              <Image
                src="/images/help-small.png"
                alt="User working with platform"
                className="rounded-lg shadow-md w-full"
                width={1248}
                height={700}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
