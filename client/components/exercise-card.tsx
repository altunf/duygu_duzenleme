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

export function ExerciseCard({ props, maxLength = 100 }: any) {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const newText = (
    <div>
      <p>{isTruncated ? props.text.slice(0, maxLength) + "..." : props.text}</p>
      <button onClick={toggleTruncate} className="text-blue-500">
        {isTruncated ? "Read More" : "Read Less"}
      </button>
    </div>
  );

  return (
    <Card className="overflow-y-auto" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{props.title}</CardTitle>
        </div>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            src={"/pp.jpeg"}
            alt="Product image"
            height={100}
            width={100}
            className="aspect-square w-full rounded-md object-cover"
          />
        </div>
      </CardContent>
      <Button className="cursor-pointer ">Listeme ekle</Button>
      <CardFooter>{newText}</CardFooter>
      <i>#{props.tag?.[0]}</i>
    </Card>
  );
}
