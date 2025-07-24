"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

interface Feature {
  text: string;
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  features: Feature[];
  buttonText: string;
  isDark?: boolean;
  index?: number;
  needsBorder?: boolean;
}

const DashboardPricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  period,
  features,
  buttonText,
  isDark = false,
  index = 0,
  needsBorder = false,
}) => {
  const cardRef = useRef(null);
  const router = useRouter();
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  const bgColor = isDark ? "bg-[#520052]" : "bg-[#FCFCFC]";
  const textColor = isDark ? "text-[#FFFFFF]" : "text-[#121316]";
  const subtitleColor = isDark ? "text-[#FFFFFF]" : "text-[#7D7D7D]";
  const priceColor = isDark ? "text-[#FFFFFF]" : "text-[#B800B8]";
  const buttonBg = isDark ? "bg-[#FFFFFF]" : "bg-light-purple";
  const buttonText1 = isDark ? "text-[#520052]" : "text-white";
  const buttonHover = isDark ? "" : "hover:bg-dark-purple";
  const borderStyle = needsBorder ? "border-1 border-[#E3E3E3]" : "";

  const handleButtonClick = () => {
    if (index === 0) {
      router.push("https://buy.stripe.com/cN28Av4VO5647eg5l8");
    } else if (index === 1) {
      router.push("https://buy.stripe.com/28o9Ez9c4dCAgOQdRD");
    } else if (index === 2) {
      router.push("https://buy.stripe.com/5kA183ewo2XW7egbJu");
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        delay: index * 0.2,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const featureListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3 + index * 0.1,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        delay: 0.4 + index * 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className={`${bgColor} ${borderStyle} rounded-[16px] w-full sm:w-[340px] md:w-[381px] h-full flex flex-col`}
    >
      <div className="px-[24px] sm:px-[36px] py-[30px] sm:py-[39px] flex flex-col h-full">
        <div className="flex flex-col h-full justify-between">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              className={`font-[600] text-[24px] sm:text-[28px] ${textColor}`}
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2 }}
              className={`font-[400] text-[12px] sm:text-[14px] ${subtitleColor} w-full mt-1`}
            >
              {subtitle}
            </motion.p>
          </div>
          <div className="mt-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5 + index * 0.2,
                type: "spring",
                stiffness: 300,
              }}
              className={`font-[600] text-[28px] sm:text-[36px] ${priceColor}`}
            >
              {price}
              <sub className="font-[400] text-[12px] sm:text-[14px]">
                {period}
              </sub>
            </motion.h1>
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="border-b-[1px] border-b-[#E3E3E3] mt-2"
            />
          </div>

          <div className="pt-[16px] mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9 + index * 0.2,
                type: "spring",
                stiffness: 300,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <button
                onClick={handleButtonClick}
                className={`${buttonBg} block w-full cursor-pointer ${buttonText1} px-6 py-[12px] rounded-sm ${buttonHover} transition-colors text-center`}
              >
                {buttonText}
              </button>
            </motion.div>
          </div>

          <motion.ul
            variants={featureListVariants}
            initial="hidden"
            animate="visible"
            className={`flex flex-col gap-[12px] sm:gap-[16px] ${
              isDark ? "text-[#FFFFFF]" : ""
            } text-[14px] sm:text-base flex-grow`}
          >
            {features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                variants={featureItemVariants}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0 mt-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.7 + index * 0.2 + featureIndex * 0.1,
                  }}
                  whileHover={{ rotate: 10, scale: 1.2 }}
                >
                  <path
                    d="M20.5 6L9.5 17L4.5 12"
                    stroke={isDark ? "white" : "#121316"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
                <span>{feature.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

interface UpgradePlanModalProps {
  isOpen: boolean;
  isComplete: boolean;
  onClose: (value: boolean) => void;
  onComplete: (value: boolean) => void;
}

const UpgradePlanModal: React.FC<UpgradePlanModalProps> = ({
  isOpen,
  onClose,
  isComplete,
  onComplete,
}) => {
  const containerRef = useRef(null);

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

  const pricingOptions = [
    {
      title: "Pay-Per-Ad Model",
      subtitle: "(For non-subscribers)",
      price: "$15",
      period: "/50 Points",
      buttonText: "Choose plan",
      features: [
        { text: "All Basic features" },
        { text: "Advanced AI-powered image and text editing (Inpainting)" },
        { text: "High-resolution downloads (PNG/JPEG)" },
        { text: "Access to explore our community " },
        { text: "Expires after 1 year" },
      ],
      isDark: false,
      needsBorder: true,
    },
    {
      title: "Basic",
      subtitle: "Get a few features to start your Genz.ad journey.",
      price: "$10",
      period: "/mo",
      buttonText: "Choose plan",
      features: [
        { text: "Access to predefined prompts" },
        { text: "50 ad credit" },
        { text: "Advanced AI-powered image and text editing" },
        { text: "Download the image ad generated" },
        { text: "Access to explore our community" },
        { text: "Ad text and image editing tools" },
        { text: "Expires after 1 month" },
      ],
      isDark: true,
      needsBorder: false,
    },
    {
      title: "Pro",
      subtitle: "Get full usage of the generator.",
      price: "$21",
      period: "/mo",
      buttonText: "Choose plan",
      features: [
        { text: "All Basic features" },
        { text: "150 ad credits" },
        { text: "Advanced AI-powered image and text editing (Inpainting)" },
        { text: "High-resolution downloads (PNG/JPEG)" },
        { text: "Access to explore our community" },
        { text: "Expires after 3 months" },
        { text: "Rollover ad credits on resubscription." },
      ],
      isDark: false,
      needsBorder: true,
    },
  ];

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white w-full max-w-[95vw] md:max-w-[1271px] rounded-[8px] shadow-lg p-6 md:p-10 flex flex-col gap-2.5 md:gap-6 max-h-[90vh] overflow-y-auto scrollbar-hide">
          <DialogHeader className="flex flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DialogTitle className="text-xl sm:text-[32px] leading-10 font-semibold">
                Upgrade your plan
              </DialogTitle>
            </motion.div>
            <DialogClose asChild>
              <motion.button
                className="text-gray-600 hover:text-gray-800 hover:font-black cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 90, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </DialogClose>
          </DialogHeader>

          <motion.div
            ref={containerRef}
            className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-4 sm:gap-6 mt-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {pricingOptions.map((option, index) => (
              <div key={index} className="flex-1 flex">
                <DashboardPricingCard
                  title={option.title}
                  subtitle={option.subtitle}
                  price={option.price}
                  period={option.period}
                  buttonText={option.buttonText}
                  features={option.features}
                  isDark={option.isDark}
                  index={index}
                  needsBorder={option.needsBorder}
                />
              </div>
            ))}
          </motion.div>
        </DialogContent>
      </Dialog>

      <Dialog open={isComplete} onOpenChange={() => onComplete(false)}>
        <DialogContent className="bg-white w-full max-w-[95vw] sm:w-[412px] rounded-[8px] shadow-lg p-10 flex flex-col gap-4 sm:gap-6 items-center text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Image
              src="/success.svg"
              height={80}
              width={80}
              alt="Successful payment"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <DialogTitle className="text-[16px] sm:text-[18px] font-semibold">
              Successful payment
            </DialogTitle>
          </motion.div>
          <motion.p
            className="text-[#7D7D7D] text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your subscription has been upgraded!
          </motion.p>
          <motion.div
            className="hover:bg-[#304276] cursor-pointer text-white px-6 py-3 rounded-sm bg-[#1671D9] hover:scale-105 transition-all duration-500 w-full"
            onClick={() => onComplete(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              type: "spring",
              stiffness: 300,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p>Done</p>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpgradePlanModal;
