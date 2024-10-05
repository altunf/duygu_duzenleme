"use client";
import React from "react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOut, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export const MyAccount = (isOpen: any) => {
  const router = useRouter();

  const handleClick: any = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="w-full justify-center text-primary-foreground hover:bg-primary/10"
        onClick={handleClick}
      >
        <LogOut className="h-5 w-5" />
        {isOpen && <span className="ml-2">Log out</span>}
      </Button>
    </>
  );
};
