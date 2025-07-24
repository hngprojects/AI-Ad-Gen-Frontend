import CtaHowItWorks from "@/domains/other-externals/components/how-it-works-cta";
import HowWorksHero from "@/domains/other-externals/components/how-works-hero";
import ShareAd from "@/domains/other-externals/components/share-ad-section";
import GenerateSec from "@/domains/other-externals/components/generate-section";
import CustomizeSection from "@/domains/other-externals/components/customize-section";
import StepOne from "@/domains/other-externals/components/step-one";
import DownloadAd from "@/domains/other-externals/components/download-ad-section";
import PreviewAd from "@/domains/other-externals/components/preview-ad-section";
import SignInSection from "@/domains/other-externals/components/signin-section";
import TryItNow from "@/domains/other-externals/components/try-in-now";

const HowItWorksPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#F9F9F9] to-white to-24.5 px-4 md:px-5">
      <HowWorksHero />
      <div className="max-w-7xl w-full xl:mx-auto max-lg:px-4 pt-8 flex flex-col gap-6 lg:gap-14">
        <StepOne />
        <SignInSection />
        <TryItNow />
        <CustomizeSection />
        <GenerateSec />
        <PreviewAd />
        <DownloadAd />
        <ShareAd />
        <CtaHowItWorks />
      </div>
    </div>
  );
};

export default HowItWorksPage;
