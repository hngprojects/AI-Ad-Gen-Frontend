"use client";
import CreateAd from "@/domains/external/components/create-ad";
import CreateAds from "@/domains/external/components/create-ads";
import { FAQ } from "@/domains/external/components/faq";
import Gallery from "@/domains/external/components/gallery";
import HeroSection from "@/domains/external/components/hero";
import FeaturesSection from "@/domains/external/components/key-features";
import Testimonials from "@/domains/external/components/testimonials";
import { useEffect } from "react";
import Cta from "../../../domains/external/components/cta";

export default function Home() {
  https: useEffect(() => {
    if (sessionStorage.getItem("navigatingBack") === "true") {
      sessionStorage.removeItem("navigatingBack");
      localStorage.removeItem("imageAdData");
    }
  }, []);
  return (
    <main className="max-w-[1440px] m-auto">
      <HeroSection />
      <FeaturesSection />
      <CreateAds />
      <CreateAd />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Cta />
    </main>
  );
}
