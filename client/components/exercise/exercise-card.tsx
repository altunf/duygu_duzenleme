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

export function ExerciseCard({ props, maxLength = 50 }: any) {
  const { toast } = useToast();
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const handleClick = (props: any) => {
    let existingTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    existingTodos.push(props);
    localStorage.setItem("todos", JSON.stringify(existingTodos));

    toast({
      variant: "default",
      title: "Egzersiz listenize eklendi ",
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
    <Card className="" x-chunk="dashboard-07-chunk-4">
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
        <CardDescription className="flex items-center justify-start">
          {newText}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <i>#{props?.tag?.[0]}</i>
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
