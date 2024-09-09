"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

export const ArticleCard = ({ props }: any) => {
  return (
    <Card className="" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            <i className="capitalize">{props.title}</i>
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
          {props.context}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <i>#{props.tag?.[0]}</i>
        <Button className="cursor-pointer">Oku</Button>
      </CardFooter>
    </Card>
  );
};
