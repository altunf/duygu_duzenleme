"use client";
import React, { useEffect, useState } from "react";
import { ExerciseCard } from "./exercise-card";

interface Exercise {
  title: string;
  description: string;
  tag: any;
  text: string;
}

export const ExerciseContainer = () => {
  const [allExercises, setAllExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const getExercises = async () => {
      const response = await fetch("http://localhost:3001/exercises/:*");
      const data = await response.json();
      setAllExercises(data);
    };
    getExercises();
  }, []);

  let tek: any = [];
  let cift: any = [];

  allExercises.forEach((exercise, index) => {
    if (index % 2 === 0) {
      cift.push(exercise);
    } else {
      tek.push(exercise);
    }
  });

  return (
    <main className="flex flex-1 h-full w-full flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Egzersizler</h1>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="md:flex grid grid-cols-2 gap-6 text-center">
          <div className="flex flex-col items-center gap-1">
            {cift?.map((el: any, index: number) => (
              <ExerciseCard key={el.id || index} props={el} />
            ))}
          </div>
          <div className="flex flex-col items-center gap-1">
            {tek?.map((el: any, index: number) => (
              <ExerciseCard key={el.id || index} props={el} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
