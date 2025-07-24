import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

interface ImageAdCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function ImageAdCard({
  title = "Generate Image Ad",
  description = "Create high-quality, AI-powered image ads in seconds. Upload, customize, and generate visuals tailored for your audience",
  buttonText = "Try it now",
  buttonHref = "/dashboard/ad-form",
}: ImageAdCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isCardHovering, setIsCardHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative w-full rounded-3xl bg-gradient-to-r from-[#F8E6F8] to-[#B7D3F3] p-8 md:p-12 overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      onMouseEnter={() => setIsCardHovering(true)}
      onMouseLeave={() => setIsCardHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {isCardHovering && (
        <div
          className="absolute bg-[#4d024a] rounded-full opacity-20 blur-sm pointer-events-none transition-all duration-200"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 0,
            width: "50px",
            height: "50px",
            transform: "translate(0, 0)",
          }}
        />
      )}

      <div
        className={`absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl transition-transform duration-700 ease-out opacity-0 ${
          isCardHovering ? "opacity-100" : ""
        }`}
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-3xl relative z-10">
        <h2
          className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl transition-transform duration-500 ${
            isVisible ? "translate-x-0" : "translate-x-4"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mb-6 text-gray-600 md:text-lg transition-transform duration-500 delay-150 ${
            isVisible ? "translate-x-0" : "translate-x-4"
          }`}
        >
          {description}
        </p>

        <Button
          asChild
          variant="outline"
          className={`rounded-full border-[#520052] bg-white px-6 text-[#520052] hover:bg-white/90 transition-all duration-300 ${
            isHovering ? "gap-2 pr-5" : "gap-1 pr-6"
          }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Link href={buttonHref}>
            {buttonText}
            <ArrowRight
              className={`transition-all duration-300 ${
                isHovering ? "translate-x-1 h-6 w-6" : "h-6 w-6"
              }`}
            />
          </Link>
        </Button>
      </div>
    </div>
  );
}
