"use client";
import React from "react";

interface LoaderProps {
  fullscreen?: boolean;
  message?: string;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  fullscreen = true,
  message = "Loading, Please wait...",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center ${
        fullscreen ? "fixed inset-0 bg-black/30 z-50" : ""
      } ${className}`}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-12 h-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-1 h-2.5 rounded-sm bg-white opacity-20 animate-spinBar"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-18px)`,
                animationDelay: `${i * 0.125}s`,
              }}
            />
          ))}
        </div>
        {message && <p className="mt-4 text-base font-medium">{message}</p>}
      </div>
      <style>
        {`
          @keyframes spinBar {
            0%, 40%, 100% { opacity: 0.2; background-color: white; }
            20% { opacity: 1; background-color: #B800B8; }
          }
          .animate-spinBar {
            animation: spinBar 1s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
