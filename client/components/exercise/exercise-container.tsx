"use client";
import React from "react";
import { ExerciseCard } from "./exercise-card";
import { useExercise } from "@/hooks/useExercise";
import { ScrollArea } from "../ui/scroll-area";

export const ExerciseContainer = ({ token }: any) => {
  const { allExercises } = useExercise();

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
      <div className="flex items-center ">
        <h1 className="text-lg font-semibold md:text-2xl">Egzersizler</h1>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-1 items-center justify-center">
          <div className="md:flex grid grid-cols-1 gap-6 text-center">
            <div className="flex flex-col items-center gap-6">
              {cift?.map((el: any, index: number) => (
                <ExerciseCard key={el.id || index} props={el} token={token} />
              ))}
            </div>
            <div className="flex flex-col items-center gap-1">
              {tek?.map((el: any, index: number) => (
                <ExerciseCard key={el.id || index} props={el} token={token} />
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </main>
  );
};
