"use client";
import React from "react";

import { LineChart, List, ListChecks, NotebookPen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
import { useSidebarContext } from "@/context/sidebar-context";
import Link from "next/link";

const SidebarItems = () => {
  const { sidebarItemTitle, setTitle }: any = useSidebarContext();

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link
        href={"/"}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={() => {
          setTitle("Egzersiz Listem");
        }}
      >
        <ListChecks className="h-4 w-4" />
        Egzersiz Listem
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link>
      <Link
        href={"/diaries"}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={() => {
          setTitle("Duygu Günlüğüm");
        }}
      >
        <NotebookPen className="h-4 w-4" />
        Duygu Günlüğüm
      </Link>

      <Link
        href={"/graphics"}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={() => {
          setTitle("Grafikler");
        }}
      >
        <LineChart className="h-4 w-4" />
        Grafikler
      </Link>
      <DropdownMenuSeparator className="border" />

      <Link
        href={"/exercises"}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={() => {
          setTitle("Egzersizler");
        }}
      >
        <List className="h-4 w-4" />
        Egzersizler
      </Link>
    </nav>
  );
};

export default SidebarItems;
