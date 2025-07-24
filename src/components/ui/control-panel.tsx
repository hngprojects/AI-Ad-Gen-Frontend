"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import type { TextElement } from "./image-editor";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface ControlPanelProps {
  text: TextElement;
  onChange: (text: TextElement) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  containerSize: { width: number; height: number };
}

export function ControlPanel({
  text,
  onChange,
  onDelete,
  onDuplicate,
  containerSize,
}: ControlPanelProps) {
  const [showBackgroundPicker, setShowBackgroundPicker] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "d") {
        event.preventDefault(); 
        onDuplicate(); 
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onDuplicate]);

  const toggleStyle = (style: keyof TextElement) => {
    onChange({ ...text, [style]: !text[style] });
  };

  const positionText = (position: "vertical" | "horizontal" | "center") => {
    let newX = text.x;
    let newY = text.y;

    if (position === "vertical" || position === "center") {
      newY = (containerSize.height - text.fontSize) / 2;
    }
    if (position === "horizontal" || position === "center") {
      newX = (containerSize.width - text.fontSize * text.content.length) / 2;
    }

    onChange({ ...text, x: newX, y: newY });
  };

  const handleFontChange = (font: string) => {
    onChange({ ...text, fontFamily: font });
  };

  const handleBackgroundChange = (color: string) => {
    onChange({ ...text, backgroundColor: color });
  };

  const handleBackgroundInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange({ ...text, backgroundColor: e.target.value });
  };

  return (
    <div className="max-w-[609px] mb-4 md:mb-8 border rounded-lg flex flex-wrap items-center justify-between gap-2 bg-white box-border p-2">
      <TooltipProvider delayDuration={300}>
        <div className="flex-[1] h-full gap-2 border rounded-[8px] p-2">
          <Select onValueChange={handleFontChange}>
            <Tooltip>
              <TooltipTrigger asChild>
                <SelectTrigger className="w-full h-full border-none cursor-pointer">
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Change font family</p>
              </TooltipContent>
            </Tooltip>
            <SelectContent>
              <SelectItem value="Arial" className="cursor-pointer">
                Arial
              </SelectItem>
              <SelectItem value="Helvetica Neue" className="cursor-pointer">
                Helvetica Neue
              </SelectItem>
              <SelectItem value="Georgia" className="cursor-pointer">
                Georgia
              </SelectItem>
              <SelectItem value="Times New Roman" className="cursor-pointer">
                Times New Roman
              </SelectItem>
              <SelectItem value="Verdana" className="cursor-pointer">
                Verdana
              </SelectItem>
              <SelectItem value="Courier New" className="cursor-pointer">
                Courier New
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-[1]">
          <div className="flex gap-2 border rounded-[8px] p-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => toggleStyle("isBold")}
                  className={
                    !text.isBold
                      ? `bg-transparent hover:bg-transparent border-none text-black shadow-none`
                      : "bg-blue-500 hover:bg-blue-500 border-none shadow-none"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                  >
                    <path
                      d="M2 0.5H7.625C8.42819 0.500252 9.21582 0.721542 9.90162 1.13963C10.5874 1.55772 11.1449 2.15648 11.5131 2.87033C11.8812 3.58418 12.0458 4.38558 11.9889 5.18675C11.9319 5.98792 11.6555 6.75795 11.19 7.4125C11.9974 7.91479 12.6191 8.66652 12.961 9.55384C13.3028 10.4411 13.3462 11.4157 13.0845 12.3299C12.8228 13.244 12.2704 14.048 11.5108 14.6201C10.7512 15.1921 9.82589 15.501 8.875 15.5H2C1.66848 15.5 1.35054 15.3683 1.11612 15.1339C0.881696 14.8995 0.75 14.5815 0.75 14.25V1.75C0.75 1.41848 0.881696 1.10054 1.11612 0.866116C1.35054 0.631696 1.66848 0.5 2 0.5ZM3.25 9.25V13H8.875C9.37228 13 9.84919 12.8025 10.2008 12.4508C10.5525 12.0992 10.75 11.6223 10.75 11.125C10.75 10.6277 10.5525 10.1508 10.2008 9.79917C9.84919 9.44754 9.37228 9.25 8.875 9.25H3.25ZM7.625 6.75C8.12228 6.75 8.59919 6.55246 8.95083 6.20083C9.30246 5.84919 9.5 5.37228 9.5 4.875C9.5 4.37772 9.30246 3.90081 8.95083 3.54917C8.59919 3.19754 8.12228 3 7.625 3H3.25V6.75H7.625Z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Toggle bold text</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => toggleStyle("isItalic")}
                  className={
                    !text.isItalic
                      ? `bg-transparent hover:bg-transparent border-none text-black shadow-none`
                      : "bg-blue-500 hover:bg-blue-500 border-none shadow-none"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15.8359 3.33203H8.33594"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6641 16.668H4.16406"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 3.33203L7.5 16.6654"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Toggle italic text</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => toggleStyle("isUnderline")}
                  className={
                    !text.isUnderline
                      ? `bg-transparent hover:bg-transparent text-black border-none shadow-none`
                      : "bg-blue-500 hover:bg-blue-500 border-none shadow-none"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 2.5V8.33333C5 9.65942 5.52678 10.9312 6.46447 11.8689C7.40215 12.8065 8.67392 13.3333 10 13.3333C11.3261 13.3333 12.5979 12.8065 13.5355 11.8689C14.4732 10.9312 15 9.65942 15 8.33333V2.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33594 17.5H16.6693"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Toggle underline text</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="flex gap-2 border p-2 rounded-[8px] flex-[1]">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => positionText("vertical")}
                className={
                  "bg-light-purple hover:bg-light-purple border-none shadow-none"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_7239_20887"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="currentColor" />
                  </mask>
                  <g mask="url(#mask0_7239_20887)">
                    <path
                      d="M6.12057 17.7078V5.44029H8.21974V17.7078H6.12057ZM11.7777 12.7078V5.44029H13.8768V12.7078H11.7777ZM2.08203 3.5332V2.2832H17.9154V3.5332H2.08203Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Center text vertically</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => positionText("center")}
                className={
                  "bg-light-purple hover:bg-light-purple border-none shadow-none"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_7239_20891"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="currentColor" />
                  </mask>
                  <g mask="url(#mask0_7239_20891)">
                    <path
                      d="M6.08036 17.0837V10.6253H2.08203V9.37533H6.08036V2.91699H8.17974V9.37533H11.8177V5.41699H13.917V9.37533H17.9154V10.6253H13.917V14.5837H11.8177V10.6253H8.17974V17.0837H6.08036Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Center text horizontally and vertically</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => positionText("horizontal")}
                className={
                  "bg-light-purple hover:bg-light-purple border-none shadow-none"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_7239_20895"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="currentColor" />
                  </mask>
                  <g mask="url(#mask0_7239_20895)">
                    <path
                      d="M2.08203 17.7078V16.4578H17.9154V17.7078H2.08203ZM6.12057 14.5507V2.2832H8.21974V14.5507H6.12057ZM11.7777 14.5507V7.2832H13.8768V14.5507H11.7777Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Center text horizontally</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex flex-[1] items-center justify-center gap-1 p-2 rounded-[8px] border">
          <div className="flex w-full gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Input
                  id="text-color"
                  type="color"
                  value={text.color}
                  onChange={(e) => onChange({ ...text, color: e.target.value })}
                  className="w-2/5 border-none shadow-none m-0 p-0 aspect-square cursor-pointer"
                />
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Change text color</p>
              </TooltipContent>
            </Tooltip>
            <Input
              value={text.color}
              onChange={(e) => onChange({ ...text, color: e.target.value })}
              className="border-none shadow-none m-0 p-0"
            />
          </div>
        </div>

        <div className="flex flex-[1] items-center justify-center gap-1 p-2 rounded-[8px] border">
          <div className="flex w-full gap-1 flex-col">
            <div className="flex items-center mb-1">
              <span className="text-sm mr-2">Background:</span>
              <Select
                onValueChange={(value) => {
                  if (value === "custom") {
                    setShowBackgroundPicker(true);
                    if (
                      !text.backgroundColor ||
                      text.backgroundColor === "none"
                    ) {
                      handleBackgroundChange("#ffffff");
                    }
                  } else {
                    setShowBackgroundPicker(false);
                    handleBackgroundChange(value);
                  }
                }}
                value={
                  text.backgroundColor && text.backgroundColor !== "none"
                    ? "custom"
                    : "none"
                }
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectTrigger className="h-8 flex-1 cursor-pointer">
                      <SelectValue placeholder="None" />
                    </SelectTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Set background type</p>
                  </TooltipContent>
                </Tooltip>
                <SelectContent>
                  <SelectItem value="none" className="cursor-pointer">
                    None
                  </SelectItem>
                  <SelectItem value="custom" className="cursor-pointer">
                    Custom
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {showBackgroundPicker && (
              <div className="flex w-full gap-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Input
                      id="bg-color"
                      type="color"
                      value={text.backgroundColor || "#ffffff"}
                      onChange={(e) => handleBackgroundChange(e.target.value)}
                      className="w-2/5 border-none shadow-none m-0 p-0 aspect-square cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Select background color</p>
                  </TooltipContent>
                </Tooltip>
                <Input
                  value={text.backgroundColor || "#ffffff"}
                  onChange={handleBackgroundInputChange}
                  className="border-none shadow-none m-0 p-0"
                />
              </div>
            )}
          </div>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="bg-light-purple hover:bg-light-purple text-white px-4 py-2 rounded-md cursor-pointer"
              onClick={() => onDuplicate()}
            >
              Duplicate Text
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Create a copy of this text element</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
              onClick={() => onDelete()}
            >
              Delete Text
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Delete this text element</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
