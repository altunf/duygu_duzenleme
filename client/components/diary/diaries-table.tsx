import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DiaryTableRow } from "./diary-table-row";

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

export const DiariesTable = ({
  diaries,
  onEdit,
  onDelete,
  onRowClick,
}: DiaryTableProps) => {
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
        {diaries?.map((diary) => (
          <DiaryTableRow
            key={diary._id}
            diary={diary}
            onEdit={onEdit}
            onDelete={onDelete}
            onRowClick={onRowClick}
          />
        ))}
      </TableBody>
    </Table>
  );
};
