"use client";

import { SidebarContextProvider } from "@/context/sidebar-context";
import { Suspense } from "react";

export default function SidebarProvider({ children }: any) {
  return (
    <Suspense>
      <SidebarContextProvider>{children}</SidebarContextProvider>
    </Suspense>
  );
}
