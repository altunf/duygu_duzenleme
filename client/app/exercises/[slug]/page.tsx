import { Exercises } from "@/components/exercise/exercises";

export default function MyFeelingDiaryPage() {
  const bgStyle =
    "absolute inset-0 z-[-1] bottom-0 left-0 right-0 top-0  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] ";

  return (
    <main className={`relative flex items-center justify-center h-full w-full`}>
      <div className={bgStyle}></div>
      <Exercises />
    </main>
  );
}
