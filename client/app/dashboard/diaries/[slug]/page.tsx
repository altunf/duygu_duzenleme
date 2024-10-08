import { DiaryRead } from "@/components/diary/diary-read";
import { cookies } from "next/headers";

export default function Page({ params }: { params: { slug: string } }) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return <DiaryRead params={params} token={token} />;
}
