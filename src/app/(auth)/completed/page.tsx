"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Nunito } from "next/font/google";
import CheckIcon from "../../../../public/check.svg";
import Link from "next/link";
import Image from "next/image";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function Complete() {
  return (
    <div className={nunito.className}>
      <Card className="space-y-4 md:w-[555px] w-[330px] md:p-10">
        <CardHeader className="space-y-3 mt-5 flex justify-center items-center">
          <Image src={CheckIcon.src} alt="check-icon" />
          <h1 className="text-3xl font-bold">Awesome!</h1>
          <p className="text-sm text-gray-400">You&apos;re in</p>
        </CardHeader>

        <CardContent>
          <Link href="/signin?type=signin">
            <Button
              type="submit"
              className="bg-[#B800B8] cursor-pointer hover:bg-[#b800b8e7 w-full py-6 mt-5 font-light"
            >
              Let&apos;s get started
            </Button>
          </Link>
        </CardContent>
      </Card>

      <p className="text-xs md:text-sm text-gray-500 text-center fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        © 2025 Genz.ad All rights reserved
      </p>
    </div>
  );
}
