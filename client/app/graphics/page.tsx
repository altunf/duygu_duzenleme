import { Graphics } from "@/components/graphic/graphics";
import { cookies } from "next/headers";

export default function GraphicsPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return (
    <main className="h-full w-full">
      <Graphics token={token} />
    </main>
  );
}
