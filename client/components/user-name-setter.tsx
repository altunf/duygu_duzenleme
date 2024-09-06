"use client";

import { useSidebarContext } from "@/context/sidebar-context";
import { useEffect } from "react";

export default function UserNameSetter({ fullName }: { fullName: string }) {
  const { setFullName }: any = useSidebarContext();

  useEffect(() => {
    setFullName(fullName);
  }, [fullName, setFullName]);

  return null;
}
