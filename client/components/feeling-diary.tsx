"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSidebarContext } from "@/context/sidebar-context";

export const FeelingDiary = () => {
  const { sidebarItemTitle, setTitle }: any = useSidebarContext();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          {sidebarItemTitle == "" ? "Egzersiz Listem" : sidebarItemTitle}
        </h1>
      </div>
      <Tabs defaultValue="myDiaries">
        <TabsList>
          <TabsTrigger value="myDiaries">Günlüklerim</TabsTrigger>
          <TabsTrigger value="newDiary">Günlük Oluştur</TabsTrigger>
        </TabsList>{" "}
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          <TabsContent value="myDiaries">
            {" "}
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                Henüz bir egzersiz eklemediniz
              </h3>
              <p className="text-sm text-muted-foreground">
                Aşağıdaki butona tıklayarak egzersizleri görebilirsiniz
              </p>
            </div>
          </TabsContent>
          <TabsContent value="newDiary"></TabsContent>
        </div>
      </Tabs>
    </main>
  );
};
<Tabs defaultValue="myDiaries">
  <TabsList>
    <TabsTrigger value="myDiaries">Günlüklerim</TabsTrigger>
    <TabsTrigger value="newDiary">Günlük Oluştur</TabsTrigger>
  </TabsList>{" "}
  <div
    className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
    x-chunk="dashboard-02-chunk-1"
  >
    {" "}
    <TabsContent value="myDiaries"></TabsContent>
    <TabsContent value="newDiary"></TabsContent>
  </div>
</Tabs>;
