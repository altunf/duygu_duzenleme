import { cookies } from "next/headers";
import { GraphicContainer } from "@/components/graphic/graphic-container";

export default function GraphicsPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return (
    <main className="h-full w-full">
      <GraphicContainer token={token} />
    </main>
  );
}
