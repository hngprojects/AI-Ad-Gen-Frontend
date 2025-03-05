import { StarFall, Videoicon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <>
      <header className="flex justify-between border-b border-[1.5px] border-[#F8E6F8] w-full py-[18px] px-5 md:px-16 bg-white max-w-[1440px]">
        <Link href="/">
          <Image
            src="/header-logo.svg"
            alt="Adgen AI Logo"
            width={150}
            height={40}
            priority
          />
        </Link>
        <Button className="bg-[#B800B8] text-white py-2 rounded-[6px] h-[44px] px-6">
          <Link href="/waitlist">Join Waitlist</Link>
        </Button>
      </header>
      <main className=" w-full px-2.5 md:px-5 max-w-7xl">
        <section className="pt-20 flex flex-col items-center">
          <Button className="bg-[#FCF3FC] border border-[#F8E6F8] px-4 py-2.5 rounded-full text-[#B800B8] dark">
            <StarFall /> Coming Soon
          </Button>
          <hgroup className="max-w-[756px] pb-8">
            <h1 className="font-[800] text-4xl md:text-[64px] text-center text-[#290029] heading-[76px] pb-6">
              Generate Stunning Ad campaign with AI
            </h1>
            <p className="text-[#5F5F5F] text-[16px] md:text-[20px] text-center heading-[28px]">
              Our AI platform creates high-converting ads tailored to your brand
              in seconds. Save time, boost engagement, and scale your marketing
              effortlessly
            </p>
          </hgroup>
          <form
            action=""
            className="flex gap-2 max-w-[772px] w-full pt-[32px] pb-[64px]"
          >
            <Input className="w-full h-14 p-4" placeholder="Enter your email" />
            <Button className="bg-[#B800B8] text-white px-6 py-2.5 rounded-[6px] h-14">
              <Link href="/waitlist">Join Waitlist</Link>
            </Button>
          </form>
        </section>
        <section className=" md:px-[144px] w-full">
          <div className="h-[720px] w-full bg-[#F2F2F2] flex flex-col gap-4 items-center justify-center text-[#CFCFCF]">
            <Videoicon />

            <p className="">Marketing video</p>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center justify-center mt-[83px]  py-7 ">
        <section className="flex flex-col items-center max-w-[369px] ">
          <Link href="/">
            <Image
              src="/header-logo.svg"
              alt="Adgen AI Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
          <p className="text-[18px] font-medium text-[#2A2A2A]">
            Create Ads easily and effortlessly in minutes
          </p>
          <p className="pt-[24px] text-[#5F5F5F]">
            &copy; 2025 Adgen-AI. All rights reserved.
          </p>
        </section>
      </footer>
    </>
  );
};
export default ComingSoon;
