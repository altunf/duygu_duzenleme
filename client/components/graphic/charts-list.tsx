import React from "react";

import { TopThreeMoodsChart } from "./top-three-mood-chart";
import { AverageMoodChart } from "./average-mood-chart";
import { CompletedExercisesChart } from "./completed-exercises-chart";
import { ExercisesByPeriodChart } from "./exercises-by-period-chart";

export const ChartsList = ({
  average,
  moods,
  topThreeMoods,
  userDiaries,
}: any) => {
  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem] ">
        <AverageMoodChart average={average} />
        <ExercisesByPeriodChart userDiaries={userDiaries} />{" "}
      </div>
      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
        <TopThreeMoodsChart topThreeMoods={topThreeMoods} />
        <CompletedExercisesChart moods={moods} />
      </div>
    </div>
  );
};
