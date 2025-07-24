"use client";
import { motion, useInView } from "framer-motion";
import CreateAds from "@/domains/external/components/create-ads";
import { FAQ } from "@/domains/external/components/faq";
import CreateAd from "@/domains/external/components/create-ad";
import Cta from "@/domains/external/components/cta";
import VideoPlayer from "@/domains/external/components/common/video-player";
import Access from "@/domains/external/components/access";
import clsx from "clsx";
import { useRef } from "react";
import FeatureCard from "@/domains/external/components/key-features-card";

export default function Page() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <CreateAds />
      <CreateAd />
      <FAQ />
      <Cta />
    </div>
  );
}

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className={clsx(
        "px-[20px] md:px-[30px] lg:[60px] bg-white flex flex-col items-center gap-10 py-10 lg:py-24"
      )}
    >
      <motion.div
        className="w-full lg:max-w-7xl relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center justify-center gap-3 max-w-4xl mx-auto"
          initial={{ y: 50 }}
          animate={isInView ? { y: 0 } : { y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-[#121316] text-2xl lg:text-[40px] max-w-[504px] text-center font-medium p-[24px]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Who can benefit from genz.ad
          </motion.h1>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <FeatureCard />
      </motion.div>
    </section>
  );
};

const Hero = () => {
  const videoLink = "https://www.youtube.com/embed/G2ztpIftOL4";
  return (
    <div className="bg-white relative flex flex-col items-center justify-between overflow-hidden px-4 md:px-10">
      <motion.div
        className="max-w-3xl text-center mt-16 md:mt-24 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl max-w-[1031px] text-center font-bold text-gray-900 md:w-[22ch]  mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="">Easily win more clients with a simple</span>
          <span className="text-[#B800B8] ml-2">AI Video Ad Maker</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mt-4 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="max-w-[587px] md:block font-bold  mx-auto">
            <span className="md:block">
              With the GenZ AI Ad Maker, you can easily and quickly generate
            </span>
            stunning video ads for yourself or your clients.Use an AI Ad
            Generator Free of hassle.
          </span>
        </motion.p>
      </motion.div>

      <motion.div
        className="relative w-full flex justify-center mt-4 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <VideoPlayer videoLink={videoLink} />
      </motion.div>
      <div className="relative w-full flex justify-center mt-4">
        <Access
          heading="Stop struggling with creating your video ads, and leave it all to GenZ Ad."
          imageSrc="/create-video.png"
        />
      </div>
    </div>
  );
};
