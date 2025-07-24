import CtaHowItWorks from "@/domains/other-externals/components/community-cta";
import CreateAds from "@/domains/other-externals/components/key-features-ad";
import FeaturesHero from "@/domains/other-externals/components/key-features-hero-section";

const notes = [
  {
    name: "Copy ad link",
    description:
      "Copy the link to your generated ad and share to anyone to view",
  },
  {
    name: "Share to social meda",
    description:
      "Publish directly to Instagram, Facebook, LinkedIn, TikTok, and more.",
  },
];

const ShareAds = () => {
  return (
    <div className="bg-gradient-to-b from-[#F9F9F9] to-white to-24.5  md:px-5 flex flex-col gap-6">
      <FeaturesHero
        heading={<>Share your ads on your platform of choice</>}
        subHeading="Post your generated ad directly to your selected platform, reach your audience and start getting results!"
        subHeadingMaxWidth="max-w-[611px]"
        buttonText="Generate Your Ad"
      />
      <div className="max-w-7xl w-full xl:mx-auto max-lg:px-4 pt-8 flex flex-col gap-6 lg:gap-14">
        <CreateAds
          heading={<>How to share your ads to others</>}
          rowReverse={true}
          notes={notes}
        />
        <CtaHowItWorks />
      </div>
    </div>
  );
};

export default ShareAds;
