"use client";
import Link from "next/link";
import { X } from "lucide-react";
import { useSidebarContext } from "@/context/sidebar-context";

export function FeelingsSidebar() {
  const { setOpen }: any = useSidebarContext();
  return (
    <div className="hidden min-h-screen border-r bg-muted/40 md:block w-64 min-w-64 max-w-64 overflow-y-auto">
      <div className="flex justify-end mt-4 mr-2 cursor-pointer">
        <X
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
      <div className="flex  max-h-screen flex-col gap-2">
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
