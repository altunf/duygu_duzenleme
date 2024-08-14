"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Save, TrashIcon } from "lucide-react";

export default function ExerciseTodoList() {
  const storedTodos = JSON.parse(localStorage.getItem("todos") as any);

  const handleClick = async (el: any) => {
    const currentUser: any = localStorage.getItem("token");
    const userID = JSON.parse(currentUser).userCheck._id;

    console.log(el._id);
    console.log(userID);

    await fetch("http://localhost:3001/", {
      method: "POST",
      body: JSON.stringify({
        exerciseId: el._id,
      }),
      headers: {
        "Content-Type": "application/json",
        "User-ID": userID, // ??
      },
    });
  };

  return (
    <main className="flex flex-col h-full w-full  rounded-sm  items-center gap-2 p-2">
      {storedTodos.map((el: any, index: number) => {
        return (
          <div
            key={index}
            className="flex justify-between h-full w-[400px] items-center gap-2 bg-muted p-2 rounded-md  line-through text-muted-foreground"
          >
            <label htmlFor="todo-1" className="ml-6 text-md font-medium">
              {el.title}
            </label>
            <div>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
                onClick={() => {
                  handleClick(el);
                }}
              >
                <Save className="w-5 h-5 " />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
              >
                <TrashIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        );
      })}
    </main>
  );
}
