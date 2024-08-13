"use client";
import React from "react";
import { Button } from "./ui/button";

import Link from "next/link";
import ExerciseTodoList from "./todo-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { NewDiary } from "./new-diary";

export const MyExercises = () => {
  const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");

  console.log(typeof storedTodos, "stored");

  const y = (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Egzersiz Listem</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-sm text-muted-foreground">
            Aşağıdaki butona tıklayarak egzersizleri görebilirsiniz
          </p>
          <Button className="mt-4">
            <Link href={"/exercises"}>Egzersizlerim</Link>
          </Button>
        </div>
      </div>
    </main>
  );
  const x = (
    <Tabs
      defaultValue="exercises"
      className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 "
    >
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Egzersiz Listem</h1>
      </div>
      <div className="grid grid-cols-2 w-[520px]">
        <TabsList>
          <TabsTrigger value="exercises">Egzersizlerim</TabsTrigger>
          <TabsTrigger value="completed">Tamamladıklarım</TabsTrigger>
        </TabsList>
      </div>
      <div
        className=" flex flex-1 items-center justify-center rounded-lg border border-dashed overflow-x-auto overflow-y-auto"
        x-chunk="dashboard-02-chunk-1"
      >
        <TabsContent value="exercises" className="h-96 ">
          {storedTodos?.map((el: any, index: number) => {
            return <ExerciseTodoList key={index} props={el} />;
          })}
        </TabsContent>
        <TabsContent value="completed" className="h-96">
          <NewDiary />
        </TabsContent>
      </div>
    </Tabs>
  );
  return x;
};
