"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useGoogleAuth } from "@/domains/auth/api/useGoggleAuth";
import { LoadingButton } from "@/domains/auth/components/loading-button";
import Image from "next/image";
import googlelogo from "../../../../public/google.svg";
import TermsModal from "./terms-modal";
import { termsData } from "../(terms-policy)/terms/data";
import { privacyData } from "../(terms-policy)/privacy/data";

interface AuthFormProps {
  type: "signin" | "signup";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const { handleGoogleLogin, isLoading: isGoogleLoading } = useGoogleAuth();
  const [openModal, setOpenModal] = React.useState<"terms" | "privacy" | null>(
    null
  );

  const handleLinkClick = (
    e: React.MouseEvent,
    modalType: "terms" | "privacy"
  ) => {
    if (window.innerWidth >= 768) {
      e.preventDefault();
      setOpenModal(modalType);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-[#A71CA7E5] to-[#D60CD673] p-6">
      <motion.div
        className="absolute inset-0 bg-cover bg-repeat"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/digm76oyr/image/upload/v1742922481/Carousel_for_Export_1_afax3w.jpg")',
          opacity: 0.09,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {openModal === "terms" && (
        <TermsModal
          onClose={() => setOpenModal(null)}
          contentData={termsData}
          type="terms"
        />
      )}

      {openModal === "privacy" && (
        <TermsModal
          onClose={() => setOpenModal(null)}
          contentData={privacyData}
          type="privacy"
        />
      )}

      <div className="relative z-10 flex items-center justify-center h-full">
       
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-8 w-full max-w-md text-center"
        > <Link
          href="/"
          className="absolute top-4 left-4 text-gray-600 hover:text-black border border-black rounded-full p-1 cursor-pointer "
          aria-label="Go back to home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>
          <div className="mb-6 mt-6 flex items-center justify-center">
            <Link href="/">
              <Image
                src="/genzz.svg"
                alt="Genz.ad logo"
                width={50}
                height={50}
                className="mx-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-2 text-gray-800 mt-6">
            {type === "signup" ? "Welcome to Genz.ad" : "Welcome Back"}
          </h2>

          <div className="my-6">
            <LoadingButton
              type="button"
              className="w-full border border-gray-300 bg-black hover:bg-black/90 text-white py-6 px-4 rounded-md flex items-center justify-center"
              isLoading={isGoogleLoading}
              onClick={handleGoogleLogin}
            >
              <Image
                src={googlelogo}
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>
                {type === "signup"
                  ? "Sign up with Google"
                  : "Continue with Google"}
              </span>
            </LoadingButton>
          </div>

          {type === "signup" && (
            <p className="text-sm text-gray-600 mb-6 max-w-[28ch] mx-auto mt-6">
              By signing up, you agree to our{" "}
              <Link
                href="/terms"
                onClick={(e) => handleLinkClick(e, "terms")}
                className="text-[#520052] font-bold hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                onClick={(e) => handleLinkClick(e, "privacy")}
                className="text-[#520052] font-bold hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          )}

          <p className="text-sm text-gray-600 mt-4">
            {type === "signup" ? (
              <>
                Already have an account?{" "}
                <Link href="/signin" className="text-[#B800B8] hover:underline">
                  Sign in
                </Link>
              </>
            ) : (
              <>
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-[#B800B8] hover:underline">
                  Sign up
                </Link>
              </>
            )}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthForm;
