"use client";
import AiCreativeCreateAd from "@/domains/other-externals/components/ai-creative-create-ad";
import Cta from "@/domains/external/components/cta";
import { FAQ } from "@/domains/external/components/faq";
import HeroMarketing from "@/domains/other-externals/components/heromarketing";
import VideoPlayer from "@/domains/external/components/common/video-player";

export default function MarketingPage() {
  const videoLink = "https://www.youtube.com/embed/cbyukXO_XTk";
  return (
    <div>
      <HeroMarketing />
      <AiCreativeCreateAd />
      <div className="px-4">
        <VideoPlayer videoLink={videoLink} />
      </div>
      <FAQ />
      <Cta />
    </div>
  );
}
