import { Exercises } from "@/components/exercises";

import { FeelingsSidebar } from "@/components/feelings-sidebar";

import { Sidebar } from "@/components/sidebar";

export default function MyFeelingDiaryPage() {
  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <FeelingsSidebar />

      <div className="w-full flex flex-col">
        <div className=" inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className=" bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
            <Exercises />
          </div>
        </div>
        ;
      </div>
    </main>
  );
}
