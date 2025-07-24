"use client";
import CreateAds from "@/domains/external/components/create-ads";
import Cta from "@/domains/external/components/cta";
import { FAQ } from "@/domains/external/components/faq";
import Hero2 from "@/domains/other-externals/components/heromarketing2";
import VideoPlayer from "@/domains/external/components/common/video-player";

export default function MarketingPage() {
  const videoLink = "https://www.youtube.com/embed/3ucnHvmNYpQ";
  return (
    <div>
      <Hero2 />
      <CreateAds />
      <div className="px-4">
        <VideoPlayer videoLink={videoLink} />
      </div>
      <FAQ />
      <Cta />
    </div>
  );
}
