"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MyDiaries } from "./my-diaries";
import NewDiary from "./new-diary";

export const FeelingDiary = () => {
  return (
    <Tabs
      defaultValue="myDiaries"
      className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6"
    >
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Duygu Günlüğüm</h1>
      </div>
      <div>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="myDiaries">Günlüklerim</TabsTrigger>
          <TabsTrigger value="newDiary">Günlük Oluştur</TabsTrigger>
        </TabsList>
      </div>

      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm "
        x-chunk="dashboard-02-chunk-1"
      >
        <TabsContent value="myDiaries">
          <MyDiaries />
        </TabsContent>
        <TabsContent value="newDiary">
          <NewDiary />
        </TabsContent>
      </div>
    </Tabs>
  );
};
