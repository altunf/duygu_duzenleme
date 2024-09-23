import { useState, useEffect } from "react";
import { useFetchCompletedTasks } from "@/hooks/useFetchCompletedTasks";

type Mood = {
  name: string;
  point: number;
};

export const useMoods = (token: string, userDiaries: any[]) => {
  const data = useFetchCompletedTasks({ token });
  const [topThreeMoods, setTopThreeMoods] = useState<Mood[]>([]);
  const [averageMoodPoint, setAverageMoodPoint] = useState<number>(0);
  const [moods, setMoods] = useState<Mood[]>([]);

  useEffect(() => {
    if (!data) return;

    const moodPoints: any = {
      şaşırmış: 0,
      öfkeli: 0,
      tiksinmiş: 0,
      üzgün: 0,
      neşeli: 0,
    };

    data.forEach((item) => {
      const moodName = item?.mood[0];
      if (moodPoints.hasOwnProperty(moodName)) {
        moodPoints[moodName]++;
      }
    });

    const calculatedMoods = Object.keys(moodPoints).map((mood) => ({
      name: mood,
      point: moodPoints[mood],
    }));

    setMoods(calculatedMoods);

    let topMoods = JSON.parse(JSON.stringify(calculatedMoods));
    topMoods = topMoods.sort((a: any, b: any) => b.point - a.point).slice(0, 3);

    setTopThreeMoods(topMoods);

    const totalPoints = userDiaries.reduce(
      (sum, diary) => sum + diary.point,
      0
    );
    const average = totalPoints / userDiaries.length;
    setAverageMoodPoint(average);
  }, [data, userDiaries]);

  return { topThreeMoods, averageMoodPoint, moods };
};
