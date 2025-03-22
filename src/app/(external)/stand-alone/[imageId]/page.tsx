"use client";

import Loader from "@/components/ui/loader";
import { useCampaignImage } from "@/domains/ads-gen/api/use-campaign-image";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const StandalonePage = () => {
  const { imageId } = useParams();
  const { data: imageData, isLoading } = useCampaignImage(imageId as string);


  console.log("imageData", imageData);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader />
      </div>
    );
  }

  const imageUrl = imageData?.image?.image_url || "";

  return (
    <main className="flex flex-col items-center py-12">
      <picture className="p-8 mb-8 bg-white">
        <Image
          src={imageUrl || "/preview.png"}
          height={536}
          width={598}
          alt="Image preview"
          unoptimized
        />
      </picture>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={"/signin?type=signin"}
          className="bg-light-purple cursor-pointer text-white px-6 py-3 mb-6 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 w-fit mx-auto"
        >
          Sign up to create Ad
        </Link>
      </motion.div>

      <p className="text-[#5F5F5F] text-center">
        Start generating engaging ads tailored just for you by signing up.
      </p>
    </main>
  );
};

export default StandalonePage;
