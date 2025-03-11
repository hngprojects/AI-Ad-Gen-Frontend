"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface BackButtonProps {
  fallbackUrl?: string;
  className?: string;
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  fallbackUrl = "/",
  className = "mb-8",
  label = "Back",
}) => {
  const router = useRouter();

  const handleBack = () => {
    router.push(fallbackUrl);
  };

  return (
    <div className={className}>
      <button
        onClick={handleBack}
        className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer p-0"
        type="button"
      >
        <ArrowLeft size={20} color="#650065" />
        <span className="text-[#650065] font-medium text-base leading-6 ml-2">
          {label}
        </span>
      </button>
    </div>
  );
};

export default BackButton;
