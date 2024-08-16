"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function ExerciseCard({ props, maxLength = 50 }: any) {
  const router = useRouter();
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const handleClick = (props: any) => {
    let existingTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    existingTodos.push(props);
    localStorage.setItem("todos", JSON.stringify(existingTodos));

    router.push("/");
  };

  const newText = (
    <div>
      <p>{isTruncated ? props.text.slice(0, maxLength) + "..." : props.text}</p>
      <button onClick={toggleTruncate} className="text-blue-500">
        {isTruncated ? "Read More" : "Read Less"}
      </button>
    </div>
  );

  function capitalizeFirstLetter(props: string) {
    return props.charAt(0).toUpperCase() + props.slice(1);
  }

  return (
    <Card className="" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            <i>{capitalizeFirstLetter(props.title)}</i>
          </CardTitle>
        </div>
        <CardDescription className="flex items-center justify-start">
          {props.description}
        </CardDescription>
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
        </div>{" "}
        {newText}
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <i>#{props.tag?.[0]}</i>
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
