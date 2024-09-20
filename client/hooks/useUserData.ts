"use client";

import { useSidebarContext } from "@/context/sidebar-context";
import { useEffect } from "react";

export function useUserData({ props }: any) {
  const { setFullName }: any = useSidebarContext();

  useEffect(() => {
    setFullName(props);
  }, [props]);
}
