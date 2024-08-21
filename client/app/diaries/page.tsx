import { cookies } from "next/headers";
import { FeelingDiary } from "@/components/feeling-diary";

export default function MyFeelingDiaryPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <main className="h-full w-full">
      <FeelingDiary defaultTab={"myDiaries"} token={token} />
    </main>
  );
}
