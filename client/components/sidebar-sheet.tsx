import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import {
  Badge,
  ChartPie,
  ChevronRight,
  ClipboardList,
  Home,
  LineChart,
  List,
  Menu,
  NotebookPen,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
import { useSidebarContext } from "@/context/sidebar-context";
import { AvatarDemo } from "./avatar";
import { MyAccount } from "./my-account";
import { ThemeButton } from "./theme-button";

export const SidebarSheet = () => {
  const { isOpen, setOpen }: any = useSidebarContext();
  const menuNames = [
    "Egzersiz Listem",
    "Duygu Günlüğüm",
    "Grafikler",
    "Egzersizler",
  ];

  const icons = [
    <ClipboardList className="h-6 w-6 text-violet-800" />,
    <NotebookPen className="h-6 w-6 text-orange-600" />,
    <ChartPie className="h-6 w-6 text-sky-700" />,
    <List className="h-6 w-6  text-green-700" />,
  ];
  const hrefs = ["/", "/diaries", "/graphics", "/exercises"];
  const menuItems = menuNames.map((el: any, index: number) => {
    return (
      <div key={index}>
        <Link
          href={hrefs[index]}
          className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          onClick={() => {
            index == 3 ? setOpen(true) : "";
          }}
        >
          {icons[index]}
          {el}
          <ChevronRight className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-slate-400" />
        </Link>
        {index === 2 ? (
          <DropdownMenuSeparator className="border-[1px]" />
        ) : (
          <></>
        )}
      </div>
    );
  });
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        {" "}
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
        <nav className="grid gap-2 text-lg font-medium">{menuItems}</nav>
        <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};
