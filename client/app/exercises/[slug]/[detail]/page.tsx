import { ExerciseRead } from "@/components/exercise/exercise-read";
import { cookies } from "next/headers";

export default function Page({ params }: { params: { detail: string } }) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return <ExerciseRead params={params} token={token} />;
}
