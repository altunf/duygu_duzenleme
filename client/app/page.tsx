"use client";

import { Header } from "@/components/header";
import { MyExercises } from "@/components/my-exercises";
import { Sidebar } from "@/components/sidebar";

const HomePage = (
  <main className="flex min-h-screen ">
    <Sidebar />
    <div className="w-full flex flex-col">
      <Header /> <MyExercises />
    </div>
  </main>
);

const deneme = () => {
  return <div>HELLO</div>;
};

export default function Home() {
  const xData: any = localStorage.getItem("token");

  const renderPage = xData ? HomePage : deneme;
  return renderPage;
}
