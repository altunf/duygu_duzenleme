"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { Badge } from "../ui/badge";

export function ExerciseCard({ props, maxLength = 50, token }: any) {
  const { toast } = useToast();
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const handleClick = async (props: any) => {
    try {
      const userID = JSON.parse(atob(token.split(".")[1])).userId;
      const currentDate = new Date().toISOString();
      const { _id, title, mood } = props;

      const response = await fetch("http://localhost:3001/exercises", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Current-User": userID,
        },
        body: JSON.stringify({
          exerciseId: _id,
          title,
          mood: mood[0],
          date: currentDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const data = await response.json();
    } catch (error) {
      console.error("Veri alınırken bir hata oluştu:", error);
    }

    toast({
      variant: "default",
      title: "Egzersiz listenize eklendi",
    });
  };

  const newText = (
    <div>
      <p>
        {isTruncated ? props?.text.slice(0, maxLength) + "..." : props?.text}
      </p>
      <button onClick={toggleTruncate} className="text-blue-500">
        {isTruncated ? "Read More" : "Read Less"}
      </button>
    </div>
  );

  return (
    <Card className="max-w-sm" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            <i className="capitalize">{props?.title}</i>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="grid gap-2">
          <Image
            src={"/emotions.jpg"}
            alt="Product image"
            height={200}
            width={200}
            className="aspect-video w-full  rounded-lg"
          />
        </div>
        <CardDescription className="flex items-center justify-start mt-2">
          {newText}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <Badge className="bg-violet-400 dark:text-black capitalize">
          <i># {props?.mood?.[0]}</i>
        </Badge>
        <Button
          onClick={() => {
            handleClick(props);
          }}
          className="cursor-pointer"
        >
          Listeme ekle
        </Button>
      </CardFooter>
    </Card>
  );
}
