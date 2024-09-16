"use client";
import { useDiary } from "@/hooks/useDiary";
import { useMoods } from "@/hooks/useMoods";
import React, { use } from "react";

import Link from "next/link";
import { TopThreeMoodsChart } from "../graphic/top-three-mood-chart";

import CardDemo from "../diary/diary-card";

interface Diary {
  _id: string;
  title: string;
  mood: string;
  point: number;
  date: string;
}

export const SummaryContainer = ({ token }: any) => {
  const { userDiaries } = useDiary(token);
  const { topThreeMoods } = useMoods(token, userDiaries);

  <main className="flex flex-1 h-full w-full flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">Yazılar</h1>
    </div>
    <div className="flex flex-1 items-center justify-center ">Articles</div>
  </main>;

  return (
    <main className="flex flex-1 h-full w-full flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Özet</h1>
      </div>
      <div className="flex flex-1 items-center justify-center ">
        <div className="">
          <Link href={"/diaries"}>
            <CardDemo diary={userDiaries[0]} />
          </Link>
          <Link href={"/graphics"}>
            <TopThreeMoodsChart topThreeMoods={topThreeMoods} />
          </Link>{" "}
        </div>
      </div>
    </main>
  );
};
