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

import { Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export const MyAccount = () => {
  const router = useRouter();

  const handleClick: any = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <Settings className="h-6 w-6" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Ayarlar</DropdownMenuItem>
          <DropdownMenuItem>Destek</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleClick}>
            Oturumu Kapat
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
