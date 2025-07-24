"use client";

import EarlyAccess from "@/domains/external/components/earlyaccess";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-white relative flex flex-col items-center justify-between overflow-hidden px-4 md:px-10">
      <motion.div
        className="max-w-3xl text-center mt-16 md:mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Win More Clients{" "}
          <span className="text-[#B800B8]">with AI-Powered Ad Creation</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Save time, impress clients, and grow your business with stunning
          AI-powered ad creation that helps you work smarter, not harder.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative w-full flex justify-center "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <Image src="/Laptop2.png" alt="Laptop" width={1600} height={600} />
      </motion.div>
      <div className="relative w-full flex justify-center mt-[-85px]">
        <EarlyAccess />
      </div>
    </div>
  );
};

export default Hero;
