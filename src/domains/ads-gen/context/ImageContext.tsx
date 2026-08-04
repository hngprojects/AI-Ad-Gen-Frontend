"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ImageContextProps {
  imageUrl: string | null;
  setImageUrl: (url: string) => void;
  promptData: string | null;
  setPromptData: (data: string) => void;
}

const ImageContext = createContext<ImageContextProps | undefined>(undefined);

export const ImageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [promptData, setPromptData] = useState<string | null>(null);

  useEffect(() => {
    const storedImageUrl = localStorage.getItem("imageUrl");
    const storedPromptData = localStorage.getItem("promptData");
    if (storedImageUrl) setImageUrl(storedImageUrl);
    if (storedPromptData) setPromptData(storedPromptData);
  }, []);

  useEffect(() => {
    if (imageUrl) {
      localStorage.setItem("imageUrl", imageUrl);
    } else {
      localStorage.removeItem("imageUrl");
    }
  }, [imageUrl]);

  useEffect(() => {
    if (promptData) {
      localStorage.setItem("promptData", promptData);
    } else {
      localStorage.removeItem("promptData");
    }
  }, [promptData]);

  return (
    <ImageContext.Provider
      value={{ imageUrl, setImageUrl, promptData, setPromptData }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};
