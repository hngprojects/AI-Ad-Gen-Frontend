"use client";

import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/domains/ads-gen/components/back-button";
import { useImageContext } from "@/domains/ads-gen/context/ImageContext";

const prompts = [
  {
    text: "Promote ChicThreads' spring collection with quality materials and unique designs. Offer 25% discount for first orders.",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664920/image_fx__11_ghfqum.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664920/image_fx__12_bumsgr.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664890/image_fx__9_tg7coe.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664922/image_fx__8_hkymqf.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664922/image_fx__9_s3vrer.png",
    ],
    details: {
      text: "Promote ChicThreads' spring collection with quality materials and unique designs. Offer 25% discount for first orders.",
      productName: "ChicThreads",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Fashion Shoppers",
      region: "Global",
    },
  },
  {
    text: "Advertise DreamHome Realty's luxury properties with modern amenities. Offer a free home-buying guide to interested clients.",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664914/image_fx__5_ht4xeq.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664918/image_fx__2_tpfxid.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664917/image_fx__3_ncm44a.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664914/image_fx__6_cw0jpo.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664919/image_fx__1_ej3rqq.png",
    ],
    details: {
      text: "Advertise DreamHome Realty's luxury properties with modern amenities. Offer a free home-buying guide to interested clients.",
      productName: "DreamHome Realty",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Home Buyers",
      region: "Global",
    },
  },
  {
    text: "Announce 40% discount on ModernLiving furniture with premium materials. Contact us for limited-time offers.",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664913/image_fx__4_cvwd4a.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664912/image_fx__8_vc2vlr.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664913/image_fx__x7z9dp.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664912/image_fx__7_xg4b7k.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664911/image_fx__9_tdzssw.png",
    ],
    details: {
      text: "Announce 40% discount on ModernLiving furniture with premium materials. Contact us for limited-time offers.",
      productName: "ModernLiving",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Home Decor Enthusiasts",
      region: "Global",
    },
  },
  {
    text: "Promote Fanta's refreshing fruit-flavored drinks with 100% natural flavors. Experience the fruity taste today!",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664904/image_fx__6_mvqrcw.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664904/image_fx__5_xjvtgy.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664905/image_fx__2_ulytwn.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664905/image_fx__3_cbxtf4.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664907/image_fx__1_sllfay.png",
    ],
    details: {
      text: "Promote Fanta's refreshing fruit-flavored drinks with 100% natural flavors. Experience the fruity taste today!",
      productName: "Fanta",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "All Ages",
      region: "Global",
    },
  },
  {
    text: "Create urgency for fashion brand's 48-hour flash sale with exclusive discounts. Strong call to action for trending outfits.",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664903/image_fx__gdcyvm.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664892/image_fx__7_mpw4zp.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664891/image_fx__8_oz9pag.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664890/image_fx__9_tg7coe.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664902/image_fx__4_flftmv.png",
    ],
    details: {
      text: "Create urgency for fashion brand's 48-hour flash sale with exclusive discounts. Strong call to action for trending outfits.",
      productName: "Fashion Flash Sale",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Fashion-Conscious Buyers",
      region: "Global",
    },
  },
  {
    text: "Promote gourmet burger restaurant's grand opening with social media teasers. Exclusive opening-day discounts available.",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664878/image_fx__7_psbfxm.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664879/image_fx__2_wkjz6u.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664878/image_fx__4_c10fhy.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664879/image_fx__3_b1st5t.png",
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664880/image_fx__kysgz8.png",
    ],
    details: {
      text: "Promote gourmet burger restaurant's grand opening with social media teasers. Exclusive opening-day discounts available.",
      productName: "Gourmet Burger Restaurant",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Food Enthusiasts",
      region: "Global",
    },
  },
];

interface PromptSelectionProps {
  selectedPromptIndex: number | null;
  onSelectPrompt: (index: number) => void;
  onGenerateAd: () => void;
}

const PromptSelection: React.FC<PromptSelectionProps> = ({
  selectedPromptIndex,
  onSelectPrompt,
  onGenerateAd,
}) => {
  const { setImageUrl, setPromptData } = useImageContext();

  const handleSelectPrompt = (index: number) => {
    onSelectPrompt(index);
    const selectedPrompt = prompts[index];
    const randomImage =
      selectedPrompt.images[
        Math.floor(Math.random() * selectedPrompt.images.length)
      ];
    setImageUrl(randomImage);
    setPromptData(JSON.stringify(selectedPrompt.details));
  };

  return (
    <div className="flex flex-col gap-10">
      <BackButton fallbackUrl="/"/>
      <CardHeader className="text-center px-0 mt-[15px]">
        <CardTitle className="text-[28px] leading-[36px] text-[#121316] font-semibold">
          Generate Your Image Ad for Free
        </CardTitle>
        <p className="text-[#667185] text-sm md:text-[18px] font-normal mt-1">
          Choose from Predefined AI Prompts
        </p>
      </CardHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6">
        {prompts.map((prompt, index) => (
          <div
            onClick={() => handleSelectPrompt(index)}
            key={index}
            className={`flex gap-1 items-end md:items-center border  py-3 px-6 rounded-[20px] text-base font-medium leading-6 text-[#5F5F5F] cursor-pointer text-balance ${
              selectedPromptIndex === index
                ? "border-[#1671D9]"
                : "border-[#E3E3E3]"
            }`}
          >
            {prompt.text}
            <div className="w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.8335 14.1666L14.1668 5.83325"
                  stroke="#63A0E6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.8335 5.83325H14.1668V14.1666"
                  stroke="#63A0E6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={selectedPromptIndex === null}
          onClick={onGenerateAd}
          className={`px-6 py-3 h-12 text-base rounded-md transition-colors text-white shadow-none md:mt-[13px] w-full md:w-fit ${
            selectedPromptIndex !== null
              ? "bg-[#B800B8] hover:bg-[#960096] cursor-pointer"
              : "bg-[#EAC8F0] cursor-not-allowed"
          }`}
        >
          Generate Ad
        </Button>
      </div>
    </div>
  );
};

export default PromptSelection;
