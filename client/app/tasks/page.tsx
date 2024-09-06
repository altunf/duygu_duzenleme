import { MyTasks } from "@/components/task/my-tasks";
import { cookies } from "next/headers";

export default function TasksListPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  console.log(JSON.stringify(token), "token");
  return (
    <main className="h-full w-full">
      <MyTasks token={token} />
    </main>
  );
}
