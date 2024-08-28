"use client";
import React from "react";

import { useDiary } from "@/hooks/useDiary";
import { useFetchCompletedTasks } from "@/hooks/useFetchCompletedTasks";
import daysBetween from "@/lib/daysBetween.js";
import { ChartsLists } from "./charts-lists";

export const Graphics = ({ token }: any) => {
  const { userDiaries } = useDiary(token);
  const data = useFetchCompletedTasks({ token });

  // const date1 = data[0]?.date;
  // const date2 = data[data.length - 1]?.date;

  // console.log(daysBetween(date1, date2), "fark");

  console.log(data, "DATA from graphics");
  console.log(userDiaries, "userDiaries from graphics");

  const moodPoints: any = {
    şaşırmış: 0,
    öfkeli: 0,
    tiksinmiş: 0,
    üzgün: 0,
    neşeli: 0,
  };

  data.forEach((item) => {
    const moodName = item?.tag[0];
    if (moodPoints.hasOwnProperty(moodName)) {
      moodPoints[moodName]++;
    }
  });

  const moods = Object.keys(moodPoints).map((mood) => ({
    name: mood,
    point: moodPoints[mood],
  }));

  let topThreeMoods = JSON.parse(JSON.stringify(moods));
  topThreeMoods = topThreeMoods
    .sort((a: any, b: any) => b.point - a.point)
    .slice(0, 3);

  const totalPoints = userDiaries.reduce((sum, diary) => sum + diary.point, 0);
  const averageMoodPoint = totalPoints / userDiaries.length;

  return (
    <main className="flex flex-1 h-full w-full flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Grafikler</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed">
        <ChartsLists
          average={averageMoodPoint}
          moods={moods}
          userDiaries={userDiaries}
          topThreeMoods={topThreeMoods}
        />
      </div>
    </main>
  );
};
