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
    <div className="bg-background p-6 w-full max-w-md flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        {storedTodos.map((el: any, index: number) => {
          return (
            <div
              key={index}
              className="flex items-center gap-2 bg-muted p-2 rounded-md  line-through text-muted-foreground"
            >
              <label htmlFor="todo-1" className="flex-1 text-sm font-medium">
                {el.title}
              </label>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
                onClick={() => {
                  handleClick(el);
                }}
              >
                <Save className="w-4 h-4 " />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
              >
                <TrashIcon className="w-4 h-4" />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
