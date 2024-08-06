"use client";
import { Sidebar } from "@/components/sidebar";

const deneme = (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    Hello World
  </main>
);

export default function Home() {
  const xData = localStorage.getItem("token");

  const renderPage = xData ? <Sidebar /> : deneme;
  return renderPage;
}
