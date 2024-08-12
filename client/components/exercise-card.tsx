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
    <Card
      className="overflow-y-auto max-w-96 max-h-[400px]"
      x-chunk="dashboard-07-chunk-4"
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            <i>{props.title}</i>
          </CardTitle>
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
          />
        </div>
        <div></div>
      </CardContent>

      <CardFooter>{newText}</CardFooter>
      <CardContent className="flex items-center justify-between">
        <i>#{props.tag?.[0]}</i>
        <Button className="cursor-pointer ">Listeme ekle</Button>
      </CardContent>
    </Card>
  );
}
