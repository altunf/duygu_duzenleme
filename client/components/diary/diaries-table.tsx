import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, NotebookText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/formatDate";

interface Diary {
  _id: string;
  title: string;
  mood: string;
  point: number;
  date: string;
}

interface DiaryTableProps {
  diaries: Diary[];
  onEdit: (diary: Diary) => void;
  onDelete: (id: string) => void;
  onRowClick: (title: string) => void;
}

export function DiariesTable({
  diaries,
  onEdit,
  onDelete,
  onRowClick,
}: DiaryTableProps) {
  return (
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
        {diaries.map((diary) => (
          <TableRow
            key={diary._id}
            className="opacity-80 hover:opacity-100 transition-all duration-500"
          >
            <TableCell className="hidden sm:table-cell cursor-pointer">
              <NotebookText
                className="m-auto text-blue-400"
                onClick={() => onRowClick(diary.title)}
              />
            </TableCell>
            <TableCell className="font-medium">
              <Badge
                variant="outline"
                className="bg-green-400 px-4 py-1 text-gray-700"
              >
                {diary.title}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className="bg-yellow-400 px-4 py-1 text-gray-700"
              >
                {diary.mood}
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <Badge
                variant="outline"
                className="bg-violet-400 px-4 py-1 text-gray-700"
              >
                {diary.point}
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell text-gray-700">
              <Badge>{formatDate(diary.date, false)}</Badge>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Eylemler</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => onEdit(diary)}>
                    Yeniden Adlandır
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onDelete(diary._id)}>
                    Sil
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
