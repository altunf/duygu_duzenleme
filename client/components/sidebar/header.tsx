import React from "react";
import { SidebarDrawer } from "./sidebar-drawer";

export const Header = () => {
  return (
    <header className="md:hidden sm:flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <SidebarDrawer />
    </header>
  );
};
