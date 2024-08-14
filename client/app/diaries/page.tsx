"use client";
import { FeelingDiary } from "@/components/feeling-diary";
import { MyDiaries } from "@/components/my-diaries";
import { NewDiary } from "@/components/new-diary";

export default function MyFeelingDiaryPage() {
  return (
    <main className="h-full w-full">
      <FeelingDiary defaultTab={"myDiaries"} />
    </main>
  );
}
