"use client";
import { FeelingDiary } from "@/components/feeling-diary";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function MyFeelingDiaryPage() {
  return (
    <main>
      <div className="min-h-screen flex ">
        <Sidebar />

        <div className="w-full flex flex-col">
          <Header />
          <FeelingDiary defaultTab="myDiaries" />
        </div>
      </div>
    </main>
  );
}
