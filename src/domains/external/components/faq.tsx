"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How does the genz.ad work?",
    answer:
      "genz.ad is an AI-powered ad generator that helps you create high-quality ads for your campaigns. Simply enter your campaign details such as product name, target region, target age group, gender, ad language, and ad goal, and the AI will generate a customized ad based on your inputs",
  },
  {
    question: "Can I customize AI-generated ads?",
    answer:
      "Yes! Our tool allows full customization of AI-generated ads. You can modify text, images, colors, fonts, and even tailor ads according to your target audience to ensure they align with your brand’s vision.",
  },
  {
    question: "What platforms are the ads optimized for?",
    answer:
      "Our AI-powered tool optimizes ads for various platforms, including Facebook, LinkedIn, WhatsApp and Twitter. You can easily select the platform you’re targeting, and the tool allows you to select your formats accordingly.",
  },
  {
    question: "Is this tool suitable for small businesses and entrepreneurs?",
    answer:
      "Absolutely! Our tool is designed for businesses of all sizes, including small businesses, startups, and entrepreneurs. It simplifies the ad creation process, making high-quality marketing accessible even without a dedicated design team.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-[80px] py-20 px-[40px] md:px-[60px] lg:px-[80px] bg-white">
      <div className="w-full lg:max-w-[386px]">
        <p
          className="font-semibold uppercase text-sm"
          style={{ color: "#B800B8" }}
        >
          QUESTIONS & ANSWERS
        </p>
        <h2 className="text-2xl lg:text-[48px] font-medium mt-3">
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="text-gray-600 mt-3 text-sm  md:text-base">
          Got questions? We&apos;ve got answers. Browse our frequently asked
          questions to find what you&apos;re looking for.
        </p>
      </div>

      <div className="flex-shrink-0 w-full lg:w-[45%]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className={`flex justify-between w-full text-left  px-6 py-4 text-sm md:text-base font-medium transition-all cursor-pointer duration-300 ${
                openIndex === index
                  ? "bg-[#520052] text-white"
                  : "bg-white text-gray-900"
              }`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <ChevronDown
                className={`cursor-pointer transition-transform duration-300 ease-in-out ${
                  openIndex === index
                    ? "rotate-180 text-white"
                    : "text-gray-600"
                }`}
              />
            </button>
            <div
              className={` text-gray-700 px-5 text-sm md:text-base border-t border-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[500px] opacity-100 py-3"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
