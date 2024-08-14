import Link from "next/link";

import { Button } from "@/components/ui/button";

import SidebarMenu from "./sidebar-menu";
import UpgradeToPro from "./upgrade-to-pro";

import { AvatarDemo } from "./avatar";
import { MyAccount } from "./my-account";
import { ThemeButton } from "./theme-button";

export function Sidebar() {
  return (
    <div className="hidden border-r  bg-muted/40 md:block w-72 min-w-72 max-w-64 shadow-xl  shadow-current">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <AvatarDemo />
            <span className="">Fırat Altun</span>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="ml-auto mr-auto h-8 w-8"
          >
            <MyAccount />
          </Button>
          <ThemeButton />
        </div>
        <div className="flex-1">
          <SidebarMenu />
        </div>
        <div className="mt-auto p-4">
          <UpgradeToPro />
        </div>
      </div>
    </div>
  );
}
