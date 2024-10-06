"use client";
import { useDiary } from "@/hooks/useDiary";
import { useMoods } from "@/hooks/useMoods";
import React from "react";

import Link from "next/link";

import DiaryCard from "../diary/diary-card";
import { AverageMoodChart } from "../graphic/average-mood-chart";
import TaskCard from "../task/task-card";
import { ExerciseCard } from "../exercise/exercise-card";
import { useExercise } from "@/hooks/useExercise";
import { ScrollArea } from "../ui/scroll-area";

interface Diary {
  _id: string;
  title: string;
  mood: string;
  point: number;
  date: string;
}

export const FeedContainer = ({ token }: any) => {
  const { allExercises } = useExercise();
  const { userDiaries } = useDiary(token);
  const { averageMoodPoint } = useMoods(token, userDiaries);

  const diary: Diary = userDiaries[0];
  const storedTodos: any =
    JSON.parse(localStorage.getItem("todos") as any) || [];
  const currentTodo = storedTodos[0];

  return (
    <main className="flex flex-1 h-full w-full flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Özet</h1>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex  flex-col items-center justify-center space-x-6 md:flex-row space-y-6 ">
          <div className="flex flex-col items-center justify-center space-y-6 ">
            <Link href={"/graphics"}>
              <AverageMoodChart average={averageMoodPoint} />
            </Link>
            <Link href={`/diaries/${diary?._id}`}>
              <DiaryCard diary={diary} />
            </Link>{" "}
            {storedTodos.length > 0 && (
              <Link href={`/tasks`}>
                <TaskCard task={currentTodo} isCompleted={false} />
              </Link>
            )}
          </div>{" "}
          <div>
            <Link
              href={`/exercises/${
                allExercises[0]?.mood?.[0]
              }/${encodeURIComponent(allExercises[0]?._id)}`}
            >
              <ExerciseCard props={allExercises[0]} />
            </Link>{" "}
          </div>
        </div>
      </ScrollArea>
    </main>
  );
};
