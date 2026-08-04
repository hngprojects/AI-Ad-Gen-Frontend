"use client";
import Header from "@/domains/external/components/common/header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import arrowRight from "../../public/arrow-right.svg";
export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-[568px] py-2 mt-[10vh] max-w-[727px] m-auto px-[20px] md:px-[111px] pt-[40px] md:pt-[138px] mb-[40px] md:mb-[138px]">
        <div className="max-w-[505px] flex flex-col items-center text-center gap-[16px] md:gap-[28px] pb-[25px] md:pb-[50px]">
          <h1 className="text-[56px] md:text-[96px] font-black bg-gradient-to-b from-[#B800B8] to-[#E692E6] bg-clip-text text-transparent">
            Oops!
          </h1>
          <h2 className="text-[24px] md:text-[36px] font-semibold">
            404-page not found
          </h2>
          <p className="text-[16px] md:text-[20px]">
            The page you&apos;re looking for might have been removed or had its
            name changed or temporarily unavailable
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={"/"}
            className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors inline-block "
          >
            Go to home{" "}
            <Image
              src={arrowRight}
              alt="Go to home Icon"
              height={24}
              width={24}
              className="pl-[10px] inline-block"
            />
          </Link>
        </motion.div>
      </div>
    </>
  );
}
