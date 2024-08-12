"use client";

import { FeelingsSidebar } from "@/components/feelings-sidebar";

import { Sidebar } from "@/components/sidebar";

export default function ExercisesPage() {
  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <FeelingsSidebar />

      <div className="w-full flex flex-col">
        <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      </div>
    </main>
  );
}
