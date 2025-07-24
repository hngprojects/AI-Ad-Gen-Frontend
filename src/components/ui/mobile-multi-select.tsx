"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import * as React from "react";

export type OptionType = {
  label: string;
  value: string;
};

type MobileMultiSelectProps = {
  options: OptionType[];
  selected: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  title?: string;
  emptyMessage?: string;
  className?: string;
  disabled?: boolean;
};

const MobileMultiSelect = ({
  options = [],
  selected = [],
  onChange,
  placeholder = "Select options...",
  title = "Select Options",
  emptyMessage = "No options found.",
  className,
  disabled = false,
}: MobileMultiSelectProps) => {
  const [open, setOpen] = React.useState(false);
  const [localSelected, setLocalSelected] = React.useState<string[]>(selected);

  React.useEffect(() => {
    setLocalSelected(selected);
  }, [selected, open]);

  const handleSelect = (value: string) => {
    setLocalSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleRemove = (value: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newSelected = selected.filter((item) => item !== value);
    onChange(newSelected);
  };

  const safeOptions = React.useMemo(
    () => (Array.isArray(options) ? options : []),
    [options]
  );

  const safeSelected = React.useMemo(
    () => (Array.isArray(selected) ? selected : []),
    [selected]
  );

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
        <div className="flex flex-wrap gap-1 items-center overflow-hidden">
          {safeSelected.length === 0 && (
            <span className="text-gray-500">{placeholder}</span>
          )}

          {safeSelected.map((value) => {
            const option = safeOptions.find((opt) => opt.value === value);
            return option ? (
              <Badge
                key={value}
                variant="secondary"
                className="mr-1 mb-1 bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                {option.label}
                <span
                  className="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none inline-flex cursor-pointer"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={(e) => handleRemove(value, e)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleRemove(value, e as unknown as React.MouseEvent);
                    }
                  }}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove {option.label}</span>
                </span>
              </Badge>
            ) : null;
          })}
        </div>
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

      <Sheet
        open={open}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            // When closing through any means, apply the changes
            onChange(localSelected);
          }
          setOpen(isOpen);
        }}
      >
        <SheetContent
          side="bottom"
          className="px-0 py-0 h-auto max-h-[60vh] rounded-t-xl"
        >
          <SheetHeader className="px-8 py-5 sticky top-0 bg-transparent">
            <SheetTitle className="font-medium">{title}</SheetTitle>
          </SheetHeader>

          <div className="overflow-y-auto h-auto">
            {safeOptions.length === 0 ? (
              <div className="py-6 text-center text-sm text-gray-500">
                {emptyMessage}
              </div>
            ) : (
              safeOptions.map((option) => (
                <div
                  key={option.value}
                  className={cn(
                    "px-10 py-3.5 flex items-center cursor-pointer",
                    localSelected.includes(option.value) && "bg-gray-50"
                  )}
                  onClick={() => handleSelect(option.value)}
                >
                  <Checkbox
                    id={`option-${option.value}`}
                    checked={localSelected.includes(option.value)}
                    onCheckedChange={() => {
                      // Just prevent default behavior, let parent handle selection
                    }}
                    className="mr-3 data-[state=checked]:bg-[#B800B8] data-[state=checked]:border-[#B800B8]"
                    onClick={(e) => e.stopPropagation()} 
                  />
                  <div className="flex-1">
                    <span className="text-[#121316]">{option.label}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="absolute bottom-1 left-0 right-0 flex justify-center">
            <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMultiSelect;
