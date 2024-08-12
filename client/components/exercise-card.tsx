import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ExerciseCard() {
  return (
    <Card className="overflow-y-auto" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <CardTitle>Başlık</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <img
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover"
            height="200"
            src="/pp.jpeg"
            width="100"
          />
        </div>
      </CardContent>
      <CardFooter>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rem
        ipsum pariatur consectetur, cupiditate vero porro adipisci maiores minus
        voluptatum odit quibusdam. Beatae ducimus mollitia tempore odit
        obcaecati possimus sunt?
      </CardFooter>
    </Card>
  );
}
