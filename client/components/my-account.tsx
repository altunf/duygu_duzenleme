"use client";
import React from "react";

import { Button } from "@/components/ui/button";

import { LogOut } from "lucide-react";

import { logout } from "@/app/auth/auth";

export const MyAccount = (isOpen: any) => {
  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="w-full justify-center text-primary-foreground hover:bg-primary/10 text-black dark:text-white "
        onClick={async () => {
          await logout();
        }}
      >
        <LogOut className="h-5 w-5" />
        {isOpen && <span className="ml-2">Log out</span>}
      </Button>
    </>
  );
};
