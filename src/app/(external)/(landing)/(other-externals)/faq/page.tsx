"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import animationData from "@/lottie/faq.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface FAQItem {
  question: string;
  answer: string;
}

const generalQuestions: FAQItem[] = [
  {
    question: "What is this AI-powered ad creator?",
    answer:
      "It’s a tool that helps businesses design and customize video and image ads quickly using AI-driven templates.",
  },
  {
    question: "Who can use this platform?",
    answer:
      "Anyone! Whether you’re a marketer, entrepreneur, or business owner, you can create professional ads with ease.",
  },
  {
    question: "Do I need design experience to use this tool?",
    answer:
      "No, our tool is designed for users of all skill levels. It simplifies the ad creation process, making high-quality marketing accessible even without design experience.",
  },
];

const features: FAQItem[] = [
  {
    question: "Can I upload my own images and videos?",
    answer:
      "Yes, you can upload your own media or choose from AI-generated options.",
  },
  {
    question: "How does AI help in ad creation?",
    answer:
      "AI suggests engaging headlines, layouts, and even adapts designs according to your preference.",
  },
  {
    question: "Can I create both video and image ads?",
    answer: "Yes, the tool supports creating both video and image ads.",
  },
  {
    question: "Does the tool provide different aspect ratios for ads?",
    answer:
      "Yes, it offers various aspect ratios to suit platforms like Instagram, Facebook, and more.",
  },
];

const pricing: FAQItem[] = [
  {
    question: "Is this tool free to use?",
    answer:
      "We offer a free version with limited features. You can upgrade for access to premium templates and advanced AI tools.",
  },
  {
    question: "What’s included in the premium plan?",
    answer:
      "The premium plan includes advanced AI tools, premium templates, and priority support.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time.",
  },
];

const technical: FAQItem[] = [
  {
    question: "Which platforms are supported?",
    answer:
      "You can create ads for Instagram, Facebook, TikTok, Google Ads, and more.",
  },
  {
    question: "How do I preview my ad before downloading?",
    answer:
      "The tool includes a preview feature to review your ad before downloading.",
  },
  {
    question: "What if I need help or encounter an issue?",
    answer:
      'You can visit our Help Center or contact our support team at <a href="mailto:genzadshng12@gmail.com?subject=Inquiry&body=Hello, I have a question about..." style="color: #2587D0; cursor: pointer;">genzadshng12@gmail.com</a>',
  },
];

const FAQPage: React.FC = () => {
  const [openGeneral, setOpenGeneral] = useState<number | null>(null);
  const [openFeatures, setOpenFeatures] = useState<number | null>(null);
  const [openPricing, setOpenPricing] = useState<number | null>(null);
  const [openTechnical, setOpenTechnical] = useState<number | null>(null);

  const toggleAccordion = (
    setter: React.Dispatch<React.SetStateAction<number | null>>,
    index: number
  ) => {
    setter((prev) => (prev === index ? null : index));
  };

  return (
    <section className="flex flex-col">
      <div className="px-5 md:px-[147px] pt-[12px] md:pt-[112px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="md:w-1/2">
            <h1 className="text-[18px] md:text-[40px] max-sm:text-center max-sm:pb-[12px]  font-[600] md:font-[700]">
              FAQ
            </h1>
            <p className="  max-sm:pb-6 max-sm:text-center text-[12px] md:text-[20px] text-gray font-[600] md:font-[500]">
              Find answers to all your questions about our AI-powered ad
              creator. Learn how to design, customize, and launch impactful,
              localized ads effortlessly.
            </p>
          </div>

          <div className="md:w-1/2 md:flex justify-end">
            <Lottie
              animationData={animationData}
              className="w-[300px] h-[300px] max-sm:w-[200px] max-sm:h-[200px] "
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between pt-9 gap-6">
          <div className="lg:w-[266px]">
            <p className="text-[24px] md:text-[40px] font-[700] max-sm:pb-[22px] lg:max-w-[266px] lg:w-[266px]">
              General Questions
            </p>
          </div>
          <div className="lg:max-w-[600px] lg:min-w-[400px]">
            {generalQuestions.map((genq, index) => (
              <div
                key={index}
                className="mb-4 border border-gray-300 rounded-lg overflow-hidden"
              >
                <button
                  className={`flex justify-between w-full text-left px-6 py-4 text-[18px] md:text-base font-[600] transition-all cursor-pointer duration-300 ${
                    openGeneral === index
                      ? "bg-[#520052] text-white"
                      : "bg-white text-gray-900"
                  }`}
                  onClick={() => toggleAccordion(setOpenGeneral, index)}
                >
                  {genq.question}
                  <ChevronDown
                    className={`cursor-pointer transition-transform duration-300 ease-in-out ${
                      openGeneral === index
                        ? "rotate-180 text-white"
                        : "text-gray-600"
                    }`}
                  />
                </button>
                <div
                  className={`text-gray-700 px-5 text-sm md:text-base border-t border-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${
                    openGeneral === index
                      ? "max-h-[500px] opacity-100 py-3"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                >
                  {genq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  justify-between pt-9 gap-6">
          <p className="text-[24px] md:text-[40px] font-[700]  max-sm:pb-[22px] lg:w-[266px]">
            Features & Customization
          </p>
          <div className="md:max-w-[600px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="mb-4 border border-gray-300 rounded-lg overflow-hidden"
              >
                <button
                  className={`flex justify-between w-full text-left px-6 py-4 text-[18px] md:text-base font-[600] transition-all cursor-pointer duration-300 ${
                    openFeatures === index
                      ? "bg-[#520052] text-white"
                      : "bg-white text-gray-900"
                  }`}
                  onClick={() => toggleAccordion(setOpenFeatures, index)}
                >
                  {feature.question}
                  <ChevronDown
                    className={`cursor-pointer transition-transform duration-300 ease-in-out ${
                      openFeatures === index
                        ? "rotate-180 text-white"
                        : "text-gray-600"
                    }`}
                  />
                </button>
                <div
                  className={`text-gray-700 px-5 text-sm md:text-base border-t border-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${
                    openFeatures === index
                      ? "max-h-[500px] opacity-100 py-3"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                >
                  {feature.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  justify-between pt-9 gap-6">
          <div className="lg:w-[266px]">
            <p className="text-[24px] md:text-[40px] font-[700] lg:w-[266px] max-sm:pb-[22px]">
              Pricing & Subscription
            </p>
          </div>
          <div className="md:max-w-[600px]">
            {pricing.map((price, index) => (
              <div
                key={index}
                className="mb-4 border border-gray-300 rounded-lg overflow-hidden"
              >
                <button
                  className={`flex justify-between w-full text-left px-6 py-4 text-[18px] md:text-base font-[600] transition-all cursor-pointer duration-300 ${
                    openPricing === index
                      ? "bg-[#520052] text-white"
                      : "bg-white text-gray-900"
                  }`}
                  onClick={() => toggleAccordion(setOpenPricing, index)}
                >
                  {price.question}
                  <ChevronDown
                    className={`cursor-pointer transition-transform duration-300 ease-in-out ${
                      openPricing === index
                        ? "rotate-180 text-white"
                        : "text-gray-600"
                    }`}
                  />
                </button>
                <div
                  className={`text-gray-700 px-5 text-sm md:text-base border-t border-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${
                    openPricing === index
                      ? "max-h-[500px] opacity-100 py-3"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                >
                  {price.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  justify-between pt-9 gap-6">
          <div className="lg:w-[266px]">
            <p className="text-[24px] md:text-[40px] font-[700] lg:w-[266px] max-sm:pb-[22px]">
              Technical & Support
            </p>
          </div>
          <div className="md:max-w-[600px]">
            {technical.map((tech, index) => (
              <div
                key={index}
                className="mb-4 border border-gray-300 rounded-lg overflow-hidden"
              >
                <button
                  className={`flex justify-between w-full text-left px-6 py-4 text-[18px] md:text-base font-[600] transition-all cursor-pointer duration-300 ${
                    openTechnical === index
                      ? "bg-[#520052] text-white"
                      : "bg-white text-gray-900"
                  }`}
                  onClick={() => toggleAccordion(setOpenTechnical, index)}
                >
                  {tech.question}
                  <ChevronDown
                    className={`cursor-pointer transition-transform duration-300 ease-in-out ${
                      openTechnical === index
                        ? "rotate-180 text-white"
                        : "text-gray-600"
                    }`}
                  />
                </button>
                <div
                  className={`text-gray-700 px-5 text-sm md:text-base border-t border-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${
                    openTechnical === index
                      ? "max-h-[500px] opacity-100 py-3"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                >
                  <div dangerouslySetInnerHTML={{ __html: tech.answer }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
