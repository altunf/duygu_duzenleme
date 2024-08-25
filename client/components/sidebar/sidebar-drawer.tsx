import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { AvatarDemo } from "../avatar";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import SidebarMenu from "./sidebar-menu";
import SidebarFooter from "./sidebar-footer";

export const SidebarDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 ">
          <Menu className="h-5 w-5 text-orange-500" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col p-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <AvatarDemo />
            <span className="">Fırat Altun</span>
          </Link>
        </div>
        <nav className="grid gap-2 text-lg font-medium">
          <SidebarMenu />
          <SidebarFooter />
        </nav>
      </DrawerContent>
    </Drawer>
  );
};
