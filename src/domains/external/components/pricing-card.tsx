"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tick } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Tier {
  name: string;
  id: string;
  price: number | "Free";
  description: string;
  features: string[];
  mostPopular: boolean;
}

const tiers: Tier[] = [
  {
    name: "Starter",
    id: "tier-starter",
    price: "Free",
    description: "Get a few features to start your Adgen-ai journey.",
    features: [
      "5 ads per month",
      "Watermarked exports",
      "Limited selection of templates",
      "Standard resolution only (720p)",
    ],
    mostPopular: false,
  },
  {
    name: "Basic",
    id: "tier-basic",
    price: 30,
    description: "Get full usage of the generator.",
    features: [
      "Unlimited generated ads",
      "No watermarked exports",
      "Access to premium templates",
      "Exports in HD quality (1080p)",
    ],
    mostPopular: true,
  },
  {
    name: "Teams",
    id: "tier-teams",
    price: 50,
    description: "A full package for a 3-4 membered team.",
    features: [
      "Unlimited generated ads",
      "Share with team members",
      "Team brand kit integration",
      "4K resolution & custom export options",
    ],
    mostPopular: false,
  },
];

export default function PricingCard() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants = {
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

  const cardVariants = {
    hidden: () => ({
      opacity: 0,
      y: 50,
      scale: 0.9,
      transition: {
        type: "spring",
        damping: 12,
      },
    }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        delay: i * 0.2,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: {
        type: "spring",
        damping: 12,
        delay: i * 0.1,
      },
    }),
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
        delayChildren: 0.3,
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

  return (
    <motion.div
      ref={containerRef}
      className="mx-auto max-w-md mt-10 grid grid-cols-1 gap-6 lg:max-w-6xl xl:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
    >
      {tiers.map((tier, index) => (
        <motion.div
          key={tier.id}
          custom={index}
          variants={cardVariants}
          whileHover="hover"
        >
          <Card
            className={`relative w-full max-w-[381px] mx-auto rounded-2xl border gap-0 border-[#E3E3E3] shadow-[0px_1px_3px_2px_rgba(0,0,0,0.06)] px-[1.65rem] py-10
              ${tier.mostPopular ? "bg-[#CF54CF]" : "bg-white "}
              ${
                tier.id === "tier-basic"
                  ? "bg-[url('/basic-price-bg.svg')] bg-cover bg-center text-white before:absolute before:inset-0 before:bg-black/0 before:z-0"
                  : ""
              }`}
          >
            <CardHeader className="gap-0 py-0 pl-0 pr-4 md:pr-10 xl:pr-19">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                <CardTitle
                  className={`text-[28px] font-semibold leading-[36px] ${
                    tier.mostPopular ? "text-white" : "text-[#CF54CF]"
                  }`}
                >
                  {tier.name}
                </CardTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <CardDescription
                  className={`text-sm min-h-10 font-normal leading-5 ${
                    tier.mostPopular ? "text-white" : "text-[#A1A1A1]"
                  }`}
                >
                  {tier.description}
                </CardDescription>
              </motion.div>
            </CardHeader>

            <CardContent className="mt-4 p-0">
              <motion.p
                className={`flex items-baseline gap-x-2 ${
                  tier.mostPopular ? "text-white" : "text-[#CF54CF]"
                } text-[36px] font-semibold leading-[44px]`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5 + index * 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {tier.price === "Free" ? (
                  "Free"
                ) : (
                  <>
                    ${tier.price}
                    <span className="text-sm font-normal -ml-1 leading-5">
                      /mo
                    </span>
                  </>
                )}
              </motion.p>
              <motion.div
                className="bg-[#E3E3E3] h-[1px] w-full mt-[1rem] mb-11"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              />

              <motion.ul
                role="list"
                className="mt-6 gap-4 flex flex-col text-sm text-gray-600"
                variants={featureListVariants}
                initial="hidden"
                animate="visible"
              >
                {tier.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    className={`flex items-center gap-x-[0.9rem] ${
                      tier.mostPopular ? "text-white" : "text-black"
                    } text-base font-normal leading-6`}
                    variants={featureItemVariants}
                    transition={{ delay: 0.1 * featureIndex }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.7 + index * 0.2 + featureIndex * 0.1,
                      }}
                      whileHover={{ rotate: 10, scale: 1.2 }}
                    >
                      <Tick />
                    </motion.span>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </CardContent>

            <CardFooter>
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
              >
                <Button
                  className="mt-13 mx-auto text-base font-medium leading-[24px] cursor-pointer"
                  variant={
                    tier.mostPopular ? "choosePlanOutline" : "choosePlan"
                  }
                  size="choosePlan"
                >
                  Choose Plan
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
