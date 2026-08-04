"use client";

import { slickSettings } from "@/lib/slick";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/auth-store";
import AnimatedButton from "@/domains/external/components/animated-button";

const heroImages = [
  {
    src: "/fantaAd.png",
    alt: "Fanta Orange Flavor Ad",
  },
  {
    src: "/spriteAd.png",
    alt: "Sprite Fresh Ad",
  },
  {
    src: "/techAd.png",
    alt: "Technology Concept Ad",
  },
  {
    src: "/cosmeticAd.png",
    alt: "Cosmetic Product Ad",
  },
  {
    src: "/landscapeAd.png",
    alt: "Landscape Concept Ad",
  },
  {
    src: "/heroCokeAd.png",
    alt: "Food Product Ad",
  },
];

const HeroSection = () => {
  const token = useAuthStore((state) => state.token);

  return (
    <div className="bg-cover bg-center bg-no-repeat relative md:min-h-[800px] flex flex-col items-center justify-between overflow-hidden">
      <div className="absolute inset-0 z-0"></div>

      <motion.div
        className="relative z-10 max-w-[1037px] w-full px-4 mt-16 md:mt-[120px] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <motion.h1
          className="text-3xl md:text-[64px] font-medium text-[#121316] tracking-tight mb-4 lg:max-w-5xl text-center lg:mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Generate High-converting, <br className="hidden xl:block" /> Smarter
          Adverts in minutes
          <span className="text-[#B800B8] ml-2 font-semibold">with AI</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          AI generated ads that maximise engagement and revenue
        </motion.p>
        <div className="flex gap-4 md:gap-10 flex-col md:flex-row justify-center">
          <AnimatedButton
            href="/generate-ad"
            text="Try a Demo Ad"
            variant="outline"
          />

          <AnimatedButton
            href={token ? "dashboard" : "/signin?type=signup"}
            text="Generate Your Ad"
            variant="primary"
          />
        </div>
      </motion.div>

      <motion.div
        className="w-full px-4 slider-container -mb-8 mt-10 md:mt-[80px] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <Slider {...slickSettings}>
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="outline-none flex items-center justify-center h-[200px] md:h-[450px] relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.8 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-full object-contain absolute bottom-[-10px] sm:bottom-[-75px] md:bottom-[-100px]"
                quality={100}
                width={1000}
                height={500}
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default HeroSection;
