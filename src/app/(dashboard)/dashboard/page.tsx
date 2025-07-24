"use client";

import { ImageAdCard } from "@/app/(dashboard)/components/dashboard-hero";
import DashboardContent from "@/domains/ads-gen/components/dashboard-content";
import { useSearchParams } from "next/navigation";
export default function Dashboard() {
  const filterParam = useSearchParams().get("type");
  const filter =
    filterParam === "user" || filterParam === "community"
      ? filterParam
      : undefined;
  return (
    <main className="container mx-auto px-6 py-4 md:py-8 max-w-[1316px]">
      <div>
        <ImageAdCard
          title="Generate Image Ad"
          description="Create high-quality, AI-powered image ads in seconds. Upload, customize, and generate visuals tailored for your audience"
          buttonText="Generate Ad"
          buttonHref="/dashboard/ad-form"
        />
      </div>

      <DashboardContent filt={filter} />
    </main>
  );
}
