"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Nunito } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function EmailVerify() {
  const [otp, setOtp] = useState(Array(5).fill(""));
  const [showOtp, setShowOtp] = useState(Array(5).fill(true));
  const [timer, setTimer] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let countdown: ReturnType<typeof setInterval>
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  const handleChange = (index: number, value:string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    const newShowOtp = [...showOtp];

    newOtp[index] = value;
    setOtp(newOtp);

    if (value) {
      newShowOtp[index] = true;
      setTimeout(() => {
        newShowOtp[index] = false;
        setShowOtp([...newShowOtp]);
      }, 500);
    }

    setShowOtp(newShowOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }

    if (!value && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
    if (e.key === "ArrowRight" && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(60);
      setError("");
      setOtp(Array(5).fill(""));
    }
  };

  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const otpCode = otp.join("");
      if (otpCode.length !== 5) {
        throw new Error("Please enter a complete OTP.");
      }

      // Simulate an API call for OTP verification
      // const response = await new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //    return otpCode === "12345" ? resolve("success") : reject("Invalid OTP");
      //   }, 1500);
      // });

      setError("");

      router.push("/set-password");
    } catch (err) {
      console.error("Verification error:", err);
      setError("Invalid OTP code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className={nunito.className}>
      <Card className="space-y-4 md:w-[555px] w-[450px] md:h-[534px]">
        <Link href="/signup">
        <p className="flex gap-2 pl-5 cursor-pointer">
          <ArrowLeft /> Back
        </p>
        </Link>

        <CardHeader className="space-y-3 mt-5">
          <h1 className="text-xl md:text-3xl font-bold">Verify Your Email</h1>
          <p className="text-xs md:text-sm text-gray-400">
            An OTP has been sent to your email <span className="font-semibold text-black">Chad@example.com</span>
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleVerify} aria-live="polite">
            <div className="flex gap-3 w-full mb-5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type={showOtp[index] ? "text" : "password"}
                  value={digit}
                  maxLength={1}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  aria-label={`OTP digit ${index + 1}`}
                  className="w-[70px] h-[70px] md:w-[88px] md:h-[82px] text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:bg-white"
                />
              ))}
            </div>

            <Button
              type="submit"
              className={`w-full py-6 mt-5 font-light ${
                isOtpComplete && !loading
                  ? "bg-[#B800B8] cursor-pointer hover:bg-[#b800b8e7]"
                  : "bg-[#EAC8F0] cursor-not-allowed"
              }`}
              disabled={!isOtpComplete || loading}
              aria-disabled={!isOtpComplete || loading}
            >
              {loading ? "Processing..." : "Proceed"}
            </Button>
          </form>

          <p className="text-center mt-10">
            {error ? (
              <span className="text-red-500 font-light">{error}</span>
            ) : (
              "Didn't receive a code? "
            )}
            {timer > 0 ? (
              <span className="text-gray-400 font-light" aria-live="polite">
                Re-send OTP code in {timer}s
              </span>
            ) : (
              <span
                className="text-blue-500 font-bold cursor-pointer"
                onClick={handleResend}
                role="button"
                tabIndex={0}
              >
                Resend
              </span>
            )}
          </p>
        </CardContent>
      </Card>


    </div>
  );
}