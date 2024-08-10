"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function FeelingsSidebar() {
  const router = useRouter();

  const emotions = ["öfke", "mutluluk", "üzüntü", "korku"];

  const handleEmotionClick = (emotion: string) => {
    router.push(`/exercises/${emotion}`);
  };
  return (
    <div className="hidden min-h-screen border-r bg-muted/40 md:block w-72 min-w-72 max-w-72 overflow-y-auto">
      <div className="flex items-center justify-center mt-4 mr-2 cursor-pointer">
        Duygular
      </div>
      <div className="flex  max-h-screen flex-col gap-2">
        <div className="flex-1 justify-center items-center my-2 mx-2 ">
          {emotions.map((emotion) => (
            <Button
              variant={"outline"}
              key={emotion}
              className="w-full  my-2 "
              onClick={() => handleEmotionClick(emotion)}
            >
              {emotion}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
