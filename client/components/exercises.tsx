"use client";
import React from "react";
import { Button } from "./ui/button";
import { ExerciseCard } from "./exercise-card";

export const Exercises = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Egzersizler</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col gap-4">
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4 ">
            <div className="grid place-content-start">
              <div>
                <ExerciseCard />
              </div>
            </div>
            <div className="grid place-content-start">
              <div>
                <ExerciseCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
