"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { AvatarDemo } from "../avatar";
import { useSidebarContext } from "@/context/sidebar-context";
import SidebarMenu from "./sidebar-menu";
import SidebarFooter from "./sidebar-footer";
import Link from "next/link";

export function SidebarContainer() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const { fullName }: any = useSidebarContext();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsOpen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const SidebarContent = () => (
    <div className="flex h-full flex-col text-primary-foreground">
      <div className="flex h-20 items-center justify-between px-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-primary-foreground hover:bg-primary/10"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <ChevronLeft className="h-6 w-6" />
          ) : (
            <ChevronRight className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>

      <div className="mb-6 flex flex-col items-center justify-center px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <AvatarDemo />
        </Link>
        {isOpen && (
          <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold capitalize">{fullName}</h2>
          </div>
        )}
      </div>

      <ScrollArea className="flex-1 overflow-y-auto px-3">
        <SidebarMenu pathname={pathname} isOpen={isOpen} />
      </ScrollArea>

      <SidebarFooter isOpen={isOpen} />
    </div>
  );

  const x = (
    <>
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed left-4 top-4 z-40 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      ) : (
        <aside
          className={cn(
            "hidden transition-all duration-300 ease-in-out border-r  md:block ",
            isOpen ? "w-72" : "w-20"
          )}
        >
          <SidebarContent />
        </aside>
      )}
    </>
  );
  const b = pathname == "/register" || pathname == "/login" ? false : true;
  return <> {b && x}</>;
}
