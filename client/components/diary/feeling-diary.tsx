"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MyDiaries } from "./my-diaries";
import { NewDiary } from "./new-diary";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

export const FeelingDiary = ({ defaultTab, token }: any) => {
  const router = useRouter();
  const handleCreateNewDiary = () => {
    router.push("/diaries/new");
  };

  const handleCreateDiary = () => {
    router.push("/diaries");
  };
  return (
    <Tabs
      defaultValue={defaultTab}
      className="flex h-full w-full flex-col gap-4 p-4 lg:gap-6 lg:p-6"
    >
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Duygu Günlüğüm</h1>
      </div>
      <div className="grid grid-cols-2 w-[500px]">
        <TabsList>
          <TabsTrigger value="myDiaries" onClick={handleCreateDiary}>
            Günlüklerim
          </TabsTrigger>
          <TabsTrigger value="newDiary" onClick={handleCreateNewDiary}>
            Günlük Oluştur <Plus className="h-4 w-4 " />
          </TabsTrigger>
        </TabsList>
      </div>
      <div
        className="flex flex-1  items-center justify-center overflow-x-auto overflow-y-auto"
        x-chunk="dashboard-02-chunk-1"
      >
        <TabsContent value="myDiaries">
          <MyDiaries token={token} />
        </TabsContent>
        <TabsContent value="newDiary">
          <NewDiary token={token} />
        </TabsContent>
      </div>
    </Tabs>
  );
};
