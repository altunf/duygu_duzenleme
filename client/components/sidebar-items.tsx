import React from "react";
import Link from "next/link";
import { LineChart, List, ListChecks, NotebookPen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

const SidebarItems = () => {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <ListChecks className="h-4 w-4" />
        Egzersiz Listem
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <NotebookPen className="h-4 w-4" />
        Duygu Günlüğüm
      </Link>

      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <LineChart className="h-4 w-4" />
        Grafikler
      </Link>
      <DropdownMenuSeparator />

      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <List className="h-4 w-4" />
        Egzersizler
      </Link>
    </nav>
  );
};

export default SidebarItems;
