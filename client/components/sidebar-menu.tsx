"use client";
import React from "react";

import {
  ChartPie,
  ChevronRight,
  ClipboardList,
  LineChart,
  List,
  ListChecks,
  NotebookPen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

import Link from "next/link";
import { useSidebarContext } from "@/context/sidebar-context";

const SidebarMenu = () => {
  const menuNames = [
    "Egzersiz Listem",
    "Duygu Günlüğüm",
    "Grafikler",
    "Egzersizler",
  ];
  const icons = [
    <ClipboardList className="h-5 w-5 text-violet-800" />,
    <NotebookPen className="h-5 w-5 text-orange-600" />,
    <ChartPie className="h-5 w-5 text-sky-700" />,
    <List className="h-5 w-5  text-green-700" />,
  ];
  const hrefs = ["/", "/diaries", "/graphics", "/exercises"];
  const menuItems = menuNames.map((el: any, index: number) => {
    return (
      <div key={index}>
        <Link
          href={hrefs[index]}
          className="flex items-center gap-3 rounded-lg px-0 py-4  transition-all hover:text-primary"
        >
          {icons[index]}
          {el}
          <ChevronRight className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-slate-400" />
        </Link>
        {index === 2 ? (
          <DropdownMenuSeparator className="border-[1px]" />
        ) : (
          <></>
        )}
      </div>
    );
  });
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {menuItems}
    </nav>
  );
};

export default SidebarMenu;
