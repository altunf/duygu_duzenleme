"use client";

import { MyExercises } from "@/components/my-exercises";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  <main className="flex min-h-screen ">
    <Sidebar />
    <div className="w-full flex flex-col">
      <MyExercises />
    </div>
  </main>;
}
