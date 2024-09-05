import { MyTasks } from "@/components/task/my-tasks";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return (
    <main className="h-full w-full">
      <MyTasks token={token} />
    </main>
  );
}
