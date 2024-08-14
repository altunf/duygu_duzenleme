"use client";
import React from "react";
import { Sidebar } from "./sidebar";

export const ContentArea = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center  ">
        <h1 className="text-lg font-semibold md:text-2xl">"Egzersiz Listem"</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">sdad</div>
      </div>
    </div>
  );
};

export const PageTemplate = () => {
  <main className="flex min-h-screen">
    <Sidebar />
    <div className="w-full flex flex-col">
      <div
        className={`flex items-center justify-center h-full w-full overflow-auto
      `}
      >
        <div className=""></div>
      </div>
    </div>
  </main>;
};
