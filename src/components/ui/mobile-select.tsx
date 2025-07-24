"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

export type OptionType = {
  label: string;
  value: string;
  display?: string;
  aspectRatio?: string;
};

type MobileSelectProps = {
  options: OptionType[];
  selected: string;
  onChange: (value: string) => void;
  placeholder?: string;
  title: string;
  className?: string;
  disabled?: boolean;
};

const MobileSelect = ({
  options = [],
  selected,
  onChange,
  placeholder = "Select an option",
  title,
  className,
  disabled = false,
}: MobileSelectProps) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (value: string) => {
    onChange(value);
    setOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === selected);

  return (
    <>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className={cn(
          "w-full min-h-10 h-auto justify-between border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] bg-white text-left font-normal",
          className
        )}
        disabled={disabled}
        onClick={() => setOpen(true)}
        type="button"
      >
        <span className={cn("text-gray-500", selected && "text-gray-900")}>
          {selectedOption?.label || placeholder}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-auto h-4 w-4 opacity-50"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="bottom"
          className="px-0 py-0 h-auto max-h-[80vh] rounded-t-xl"
        >
          <SheetHeader className="px-8 py-5 sticky top-0 bg-transparent">
            <SheetTitle className="font-medium">{title}</SheetTitle>
          </SheetHeader>
          <div className="overflow-y-auto h-auto">
            {options.map((option) => (
              <div
                key={option.value}
                className={cn(
                  "px-10 py-3.5 flex items-center cursor-pointer text-[#121316] ",
                  selected === option.value && "bg-gray-50"
                )}
                onClick={() => handleSelect(option.value)}
              >
                <div className="flex-1">
                  {option.aspectRatio ? (
                    <div className="flex items-center gap-3">
                      <div
                        className={`${option.aspectRatio} border border-black w-6 h-6`}
                      />
                      <span>{option.label}</span>
                    </div>
                  ) : (
                    <span>{option.label}</span>
                  )}
                </div>
                {selected === option.value && (
                  <Check className="h-5 w-5 text-[#B800B8]" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom indicator bar for iOS style */}
          <div className="absolute bottom-1 left-0 right-0 flex justify-center">
            <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSelect;
