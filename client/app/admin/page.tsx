import { cookies } from "next/headers";

import { CreateExercise } from "@/components/exercise/create-exercise";

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return (
    <main className="w-full h-full">
      <CreateExercise token={token} />
    </main>
  );
}
