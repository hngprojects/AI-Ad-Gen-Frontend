"use client";
import VideoPlayer from "@/domains/external/components/common/video-player";
import AnimatedButton from "@/domains/external/components/animated-button";
import { useAuthStore } from "@/store/auth-store";
import React from "react";

const VideoAdPage = () => {
  const token = useAuthStore((state) => state.token);

  const videoLink = "https://www.youtube.com/embed/H0FnkR6aa8Q";
  const descriptionText =
    "Start generating engaging ads tailored just for you by signing up.";
  const buttonText = token ? "Generate Your Ad" : "Sign up to create Ad";

  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col items-center justify-center gap-8 min-h-screen">
      <VideoPlayer
        videoLink={videoLink}
        className="h-[500px] sm:h-[400px] md:h-[500px]"
      />

      <AnimatedButton
        href={token ? "dashboard" : "/signin?type=signin"}
        text={buttonText}
        variant="primary"
      />

      <p className="mt-4 text-center text-gray-600 max-w-lg">
        {descriptionText}
      </p>
    </div>
  );
};

export default VideoAdPage;
