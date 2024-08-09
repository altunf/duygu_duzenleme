"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MyDiaries } from "./my-diaries";
import NewDiary from "./new-diary";
import { ScrollArea } from "./ui/scroll-area";

export const FeelingDiary = () => {
  return (
    <Tabs
      defaultValue="myDiaries"
      className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6"
    >
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Duygu Günlüğüm</h1>
      </div>
      <div className="grid grid-cols-2 w-[480px]">
        <TabsList>
          <TabsTrigger value="myDiaries">Günlüklerim</TabsTrigger>
          <TabsTrigger value="newDiary">Günlük Oluştur</TabsTrigger>
        </TabsList>
      </div>
      <ScrollArea
        className="flex flex-1 rounded-lg border border-dashed "
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-1 items-center justify-center mt-auto">
          <TabsContent value="myDiaries" className="h-96">
            <MyDiaries />
          </TabsContent>
          <TabsContent value="newDiary" className="h-96">
            <NewDiary />
          </TabsContent>
        </div>
      </ScrollArea>
    </Tabs>
  );
};
