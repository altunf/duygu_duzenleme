"use client";

import { CreateExercise } from "@/components/create-exercise";
import { Sidebar } from "@/components/sidebar";

const AdminPanel = (
  <main className="flex min-h-screen ">
    <Sidebar />
    <div className="w-full flex flex-col">
      <CreateExercise />
    </div>
  </main>
);

const deneme = () => {
  return <div>HELLO</div>;
};

export default function Home() {
  return AdminPanel;
}
