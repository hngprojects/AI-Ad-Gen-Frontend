"use client";
import { useAdsContext } from "@/domains/ads-gen/context/AdsContext";
import { DesktopAdPreviewNavigation } from "@/domains/external/components/common/desktop-ad-preview-navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const AddDetails = () => {
  const searchParams = useSearchParams();
  const [, setCopyStatus] = useState("");
  const filter = searchParams.get("type");
  const id = searchParams.get("id");

  const { adData } = useAdsContext();

  if (filter !== "user" && filter !== "community") {
    return <p className="text-red-500">Error: Invalid ad type</p>;
  }
  if (!filter || !id || !adData[filter]) {
    return <p className="text-red-500">Error: Invalid ad data</p>;
  }

  const adIndex = Number(id);

  if (isNaN(adIndex) || adIndex < 0 || adIndex >= adData[filter].length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col gap-3 items-center justify-center">
          <p className="text-red-500 text-2xl">Error: Ad not found</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={"/dashboard"}
              className="flex items-center justify-center gap-2.5 cursor-pointer text-white px-6 py-3 rounded-sm bg-[#B800B8] hover:bg-[#960096] transition-colors"
            >
              Go to Dashbard <ArrowRight size={20} className="text-white" />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const pageAdData = adData[filter][adIndex];

  const handleCopy = async () => {
    const copiedLink = `https://genz.ad/stand-alone/${pageAdData}`;

    try {
      await navigator.clipboard.writeText(copiedLink);
      setCopyStatus("Copied");
    } catch (error) {
      setCopyStatus(String(error));
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });
  };

  return (
    <main className="mx-auto max-w-[1440px] flex flex-col-reverse lg:flex-row ">
      <section className="max-w-[440px] w-full lg:flex-[3] flex flex-col gap-10 bg-white p-[16px_20px] lg:p-[24px_40px] lg:border-r lg:border-[#ECF1F5]">
        <div className="flex justify-between items-center">
          <h1 className="text-[28px] font-semibold">{"Title"}</h1>
          <button className="h-9 p-[6px_25px] text-[#092F5B] border border-[#B7D3F3] bg-[#E8F1FB] rounded-[40px]">
            Image
          </button>
        </div>
        <div>
          <div className="flex justify-between items-center mb-3">
            <span>Ad Prompt</span>
            <Image
              src="/copy-icon.svg"
              height={20}
              width={20}
              alt="copy icon"
            />
          </div>
          <p className="text-[18px] text-[#7D7D7D] font-semibold p-4 rounded-[9px] border border-[#E4E7EC] bg-[#FCFCFC]">
            {pageAdData.prompt}
          </p>
        </div>
        <div>
          <p className="text-[#121316]">Product Name</p>
          <span className="text-[#5F5F5F] font-medium">
            {pageAdData.product_name || "No Product Name"}
          </span>
        </div>
        <div>
          <p className="text-[#121316]">Ad Size & Format</p>
          <span className="text-[#5F5F5F] font-medium">
            {pageAdData.ad_size || ""}
          </span>
        </div>
        <div>
          <p className="text-[#121316]">Target Audience</p>
          <span className="text-[#5F5F5F] font-medium">
            {pageAdData.target_audience}
          </span>
        </div>
        <div>
          <p className="text-[#121316]">Date created</p>
          <span className="text-[#5F5F5F] font-medium">
            {formatDate(pageAdData.created_at)}
          </span>
        </div>
      </section>

      <section className="w-full md:flex-[7] bg-[#F9FAFB] flex flex-col items-center">
        <div className="py-3 px-2 md:px-10 bg-white border-b border-[#ECF1F5] w-full">
          <DesktopAdPreviewNavigation
            imageUrl={pageAdData.image_url}
            imageId={pageAdData.id}
            pageAdData={pageAdData}
            handleCopy={handleCopy}
            status="completed"
            type="image-form"
            hideSaveAndExit={true}
            filter={filter}
          />
        </div>
        <div className="md:my-10 py-3 bg-[#F0F3F5] rounded-lg md:p-10  max-w-[699px] w-full max-md:w-[90%] flex items-center justify-center ">
          <Image
            src={
              pageAdData.final_url ? pageAdData.final_url : pageAdData.image_url
            }
            height={310}
            width={335}
            alt={"ad Image"}
            className="w-full h-auto rounded-lg bg-transparent"
            unoptimized
            id="containerRef"
          />
        </div>
      </section>
    </main>
  );
};

export default AddDetails;
