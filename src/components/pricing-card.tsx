"use client";

interface Tier {
  name: string;
  id: string;
  price: number | "Free";
  description: string;
  features: string[];
  mostPopular: boolean;
}

const tiers: Tier[] = [
  {
    name: "Starter",
    id: "tier-starter",
    price: "Free",
    description: "Get a few features to start your Adgen-ai journey.",
    features: [
      "5 ads per month",
      "Watermarked exports",
      "Limited selection of templates",
      "Standard resolution only (720p)",
    ],
    mostPopular: false,
  },
  {
    name: "Basic",
    id: "tier-basic",
    price: 30,
    description: "Get full usage of the generator.",
    features: [
      "Unlimited generated ads",
      "No watermarked exports",
      "Access to premium templates",
      "Exports in HD quality (1080p)",
    ],
    mostPopular: true,
  },
  {
    name: "Teams",
    id: "tier-teams",
    price: 50,
    description: "A full package for a 3-4 membered team.",
    features: [
      "Unlimited generated ads",
      "Share with team members",
      "Team brand kit integration",
      "4K resolution & custom export options",
    ],
    mostPopular: false,
  },
];

export default function PricingCard() {
  return <>hi</>;
}
