import { FeelingDiary } from "@/components/feeling-diary";
import { Graphics } from "@/components/graphics";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function GraphicsPage() {
  return (
    <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className=" flex flex-col">
        <Header /> <Graphics />
      </div>
    </main>
  );
}
