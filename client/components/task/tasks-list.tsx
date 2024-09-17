import React, { useState } from "react";
import { useToast } from "../ui/use-toast";
import TaskCard from "./task-card";
import EmptyPage from "../empty-page";

export default function TasksList({ token }: any) {
  const { toast } = useToast();
  const [loading, setLoading] = useState<string | null>(null);

  const storedTodos: any =
    JSON.parse(localStorage.getItem("todos") as any) || [];

  const handleAddCompletion = async (task: any) => {
    setLoading(task._id); // Loading state'i başlat
    const userID = JSON.parse(atob(token.token?.split(".")[1])).userId;

    const response = await fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-ID": userID,
      },
      body: JSON.stringify({
        exerciseId: task._id,
      }),
    });

    handleDelete(task);

    if (response.ok) {
      toast({
        variant: "default",
        title: "Egzersiz tamamlandı",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Egzersiz tamamlanamadı",
        description: `${response.statusText}`,
      });
    }
    setLoading(null); // Loading state'i bitir
  };

  const handleDelete = async (task: any) => {
    const newTodos: any =
      JSON.parse(localStorage.getItem("todos") as any) || [];
    const updatedtodos = newTodos.filter((todo: any) => todo._id !== task._id);
    localStorage.setItem("todos", JSON.stringify(updatedtodos));

    toast({
      variant: "default",
      title: "Egzersiz listeden kaldırıldı",
    });
  };

  return (
    <main className="flex flex-col h-full w-full  rounded-sm  items-center gap-2 p-2">
      {storedTodos?.length > 0 ? (
        storedTodos?.map((task: any, index: number) => (
          <TaskCard
            key={index}
            task={task}
            loading={loading}
            handleAddCompletion={handleAddCompletion}
            handleDelete={handleDelete}
            isCompleted={false}
          />
        ))
      ) : (
        <EmptyPage
          href={"/exercises"}
          title={"Henüz bir duygu egzersizi eklemediniz"}
          description={
            "Listenize yeni bir egzersiz ekleyerek başlayabilirsiniz."
          }
          buttonName={"Egzersiz ekle"}
        />
      )}
    </main>
  );
}
