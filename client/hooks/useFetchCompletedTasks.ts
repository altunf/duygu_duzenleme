import { useEffect, useState } from "react";

export const useFetchCompletedTasks = (token: any) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getCompletedTasks = async () => {
      try {
        const userID = JSON.parse(atob(token.token?.split(".")[1])).userId;

        const response = await fetch("http://localhost:3001", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "Current-User": userID,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch completed tasks");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching completed tasks:", error);
      }
    };

    getCompletedTasks();
  }, [token]);

  return data;
};
