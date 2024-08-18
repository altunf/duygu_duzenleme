import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CircleCheckBig, TrashIcon, Loader2 } from "lucide-react";

export default function Tasks() {
  const [loading, setLoading] = useState<string | null>(null);

  const storedTodos: any =
    JSON.parse(localStorage.getItem("todos") as any) || [];

  const addCompletedTasks = (el: any) => {
    let completedTodos =
      JSON.parse(localStorage.getItem("completedTodos") as any) || [];
    completedTodos.push(el);
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));

    console.log(JSON.parse(JSON.stringify(completedTodos)));
  };

  const handleAddCompletion = async (el: any) => {
    setLoading(el._id); // Loading state'i başlat
    const currentUser: any = localStorage.getItem("token");
    const userID = JSON.parse(currentUser).userCheck._id;

    await fetch("http://localhost:3001/", {
      method: "POST",
      body: JSON.stringify({
        exerciseId: el._id,
      }),
      headers: {
        "Content-Type": "application/json",
        "User-ID": userID,
      },
    });

    addCompletedTasks(el);
    handleDelete(el);
    setLoading(null); // Loading state'i bitir
  };

  const handleDelete = async (el: any) => {
    const newTodos: any =
      JSON.parse(localStorage.getItem("todos") as any) || [];
    const updatedtodos = newTodos.filter((todo: any) => todo._id !== el._id);
    localStorage.setItem("todos", JSON.stringify(updatedtodos));
  };

  return (
    <main className="flex flex-col h-full w-full  rounded-sm  items-center gap-2 p-2">
      {storedTodos?.length > 0 ? (
        storedTodos?.map((el: any, index: number) => {
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
                  onClick={() => {
                    handleAddCompletion(el);
                  }}
                  disabled={loading === el._id} // Yüklenirken buton devre dışı
                >
                  {loading === el._id ? (
                    <Loader2 className="w-5 h-5 animate-spin text-current transition-all duration-1000" />
                  ) : (
                    <CircleCheckBig className="w-5 h-5 text-green-500" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground"
                  onClick={() => {
                    handleDelete(el);
                  }}
                >
                  <TrashIcon className="w-5 h-5  text-red-500" />
                </Button>
              </div>
            </div>
          );
        })
      ) : (
        <i>Henüz bir duygu egzersizi eklemediniz</i>
      )}
    </main>
  );
}
