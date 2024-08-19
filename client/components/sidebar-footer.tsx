import React from "react";

import { Button } from "./ui/button";
import { MyAccount } from "./my-account";
import { ThemeButton } from "./theme-button";

const SidebarFooter = () => {
  return (
    <main className="flex justify-between items-center px-4 py-4">
      <MyAccount />
      <ThemeButton />
    </main>
  );
};

export default SidebarFooter;
