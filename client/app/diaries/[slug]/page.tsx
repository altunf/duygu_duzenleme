import { ReadDiary } from "@/components/diary/read-diary";
import { cookies } from "next/headers";

export default function Page({ params }: { params: { slug: string } }) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return <ReadDiary params={params} token={token} />;
}
