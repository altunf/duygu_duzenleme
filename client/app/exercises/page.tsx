"use client";
import { ContentArea } from "@/components/content-area";
import { FeelingsSidebar } from "@/components/feelings-sidebar";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { useSidebarContext } from "@/context/sidebar-context";

export default function ExercisesPage() {
  const { isOpen }: any = useSidebarContext();
  return (
    <main>
      <div className="min-h-screen flex ">
        <Sidebar />
        {isOpen && <FeelingsSidebar />}
        <div className="w-full flex flex-col">
          <Header />
          <ContentArea />
        </div>
      </div>
    </main>
  );
}
