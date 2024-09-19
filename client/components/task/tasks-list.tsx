import React, { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import TaskCard from "./task-card";
import EmptyPage from "../empty-page";

export default function TasksList({ token }: any) {
  const { toast } = useToast();
  const [loading, setLoading] = useState<string | null>(null);
  const [storedTodos, setTodos] = useState<any[]>([]);

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

  const getTodos = async () => {
    try {
      const userID = JSON.parse(atob(token.token?.split(".")[1])).userId;
      const response = await fetch("http://localhost:3001/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Current-User": userID,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = await response.json();
      setTodos(data);
      console.log(storedTodos, "TODOS");
    } catch (error) {
      console.error("Veri alınırken bir hata oluştu:", error);
    }
  };
  const handleDelete = async (task: any) => {
    try {
      const userID = JSON.parse(atob(token.token?.split(".")[1])).userId;
      const response = await fetch("http://localhost:3001/tasks", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Task-id": task._id,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      getTodos();
    } catch (error) {
      console.error("Veri alınırken bir hata oluştu:", error);
    }

    toast({
      variant: "default",
      title: "Egzersiz listeden kaldırıldı",
    });
  };

  useEffect(() => {
    getTodos();
  }, [token]);

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
