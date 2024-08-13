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

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Egzersizler</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg  shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col gap-4">
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4 ">
            <div className="grid place-content-center gap-6">
              {allExercises.map((el: any, index: number) => {
                return <ExerciseCard key={index} props={el} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
