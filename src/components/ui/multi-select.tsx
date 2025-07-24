"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import * as React from "react";

export type OptionType = {
  label: string;
  value: string;
};

type MultiSelectProps = {
  options: OptionType[];
  selected: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
  disabled?: boolean;
};

const MultiSelect = ({
  options = [],
  selected = [],
  onChange,
  placeholder = "Select options...",
  emptyMessage = "No options found.",
  className,
  disabled = false,
}: MultiSelectProps) => {
  const [open, setOpen] = React.useState(false);

  const safeOptions = React.useMemo(
    () => (Array.isArray(options) ? options : []),
    [options]
  );

  const safeSelected = React.useMemo(
    () => (Array.isArray(selected) ? selected : []),
    [selected]
  );

  const handleSelect = (value: string) => {
    if (safeSelected.includes(value)) {
      onChange(safeSelected.filter((item) => item !== value));
    } else if (safeSelected.length < 2) {
      onChange([...safeSelected, value]);
    }
  };

  const handleRemove = (value: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(safeSelected.filter((item) => item !== value));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full min-h-10 justify-between border-gray-300 focus:ring-[#B800B8] focus:border-[#B800B8] bg-white text-left font-normal h-[56px]",
            className
          )}
          disabled={disabled}
          type="button"
        >
          <div className="flex flex-wrap gap-2 rounded-full items-center overflow-hidden">
            {safeSelected.length === 0 && (
              <span className="text-gray-500">{placeholder}</span>
            )}

            {safeSelected.map((value) => {
              const option = safeOptions.find((opt) => opt.value === value);
              return option ? (
                <Badge
                  key={value}
                  variant="secondary"
                  className="rounded-[20px] border border-[#E9E9E9] bg-[#F6F6F6] text-[#5F5F5F] hover:bg-gray-200 px-2 py-1 text-xs leading-4"
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
                    <X className="h-[14px] w-[14px]" />
                    <span className="sr-only">Remove {option.label}</span>
                  </span>
                </Badge>
              ) : null;
            })}
          </div>
          <div className="ml-auto self-center">
            {open ? (
              <ChevronUp className="h-4 w-4 opacity-50" />
            ) : (
              <ChevronDown className="h-4 w-4 opacity-50" />
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full p-2 max-h-80 overflow-y-auto"
        align="start"
        side="bottom"
        alignOffset={0}
        sideOffset={5}
        style={{ zIndex: 50 }}
      >
        <div className="max-h-80 overflow-y-auto">
          {safeOptions.length === 0 ? (
            <div className="py-6 text-center text-sm text-gray-500">
              {emptyMessage}
            </div>
          ) : (
            safeOptions.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer mb-3"
                onClick={() => handleSelect(option.value)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(option.value);
                  }
                }}
              >
                <Checkbox
                  id={`option-${option.value}`}
                  checked={safeSelected.includes(option.value)}
                  onCheckedChange={() => {}}
                  className="data-[state=checked]:bg-[#B800B8] data-[state=checked]:border-[#B800B8]"
                  onClick={(e) => e.stopPropagation()}
                />
                <label
                  htmlFor={`option-${option.value}`}
                  className="text-sm flex-grow cursor-pointer text-[#121316]"
                  onClick={(e) => e.preventDefault()}
                >
                  {option.label}
                </label>
              </div>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MultiSelect;
