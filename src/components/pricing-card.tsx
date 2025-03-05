"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tick } from "./icons/icon";
import { Button } from "./ui/button";

// Define the structure of a pricing tier
interface Tier {
  name: string;
  id: string;
  price: number | "Free";
  description: string;
  features: string[];
  mostPopular: boolean; // Indicates if the plan is highlighted
}

// Pricing plans with their details
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
    mostPopular: false, // Not the highlighted plan
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
    mostPopular: true, // This is the highlighted plan
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
    mostPopular: false, // Not the highlighted plan
  },
];

export default function PricingCard() {
  return (
    <div className="mx-auto max-w-md mt-10 grid grid-cols-1 gap-6 lg:max-w-6xl lg:grid-cols-3">
      {tiers.map((tier) => (
        <Card
          key={tier.id}
          className={`relative rounded-2xl border gap-0 border-[#E3E3E3] shadow-[0px_1px_3px_2px_rgba(0,0,0,0.06)] px-[1.65rem] py-10  
            ${tier.mostPopular ? "bg-[#CF54CF]" : "bg-white "} 
            ${
              tier.id === "tier-basic"
                ? "bg-[url('/basic-price-bg.svg')] bg-cover bg-center text-white before:absolute before:inset-0 before:bg-black/0 before:z-0"
                : ""
            }`}
        >
          {/* Card Header with Title and Description */}
          <CardHeader className="gap-0 py-0 pl-0 pr-4 md:pr-10 xl:pr-19">
            <CardTitle
              className={`text-[28px] font-semibold leading-[36px] ${
                tier.mostPopular ? "text-white" : "text-[#CF54CF]"
              }`}
            >
              {tier.name}
            </CardTitle>
            <CardDescription
              className={`text-sm min-h-10 font-normal leading-5 ${
                tier.mostPopular ? "text-white" : "text-[#A1A1A1]"
              }`}
            >
              {tier.description}
            </CardDescription>
          </CardHeader>

          {/* Card Content with Price and Features */}
          <CardContent className="mt-4 p-0">
            <p
              className={`flex items-baseline gap-x-2 ${
                tier.mostPopular ? "text-white" : "text-[#CF54CF]"
              } text-[36px] font-semibold leading-[44px]`}
            >
              {/* Display "Free" if price is free, otherwise show price */}
              {tier.price === "Free" ? (
                "Free"
              ) : (
                <>
                  ${tier.price}
                  <span className="text-sm font-normal -ml-1 leading-5">
                    /mo
                  </span>
                </>
              )}
            </p>
            <div className="bg-[#E3E3E3] h-[1px] w-full mt-[1rem] mb-11" />

            {/* Features List */}
            <ul
              role="list"
              className="mt-6 gap-4 flex flex-col text-sm text-gray-600"
            >
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-center gap-x-[0.9rem] text-nowrap ${
                    tier.mostPopular ? "text-white" : "text-black"
                  } text-base font-normal leading-6`}
                >
                  <Tick /> {/* Checkmark icon */}
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>

          {/* Card Footer with Button */}
          <CardFooter>
            <Button
              className="mt-13 mx-auto text-base font-medium leading-[24px]"
              variant={tier.mostPopular ? "choosePlanOutline" : "choosePlan"}
              size="choosePlan"
            >
              Choose Plan
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
