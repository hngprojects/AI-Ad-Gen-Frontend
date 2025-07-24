import { useInpaintStore } from "@/store/inpaint-store";
import { Send } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface ImageSelectionToolProps {
  imageSrc: string;
  imageId: string;
  width?: number;
  height?: number;
  onSelectionComplete?: (selection: SelectionArea, prompt: string) => void;
  onClick: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

interface SelectionArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Point {
  x: number;
  y: number;
}

const ImageSelectionTool: React.FC<ImageSelectionToolProps> = ({
  imageSrc,
  imageId,
  width = 500,
  height = 500,
  onSelectionComplete,
  onClick,
}) => {
  const [selection, setSelection] = useState<SelectionArea | null>(null);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [startPoint, setStartPoint] = useState<Point>({ x: 0, y: 0 });
  const [showPrompt, setShowPrompt] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [containerSize, setContainerSize] = useState({ width, height });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentImageSrc, setCurrentImageSrc] = useState(imageSrc);

  const { startInpainting } = useInpaintStore();

  useEffect(() => {
    setCurrentImageSrc(imageSrc);
  }, [imageSrc]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const updateSize = () => {
      if (containerRef.current && containerRef.current.parentElement) {
        checkMobile();
        const parentWidth = containerRef.current.parentElement.clientWidth;

        let maxWidth;
        if (isMobile) {
          maxWidth = parentWidth - 16;
        } else {
          maxWidth = Math.min(650, parentWidth - 40);
        }

        const aspectRatio = height / width;
        const newHeight = maxWidth * aspectRatio;

        setContainerSize({
          width: maxWidth,
          height: newHeight,
        });
      }
    };

    checkMobile();
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [width, height, isMobile]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setStartPoint({ x, y });
    setSelection(null);
    setIsSelecting(true);
    setShowPrompt(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSelecting || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const currentX = Math.max(
      0,
      Math.min(e.clientX - rect.left, containerSize.width)
    );
    const currentY = Math.max(
      0,
      Math.min(e.clientY - rect.top, containerSize.height)
    );

    setSelection({
      x: Math.min(startPoint.x, currentX),
      y: Math.min(startPoint.y, currentY),
      width: Math.abs(currentX - startPoint.x),
      height: Math.abs(currentY - startPoint.y),
    });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length !== 1) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;

    setStartPoint({ x, y });
    setSelection(null);
    setIsSelecting(true);
    setShowPrompt(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isSelecting || !containerRef.current || e.touches.length !== 1) return;
    e.preventDefault();

    const rect = containerRef.current.getBoundingClientRect();
    const currentX = Math.max(
      0,
      Math.min(e.touches[0].clientX - rect.left, containerSize.width)
    );
    const currentY = Math.max(
      0,
      Math.min(e.touches[0].clientY - rect.top, containerSize.height)
    );

    setSelection({
      x: Math.min(startPoint.x, currentX),
      y: Math.min(startPoint.y, currentY),
      width: Math.abs(currentX - startPoint.x),
      height: Math.abs(currentY - startPoint.y),
    });
  };

  const handleTouchEnd = () => {
    if (isSelecting && selection) {
      if (selection.width > 10 && selection.height > 10) {
        setIsSelecting(false);
        setShowPrompt(true);
      } else {
        setIsSelecting(false);
        setSelection(null);
      }
    } else {
      setIsSelecting(false);
    }
  };

  const handleMouseUp = () => {
    if (isSelecting && selection) {
      if (selection.width > 10 && selection.height > 10) {
        setIsSelecting(false);
        setShowPrompt(true);
      } else {
        setIsSelecting(false);
        setSelection(null);
      }
    } else {
      setIsSelecting(false);
    }
  };

  useEffect(() => {
    const handleMouseUpOutside = () => {
      if (isSelecting) {
        setIsSelecting(false);
        if (selection && selection.width > 10 && selection.height > 10) {
          setShowPrompt(true);
        } else {
          setSelection(null);
        }
      }
    };

    document.addEventListener("mouseup", handleMouseUpOutside);
    return () => {
      document.removeEventListener("mouseup", handleMouseUpOutside);
    };
  }, [isSelecting, selection]);

  const renderCornerCircles = (sel: SelectionArea) => {
    const circleSize = isMobile ? 16 : 10;
    const offset = circleSize / 2;

    const corners = [
      { left: sel.x - offset, top: sel.y - offset },
      { left: sel.x + sel.width - offset, top: sel.y - offset },
      { left: sel.x - offset, top: sel.y + sel.height - offset },
      { left: sel.x + sel.width - offset, top: sel.y + sel.height - offset },
    ];

    return corners.map((corner, index) => (
      <div
        key={`corner-${index}`}
        className="absolute bg-white border-2 border-white rounded-full z-10"
        style={{
          left: `${corner.left}px`,
          top: `${corner.top}px`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          cursor: "pointer",
        }}
      />
    ));
  };

  const handlePromptSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selection && prompt) {
      if (onSelectionComplete) {
        onSelectionComplete(selection, prompt);
      }

      if (imageId) {
        try {
          await startInpainting({
            image_id: imageId,
            prompt: prompt,
          });
        } catch (error) {
          console.error("Error during inpainting:", error);
        }
      }

      setPrompt("");
      setShowPrompt(false);
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative cursor-crosshair rounded-md"
        style={{
          width: "100%",
          height: "100%",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={currentImageSrc}
          alt="Selectable image"
          width={containerSize.width}
          height={containerSize.height}
          className="select-none w-full h-full object-cover z-[-1]"
          draggable={false}
          onClick={onClick}
          unoptimized
        />

        {isSelecting && selection && (
          <>
            <div
              className={`absolute border-${
                isMobile ? "4" : "3"
              } border-white bg-white/30`}
              style={{
                left: `${selection.x}px`,
                top: `${selection.y}px`,
                width: `${selection.width}px`,
                height: `${selection.height}px`,
              }}
            />
          </>
        )}

        {!isSelecting && selection && (
          <>
            <div
              className={`absolute border-${
                isMobile ? "4" : "3"
              } border-white bg-white/30`}
              style={{
                left: `${selection.x}px`,
                top: `${selection.y}px`,
                width: `${selection.width}px`,
                height: `${selection.height}px`,
              }}
            />
            {renderCornerCircles(selection)}
          </>
        )}
      </div>

      {showPrompt && (
        <div className="w-full mt-4 px-2 md:px-0">
          <form onSubmit={handlePromptSubmit} className="flex flex-col gap-2">
            <div
              className={`flex gap-2 items-center border border-slate-400 ${
                isMobile ? "py-3" : "py-2"
              } px-2 rounded-md bg-white focus:ring-2 focus:ring-slate-500`}
            >
              <input
                type="text"
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 px-3 py-2 rounded-md focus:outline-none"
                placeholder={
                  isMobile
                    ? "Describe this area..."
                    : "Describe what you want to do with this area..."
                }
                autoFocus
              />
              <button
                type="submit"
                className={`${
                  isMobile ? "px-4 py-4" : "px-3 py-3"
                } hover:bg-slate-200 cursor-pointer focus:outline-none rounded-md`}
              >
                <Send size={20} color="#121316" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ImageSelectionTool;
