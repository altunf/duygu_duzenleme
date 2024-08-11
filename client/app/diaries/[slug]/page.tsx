"use client"; // Bu direktif dosyanın en üstünde olmalı

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [diary, setDiary] = useState<any[]>([]);

  console.log(params.slug, "params");

  useEffect(() => {
    const getDiaries = async () => {
      try {
        const response = await fetch("http://localhost:3001/diaries");
        const data = await response.json();
        setDiary(data);
      } catch (error) {
        console.error("Veri alınırken bir hata oluştu:", error);
      }
    };
    getDiaries();
  }, []);

  const result = diary.filter((el) => el.title == params.slug);

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header />
        <div className="flex items-center justify-center inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          {result.length > 0 ? (
            result.map((el) => (
              <div key={el._id} className="p-4 border rounded-lg shadow-md">
                <h1 className="text-2xl font-bold">{el.title}</h1>
              </div>
            ))
          ) : (
            <p>Günlük bulunamadı.</p>
          )}
        </div>
      </div>
    </main>
  );
}
