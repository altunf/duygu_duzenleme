import { Graphics } from "@/components/graphics";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function GraphicsPage() {
  return (
    <main className="min-h-screen flex ">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header />
        <Graphics />
      </div>
    </main>
  );
}
