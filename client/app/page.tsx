"use client";
import { Content } from "@/components/content";
import Deneme from "@/components/deneme";
import { Header } from "@/components/header";
import { MyExercises } from "@/components/my-exercises";
import { Sidebar } from "@/components/sidebar";

const HomePage = (
  <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <Sidebar />
    <div className="flex flex-col">
      <Header /> <MyExercises />
    </div>
  </main>
);

const deneme = () => {
  return <div>HELLO</div>;
};

export default function Home() {
  const xData = localStorage.getItem("token");

  const renderPage = xData ? HomePage : deneme;
  return renderPage;
}
