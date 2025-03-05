"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full h-[60px] border-b border-[#F8E6F8] bg-white shadow-md">

    <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6 h-full">
    <div className="pl-4">
    <Link href="/">
    <Image src="/header-logo.svg" alt="Adgen AI Logo" width={150} height={40} priority />
    </Link>
    </div>



        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <Link href="/features" className="hover:text-purple-700">
            Features
          </Link>
          <Link href="/how-it-works" className="hover:text-purple-700">
            How it works
          </Link>
          <Link href="/pricing" className="hover:text-purple-700">
            Pricing
          </Link>
        </nav>

       {/* Buttons */}
<div className="hidden md:flex space-x-4 pr-4">
  <Button variant="ghost" asChild>
    <Link href="/signin" className="text-[#520052]">Sign in</Link>
  </Button>
  <Button className="bg-[#520052] text-white px-4 py-2 rounded-md" asChild>
    <Link href="/signup">Create account</Link>
  </Button>
</div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link href="/features" className="text-gray-600 hover:text-purple-700">
              Features
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-purple-700">
              How it works
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-purple-700">
              Pricing
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/signin" className="text-[#520052]">Sign in</Link>
            </Button>
            <Button className="bg-[#520052] text-white px-4 py-2 rounded-md" asChild>
              <Link href="/signup">Create account</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
