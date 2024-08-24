import { MyExercises } from "@/components/my-exercises";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return (
    <main className="h-full w-full">
      <MyExercises token={token} />
    </main>
  );
}
