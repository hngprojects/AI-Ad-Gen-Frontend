"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface VideoPlayerProps {
  videoLink: string;
  className?: string;
  heading?: string;
  loop?: boolean; 
  disableRelatedVideos?: boolean; 
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoLink,
  className,
  heading,
  loop = false,
  disableRelatedVideos = false,
}) => {
  const sectionRef = useRef(null);

  let url = videoLink;
  if (loop) {
    const videoId = videoLink.split("/embed/")[1].split("?")[0]; 
    url += `?loop=1&playlist=${videoId}`;
  }
  if (disableRelatedVideos) {
    url += loop ? "&rel=0" : "?rel=0";
  }
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="w-full">
      <motion.div
        className="w-full lg:max-w-7xl relative mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center w-full justify-center text-center  max-w-4xl mx-auto"
          initial={{ y: 50 }}
          animate={isInView ? { y: 0 } : { y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-[#121316] text-2xl lg:text-[40px] text-center font-medium px-10 max-w-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {heading ? heading : "Create engaging ads with AI in 3mins"}
          </motion.h2>

          <motion.h4
            className="text-gray-600 mt-3 mb-10  text-sm  md:text-base"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Instantly generate eye-catching AI-powered ads
          </motion.h4>
        </motion.div>
      </motion.div>

      <div
        className={`relative aspect-video w-full max-w-full sm:max-w-[400px] md:max-w-[995px] mx-auto overflow-hidden rounded-lg shadow-lg ${className}`}
      >
        <div className="absolute inset-0  bg-[rgba(82,0,82,0.24)] z-10 pointer-events-none" />
        <iframe
          src={url}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </section>
  );
};

export default VideoPlayer;
