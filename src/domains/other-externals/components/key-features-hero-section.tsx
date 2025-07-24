"use client";
import { useAuthStore } from "@/store/auth-store";
import { motion } from "framer-motion";
import React from "react";
import AnimatedButton from "../../external/components/animated-button";

interface HeroSectionProps {
  heading: React.ReactNode;
  subHeading: string;
  buttonText: string;
  headingMaxWidth?: string;
  subHeadingMaxWidth?: string;
}

export default function FeaturesHero({
  heading,
  subHeading,
  buttonText,
  headingMaxWidth,
  subHeadingMaxWidth,
}: HeroSectionProps) {
  const token = useAuthStore((state) => state.token);

  return (
    <section className="w-full items-center justify-center  flex">
      <motion.div
        className="relative z-10 max-w-[1037px] w-full px-4 mt-16 md:mt-[80px] xl:mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <motion.h1
          className={`text-3xl md:text-[56px] font-medium text-[#121316] tracking-tight mb-4 ${
            headingMaxWidth ? headingMaxWidth : "lg:max-w-[40rem] "
          } lg:px-10  text-center lg:mx-auto`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {heading}
        </motion.h1>
        <motion.p
          className={`text-lg text-[#16151e] mb-6 mx-auto w-full ${
            subHeadingMaxWidth ? subHeadingMaxWidth : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {subHeading}
        </motion.p>
        <div className="flex gap-4 md:gap-10 flex-col md:flex-row justify-center">
          <AnimatedButton
            href={token ? "dashboard" : "/signin?type=signin"}
            text={buttonText}
            variant="primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
