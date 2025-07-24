"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import circle from "../../../../public/circle.svg";
import createadImg from "../../../../public/createadsImg.svg";

const notes = [
  {
    name: "Get Started",
    description: "Click “Generate Ad” and sign in with your Google account.",
  },
  {
    name: "Customize Your Ad",
    description:
      " Describe your product, choose your platform (Facebook, Instagram, etc.), select your audience, and add an image(Optional).",
  },
  {
    name: "Generate & Preview",
    description:
      "Click “Generate” to instantly create your ad. Preview and edit as needed.",
  },
  {
    name: "Download & Share",
    description:
      "Save your ad and post it directly to your chosen platform and start attracting customers now!",
  },
];

const CreateAds = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-[80px] px-[40px] md:px-[60px] lg:px-[80px] py-10 md:py-28 bg-[#FCFCFC]"
    >
      <motion.div
        className="w-full h-auto lg:max-w-[596px] bg-[#E5EEFF] pt-[105px]"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: -50 }}
      >
        <Image
          src={createadImg}
          alt="createads"
          height={552}
          width={542}
          className="m-auto"
        />
      </motion.div>

      <motion.div
        className="flex flex-col text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0, x: 50 }}
      >
        <motion.p
          className="text-[#10509A] text-sm md:text-base font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          HOW TO USE
        </motion.p>
        <motion.h2
          className="text-[28px] md:text-[36px] lg:text-[48px] font-medium leading-tight"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          How to Create Ads in Seconds with Genz.ad
        </motion.h2>

        <motion.div
          className="mt-6 md:mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {notes.map((note, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 md:gap-[30px] mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              whileHover={{ x: 5 }}
            >
              <motion.h3
                className="text-rich-black flex justify-center items-center relative w-8 h-8 md:w-10 md:h-10"
                whileHover={{ rotate: 10 }}
              >
                <Image
                  src={circle}
                  alt="circle"
                  className="absolute w-full h-full"
                />
                <p className="relative text-sm md:text-base font-bold">
                  {index + 1}
                </p>
              </motion.h3>
              <div className="flex flex-col items-start text-start">
                <p className="text-rich-black font-bold text-[18px] md:text-[22px] lg:text-[24px]">
                  {note.name}
                </p>
                <p className="text-gray-500 w-full lg:max-w-md font-medium text-[14px] md:text-[16px] lg:text-[18px] text-start md:text-left">
                  {note.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CreateAds;
