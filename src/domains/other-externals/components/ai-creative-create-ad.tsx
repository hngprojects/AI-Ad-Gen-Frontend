"use client";
import { CheckCircle } from "@/components/icons/icon";
import createAdSVG from "../../../../public/newcreate.svg";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const AiCreativeCreateAd = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const listItems = [
    "Fast & Effortless - Generate video ads in seconds.",
    "No Design Experience Needed.",
    "Optimized for Multiple Platforms.",
    "Boost Engagement & Conversions.",
    "Free & Paid Plans Available - Start with 3 free ads per day!",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      ref={sectionRef}
      className="flex  bg-white flex-col lg:flex-row justify-between items-center gap-10 lg:gap-[80px] py-20 px-[40px] md:px-[60px] lg:px-[80px]"
    >
      <motion.div
        className="w-full lg:max-w-[600px]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-[#EC802E] text-sm md:text-base text-left uppercase"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          WHY USE GENZ.AD?
        </motion.p>
        <motion.h2
          className="text-[27px] md:text-4xl text-left font-medium lg:text-5xl mt-2 md:leading-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Why Choose Our AI Video Ad Generator?
        </motion.h2>

        <motion.ul
          className="mt-6 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {listItems.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2 text-[#667185]"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <CheckCircle />
              </motion.div>
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={"/signin"}
            className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 w-fit mt-10"
          >
            <p>Generate Your Ad</p> <ArrowRight />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-shrink-0 w-full lg:w-[40%] bg-[#FFF0E5] px-10 pt-[72px] rounded-md flex justify-center align-end overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : { y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image
            src={createAdSVG}
            alt="Create AI-Generated Ads"
            width={500}
            height={300}
            className="w-full h-auto mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AiCreativeCreateAd;
