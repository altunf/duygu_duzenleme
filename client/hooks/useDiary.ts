import { useState, useEffect } from "react";

interface Diary {
  _id: string;
  title: string;
  mood: string;
  point: number;
  date: string;
  text: string;
}

export function useDiary(token: string | null | any) {
  const [userDiaries, setUserDiaries] = useState<Diary[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDiaries = async () => {
      if (!token) return;

      try {
        const userID = JSON.parse(atob(token.split(".")[1])).userId;

        const response = await fetch("http://localhost:3001/diaries", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "Current-User": userID,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch diaries");
        }

        const data = await response.json();
        setUserDiaries(data);
      } catch (error) {
        setError("Error fetching diaries: " + (error as Error).message);
      }
    };

    getDiaries();
  }, []);

  const updateDiary = async (id: string, title: string) => {
    try {
      const userID = JSON.parse(atob(token.split(".")[1])).userId;
      const response = await fetch(`http://localhost:3001/diaries`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Diary-ID": id,
          "Content-Title": title,
          "Current-User": userID,
        },
      });

      if (response.ok) {
        setUserDiaries((prevDiaries) =>
          prevDiaries.map((diary) =>
            diary._id === id ? { ...diary, title } : diary
          )
        );
      } else {
        const errorData = await response.json();
        setError("Günlük güncellenirken bir hata oluştu: " + errorData.message);
      }
    } catch (error) {
      setError(
        "Günlük güncellenirken bir hata oluştu: " + (error as Error).message
      );
    }
  };

  const deleteDiary = async (id: string) => {
    try {
      await fetch(`http://localhost:3001/diaries`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Diary-ID": id,
        },
      });

      setUserDiaries((prevDiaries) =>
        prevDiaries.filter((diary) => diary._id !== id)
      );
    } catch (error) {
      setError("Error deleting diary: " + (error as Error).message);
    }
  };

  return { userDiaries, error, updateDiary, deleteDiary };
}
