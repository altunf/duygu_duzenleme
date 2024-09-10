import { TasksContainer } from "@/components/task/tasks-container";
import { cookies } from "next/headers";

export default function TasksListPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  console.log(JSON.stringify(token), "token");
  return (
    <main className="h-full w-full">
      <TasksContainer token={token} />
    </main>
  );
}
