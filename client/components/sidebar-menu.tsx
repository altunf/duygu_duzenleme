"use client";
import React from "react";

import { LineChart, List, ListChecks, NotebookPen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

import Link from "next/link";
import { useSidebarContext } from "@/context/sidebar-context";

const SidebarMenu = () => {
  const { isOpen, setOpen }: any = useSidebarContext();
  const menuNames = [
    "Egzersiz Listem",
    "Duygu Günlüğüm",
    "Grafikler",
    "Egzersizler",
  ];
  const icons = [
    <ListChecks className="h-4 w-4" />,
    <NotebookPen className="h-4 w-4" />,
    <LineChart className="h-4 w-4" />,
    <List className="h-4 w-4" />,
  ];
  const hrefs = ["/", "/diaries", "/graphics", "exercises"];
  const menuItems = menuNames.map((el: any, index: number) => {
    return (
      <>
        <Link
          key={index}
          href={hrefs[index]}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          onClick={() => {
            index == 3 ? setOpen(true) : "";
          }}
        >
          {icons[index]}
          {el}
          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            {index}
          </Badge>
        </Link>
        {index === 2 ? (
          <DropdownMenuSeparator className="border-[1px]" />
        ) : (
          <></>
        )}
      </>
    );
  });
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {menuItems}
    </nav>
  );
};

export default SidebarMenu;
