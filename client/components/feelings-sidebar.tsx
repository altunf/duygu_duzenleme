import Link from "next/link";
import SidebarMenu from "./sidebar-menu";
import UpgradeToPro from "./upgrade-to-pro";

export function FeelingsSidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block w-64 min-w-64 max-w-64">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1">
          <Link
            href={"exercises/1"}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            Öfke
          </Link>
        </div>
      </div>
    </div>
  );
}
