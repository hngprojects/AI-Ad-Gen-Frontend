"use client";
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Nunito } from "next/font/google";
import Link from "next/link";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isButtonDisabled = !email || !isValidEmail(email);

  return (
    <div className={`my-20 ${nunito.className}`}>
      <Card className="space-y-4 md:w-[555px] w-[330px] md:h-[534px]">
        <Link href="/">
          <p className="flex gap-2 pl-5 cursor-pointer">
            <ArrowLeft /> Back
          </p>
        </Link>

        <CardHeader className="space-y-3 mt-5">
          <h1 className="text-xl md:text-3xl font-bold">Create your account</h1>
          <p className="text-xs md:text-sm text-gray-400">
            Provide your details to get an account
          </p>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 mb-5">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-4 border border-[#B800B8] rounded-md focus:outline-none focus:bg-white"
                />
              </div>
            </div>

            <Link href="/verify-email">
              <Button
                type="submit"
                className={`w-full py-6 mt-5 font-light ${
                  isButtonDisabled
                    ? "bg-[#EAC8F0] cursor-not-allowed"
                    : "bg-[#B800B8] cursor-pointer hover:bg-[#b800b8e7]"
                }`}
                disabled={isButtonDisabled}
              >
                Sign Up
              </Button>
            </Link>
          </form>

          <p className="text-center mt-10">
            Already have an account?{" "}
            <Link href="/signin?type=signin">
              <span className="text-blue-500 font-bold cursor-pointer">
                Sign in
              </span>
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
