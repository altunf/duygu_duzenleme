"use client";
import React from "react";

import { SidebarSheet } from "@/components/sidebar-sheet";
import { MyAccount } from "@/components/my-account";
import { ThemeButton } from "./theme-button";

export const Header = () => {
  return (
    <header className="md:hidden sm:flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <SidebarSheet />
      <div className="w-full flex-1"></div>
      <MyAccount />
      <ThemeButton />
    </header>
  );
};
