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

const SidebarMenu = (pathname: any, isOpen: any) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const menuNames = [
    "Ana Sayfa",
    "Egzersiz Listem",
    "Duygu Günlüğüm",
    "Grafikler",
    "Egzersizler",
    "Yazılar",
  ];

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
    <ChartPie className="h-5 w-5 text-blue-400" />,
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
    // <nav className="space-y-2 py-4">
    //   {menuNames.map((el: any, index: number) => {
    //     return (
    //       <div key={index}>
    //         <Link
    //           href={hrefs[index]}
    //           className={`flex items-center gap-3 rounded-sm px-2 py-2 transition-all duration-500
    //            ${selectedIndex === index ? "bg-slate-900 text-white" : ""}`}
    //           onClick={() => setSelectedIndex(index)}
    //         >
    //           {icons2[index]}
    //           <div className="text-gray-400 hover:text-white  flex justify-center items-center">
    //             {el}
    //           </div>

    //           <ChevronRight className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-slate-400" />
    //         </Link>
    //         {index === 3 ? (
    //           <DropdownMenuSeparator className="border-[1px]" />
    //         ) : null}
    //       </div>
    //     );
    //   })}
    // </nav>

    <nav className="space-y-2 py-4">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "flex flex-col items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors",
            pathname === item.href
              ? "bg-primary-foreground text-primary"
              : "text-primary-foreground hover:bg-primary/10"
          )}
        >
          <item.icon className="h-6 w-6" />
          {isOpen && <span className="mt-2 text-center">{item.name}</span>}
        </Link>
      ))}
    </nav>
  );
};

export default SidebarMenu;
