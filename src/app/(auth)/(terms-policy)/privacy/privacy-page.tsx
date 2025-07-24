"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TermSection {
  title: string;
  points: string[];
}

interface PrivacyPageProps {
  privacyData: TermSection[];
  title?: string;
  description?: string;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({
  privacyData,
  title = "Privacy Policy",
  description = "At Genz.ad, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains what information we collect and how we use it.",
}) => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center mt-2">
            {title}
          </h1>
          <p className="text-gray-600 font-semibold mb-8">{description}</p>

          <div className="space-y-8">
            {privacyData.map((section, index) => (
              <section key={index} className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">
                  {index + 1}. {section.title}
                </h2>
                <ul className="space-y-3 pl-5 text-sm">
                  {section.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-gray-700 relative pl-4"
                    >
                      <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPage;
