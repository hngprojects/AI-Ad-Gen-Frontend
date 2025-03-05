interface Feature {
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    title: "AI-powered Visuals",
    description:
      "Get automated image and video suggestions that fit your campaign.",
  },
  {
    title: "Analytics Insights",
    description: "AI analyzes your past campaigns to enhance future ads.",
  },
  {
    title: "Multi-Platform",
    description: "Download Ads in the perfect format for every platform.",
  },
];

const FeatureCard = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-6xl bg-white mx-auto p-10">
      feature
    </div>
  );
};

export default FeatureCard;
