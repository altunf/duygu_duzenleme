import { FeelingDiary } from "@/components/feeling-diary";

export default function MyFeelingDiaryPage() {
  return (
    <main className="h-full w-full">
      <FeelingDiary defaultTab={"newDiary"} />
    </main>
  );
}
