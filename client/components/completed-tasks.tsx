"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";
import { formatDate } from "@/lib/formatDate";

const CompletedTasks = ({ token }: any) => {
  const [completed, setCompleted]: any = useState([]);

  useEffect(() => {
    const getCompletedTasks = async () => {
      try {
        const userID = JSON.parse(atob(token.token?.split(".")[1])).userId;

        const response = await fetch("http://localhost:3001", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "Current-User": userID,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch completed tasks");
        }

        const data = await response.json();
        setCompleted(data);
      } catch (error) {
        console.error("Error fetching completed tasks:", error);
      }
    };

    getCompletedTasks();
  }, []);

  console.log(completed, "completed");

  for (let i = 0; i < completed.length; i++) {}
  return (
    <main className="flex flex-col h-full w-full  rounded-sm  items-center gap-2 p-2">
      {completed?.length > 0 ? (
        completed?.map((el: any, index: number) => {
          return (
            <div
              key={index}
              className="flex justify-between h-full w-[400px] items-center gap-2 bg-slate-900  p-2 rounded-md"
            >
              <label
                htmlFor="todo-1"
                className="ml-6 text-md font-medium line-through text-muted-foreground"
              >
                {el?.title}
              </label>
              <label
                htmlFor="todo-1"
                className="ml-6 text-md font-medium line-through text-muted-foreground"
              >
                {formatDate(el.date)}
              </label>
              <div>
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
