"use client";
import Link from "next/link";

import SidebarMenu from "./sidebar-menu";
import SidebarFooter from "./sidebar-footer";

import { AvatarDemo } from "../avatar";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "@/context/sidebar-context";
import { Header } from "./header";

export function SidebarContainer() {
  const pathname = usePathname();
  const { fullName }: any = useSidebarContext();

  const x = (
    <aside className="hidden border-r  bg-muted/20 md:block w-72 min-w-72 max-w-64 ">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <AvatarDemo />
            <span className="capitalize ml-2">{fullName}</span>
          </Link>
        </div>
        <div className="flex-1">
          <SidebarMenu />
        </div>
        <div className="mt-auto p-4">
          <SidebarFooter />
        </div>
      </div>
    </aside>
  );
  const b = pathname == "/register" || pathname == "/login" ? false : true;

  return <> {b && x}</>;
}
