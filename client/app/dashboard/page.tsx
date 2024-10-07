import { cookies } from "next/headers";
import { FeedContainer } from "@/components/feed/feed-container";

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <main className="h-full w-full ">
      <FeedContainer token={token} />
    </main>
  );
}
