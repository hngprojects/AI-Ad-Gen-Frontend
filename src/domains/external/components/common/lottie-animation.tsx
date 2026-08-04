"use client";

import React from "react";
import Lottie from "lottie-react";

// Define proper TypeScript interfaces
interface LottieAnimationProps {
  animationData: unknown;
  className?: string;
  style?: React.CSSProperties;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  className,
  style,
}) => {
  return (
    <Lottie animationData={animationData} className={className} style={style} />
  );
};

export default LottieAnimation;
