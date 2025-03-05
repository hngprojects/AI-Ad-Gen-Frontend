// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";


// Define a common interface for footer links if you want to later add dynamic links
interface FooterLink {
  label: string;
  href: string;
}

// Sample links for each column – update as needed.
const companyLinks: FooterLink[] = [
  { label: "About Us", href: "#" },
  { label: "How it Works", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Pricing", href: "#" },
];

const featuresLinks: FooterLink[] = [
  { label: "Image Ads", href: "#" },
  { label: "Video Ads", href: "#" },
  { label: "Community", href: "#"},
  { label: "Templates", href: "#" },
];

const supportLinks: FooterLink[] = [
  { label: "Blogs", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "API Docs", href: "#" },
  { label: "Contact Us", href: "#" },
];

const FooterColumn: React.FC<{ title: string; links: FooterLink[] }> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-semibold text-[24px] leading-[32px] text-black">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-bold text-[18px] leading-[28px] text-gray-600 hover:text-purple-700"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
    return (
      <footer className="bg-white border-t border-gray-200 shadow-inner">
        <div className="container mx-auto px-4 py-12">
          {/* Top Section: Logo, Tagline & Navigation Columns */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            {/* Logo & Tagline */}
            <div className="flex flex-col gap-6">
              <div className="pl-4">
                <Link href="/">
                  <Image
                    src="/header-logo.svg"
                    alt="Adgen AI Logo"
                    width={150}
                    height={40}
                    priority
                  />
                </Link>
              </div>
              <h3 className="font-semibold text-3xl text-[#B800B8]">
                Smarter Ads, Faster Results
              </h3>
            </div>
            {/* Navigation Columns */}
            <div className="flex flex-col sm:flex-row gap-12">
              <FooterColumn title="Company Info" links={companyLinks} />
              <FooterColumn title="Features" links={featuresLinks} />
              <FooterColumn title="Support & Resources" links={supportLinks} />
            </div>
          </div>
          {/* Bottom Section: Copyright and Description */}
          <div className="mt-12 border-t border-gray-300 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="font-medium text-base text-gray-700">
                © 2025 Adgen-ai. All rights reserved.
              </p>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                {/* Vector/Image placeholder */}
                <div className="w-20 h-24 bg-[#F8E6F8]" />
                <p className="font-normal text-xl text-gray-600 max-w-3xl">
                  Adgen AI helps you generate video and image advertisements tailored
                  for different platforms, audiences and cultural contexts, without
                  needing design or marketing expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;