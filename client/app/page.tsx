import { Sidebar } from "@/components/sidebar";

const deneme = (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    Hello World
    <div>
      <Sidebar />
    </div>
  </main>
);

export default function Home() {
  return <Sidebar />;
}
