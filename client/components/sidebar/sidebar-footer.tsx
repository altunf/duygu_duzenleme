import React from "react";
import { MyAccount } from "../my-account";
import { ThemeButton } from "../theme-button";

const SidebarFooter = (isOpen: any) => {
  return (
    <main className="mt-auto p-4 space-y-4 ">
      <MyAccount isOpen={isOpen} />
      <ThemeButton isOpen={isOpen} />
    </main>
  );
};

export default SidebarFooter;
