import { cookies } from "next/headers";

import { DiaryContainer } from "@/components/diary/diary-container";

export default function MyFeelingDiaryPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <main className="h-full w-full">
      <DiaryContainer defaultTab={"myDiaries"} token={token} />
    </main>
  );
}
