"use client";
import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface OnboardingStepProps {
  number: number;
  title: string;
  content: ReactNode;
  image: ReactNode;
  imagePosition: "left" | "right";
  numberColor?: string;
  backgroundColor?: string;
}

export default function OnboardingStep({
  number,
  title,
  content,
  image,
  imagePosition,
  numberColor,
  backgroundColor,
}: OnboardingStepProps) {
  const isLeftImage = imagePosition === "left";

  
  const bgColor =
    backgroundColor ||
    (isLeftImage ? "#F2F2F2" : isLeftImage ? "#F2F2F2" : "#FDF2FD");
  const numColor = numberColor || (isLeftImage ? "#cfcfcf" : "#F6E1F6");

  
  const sectionClasses = `
    relative
    rounded-[20px]
    overflow-hidden
    w-full
  `;

  const numberClasses = `
    absolute
    font-manrope font-semibold text-[64px] lg:text-[128px] leading-[28px]
    top-10 lg:top-20
    pointer-events-none
    select-none
    w-fit
    ${
      isLeftImage
        ? "right-10 lg:right-20"
        : "right-10 lg:left-[45%] lg:right-0 lg:-translate-x-1/2 lg:-translate-y-1/2"
    }
  `;

  const containerClasses = `
    container
    mx-auto
    grid
    grid-cols-1
    lg:grid-cols-2
    items-center
    gap-4 md:gap-8
    relative
    w-full
  `;

  const textContainerClasses = `
    ${isLeftImage ? "order-1 lg:order-2 " : "pl-8"} 
    mt-${isLeftImage ? "20" : "32"}
  `;

  const imageContainerClasses = `
    flex 
    ${
      isLeftImage
        ? "items-center justify-start order-2 lg:order-1"
        : "items-end justify-end w-full"
    }
  `;

  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div className="w-full">
      <motion.section
        ref={sectionRef}
        className={sectionClasses}
        style={{ backgroundColor: bgColor }}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className={numberClasses}
          style={{ color: numColor }}
          aria-hidden="true"
        >
          {number}
        </div>

        <div className={`max-md:mb-2 max-md:mt-[53px] ${containerClasses}`}>
          <motion.div
            className={`max-md:px-5 ${textContainerClasses}`}
            initial={{ opacity: 0, x: isLeftImage ? 50 : -50 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeftImage ? 50 : -50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-[#121316] font-nunito text-[18px] md:text-[40px] font-semibold md:font-bold leading-7 md:leading-[48px] mb-4">
              {title}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#121316] font-nunito text-base md:text-[18px] font-normal leading-6 md:leading-[28px]">
              {content}
            </ul>
          </motion.div>

          <motion.div
            className={imageContainerClasses}
            initial={{ opacity: 0, x: isLeftImage ? -50 : 50 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeftImage ? -50 : 50 }
            }
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {image}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
