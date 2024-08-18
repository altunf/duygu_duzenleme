import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, MoreHorizontal, NotebookTabs } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/formatDate";

interface Diary {
  _id: string;
  title: string;
  mood: string;
  point: number;
  date: string;
  text: string;
}

export function MyDiaries() {
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
      const currentUser: any = localStorage.getItem("token");
      const userID = JSON.parse(currentUser).userCheck._id;
      const response = await fetch("http://localhost:3001/diaries", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Current-User": userID,
        },
      });
      const data = await response.json();
      setUserDiaries(data);
    };
    getDiaries();
  }, []);

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

  const openDialog = (diary: Diary) => {
    setSelectedDiary(diary);
    setNewTitle(diary.title);
    setDialogOpen(true);
  };

  const x = (
    <main className="grid flex-1 h-full  items-start  p-4 sm:px-6 sm:py-0 md:gap-8 lg:w-[900px]">
      <Card className=" border-none shadow-none ">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  Görüntüle
                </TableHead>
                <TableHead>Günlük Adı</TableHead>
                <TableHead>Duygu</TableHead>
                <TableHead className="hidden md:table-cell">Puan</TableHead>
                <TableHead className="hidden md:table-cell">Tarih</TableHead>
                <TableHead>Düzenle</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userDiaries.map((diary: Diary) => (
                <TableRow
                  key={diary._id}
                  className="opacity-40 hover:opacity-100 hover:bg-none transition-all duration-500 backdrop-blur-xl backdrop-sepia"
                >
                  <TableCell className="hidden sm:table-cell cursor-pointer ">
                    <NotebookTabs
                      className="text-sky-300"
                      onClick={() => {
                        handleRowClick(diary.title);
                      }}
                    />
                  </TableCell>
                  <TableCell className="font-medium  ">
                    {" "}
                    <Badge
                      variant="outline"
                      className="bg-green-300 px-4 py-1 text-gray-700"
                    >
                      {diary.title}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-yellow-300 px-4 py-1 text-gray-700"
                    >
                      {diary.mood}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge
                      variant="outline"
                      className="bg-violet-300 px-4 py-1 text-gray-700"
                    >
                      {diary.point}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-gray-700 ">
                    <Badge> {formatDate(diary.date, false)}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Eylemler</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => openDialog(diary)}>
                          Yeniden Adlandır
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(diary._id)}
                        >
                          Sil
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>

      {/* Başlık düzenleme dialog'u */}
      <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(false)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Başlığı Düzenle</DialogTitle>
            <DialogDescription>
              Başlığınızdaki değişiklikleri buradan yapın. İşiniz bittiğinde
              kaydet'i tıklayın.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Yeni başlık
              </Label>
              <Input
                id="name"
                className="col-span-3"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSave}>
              Kaydet
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );

  const y = <i>Henüz bir duygu günlüğü oluşturmadınız</i>;
  const display = userDiaries?.length > 0 ? true : false;
  const ab = display ? x : y;

  return ab;
}
