"use client";
import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

const HomePage = (
  <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <Sidebar />
    <div className="flex flex-col">
      <Header /> <Content />
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
