"use client";

import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/domains/ads-gen/components/back-button";
import { useImageContext } from "@/domains/ads-gen/context/ImageContext";
import { motion } from "framer-motion";

export const prompts = [
  {
    text: "Generate a sleek and modern fashion ad featuring a stylish model wearing our latest clothing item. The background should be a minimalist urban setting, emphasizing elegance and sophistication.",
    images: [
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742901657/DALL_E_2025-03-25_11.46.15_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_smartphone_has_a_sleek_6_vrei3m.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742901639/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_14_clapht.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742901614/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_16_gqw50x.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742901530/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_18_x8yptp.png",
    ],
    details: {
      text: "Generate a sleek and modern fashion ad featuring a stylish model wearing our latest clothing item. The background should be a minimalist urban setting, emphasizing elegance and sophistication.",
      productName: "ChicThreads",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Fashion Shoppers",
      region: "Global",
    },
  },
  {
    text: "Generate an eye-catching image ad for a season sale. The design should be dynamic and urgent, using high-contrast colours to grab attention",
    images: [
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742903156/DALL_E_2025-03-25_11.46.15_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_smartphone_has_a_sleek_5_nh9qsf.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742903150/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_13_ewofon.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742903157/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_19_k1y2xt.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742903159/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_17_menenh.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742903314/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_23_aclnmi.png",
    ],
    details: {
      text: "Generate an eye-catching image ad for a season sale. The design should be dynamic and urgent, using high-contrast colours to grab attention",
      productName: "DreamHome Realty",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Home Buyers",
      region: "Global",
    },
  },
  {
    text: "Generate a high-end luxury product ad featuring a premium watch. The design should  be sleek and minimalistic with a black and gold colour scheme",
    images: [
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902036/DALL_E_2025-03-25_11.46.15_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_smartphone_has_a_sleek_3_dobqd8.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902035/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_8_beyfn4.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902033/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_7_p7bdgu.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902016/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_9_qavfez.png",
    ],
    details: {
      text: "Generate a high-end luxury product ad featuring a premium watch. The design should  be sleek and minimalistic with a black and gold colour scheme",
      productName: "ModernLiving",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Home Decor Enthusiasts",
      region: "Global",
    },
  },
  {
    text: "Create an appetizing food ad featuring a close up shot of a gourmet dish with steam rising, plated beautifully on a rustic wooden table",
    images: [
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902315/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_10_zhupjl.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902314/DALL_E_2025-03-25_11.46.15_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_smartphone_has_a_sleek_4_yio5g8.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902314/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_11_wvue17.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902314/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_12_y2dpwc.png",
    ],
    details: {
      text: "Create an appetizing food ad featuring a close up shot of a gourmet dish with steam rising, plated beautifully on a rustic wooden table",
      productName: "Fanta",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "All Ages",
      region: "Global",
    },
  },
  {
    text: "Generate a futuristic product ad featuring the latest smartphone floating in mid-air, surrounded by glowing UI elements. The ad should have a sleek high tech vibe with a dar gradient",
    images: [
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902521/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_3_bft9mm.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902520/DALL_E_2025-03-25_11.46.15_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_smartphone_has_a_sleek_1_gljckb.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902520/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_2_imym3k.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902520/DALL_E_2025-03-25_11.46.39_-_A_futuristic_product_advertisement_featuring_the_latest_smartphone_floating_in_mid-air_surrounded_by_glowing_UI_elements._The_ad_has_a_sleek_high-te_1_uhbkts.png",
    ],
    details: {
      text: "Generate a futuristic product ad featuring the latest smartphone floating in mid-air, surrounded by glowing UI elements. The ad should have a sleek high tech vibe with a dar gradient",
      productName: "Fashion Flash Sale",
      aspectRatio: "9:16",
      language: "English",
      resolution: "9:16 (736 x 1312)",
      targetAudience: "Fashion-Conscious Buyers",
      region: "Global",
    },
  },
  {
    text: "Generate a peaceful and calming ad for a meditation retreat, featuring a scenic sunrise view with a person in a meditative pose. The text should read” ‘Recharge Your Mind & Body - Book Your Escape",
    images: [
      "https://res.cloudinary.com/ds0sysk6d/image/upload/v1741664879/image_fx__2_wkjz6u.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902771/DALL_E_2025-03-25_11.51.40_-_A_peaceful_and_calming_advertisement_for_a_meditation_retreat._The_scene_features_a_scenic_sunrise_over_a_tranquil_mountain_landscape_with_a_person_s_1_i4trp1.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902770/DALL_E_2025-03-25_11.49.58_-_A_peaceful_and_calming_advertisement_for_a_meditation_retreat._The_image_features_a_scenic_sunrise_over_a_tranquil_landscape_with_a_person_sitting_in_1_1_bkurpx.png",
      "https://res.cloudinary.com/digm76oyr/image/upload/v1742902771/DALL_E_2025-03-25_11.47.43_-_A_peaceful_and_calming_advertisement_for_a_meditation_retreat._The_image_features_a_scenic_sunrise_view_over_a_tranquil_landscape_with_a_person_sitti_1_s7pde4.png",
    ],
    details: {
      text: "Generate a peaceful and calming ad for a meditation retreat, featuring a scenic sunrise view with a person in a meditative pose. The text should read” ‘Recharge Your Mind & Body - Book Your Escape",
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
    <div className="flex flex-col gap-10 rounded-[20px] p-2 md:p-8 mx-auto bg-[#fff]">
      <BackButton fallbackUrl="/" className="max-md:mb-0" />
      <CardHeader className="text-center px-0 mt-1 md:mt-[15px]">
        <CardTitle className="text-[22px] md:text-[28px] leading-[36px] text-[#121316] font-semibold">
          Generate Your Image Ad Using Predefined Prompts For Free
        </CardTitle>
        <p className="text-[#667185] text-sm md:text-[18px] font-normal mt-1">
          Choose from Predefined AI Prompts
        </p>
      </CardHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-3 gap-y-6 mx-auto">
        {prompts.map((prompt, index) => {
          const isSelected = selectedPromptIndex === index;

          return (
            <motion.div
              onClick={() => handleSelectPrompt(index)}
              key={index}
              className={`flex flex-col items-start gap-5 border py-3 px-3 md:px-5 rounded-[20px] text-sm md:text-base font-medium leading-7 text-[#5F5F5F] cursor-pointer ${
                isSelected
                  ? "border-[#63A0E6] bg-[#ECECEC] text-[#5F5F5F]"
                  : "border-[#E3E3E3] text-[#5F5F5F]"
              }`}
              whileHover={{
                scale: 1.02,
                backgroundColor: "#ECECEC",
                transition: { duration: 0.2 },
              }}
              layout
              animate={{
                borderColor: isSelected ? "#63A0E6" : "#E3E3E3",
                backgroundColor: isSelected ? "#ECECEC" : "#FFFFFF",
                boxShadow: isSelected
                  ? "0 0 2px rgba(99, 160, 230, 0.3)"
                  : "none",
              }}
              transition={{
                borderColor: { duration: 0.3 },
                backgroundColor: { duration: 0.3 },
                boxShadow: { duration: 0.3 },
              }}
            >
              {prompt.text.length > 110
                ? `${prompt.text.substring(0, 110)}...`
                : prompt.text}
              <motion.div
                className="w-fit"
                animate={{
                  scale: isSelected ? [1, 1.2, 1] : 1,
                  rotate: isSelected ? [0, 5, 0] : 0,
                }}
                transition={{
                  duration: 0.4,
                  times: [0, 0.6, 1],
                  ease: "easeInOut",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <motion.path
                    d="M5.8335 14.1666L14.1668 5.83325"
                    stroke={isSelected ? "#63A0E6" : "#E3E3E3"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ stroke: isSelected ? "#63A0E6" : "#E3E3E3" }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.path
                    d="M5.8335 5.83325H14.1668V14.1666"
                    stroke={isSelected ? "#63A0E6" : "#E3E3E3"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ stroke: isSelected ? "#63A0E6" : "#E3E3E3" }}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <motion.div
          className="w-full md:w-fit"
          whileHover={
            selectedPromptIndex !== null
              ? {
                  scale: 1.03,
                }
              : {}
          }
          whileTap={
            selectedPromptIndex !== null
              ? {
                  scale: 0.97,
                }
              : {}
          }
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default PromptSelection;
