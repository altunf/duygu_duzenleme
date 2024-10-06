"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/formatDate.js";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlateEditor } from "../plate-editor";

export const ExerciseRead = ({ params, token }: any) => {
  const [exercise, setExercise] = useState<any[]>([]);
  const { theme } = useTheme();

  const light =
    "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]";
  const dark =
    "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]";

  const bgStyle = theme === "light" ? light : dark;
  const bgClr =
    theme === "light"
      ? "bg-[#F1E9D2] bg-opacity-60"
      : "bg-blue-700 bg-opacity-10";

  useEffect(() => {
    const getExercises = async () => {
      try {
        const userID = JSON.parse(atob(token.split(".")[1])).userId;
        const response = await fetch("http://localhost:3001/exercises/:*", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "Current-User": userID,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch exercise");
        }
        const data = await response.json();
        setExercise(data);
      } catch (error) {
        console.error("Veri alınırken bir hata oluştu:", error);
      }
    };
    getExercises();
  }, [token]);

  const result = exercise.filter((el) => el?._id === params.detail);

  let item = result.length > 0 ? result[0] : null;
  let initialValue = item ? JSON.parse(item.text) : [];
  useEffect(() => {
    return () => {
      // console.log("clear");

      initialValue = null;
      item = null;
    };
  }, []);
  const diaryTemp = (props: any) => {
    const cardStyle = `${bgClr} dark:bg-blue-700 dark:bg-opacity-10 rounded-lg shadow-2xl`;
    return (
      <div key={props._id} className={`w-full max-w-4xl mx-auto p-6 `}>
        <div className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <h1 className="text-3xl font-bold text-card-foreground">
              <i className="capitalize">{props.title}</i>
            </h1>
            {/* <p className="text-muted-foreground">Fırat Altun</p>{" "} */}
          </div>
          <div className="space-y-4 max-w-none whitespace-pre-wrap">
            {" "}
            {item && (
              <PlateEditor
                className={`w-full max-w-4xl mx-auto p-6 border-none ${bgClr}  dark:bg-opacity-0  bg-opacity-0  rounded-lg `}
                visible={true}
                initialValue={initialValue}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen w-full ${bgStyle}`}>
      <ScrollArea className="h-screen w-full">
        <div className="flex flex-col justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
          <div className="my-auto py-8">
            {result.length > 0 ? (
              result.map((el) => diaryTemp(el))
            ) : (
              <p className="text-center text-lg text-muted-foreground">
                Günlük bulunamadı.
              </p>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
