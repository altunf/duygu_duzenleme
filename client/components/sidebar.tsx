import React from "react";
import { MyExercises } from "./my-exercises";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div>
      <MyExercises />
      <Link href={"/exercises"}>Exercises</Link>
    </div>
  );
};
