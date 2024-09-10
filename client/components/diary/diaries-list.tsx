import { useState } from "react";
import EmptyPage from "../empty-page";
import { DiaryTable } from "./diary-table";
import { useRouter } from "next/navigation";
import { useDiary } from "@/hooks/useDiary";
import { DiaryEditDialog } from "@/components/diary/diary-edit-dialog";

interface Diary {
  _id: string;
  title: string;
  mood: string;
  point: number;
  date: string;
  text: string;
}

export function DiariesList({ token }: any) {
  const { userDiaries, updateDiary, deleteDiary } = useDiary(token);
  const [selectedDiary, setSelectedDiary] = useState<Diary | null>(null);
  const [newTitle, setNewTitle] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const router = useRouter();

  const handleRowClick = (title: string) => {
    router.push(`/diaries/${encodeURIComponent(title)}`);
  };

  const handleSave = () => {
    if (selectedDiary) {
      updateDiary(selectedDiary._id, newTitle);
      setDialogOpen(false);
    }
  };

  const handleDelete = (id: string) => {
    deleteDiary(id);
  };

  const openDialog = (diary: Diary | any) => {
    setSelectedDiary(diary);
    setNewTitle(diary.title);
    setDialogOpen(true);
  };

  const display = userDiaries.length > 0;

  return (
    <main className="grid flex-1 h-full w-full items-start p-4 sm:px-6 sm:py-0 md:gap-8">
      {display ? (
        <>
          <DiaryTable
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
        <EmptyPage
          href={"/diaries/new"}
          title={"Kayıtlı bir duygu günlüğünüz yok"}
          description={"Yeni bir duygu günlüğü oluşturarak başlayabilirsiniz."}
          buttonName={"Günlük oluştur"}
        />
      )}
    </main>
  );
}
