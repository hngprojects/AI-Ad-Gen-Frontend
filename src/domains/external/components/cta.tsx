"use client";
import { useAuthStore } from "@/store/auth-store";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Cta = () => {
  const token = useAuthStore((state) => state.token);
  return (
    <section className="py-5 md:py-10 px-[40px] md:px-[60px] lg:px-[80px] bg-white w-full">
      <div className="bg-[#FCFCFC] rounded-2xl flex justify-between flex-wrap items-center w-full py-10 md:py-16 px-5 md:px-10 gap-2.5">
        <p className="w-full max-w-[500px] text-base md:text-[24px] lg:text-[28px] text-[#121316]">
          Ready to launch ads that deliver real results?
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={token ? "dashboard" : "signin?type=signin"}
            className="bg-light-purple cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-dark-purple transition-colors flex items-center justify-center gap-2 w-fit mt-10"
          >
            <p>Get started now!</p> <ArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default Cta;
