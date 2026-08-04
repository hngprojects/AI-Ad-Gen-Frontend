import CreateAds from "@/domains/external/components/create-ads";
import Cta from "@/domains/external/components/cta";
import Testimonials from "@/domains/external/components/testimonials";
import VideoPlayer from "@/domains/external/components/common/video-player";
import FeaturesHero from "@/domains/other-externals/components/key-features-hero-section";
import { SlidersHorizontal, WandSparkles } from "lucide-react";
import Image from "next/image";

const advantages = [
  {
    icon: <WandSparkles />,
    title: "Simplified ad-creation",
    description:
      "Generate stunning, high-performing ads in seconds — no design skills required.",
    mobileDesc:
      "Generate stunning, high-performing ads in seconds — no design skills required. Our platform streamlines every step, so you bring your brand vision to life.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="33"
        viewBox="0 0 24 33"
        fill="none"
      >
        <g clip-path="url(#clip0_12206_24321)">
          <path
            d="M12.0565 0.449219C7.60277 0.449219 4.06265 3.99208 4.06265 8.44922V9.59208C2.12129 9.59208 0.636719 11.0778 0.636719 13.0206V21.0206C0.636719 27.3064 5.77561 32.4492 12.0565 32.4492C18.3373 32.4492 23.4762 27.3064 23.4762 21.0206V13.0206C23.4762 11.0778 21.9917 9.59208 20.0503 9.59208V8.44922C20.0503 3.99208 16.5102 0.449219 12.0565 0.449219ZM21.1923 13.0206V21.0206C21.1923 26.0492 17.0812 30.1635 12.0565 30.1635C7.03179 30.1635 2.92067 26.0492 2.92067 21.0206V13.0206C2.92067 12.3349 3.37746 11.8778 4.06265 11.8778H5.20462H18.9083H20.0503C20.7355 11.8778 21.1923 12.3349 21.1923 13.0206ZM6.3466 9.59208V8.44922C6.3466 5.24922 8.85895 2.73493 12.0565 2.73493C15.254 2.73493 17.7664 5.24922 17.7664 8.44922V9.59208H6.3466Z"
            fill="white"
          />
          <path
            d="M11.1458 18.3926H14.9144C15.5995 18.3926 16.0563 17.9355 16.0563 17.2498C16.0563 16.5641 15.5995 16.1069 14.9144 16.1069H13.2014V15.3069C13.2014 14.6212 12.7446 14.1641 12.0594 14.1641C11.3742 14.1641 10.9174 14.6212 10.9174 15.3069V16.1069C9.31867 16.2212 8.0625 17.4783 8.0625 19.0783C8.0625 20.7926 9.43287 22.1641 11.1458 22.1641H13.0872C13.544 22.1641 13.8866 22.5069 13.8866 22.9641C13.8866 23.4212 13.544 23.7641 13.0872 23.7641H9.31867C8.63349 23.7641 8.1767 24.2212 8.1767 24.9069C8.1767 25.5926 8.63349 26.0498 9.31867 26.0498H10.9174V26.7355C10.9174 27.4212 11.3742 27.8783 12.0594 27.8783C12.7446 27.8783 13.2014 27.4212 13.2014 26.7355V25.9355C14.8002 25.8212 16.0563 24.5641 16.0563 22.9641C16.0563 21.2498 14.686 19.8783 12.973 19.8783H11.0316C10.5748 19.8783 10.2323 19.5355 10.2323 19.0783C10.3465 18.7355 10.689 18.3926 11.1458 18.3926Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_12206_24321">
            <rect
              width="22.8395"
              height="32"
              fill="white"
              transform="translate(0.636719 0.449219)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Cost-effective solution",
    description:
      "Save money while boosting your marketing impact with high-quality ads.",
    mobileDesc:
      "Save money while boosting your marketing impact — generate high-quality ads instantly without the need for expensive softwares or additional costs.",
  },
  {
    icon: <SlidersHorizontal />,
    title: "Highly customisable",
    description:
      "Adjust every element of your ad — text, visuals and colours — to your brand's needs.",
    mobileDesc:
      "Adjust every element of your ad — text, visuals, colours, and layout — to perfectly match your brand’s style and speak directly to your audience.",
  },
];

const AdGeneration = () => {
  const videoLink = "https://www.youtube.com/embed/3ucnHvmNYpQ";

  return (
    <div className="bg-gradient-to-b from-[#F9F9F9] to-white to-24.5  md:px-5 flex flex-col gap-6">
      <FeaturesHero
        heading={
          <>
            Generate
            <span className="text-[#B800B8] ml-2 font-semibold">
              High-Converting{" "}
            </span>
            AI-Powered Ads Instantly
          </>
        }
        headingMaxWidth="lg:max-w-5xl"
        subHeading="Create custom image ads for any platform or audience —no design skills needed, saving time and driving engagement."
        subHeadingMaxWidth="max-w-[726px]"
        buttonText="Generate Your Ad"
      />
      <div>
        <div className="relative w-[90%] md:w-full mx-auto aspect-square h-[200px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/generate-ads.svg"
            alt="Ad generation"
            width={1216}
            height={937}
            priority
            className="object-contain w-full h-full"
          />
        </div>
        <div className="px-6 py-10 md:py-16 bg-[#520052]">
          <div className="max-w-[1216px] w-full flex max-xl:flex-col justify-between mx-auto max-xl:space-y-6 xl:space-x-6">
            {advantages.map((ad, index) => (
              <div
                key={index}
                className="xl:max-w-[337px] w-full flex flex-col items-center xl:items-start text-white relative"
              >
                <div className="w-[54px] h-[54px] flex items-center justify-center rounded-full bg-[#D600A6] mb-[27px]">
                  {ad.icon}
                </div>
                <h3 className="text-[24px] leading-8 md:leading-6 font-semibold mb-[18px] text-center xl:text-left w-full">
                  {ad.title}
                </h3>
                <p className="hidden xl:block text-[18px] font-normal leading-7 text-center xl:text-left w-full">
                  {ad.description}
                </p>
                <p className="block xl:hidden text-[18px] font-normal leading-7 text-center xl:text-left w-full">
                  {ad.mobileDesc}
                </p>
                {index < advantages.length - 1 && (
                  <>
                    <div className="absolute right-[-15%] top-1/2 transform -translate-y-1/2 h-full opacity-15 bg-white w-[0.9px] max-lg:hidden"></div>

                    <div className="w-full lg:hidden h-[0.9px] opacity-15 bg-white mt-[51px] mb-[51px]"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-full xl:mx-auto max-lg:px-4 pt-8 flex flex-col gap-6 lg:gap-14">
        <CreateAds />
        <Testimonials />
        <div className="px-4">
          <VideoPlayer
            heading="Create engaging ads with AI in minutes"
            videoLink={videoLink}
          />
        </div>
        <Cta />
      </div>
    </div>
  );
};

export default AdGeneration;
