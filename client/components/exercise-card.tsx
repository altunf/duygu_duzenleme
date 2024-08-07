import * as React from "react";

import { Button } from "@/components/ui/button";
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
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Nefes Egzersizi</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>Nefes Egzersizi Nedir?</CardContent>
      <CardFooter className="flex justify-between">
        <Button>Egzersiz Listeme Ekle</Button>
      </CardFooter>
    </Card>
  );
}
