"use client";

import { Sidebar } from "@/components/sidebar";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [diary, setDiary] = useState<any[]>([]);

  const { theme } = useTheme();
  console.log("theme", theme);

  const light =
    "  bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ";
  const dark =
    "  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ";

  const bgStyle = theme === "light" ? light.toString() : dark.toString();
  const bgClr =
    theme === "light"
      ? " bg-[#F1E9D2] bg-opacity-60"
      : " bg-orange-700 bg-opacity-40";

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

  const diaryTemp = (props: any) => {
    return (
      <main key={props._id} className="px-4 sm:px-6 lg:px-8 h-96">
        <div
          className={`max-w-4xl w-full  p-6 ${bgClr}  rounded-lg shadow-2xl`}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between space-x-2">
              <h1 className="text-3xl font-bold text-card-foreground">
                {props.title}
              </h1>
              <p className="text-muted-foreground">August 11, 2024</p>
            </div>
            <div className="space-y-4 max-w-none whitespace-pre-wrap ">
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      </main>
    );
  };

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="w-full flex flex-col">
        <div
          className={`flex items-center justify-center h-full w-full overflow-auto
           ${bgStyle}`}
        >
          <div className="">
            {result.length > 0 ? (
              result.map((el) => diaryTemp(el))
            ) : (
              <p>Günlük bulunamadı.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
