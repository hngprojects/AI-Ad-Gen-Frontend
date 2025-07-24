"use client";
import type React from "react";
import PricingCard from "./pricing-card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { when: "afterChildren" },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="xl:p-20 py-10 bg-white overflow-hidden"
    >
      <motion.div
        className="w-full relative max-w-7xl lg:py-15 px-7 xl:px-15 py-10 mx-auto lg:rounded-[14px] bg-[#1E1E1E]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="exit"
      >
        <motion.div
          className="w-fit mx-auto flex flex-col"
          variants={textVariants}
        >
          <motion.div
            className="text-[#F9F] text-center text-[16px] font-semibold leading-[32px]"
            variants={itemVariants}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            UNLOCK THE FULL POTENTIAL OF AI-ADGEN
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-[3px]"
            variants={headerVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl text-white text-center text-[40px] font-semibold leading-[48px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{
                duration: 0.5,
                delay: 0.7,
                type: "spring",
                stiffness: 200,
              }}
            >
              Pricing Plans
            </motion.h2>
            <motion.p
              className="text-white text-[18px] font-medium max-w-[300px] text-center leading-[28px]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Generate your ads for free and pay as you grow.
            </motion.p>
          </motion.div>
        </motion.div>

        <PricingCard />
      </motion.div>
    </section>
  );
}
