"use client";
import React from "react";

import { useDiary } from "@/hooks/useDiary";
import { useMoods } from "@/hooks/useMoods";
import { useFetchCompletedTasks } from "@/hooks/useFetchCompletedTasks";
import { ChartLists } from "./chart-lists";

export const Graphics = ({ token }: any) => {
  const { userDiaries } = useDiary(token);
  const { topThreeMoods, averageMoodPoint, moods } = useMoods(
    token,
    userDiaries
  );

  return (
    <main className="flex flex-1 h-full w-full flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Grafikler</h1>
      </div>
      <div className="flex flex-1 items-center justify-center ">
        <ChartLists
          average={averageMoodPoint}
          moods={moods}
          userDiaries={userDiaries}
          topThreeMoods={topThreeMoods}
        />
      </div>
    </main>
  );
};
