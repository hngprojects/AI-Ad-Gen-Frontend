import type React from "react"
import Image from "next/image"
import { Nunito } from "next/font/google"
import clsx from "clsx"

interface FeatureCardProps {
  title: string
  description: string
}

const nunito = Nunito({
    variable: '--font-nunito',
    subsets: ['latin'],
  });

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-[#f8e6f8] p-8 rounded-xl relative z-30">
      <h3 className="text-[#520052] text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>
  )
}

export default function FeaturesSection() {



  const features = [
    {
      title: "AI-powered Visuals",
      description: "Get automated image and video suggestions that fit your campaign",
    },
    {
      title: "Analytics Insights",
      description: "AI analyzes your past campaigns to enhance future ads.",
    },
    {
      title: "Multi-Platform",
      description: "Download Ads in the perfect format for every platform",
    },
  ]

  return (
    <section className={clsx("w-full py-16 px-4 md:px-6 lg:px-8 bg-white relative overflow-hidden", nunito.variable)}>
      {/* Background wave pattern */}
      <div className="absolute inset-0 z-20 ">
        <Image src="/waves-svg.svg" alt="Background pattern" fill 
  style={{ objectFit: "cover" }}  quality={100} />
      </div>

      <div className="max-w-7xl mx-auto text-center relative">
        <div className="inline-block bg-[#eaf1fb] text-[#458de1] px-6 py-2 rounded-2xl mb-6 font-semibold relative z-20">
          FROM IDEA TO RESULT IN MINUTES
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#520052] mb-12 relative z-20">
          Key Features Adgen-ai offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-30">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

