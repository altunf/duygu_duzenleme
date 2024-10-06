"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { Moon, Sun } from "lucide-react";

export function ThemeButton(isOpen: any) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-full justify-center text-primary-foreground hover:bg-primary/10 text-black dark:text-white "
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      {isOpen && (
        <span className="ml-2">{theme === "dark" ? "Light" : "Dark"} Mode</span>
      )}
    </Button>
  );
}
