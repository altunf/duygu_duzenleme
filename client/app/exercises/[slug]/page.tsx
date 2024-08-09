import { Exercises } from "@/components/exercises";

import { FeelingsSidebar } from "@/components/feelings-sidebar";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function MyFeelingDiaryPage() {
  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <FeelingsSidebar />
      <div className="w-full flex flex-col">
        <Header />
        <Exercises />
      </div>
    </main>
  );
}
