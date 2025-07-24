"use client";

import Loader from "@/components/ui/loader";
import { getRequest } from "@/lib/api";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Image {
  id: string;
  prompt: string;
  image_url: string;
  final_url: string;
  product_name: string;
}
interface ImageData {
 image: Image;
}

interface ApiResponse {
  data: ImageData;
  message: string;
  status: string;
}

const StandalonePage = () => {
  const { imageId } = useParams<{ imageId: string }>();

  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageResponse: ApiResponse = await getRequest(`/image/${imageId}`);

        if (imageResponse.status === "success") {
          setImageData(imageResponse.data);
        
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (imageId) {
      fetchImage();
    }
  }, [imageId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader />
      </div>
    );
  }


 
   const imageUrl = imageData?.image.final_url || imageData?.image?.image_url || "/preview.png"; 
   console.log("new imageUrl", imageUrl);

  return (
    <main className="flex flex-col items-center py-12">
      <picture className="p-8 mb-8 bg-white">
        <Image
          src={imageUrl}
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
