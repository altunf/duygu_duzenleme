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

import { useRouter } from "next/navigation";

export function ExerciseCard({ props, maxLength = 50, token }: any) {
  const { toast } = useToast();
  const [isTruncated, setIsTruncated] = useState(true);
  const router = useRouter();
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
  const handleRead = (props: any) => {
    router.push(
      `/exercises/${props?.mood?.[0]}/${encodeURIComponent(props?._id)}`
    );
  };

  const newText = (
    <div>
      <p className="capitalize">
        {isTruncated
          ? props?.description.slice(0, maxLength) + "..."
          : props?.description}
      </p>
      <button onClick={toggleTruncate} className="text-blue-500">
        {isTruncated ? "Read More" : "Read Less"}
      </button>
    </div>
  );

  let cardImage = "";

  switch (props?.title.toLocaleLowerCase("tr")) {
    case "nefes egzersizi":
      cardImage = "nefes-egzersizi.png";
      break;
    case "aşamalı kas gevşetme":
      cardImage = "kas-gevsetme.png";
      break;
    case "dikkat dağıtma teknikleri":
      cardImage = "dikkati-dagıtma.png";
      break;
    default:
      cardImage = "kas-gevsetme.png";
      break;
  }

  return (
    <Card
      className="max-w-sm transition-shadow duration-300 hover:shadow-md"
      x-chunk="dashboard-07-chunk-4"
    >
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
            src={`/${cardImage}`}
            alt="exercise image"
            height={400}
            width={400}
            className=" w-full  rounded-lg"
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
            handleRead(props);
          }}
          className="cursor-pointer"
        >
          Oku
        </Button>
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
