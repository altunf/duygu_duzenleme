import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const EmptyPage = ({ href = "/", title, description, buttonName }: any) => {
  return (
    <div
      className="flex flex-1 items-center justify-center w-full h-full"
      x-chunk="dashboard-02-chunk-1"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button className="mt-4">
          <Link href={href}>{buttonName}</Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptyPage;
