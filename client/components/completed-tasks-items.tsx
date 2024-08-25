import React from "react";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";
import { formatDate } from "@/lib/formatDate";

const CompletedTaskItem = ({ task }: { task: any }) => {
  return (
    <div className="flex justify-between h-full w-[400px] items-center gap-2 bg-slate-900 p-2 rounded-md">
      <label
        htmlFor={`todo-${task.id}`}
        className="ml-6 text-md font-medium line-through text-muted-foreground"
      >
        {task.title}
      </label>
      <label
        htmlFor={`todo-${task.id}`}
        className="ml-6 text-md font-medium line-through text-muted-foreground"
      >
        {task.tag}
      </label>
      <label
        htmlFor={`todo-${task.id}`}
        className="ml-6 text-md font-medium line-through text-muted-foreground"
      >
        {formatDate(task.date)}
      </label>
      <div>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <TrashIcon className="w-5 h-5 text-red-500" />
        </Button>
      </div>
    </div>
  );
};

export default CompletedTaskItem;
