import { useEffect, useState } from "react";

interface Exercise {
  _id: string;
  title: string;
  description: string;
  mood: any;
  text: string;
}

export function useExercise() {
  const [allExercises, setAllExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const getExercises = async () => {
      const response = await fetch("http://localhost:3001/exercises/:*");
      const data = await response.json();
      setAllExercises(data);
    };
    getExercises();
  }, []);
  return { allExercises };
}
