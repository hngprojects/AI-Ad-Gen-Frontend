"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import type { TextElement } from "./image-editor"
import { cn } from "@/lib/utils"

interface TextLayerProps {
  text: TextElement
  isSelected: boolean
  onSelect: () => void
  onChange: (text: TextElement) => void
  onDelete: () => void
  containerSize: { width: number; height: number }
}

export function TextLayer({ text, isSelected, onSelect, onChange, onDelete, containerSize }: TextLayerProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const editRef = useRef<HTMLTextAreaElement>(null)
  const dragOffset = useRef({ x: 0, y: 0 })

  // Focus the textarea when editing starts
  useEffect(() => {
    if (isEditing && editRef.current) {
      editRef.current.focus()
    }
  }, [isEditing])

  // Handle keydown event for deleting text
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSelected && e.key === "Delete") {
        onDelete()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isSelected, onDelete])

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation()
    onSelect()

    if (textRef.current) {
      dragOffset.current = {
        x: e.clientX - text.x,
        y: e.clientY - text.y,
      }
      setIsDragging(true)
    }
  }

  // Handle resize start
  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsResizing(true)
  }

  // Handle mouse move for dragging and resizing
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        // Calculate new position, ensuring text stays within container
        let newX = e.clientX - dragOffset.current.x
        let newY = e.clientY - dragOffset.current.y

        // Boundary checks
        newX = Math.max(0, Math.min(newX, containerSize.width - 20))
        newY = Math.max(0, Math.min(newY, containerSize.height - 20))

        onChange({ ...text, x: newX, y: newY })

        // Update drag offset to the new position
        dragOffset.current = {
          x: e.clientX - newX,
          y: e.clientY - newY,
        }
      } else if (isResizing && textRef.current) {
        // Calculate new font size based on mouse movement
        const newSize = Math.max(10, text.fontSize + e.movementY * 0.5)
        onChange({ ...text, fontSize: newSize })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setIsResizing(false)
    }

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, isResizing, text, onChange, containerSize])

  // Handle double click to edit
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsEditing(true)
  }

  // Handle text change
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ ...text, content: e.target.value })
  }

  // Handle blur to exit editing mode
  const handleBlur = () => {
    setIsEditing(false)
  }

  return (
    <div
      ref={textRef}
      className={cn("absolute cursor-move select-none", isSelected && "outline-2 outline-blue-500")}
      style={{
        left: `${text.x}px`,
        top: `${text.y}px`,
        color: text.color,
        fontFamily: text.fontFamily,
        fontSize: `${text.fontSize}px`,
        fontWeight: text.isBold ? "bold" : "normal",
        fontStyle: text.isItalic ? "italic" : "normal",
        textDecoration: text.isUnderline ? "underline" : "none",
        lineHeight: 1.2,
        padding: "4px",
        zIndex: isSelected ? 10 : 1,
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
          className="bg-transparent border border-blue-500 outline-none resize-none w-full min-w-[100px]"
          style={{
            color: text.color,
            fontFamily: text.fontFamily,
            fontSize: `${text.fontSize}px`,
            fontWeight: text.isBold ? "bold" : "normal",
            fontStyle: text.isItalic ? "italic" : "normal",
            textDecoration: text.isUnderline ? "underline" : "none",
            lineHeight: 1.2,
          }}
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <>
          <div>{text.content}</div>
          {isSelected && (
            <div
              className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 cursor-se-resize"
              onMouseDown={handleResizeStart}
            />
          )}
        </>
      )}
    </div>
  )
}