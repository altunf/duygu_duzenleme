"use client";
import React, { useState } from "react";
import {
  BarChart2,
  ChartPie,
  ChevronRight,
  ClipboardList,
  LayoutDashboard,
  LayoutGrid,
  List,
  NotebookPen,
  PencilLine,
} from "lucide-react";

import Link from "next/link";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";

const SidebarMenu = ({ pathname, isOpen }: any) => {
  const menuItems = [
    { name: "Ana Sayfa", href: "/", icon: LayoutDashboard },
    { name: "Egzersiz Listem", href: "/tasks", icon: ClipboardList },
    { name: "Duygu Günlüğüm", href: "/diaries", icon: NotebookPen },
    { name: "Grafikler", href: "/graphics", icon: BarChart2 },
    { name: "Egzersizler", href: "/exercises", icon: List },
    { name: "Yazılar", href: "/articles", icon: PencilLine },
  ];
  const icons = [
    <LayoutGrid className="h-5 w-5 text-yellow-400" />,
    <ClipboardList className="h-5 w-5 text-violet-400" />,
    <NotebookPen className="h-5 w-5 text-orange-400" />,
    <BarChart2 className="h-5 w-5 text-blue-400" />,
    <List className="h-5 w-5 text-green-400" />,
    <PencilLine className="h-5 w-5 text-rose-400" />,
  ];
  const icons2 = [
    <LayoutGrid />,
    <ClipboardList />,
    <NotebookPen />,
    <ChartPie />,
    <List />,
    <PencilLine />,
  ];
  const hrefs = [
    "/",
    "/tasks",
    "/diaries",
    "/graphics",
    "/exercises",
    "/articles",
  ];

  return (
    <nav className="space-y-2 py-4">
      {menuItems.map((item, index) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "flex flex-col items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors",
            pathname === item.href
              ? "bg-primary/10 dark:bg-gray-900 text-black dark:text-white "
              : "text-primary-foreground text-gray-600 dark:hover:bg-background hover:bg-primary/10"
          )}
        >
          {icons[index]}
          {isOpen && <span className="mt-2 text-center ">{item.name}</span>}
        </Link>
      ))}
    </nav>
  );
};

export default SidebarMenu;
