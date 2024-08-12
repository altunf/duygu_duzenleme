import * as React from "react";

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

export function ExerciseCard() {
  return (
    <Card className="overflow-y-auto" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Öfke duygusuyla nasıl başederiz?</CardTitle>
        </div>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
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
      <CardFooter>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rem
        ipsum pariatur consectetur, cupiditate vero porro adipisci maiores minus
        voluptatum odit quibusdam. Beatae ducimus mollitia tempore odit
        obcaecati possimus sunt?
      </CardFooter>
      <i>#Öfke</i>
    </Card>
  );
}
