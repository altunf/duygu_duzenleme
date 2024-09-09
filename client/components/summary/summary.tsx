"use client";
import { useDiary } from "@/hooks/useDiary";
import { useMoods } from "@/hooks/useMoods";
import React, { use } from "react";

import Link from "next/link";
import { TopThreeMoodsChart } from "../graphic/top-three-mood-chart";

import { DiaryTableRow } from "../diary/diary-table-row";

interface Diary {
  _id: string;
  title: string;
  mood: string;
  point: number;
  date: string;
}

export const Summary = ({ token }: any) => {
  const { userDiaries } = useDiary(token);
  const { topThreeMoods } = useMoods(token, userDiaries);

  console.log(userDiaries, "sdadadadreajhakghawlfj");
  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <Link href={"/diaries"}>
        <DiaryTableRow diary={userDiaries[0]} />
      </Link>
      <Link href={"/graphics"}>
        <TopThreeMoodsChart topThreeMoods={topThreeMoods} />
      </Link>
    </div>
  );
};
