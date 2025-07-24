"use client";

import ImageSelectionTool from "@/domains/external/components/image-selector";
import { useEffect, useRef, useState } from "react";
import { ControlPanel } from "./control-panel";
import { TextLayer } from "./text-layer";
import { BrandLogoLayer } from "./logo-layer";
import { LogoControlPanel } from "./logo-control-panel";

export interface TextElement {
  id: string;
  content: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
  fontFamily: string;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  backgroundColor?: string | "none";
}

export type ElementType = "text" | "logo" | null;

interface SelectedElement {
  type: ElementType;
  id: string | null;
}

interface ImageTextEditorProps {
  imageSrc: string | null;
  imageId: string;
  initialTexts?: TextElement[];
  brandLogo?: string;
  initialLogoPosition?: { x: number; y: number };
  initialLogoSize?: number;
}

export function ImageTextEditor({
  imageSrc,
  imageId,
  initialTexts = [],
  brandLogo,
  initialLogoPosition = { x: 10, y: 10 },
  initialLogoSize = 40,
}: ImageTextEditorProps) {
  const [texts, setTexts] = useState<TextElement[]>(initialTexts);
  const [selectedElement, setSelectedElement] = useState<SelectedElement>({
    type: null,
    id: null,
  });
  const [logoPosition, setLogoPosition] = useState<{ x: number; y: number }>(
    initialLogoPosition
  );
  const [logoSize, setLogoSize] = useState<number>(initialLogoSize);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [overlayOpacity, setOverlayOpacity] = useState(20);

  const selectedText = texts.find((text) => text.id === selectedElement.id);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const parentWidth =
          containerRef.current.parentElement?.clientWidth || 0;
        const maxWidth = Math.min(650, parentWidth - 40);
        const aspectRatio = 500 / 650;
        const newHeight = maxWidth * aspectRatio;

        setContainerSize({
          width: maxWidth,
          height: newHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsInteracting(false);
    };

    document.addEventListener("mouseup", handleGlobalMouseUp);
    return () => document.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  const duplicateSelectedText = () => {
    if (selectedElement.type === "text" && selectedElement.id) {
      const textToDuplicate = texts.find(
        (text) => text.id === selectedElement.id
      );
      if (textToDuplicate) {
        const newText = {
          ...textToDuplicate,
          id: `${textToDuplicate.id}-copy-${Date.now()}`,
          x: textToDuplicate.x + 20,
          y: textToDuplicate.y + 20,
        };

        setTexts([...texts, newText]);
        setSelectedElement({ type: "text", id: newText.id });
      }
    }
  };

  const updateText = (updatedText: TextElement) => {
    setTexts(
      texts.map((text) => (text.id === updatedText.id ? updatedText : text))
    );
  };

  const deleteText = (id: string) => {
    setTexts(texts.filter((text) => text.id !== id));
    if (selectedElement.id === id) {
      setSelectedElement({ type: null, id: null });
    }
  };

  const handleLogoChange = (
    newPosition: { x: number; y: number },
    newSize: number
  ) => {
    setLogoPosition(newPosition);
    setLogoSize(newSize);
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isInteracting) {
      setSelectedElement({ type: null, id: null });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 flex-1 rounded-md items-center justify-center min-h-[50vh] mx-auto max-w-[699px] w-full max-md:px-4 md:p-8 bg-[#F0F3F5]">
        <div
          ref={containerRef}
          className="relative w-full rounded-md p-0 cursor-default"
          id="containerRef"
          onClick={handleContainerClick}
          onMouseDown={() => setIsInteracting(true)}
        >
          <div
            className="absolute inset-0 bg-black pointer-events-none"
            style={{ zIndex: 1, opacity: overlayOpacity / 100 }}
          ></div>

          <ImageSelectionTool
            imageSrc={imageSrc ?? "/preview.png"}
            imageId={imageId}
            onSelectionComplete={(selection, prompt) => {
              console.log(
                `Selection at (${selection.x},${selection.y}) with dimensions ${selection.width}x${selection.height}`
              );
              console.log(`Prompt: ${prompt}`);
            }}
            onClick={handleContainerClick}
          />

          {texts.map((text) => (
            <TextLayer
              key={text.id}
              text={text}
              isSelected={
                selectedElement.type === "text" &&
                selectedElement.id === text.id
              }
              onSelect={() => {
                setSelectedElement({ type: "text", id: text.id });
              }}
              onChange={updateText}
              containerSize={containerSize}
              onClick={() => {
                setSelectedElement({ type: "text", id: text.id });
              }}
            />
          ))}

          {brandLogo && (
            <BrandLogoLayer
              logoSrc={brandLogo}
              position={logoPosition}
              size={logoSize}
              isSelected={selectedElement.type === "logo"}
              onSelect={() => {
                setSelectedElement({ type: "logo", id: "logo" });
              }}
              onChange={handleLogoChange}
              containerSize={containerSize}
            />
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 my-4 mb-10">
        <label htmlFor="overlay-opacity" className="text-sm font-medium">
          Overlay Opacity:
        </label>
        <input
          id="overlay-opacity"
          type="range"
          min="0"
          max="100"
          value={overlayOpacity}
          onChange={(e) => setOverlayOpacity(Number(e.target.value))}
          className="w-40 cursor-pointer"
        />
        <span className="text-sm">{overlayOpacity}%</span>
      </div>

      {selectedElement.type === "text" && selectedText && (
        <ControlPanel
          text={selectedText}
          onChange={updateText}
          onDelete={() => deleteText(selectedText.id)}
          onDuplicate={duplicateSelectedText}
          containerSize={containerSize}
        />
      )}

      {selectedElement.type === "logo" && brandLogo && (
        <LogoControlPanel
          position={logoPosition}
          size={logoSize}
          onChange={handleLogoChange}
          containerSize={containerSize}
        />
      )}
    </div>
  );
}
