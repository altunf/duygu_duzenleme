import React from "react";

export const Articles = ({ token }: any) => {
  return (
    <main className="flex flex-1 h-full w-full flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Yazılar</h1>
      </div>
      <div className="flex flex-1 items-center justify-center ">Articles</div>
    </main>
  );
};
