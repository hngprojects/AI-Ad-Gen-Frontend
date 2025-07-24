import React from "react";

export interface TermSection {
  title: string;
  points: string[];
}

interface TermsModalProps {
  onClose: () => void;
  contentData: TermSection[];
  title?: string;
  description?: string;
  type?: "terms" | "privacy";
}

const TermsModal: React.FC<TermsModalProps> = ({
  onClose,
  contentData,
  title,
  description,
  type = "terms",
}) => {
  const defaultContent = {
    terms: {
      title: "Terms of Service",
      description:
        "Welcome to Genz.ad! These Terms of Use govern your access to and use of our ad generator platform. By using Genz.ad, you agree to follow these terms.",
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "This Privacy Policy describes how Genz.ad collects, uses, and shares your personal information when you use our platform.",
    },
  };

  const modalTitle = title || defaultContent[type].title;
  const modalDescription = description || defaultContent[type].description;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white/95 rounded-xl w-[100%] max-w-2xl mx-auto relative overflow-hidden shadow-2xl">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black border border-black rounded-full p-2 cursor-pointer"
            aria-label="Close terms modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="relative">
          <div
            className="p-6 pb-16 max-h-[80vh] overflow-y-auto custom-scrollbar"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(0,0,0,0.2) transparent",
            }}
          >
            <h1 className="text-3xl font-bold mb-4 text-gray-800 mt-6">
              {modalTitle}
            </h1>

            <p className="text-gray-600 mb-6 font-semibold">
              {modalDescription}
            </p>

            <div className="space-y-6 text-gray-700">
              {contentData.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-semibold mb-4">
                    {index + 1}. {section.title}
                  </h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)",
              // boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.05)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
