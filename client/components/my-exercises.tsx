"use client";
import React from "react";

import Tasks from "./tasks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CompletedTasks from "./completed-tasks";

export const MyExercises = () => {
  const x = (
    <Tabs
      defaultValue="exercises"
      className="flex flex-1  h-full w-full flex-col gap-4 p-4 lg:gap-6 lg:p-6 "
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
      <div className="flex-1 flex items-center justify-center overflow-x-auto overflow-y-auto scroll-smooth">
        <TabsContent value="exercises">
          <Tasks />
        </TabsContent>
        <TabsContent value="completed" className="h-[600px] m-0 p-0">
          <CompletedTasks />
        </TabsContent>
      </div>
    </Tabs>
  );

  return x;
};
