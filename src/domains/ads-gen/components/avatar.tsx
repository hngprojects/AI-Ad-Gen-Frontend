"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LayoutDashboard, LogOut, User } from "lucide-react";
import { useState } from "react";

interface UserAvatarProps {
  name: string;
  imageUrl?: string;
  onSignOut?: () => void;
  onViewProfile?: () => void;
  onSettings?: () => void;
}

export function UserAvatar({
  name,
  imageUrl,
  onSignOut = () => {},
}: UserAvatarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-3 pr-[8px] px-1 py-2 rounded-[12px] bg-[#292929] cursor-pointer transition-colors"
          aria-label="User menu"
        >
          <Avatar className="h-8 w-8 border-0 bg-white rounded-[12px]">
            {imageUrl ? <AvatarImage src={imageUrl} alt={name} /> : initials}
            <AvatarFallback className="bg-white text-gray-400">
              {initials || <User className="h-5 w-5" />}
            </AvatarFallback>
          </Avatar>
          <ChevronDown
            className={`h-5 w-5 text-white transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem
          onClick={() => {
            window.location.href = "/dashboard";
          }}
          className="flex items-center group gap-2 py-2 cursor-pointer"
        >
          <LayoutDashboard className="h-10 w-10 text-dark group-hover:text-red-500" />
          <span className="group-hover:text-red-500 ">Dashboard</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            window.location.href = "/dashboard/profile";
          }}
          className="flex items-center  gap-2 py-2 group cursor-pointer"
        >
          <User className="h-10 w-10 text-dark group-hover:text-red-500" />
          <span className="group-hover:text-red-500 ">Profile</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={onSignOut}
          className="flex items-center  gap-2 py-2 group cursor-pointer"
        >
          <LogOut className="h-10 w-10 text-dark group-hover:text-red-500" />
          <span className="group-hover:text-red-500 ">Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
