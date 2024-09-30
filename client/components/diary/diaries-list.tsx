"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDiary } from "@/hooks/useDiary";
import { DiaryEditDialog } from "@/components/diary/diary-edit-dialog";
import EmptyPage from "../empty-page";
import DiaryCard from "./diary-card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Diary {
  _id: string;
  title: string;
  mood: string;
  point: number;
  date: string;
  text: string;
}

export function DiariesList({ token }: { token: string }) {
  const { userDiaries, updateDiary, deleteDiary } = useDiary(token);
  const [selectedDiary, setSelectedDiary] = useState<Diary | null>(null);
  const [newTitle, setNewTitle] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const router = useRouter();

  const handleRowClick = (id: string) => {
    router.push(`/diaries/${encodeURIComponent(id)}`);
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

  const openDialog = (diary: Diary) => {
    setSelectedDiary(diary);
    setNewTitle(diary.title);
    setDialogOpen(true);
  };

  const display = userDiaries.length > 0;

  return (
    <main className="flex flex-1 h-full w-full items-start p-4 sm:px-6 sm:py-0 md:gap-8">
      {display ? (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userDiaries?.map((diary) => (
            <DiaryCard
              key={diary._id}
              diary={diary}
              onEdit={openDialog}
              onDelete={handleDelete}
              onRowClick={handleRowClick}
            />
          ))}
        </div>
      ) : (
        <EmptyPage
          href="/diaries/new"
          title="Kayıtlı bir duygu günlüğünüz yok"
          description="Yeni bir duygu günlüğü oluşturarak başlayabilirsiniz."
          buttonName="Günlük oluştur"
        />
      )}
      <DiaryEditDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        selectedDiary={selectedDiary}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        onSave={handleSave}
      />
    </main>
  );
}
