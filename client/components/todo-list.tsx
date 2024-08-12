"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Save, TrashIcon } from "lucide-react";

const lay = (
  <div className="bg-background p-6 w-full max-w-md flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 bg-muted p-2 rounded-md  line-through text-muted-foreground">
        <label htmlFor="todo-1" className="flex-1 text-sm font-medium  ">
          Egzersiz Adı
        </label>{" "}
        <Button variant="ghost" size="icon" className=" text-muted-foreground">
          <Save className="w-4 h-4 " />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <TrashIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
);

export default function ExerciseTodoList() {
  return lay;
}
