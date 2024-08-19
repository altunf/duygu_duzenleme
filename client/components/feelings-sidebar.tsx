"use client";

import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

export function FeelingsSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const emotions = ["öfke", "mutluluk", "üzüntü", "korku"];

  const handleEmotionClick = (emotion: string) => {
    router.push(`/exercises/${emotion}`);
  };

  const x = (
    <aside className="hidden min-h-screen border-r bg-muted/10 md:block w-72 min-w-72 max-w-72 overflow-y-auto ">
      <h1 className="flex items-center justify-center mt-4 mr-2 cursor-pointer">
        <strong> Duygular</strong>
      </h1>
      <div className="flex  max-h-screen flex-col gap-2">
        <div className="flex-1 justify-center items-center my-2 mx-2 ">
          {emotions.map((emotion) => (
            <Button
              variant={"outline"}
              key={emotion}
              className="w-full  my-2 border-none bg-color-none shadow-none "
              onClick={() => handleEmotionClick(emotion)}
            >
              <div className="flex justify-start ">#{emotion}</div>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
  const b = pathname.startsWith("/exercises");

  return <> {b && x}</>;
}
