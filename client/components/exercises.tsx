"use client";
import React, { useEffect, useState } from "react";
import { ExerciseCard } from "./exercise-card";

interface Exercise {
  title: string;
  description: string;
  tag: any;
  text: string;
}

export const Exercises = () => {
  const [allExercises, setAllExercises] = useState<Exercise[]>([]);
  useEffect(() => {
    const getExercises = async () => {
      const response = await fetch("http://localhost:3001/exercises/:*");
      const data = await response.json();
      setAllExercises(data);
    };
    getExercises();
  }, []);

  let tek = [];
  let cift = [];

  for (let i = 0; i < allExercises.length; i++) {
    if (i % 2 == 0) {
      cift.push(allExercises[i]);
    } else {
      tek.push(allExercises[i]);
    }
  }

  const x = (
    <div className="flex flex-1 h-full w-full flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center  ">
        <h1 className="text-lg font-semibold md:text-2xl">Egzersizler</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col-2 items-center gap-1 text-center">
          <div className="grid place-content-center gap-6">
            {cift?.map((el: any, index: number) => {
              return <ExerciseCard key={index} props={el} />;
            })}
          </div>{" "}
          <div className="grid place-content-center gap-6">
            {tek?.map((el: any, index: number) => {
              return <ExerciseCard key={index} props={el} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return x;
};
