"use client";

import { ImageAdFormData } from "@/domains/ads-gen/types";
import { patchRequest } from "@/lib/axios-fetch";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import { ArrowLeft, Check, ChevronDown, Download, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import ShareModal from "../share-modal";

interface DesktopAdPreviewNavigationProps {
  className?: string;
  isLoading?: boolean;
  onGenerateNewAd?: (data: ImageAdFormData) => void;
  imageUrl?: string | null;
  imageName?: string;
  handleCopy?: () => Promise<void>;
  type: string;
  status?: string;
  generatedImageUrl?: string;
  downloadFunction?: () => void;
  imageId?: string;
  hideSaveButton?: boolean;
  hideSaveAndExit?: boolean;
  isPublished?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageAdData?: any;
  filter?: string;
}

export const DesktopAdPreviewNavigation: React.FC<
  DesktopAdPreviewNavigationProps
> = ({
  className = "",
  isLoading,
  imageName = "ad",
  pageAdData,
  type,
  status,
  generatedImageUrl = "/preview.png",
  imageId,
  hideSaveButton = false,
  hideSaveAndExit = false,
  isPublished = false,
  filter,
}) => {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const queryType = searchParams.get("type");
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSaveDropdownOpen, setIsSaveDropdownOpen] = useState(false);
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const saveDropdownRef = useRef<HTMLDivElement>(null);
  const exportDropdownRef = useRef<HTMLDivElement>(null);

  const handleBack = () => {
    if (type === "demo") {
      router.push("/generate-ad");
    } else {
      localStorage.removeItem("adCustomizerData");
      router.push(`/dashboard?type=${filter}`);
    }
  };

  const showSaveButton =
    (!pageAdData?.author_info &&
      !hideSaveButton &&
      ((type === "image-form" && status === "completed") ||
        (type === "community" && !isPublished))) ||
    (type === "community" && !isPublished);


  const downloadImage = async (format: "png" | "jpg") => {
    setIsDownloading(true);
    try {
      const element = document.getElementById("containerRef");
      // console.log("Element found:", element);

      if (element) {
        const canvas = await html2canvas(element, {
          useCORS: true,
          allowTaint: true,
          logging: true,
        });

        // console.log("Canvas created:", canvas);

        const link = document.createElement("a");
        const fileName = `${imageName}.${format}`;
        link.download = fileName;
        link.href = canvas.toDataURL(`image/${format}`);
        // console.log("Data URL created:", link.href.substring(0, 50) + "...");

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

      } else {
        // console.error("Element with ID 'containerRef' not found");
        toast.error("Could not find the ad content to download");
      }
    } catch (error) {
      console.error("Error in downloadImage:", error);
      toast.error("Failed to download image");
    } finally {
      setIsDownloading(false);
      setIsExportDropdownOpen(false);
    }
  };
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        saveDropdownRef.current &&
        !saveDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSaveDropdownOpen(false);
      }

      if (
        exportDropdownRef.current &&
        !exportDropdownRef.current.contains(event.target as Node)
      ) {
        setIsExportDropdownOpen(false);
      }
    };

    if (isSaveDropdownOpen || isExportDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSaveDropdownOpen, isExportDropdownOpen]);

  function saveImage(
    message: React.JSX.Element,
    publish: boolean,
    newStatus?: string,
    element?: HTMLElement | null
  ) {
    if (element) {
      html2canvas(element, { useCORS: true, allowTaint: true }).then(
        (canvas) => {
          canvas.toBlob((blob) => {
            const formData = new FormData();
            if (blob) {
              formData.append("file", blob);
            } else {
              console.error("Blob is null, cannot append to FormData.");
            }
            formData.append("upload_preset", "ml_default");

            fetch("https://api.cloudinary.com/v1_1/dgetbfevu/image/upload", {
              method: "POST",
              body: formData,
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.secure_url) {
                  console.log("Uploaded Image URL:", data.secure_url);
                  console.log(imageId);
                  const uploadedUrl = data.secure_url;
                  patchRequest(`/image/save/${imageId}`, {
                    edited_image_url: uploadedUrl,
                    is_published: publish,
                  });
                  patchRequest(`/image/publish/${imageId}`, {
                    status: newStatus,
                  });

                  toast.custom(() => message);
                } else {
                  console.error("Upload Error:", data);
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }, "image/png");
        }
      );
    }
  }

  const handleSaveAndExit = () => {
    setIsSaveDropdownOpen(false);
    const message = (
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg pointer-events-auto flex items-center p-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-500 rounded-md shadow-lg p-0.5">
              <Check className="h-4 w-4 text-white" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 mb-2">
                Saved Successfully!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
    const publish = false;
    saveImage(message, publish);
    router.push("/dashboard");
  };

  const handleSaveAndPublish = async () => {
    try {
      const newStatus = pageAdData.is_published ? "unpublished" : "published";
      await patchRequest(`/image/publish/${imageId}`, { status: newStatus });

      const element = document.getElementById("containerRef");
      const message = (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg pointer-events-auto flex items-center p-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-500 rounded-md shadow-lg p-0.5">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 mb-2">
                  {pageAdData.is_published
                    ? "Ad Unpublished Successfully!"
                    : "Ad Published Successfully!"}
                </p>
                <p className="text-xs text-gray-500">
                  {pageAdData.is_published
                    ? "Your ad is no longer live."
                    : "Your ad is now live and ready to reach your audience."}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
      const publish = true;
      saveImage(message, publish, newStatus, element);
      router.push(`/dashboard?publishStatus=${newStatus}`);
    } catch (error) {
      console.error("Error updating publish status:", error);
      toast.error("Failed to update publish status");
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center w-full pt-3">
        <button
          onClick={handleBack}
          className="flex items-center text-[#650065] hover:text-gray-800 cursor-pointer p-0"
          type="button"
        >
          <ArrowLeft className="size-5 mr-2 text-[#650065]" />
          <span className="hidden md:block text-[#650065] font-medium text-base leading-6">
            Back
          </span>
        </button>

        <div className="flex gap-4">
          {(showSaveButton || queryType !== "community") && (
            <div className="relative" ref={saveDropdownRef}>
              <button
                onClick={() => setIsSaveDropdownOpen(!isSaveDropdownOpen)}
                className="bg-[#F6F6F6] py-1.5 px-4 rounded cursor-pointer flex gap-2 items-center justify-center"
              >
                <span className="max-sm:hidden text-base leading-6 font-normal text-[#1B1B1B]">
                  Save
                </span>
                <ChevronDown size={18} />
              </button>

              {isSaveDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                >
                  <div className="py-1">
                    {(!hideSaveAndExit || queryType == "community") && (
                      <button
                        onClick={handleSaveAndExit}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        Save & Exit
                      </button>
                    )}
                    {
                      <button
                        onClick={handleSaveAndPublish}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        {pageAdData.is_published
                          ? "Unpublish"
                          : "Save & Publish"}
                      </button>
                    }
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {status === "completed" && (
            <ShareModal
              adUrl={`https://genz.ad/stand-alone/${imageId}`}
              imageUrl={generatedImageUrl}
              defaultOpen={false}
            >
              <button className="bg-[#F8E6F8] py-1.5 px-4 rounded cursor-pointer flex gap-2 items-center justify-center">
                <Share2 size={18} />
                <span className="max-sm:hidden text-base leading-6 font-normal text-[#650065]">
                  Share
                </span>
              </button>
            </ShareModal>
          )}

          {queryType !== "community" && (
            <div className="relative" ref={exportDropdownRef}>
              <button
                disabled={isDownloading || isLoading}
                className="bg-[#EEF4FC] py-1.5 px-4 rounded cursor-pointer flex gap-2 items-center justify-center"
                onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
              >
                <Download size={18} color="#10509A" />
                <span className="max-sm:hidden text-base leading-6 font-normal text-[#10509A]">
                  Export
                </span>
              </button>

              {isExportDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                >
                  <div className="py-1">
                    <button
                      // onClick={() => console.log("Download as PNG")}
                      onClick={() => downloadImage("png")}
                      disabled={isDownloading || isLoading}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Download as PNG
                    </button>
                    <button
                      onClick={() => downloadImage("jpg")}
                      disabled={isDownloading || isLoading}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Download as JPG
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
