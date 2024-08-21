// MyDiaries.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DiariesTable } from "@/components/diaries-table";
import { DiaryEditDialog } from "@/components/diary-edit-dialog";

interface Diary {
  _id: string;
  title: string;
  mood: string;
  point: number;
  date: string;
  text: string;
}

export function MyDiaries({ token }: any) {
  const [userDiaries, setUserDiaries] = useState<Diary[]>([]);
  const [selectedDiary, setSelectedDiary] = useState<Diary | null>(null);
  const [newTitle, setNewTitle] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const router = useRouter();

  const handleRowClick = (title: string) => {
    router.push(`/diaries/${encodeURIComponent(title)}`);
  };

  useEffect(() => {
    const getDiaries = async () => {
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
          throw new Error("Failed to fetch diary");
        }

        const data = await response.json();
        setUserDiaries(data);
      } catch (error) {
        console.error("Error fetching diaries:", error);
      }
    };

    getDiaries();
  }, [token]);

  const handleSave = async () => {
    if (selectedDiary) {
      try {
        await fetch(`http://localhost:3001/diaries`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Diary-ID": selectedDiary._id,
            "Content-Title": newTitle,
          },
        });
        const updatedDiaries = userDiaries.map((diary) =>
          diary._id === selectedDiary._id
            ? { ...diary, title: newTitle }
            : diary
        );
        setUserDiaries(updatedDiaries);
      } catch (error) {
        console.error("Başlık güncellenirken bir hata oluştu:", error);
      }
      setDialogOpen(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:3001/diaries`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Diary-ID": id,
        },
      });
      setUserDiaries(userDiaries.filter((diary) => diary._id !== id));
    } catch (error) {
      console.error("Veri silinirken bir hata oluştu:", error);
    }
  };

  const openDialog: any = (diary: Diary) => {
    setSelectedDiary(diary);
    setNewTitle(diary.title);
    setDialogOpen(true);
  };

  const display = userDiaries.length > 0;

  return (
    <main className="grid flex-1 h-full w-full items-start p-4 sm:px-6 sm:py-0 md:gap-8">
      {display ? (
        <>
          <DiariesTable
            diaries={userDiaries}
            onEdit={openDialog}
            onDelete={handleDelete}
            onRowClick={handleRowClick}
          />
          <DiaryEditDialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            selectedDiary={selectedDiary}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
            onSave={handleSave}
          />
        </>
      ) : (
        <i>Henüz bir duygu günlüğü oluşturmadınız</i>
      )}
    </main>
  );
}
