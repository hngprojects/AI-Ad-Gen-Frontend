"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface BrandLogoLayerProps {
  logoSrc: string;
  position: { x: number; y: number };
  size: number;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (position: { x: number; y: number }, size: number) => void;
  containerSize: { width: number; height: number };
}

export function BrandLogoLayer({
  logoSrc,
  position,
  size,
  isSelected,
  onSelect,
  onChange,
  containerSize,
}: BrandLogoLayerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const initialSize = useRef(0);
  const initialMousePos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect();

    if (logoRef.current) {
      dragOffset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
      setIsDragging(true);
    }
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    initialSize.current = size;
    initialMousePos.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        let newX = e.clientX - dragOffset.current.x;
        let newY = e.clientY - dragOffset.current.y;

        newX = Math.max(0, Math.min(newX, containerSize.width - size));
        newY = Math.max(0, Math.min(newY, containerSize.height - size));

        onChange({ x: newX, y: newY }, size);
      } else if (isResizing) {
        const dx = e.clientX - initialMousePos.current.x;
        const dy = e.clientY - initialMousePos.current.y;
        const delta = Math.max(dx, dy);

        const newSize = Math.max(20, initialSize.current + delta);

        const newX = Math.min(position.x, containerSize.width - newSize);
        const newY = Math.min(position.y, containerSize.height - newSize);

        onChange({ x: newX, y: newY }, newSize);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isResizing, position, size, onChange, containerSize]);

  const selectionStyles = isSelected
    ? {
        outline: "2px solid #3b82f6",
        boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)",
      }
    : {};

  return (
    <div
      ref={logoRef}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        cursor: isDragging ? "grabbing" : "grab",
        borderRadius: "50%",
        overflow: "hidden",
        zIndex: isSelected ? 10 : 5,
        transition: "box-shadow 0.2s ease",
        ...selectionStyles,
      }}
      onMouseDown={handleMouseDown}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      <div className="relative w-full h-full">
        <Image src={logoSrc} alt="Brand Logo" layout="fill" objectFit="cover" />
      </div>

      {isSelected && (
        <div
          style={{
            position: "absolute",
            bottom: "2px",
            right: "2px",
            width: "12px",
            height: "12px",
            backgroundColor: "#3b82f6",
            cursor: "nwse-resize",
            borderRadius: "2px",
            border: "1px solid white",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}
          onMouseDown={handleResizeStart}
        />
      )}
    </div>
  );
}
