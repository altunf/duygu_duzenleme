"use client";

import { Header } from "@/components/header";
import { MyExercises } from "@/components/my-exercises";
import { Sidebar } from "@/components/sidebar";
import ExerciseTodoList from "@/components/todo-list";

const HomePage = (
  <main>
    <MyExercises />;
  </main>
);

const deneme = () => {
  return <div>HELLO</div>;
};

export default function Home() {
  const xData: any = localStorage.getItem("token");

  const renderPage = xData ? <MyExercises /> : deneme;
  return (
    <main className="h-full w-full">
      <MyExercises />
    </main>
  );
}
