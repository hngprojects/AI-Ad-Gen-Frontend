"use client";

import {
  Close,
  Copy,
  Facebook2,
  LinkedIn,
  Whatsapp,
  X,
} from "@/components/icons/icon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ShareModalProps {
  adUrl: string;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  children: React.ReactNode;
  imageUrl: string;
}

export default function ShareModal({
  adUrl,
  onOpenChange,
  defaultOpen = false,
  children,
}: ShareModalProps) {
  const [open, setOpen] = useState(defaultOpen);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    onOpenChange?.(open);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(adUrl);
      toast.custom(() => (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg pointer-events-auto flex items-center p-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-500 rounded-md shadow-lg p-0.5">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 mb-2">
                  Copied to clipboard!
                </p>
                <p className="text-xs text-gray-500">
                  Your link will allow users to view your image.
                </p>
              </div>
            </div>
          </div>
        </div>
      ));
    } catch {
      toast.error("Could not copy the link to clipboard");
    }
  };

  const shareOnSocialMedia = (platform: string) => {
    let shareUrl = "";
    const text = encodeURIComponent("Check out this ad!");
    const url = encodeURIComponent(adUrl);
    const image = encodeURIComponent(adUrl);

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&picture=${image}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${text}%20${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="w-full lg:max-w-[55.7rem] mx-auto">
        <div className="text-center lg:py-8 lg:px-10 px-4 pb-6 pt-3 flex flex-col gap-3.5 border-[#F0F2F5] border">
          <DialogClose>
            <div className="flex items-center justify-end cursor-pointer">
              <Close />
            </div>
          </DialogClose>

          <div className="max-w-[500px] mx-auto">
            <DialogHeader className="flex flex-col gap-2 p-0">
              <DialogTitle className="text-[#121316] text-center p-0 font-nunito text-[20px] lg:text-[28px] font-semibold leading-[36px]">
                Share Your Ad
              </DialogTitle>
              <DialogDescription className="text-[#667185] px-4 text-center font-nunito text-[14px] lg:text-[18px] font-normal leading-[28px]">
                Reach your audience instantly by sharing your ad on social
                media, email, or direct link.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-2 lg:grid-cols-4 mt-6.5 gap-6">
              <button
                onClick={() => shareOnSocialMedia("facebook")}
                className="flex flex-col items-center gap-2"
              >
                <div className="rounded-2xl bg-[rgba(22,113,217,0.08)] p-1 cursor-pointer">
                  <Facebook2 />
                </div>
                <span className="text-[#121316] text-center font-nunito text-[14px] font-medium leading-[20px]">
                  Facebook
                </span>
              </button>

              <button
                onClick={() => shareOnSocialMedia("twitter")}
                className="flex flex-col items-center gap-2"
              >
                <div className="rounded-2xl bg-[rgba(0,0,0,0.08)] p-1 cursor-pointer">
                  <X />
                </div>
                <span className="text-[#121316] text-center font-nunito text-[14px] font-medium leading-[20px]">
                  X
                </span>
              </button>

              <button
                onClick={() => shareOnSocialMedia("whatsapp")}
                className="flex flex-col items-center gap-2"
              >
                <div className="rounded-2xl bg-[rgba(95,214,105,0.08)] p-1 cursor-pointer">
                  <Whatsapp />
                </div>
                <span className="text-[#121316] text-center font-nunito text-[14px] font-medium leading-[20px]">
                  WhatsApp
                </span>
              </button>

              <button
                onClick={() => shareOnSocialMedia("linkedin")}
                className="flex flex-col items-center gap-2"
              >
                <div className="rounded-2xl bg-[rgba(16,80,154,0.08)] p-1.5 cursor-pointer">
                  <LinkedIn />
                </div>
                <span className="text-[#121316] text-center font-nunito text-[14px] font-medium leading-[20px]">
                  LinkedIn
                </span>
              </button>
            </div>
          </div>

          <div className="lg:flex-row flex-col relative mt-8 w-full gap-4 lg:gap-0  max-w-3xl mx-auto flex items-center  rounded-lg lg:border lg:border-[#ECECEC] lg:bg-white">
            <input
              className="text-[#A1A1A1]  w-full text-base font-normal leading-6 font-nunito rounded-none  p-4 block border border-[#ECECEC] bg-white lg:border-0 lg:bg-none "
              value={adUrl}
              readOnly
            />
            <button
              onClick={copyToClipboard}
              className="lg:absolute lg:right-0 flex justify-center items-center cursor-pointer gap-2 rounded-lg bg-[#B800B8] py-4 px-6 w-full lg:w-auto"
            >
              <Copy className="w-4 h-4 md:h-auto md:w-auto" />
              <span className="text-white text-[14px] lg:text-base font-medium leading-6 font-nunito">
                Copy Link
              </span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
