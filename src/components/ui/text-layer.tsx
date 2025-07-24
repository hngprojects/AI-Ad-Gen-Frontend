"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import type { TextElement } from "./image-editor";

interface TextLayerProps {
  text: TextElement;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (text: TextElement) => void;
  onClick: () => void;
  containerSize: { width: number; height: number };
}

export function TextLayer({
  text,
  isSelected,
  onSelect,
  onChange,
  onClick,
  containerSize,
}: TextLayerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const editRef = useRef<HTMLTextAreaElement>(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isEditing && editRef.current) {
      editRef.current.focus();
    }
  }, [isEditing]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect();

    if (textRef.current) {
      dragOffset.current = {
        x: e.clientX - text.x,
        y: e.clientY - text.y,
      };
      setIsDragging(true);
    }
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        let newX = e.clientX - dragOffset.current.x;
        let newY = e.clientY - dragOffset.current.y;

        newX = Math.max(0, Math.min(newX, containerSize.width - 20));
        newY = Math.max(0, Math.min(newY, containerSize.height - 20));

        onChange({ ...text, x: newX, y: newY });

        dragOffset.current = {
          x: e.clientX - newX,
          y: e.clientY - newY,
        };
      } else if (isResizing && textRef.current) {
        const newSize = Math.max(10, text.fontSize + e.movementY * 0.5);
        onChange({ ...text, fontSize: newSize });
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
  }, [isDragging, isResizing, text, onChange, containerSize]);

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ ...text, content: e.target.value });
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const backgroundStyle =
    text.backgroundColor && text.backgroundColor !== "none"
      ? { backgroundColor: text.backgroundColor }
      : { backgroundColor: "transparent" };

  const backgroundHeight = text.fontSize * 2;

  return (
    <div
      ref={textRef}
      style={{
        position: "absolute",
        cursor: "move",
        userSelect: "none",
        outline: isSelected ? "2px solid blue" : "none",
        left: `${text.x}px`,
        top: `${text.y}px`,
        color: text.color,
        fontFamily: text.fontFamily,
        fontSize: `${text.fontSize}px`,
        fontWeight: text.isBold ? "bold" : "normal",
        fontStyle: text.isItalic ? "italic" : "normal",
        textDecoration: text.isUnderline ? "underline" : "none",
        padding: 0,
        margin: 0,
        ...backgroundStyle,
        zIndex: isSelected ? 10 : 1,
        borderRadius: "4px",
        display: "inline-flex",
        alignItems: "center",
        minHeight: `${backgroundHeight}px`,
        height: "auto",
        lineHeight: 1,
        boxSizing: "border-box",
      }}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <textarea
          ref={editRef}
          value={text.content}
          onChange={handleTextChange}
          onBlur={handleBlur}
          style={{
            backgroundColor: "transparent",
            border: "1px solid blue",
            outline: "none",
            resize: "none",
            width: "100%",
            minWidth: "100px",
            color: text.color,
            fontFamily: text.fontFamily,
            fontSize: `${text.fontSize}px`,
            fontWeight: text.isBold ? "bold" : "normal",
            fontStyle: text.isItalic ? "italic" : "normal",
            textDecoration: text.isUnderline ? "underline" : "none",
            lineHeight: 1,
            padding: "4px",
            margin: 0,
            boxSizing: "border-box",
            height: "100%",
          }}
          onClick={onClick}
        />
      ) : (
        <>
          <span
            style={{
              display: "inline-block",
              lineHeight: 1.5, 
              padding: "4px 8px",
              boxSizing: "border-box",
              width: "100%",
              height: "100%",
              verticalAlign: "middle",
              textAlign: "center", 
            }}
          >
            {text.content}
          </span>
          {isSelected && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "16px",
                height: "16px",
                backgroundColor: "blue",
                cursor: "se-resize",
              }}
              onMouseDown={handleResizeStart}
            />
          )}
        </>
      )}
    </div>
  );
}
