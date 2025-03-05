"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Button } from "../ui/button";
import { faqData, FaqDataProps } from "./faqData";

export const Faq = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [showFullFaq, setShowFullFaq] = useState<boolean>(false);

  const visibleFaqs = showFullFaq ? faqData : faqData.slice(0, 4);

  return (
    <section className="bg-white max-xl:px-4">
      <div className="max-w-[1300px] w-full mx-auto py-20 md:py-[100px] flex flex-col md:flex-row gap-6 items-center md:items-start ">
        <div className="md:max-w-[450px] w-full flex flex-col gap-6 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <h2 className="uppercase text-[#458DE1] bg-[#E8F1FB] py-2 px-6 text-center text-lg md:text-xl font-semibold leading-7 rounded-[8px] w-fit mx-auto md:mx-0">
              Questions & Answers
            </h2>
            <h1 className="text-[#520052] font-bold text-4xl leading-12">
              Frequently Asked Questions{" "}
              <span className="text-[#B800B8] ">(FAQ)</span>
            </h1>
          </div>

          <p className="text-base md:text-lg font-medium leading-7 text-[#5F5F5F]">
            Got questions? We've got answers. Browse our{" "}
            <br className="hidden md:block" />
            frequently asked questions to find what{" "}
            <br className="hidden md:block" />
            you're looking for.
          </p>
        </div>

        <div className="w-full">
          <Accordion
            type="single"
            className="flex flex-col gap-4"
            collapsible
            onValueChange={(value) => setOpenItem(value)}
          >
            {visibleFaqs.map((faq: FaqDataProps, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger
                  className={`py-4 px-6 text-lg md:text-xl leading-7 font-medium flex items-center
                ${
                  openItem === `item-${index}`
                    ? "rounded-t-lg rounded-b-none bg-[#520052] border-t border-l border-r border-[#E9B0E9] text-white"
                    : "rounded-lg bg-white border border-[#E9B0E9] text-[#2A2A2A]"
                }
                transition-all duration-500 ease-in-out`}
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className={`
                  py-4 px-6 rounded-lg bg-white text-base md:text-lg text-[#5F5F5F] font-medium
                  ${
                    openItem === `item-${index}`
                      ? "rounded-b-lg rounded-t-none border border-[#E9B0E9]"
                      : "rounded-lg"
                  }
                  transition-all duration-500 ease-in-out
                `}
                  data-state="open"
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex items-center max-md:justify-center gap-2 mt-4 md:mt-6 text-base leading-6">
            <p className="text-[#2A2A2A] font-normal">
              {showFullFaq ? "That's all the FAQs!" : "Have more questions?"}
            </p>
            <Button
              variant="link"
              className="text-[#C633C6] font-semibold cursor-pointer p-0"
              onClick={() => setShowFullFaq(!showFullFaq)}
            >
              {showFullFaq ? "Show Less" : "See the full FAQ"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
