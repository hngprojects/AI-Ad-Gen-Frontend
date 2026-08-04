import { Button } from "@/components/ui/button";
import { useGoogleAuth } from "@/domains/auth/api/useGoggleAuth";
import { ArrowRight } from "lucide-react";


interface ButtonProps {
  text: string;
  variant: "outline" | "solid";
  href?: string;
  onClick?: () => void;
}

const HeroButton = ({ text, variant, onClick }: ButtonProps) => {


  return (
    <Button
      onClick={onClick}
      className={`
        inline-flex items-center w-fit justify-center gap-2 px-6 py-3 rounded-md text-lg font-medium transition-colors
        ${
          variant === "outline"
            ? "border border-[#520052] text-[#520052] hover:bg-purple-50 bg-white"
            : "bg-[#B800B8] text-white hover:bg-dark-purple"
        }
      `}
      
    >
      {text} <ArrowRight className="h-5 w-5" />
    </Button>
  );
};

export default function AdButtons() {
  const { handleGoogleLogin } = useGoogleAuth();
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-10 items-center  max-w-full mx-auto">
      <HeroButton
      text="Try a Demo Ad" variant="outline" onClick={() => {}} />

      <HeroButton
        text="Generate Your Ad"
        variant="solid"
       onClick={handleGoogleLogin}
      />
    </div>
  );
}
