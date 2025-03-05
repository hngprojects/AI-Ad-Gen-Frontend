import { Headphone, Layout, Lens, Mail } from "@/components/icons/icon";
import PricingCard from "@/components/pricing-card";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl py-6 text-center font-bold">AI Adgen</h1>
      <PricingCard />
      <div className="mt-10"></div>
    </>
  );
}
