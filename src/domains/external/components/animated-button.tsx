"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "outline";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  motionProps?: any;
}

const AnimatedButton = ({
  href,
  text,
  variant = "primary",
  className = "",
  motionProps = {},
}: AnimatedButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const baseStyles =
    "cursor-pointer px-6 py-3 rounded-sm transition-colors flex justify-center items-center gap-2 w-fit mx-auto overflow-hidden";
  const variantStyles = {
    primary: "bg-light-purple text-white hover:bg-dark-purple",
    outline: "text-[#520052] border border-[#B800B8] hover:bg-[#cf54cf21]",
  };
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const letters = text.split("");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...motionProps}
    >
      <Link
        href={href}
        className={buttonStyles}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="flex items-center justify-center gap-2 w-full"
          animate={isHovering ? "animate" : "initial"}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.03,
                repeat: Infinity,
                repeatDelay: 0.1,
                duration: 0.2,
                when: "beforeChildren",
              },
            },
          }}
        >
          <div className="flex">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: { x: 0, opacity: 1 },
                  animate: {
                    x: ["-15px", "0px"],
                    opacity: [0, 1],
                    transition: {
                      x: { duration: 0.15, ease: "easeOut" },
                      opacity: { duration: 0.15 },
                    },
                  },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          <motion.div
            variants={{
              initial: { opacity: 1, rotate: 0 },
              animate: {
                opacity: [0, 1],
                rotate: [-180, 0],
                transition: {
                  opacity: { duration: 0.1, delay: letters.length * 0.03 },
                  rotate: {
                    duration: 0.3,
                    ease: "easeOut",
                    delay: letters.length * 0.03,
                  },
                },
              },
            }}
          >
            <ArrowRight />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default AnimatedButton;
