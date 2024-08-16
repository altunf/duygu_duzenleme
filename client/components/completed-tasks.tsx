import React from "react";
import { Button } from "./ui/button";
import { CircleCheckBig, TrashIcon } from "lucide-react";

const CompletedTasks = () => {
  const completed: any =
    JSON.parse(localStorage.getItem("completedTodos") as any) || [];
  return (
    <main className="flex flex-col h-full w-full  rounded-sm  items-center gap-2 p-2">
      {completed?.length > 0 ? (
        completed?.map((el: any, index: number) => {
          return (
            <div
              key={index}
              className="flex justify-between h-full w-[400px] items-center gap-2 bg-muted p-2 rounded-md  "
            >
              <label htmlFor="todo-1" className="ml-6 text-md font-medium">
                {el.title}
              </label>
              <div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground"
                >
                  <CircleCheckBig className="w-5 h-5 text-green-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground"
                >
                  <TrashIcon className="w-5 h-5  text-red-500" />
                </Button>
              </div>
            </div>
          );
        })
      ) : (
        <i>Henüz bir duygu egzersizi tamamlamadınız</i>
      )}
    </main>
  );
};

export default CompletedTasks;
