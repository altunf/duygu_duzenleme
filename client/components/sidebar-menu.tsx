"use client";
import React, { useState } from "react";
import {
  ChartPie,
  ChevronRight,
  ClipboardList,
  List,
  NotebookPen,
} from "lucide-react";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
import Link from "next/link";

const SidebarMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const menuNames = [
    "Egzersiz Listem",
    "Duygu Günlüğüm",
    "Grafikler",
    "Egzersizler",
  ];
  const icons = [
    <ClipboardList className="h-5 w-5 text-violet-400" />,
    <NotebookPen className="h-5 w-5 text-orange-400" />,
    <ChartPie className="h-5 w-5 text-sky-400" />,
    <List className="h-5 w-5 text-green-400" />,
  ];
  const hrefs = ["/", "/diaries", "/graphics", "/exercises"];
  const menuItems = menuNames.map((el: any, index: number) => {
    return (
      <div key={index}>
        <Link
          href={hrefs[index]}
          className={`flex items-center gap-3 rounded-lg px-2 py-2 transition-all duration-150 hover:bg-muted ${
            selectedIndex === index ? "bg-black text-white" : ""
          }`}
          onClick={() => setSelectedIndex(index)}
        >
          {icons[index]}
          {el}
          <ChevronRight className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-slate-400" />
        </Link>
        {index === 2 ? (
          <DropdownMenuSeparator className="border-[1px]" />
        ) : null}
      </div>
    );
  });
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-3">
      {menuItems}
    </nav>
  );
};

export default SidebarMenu;
