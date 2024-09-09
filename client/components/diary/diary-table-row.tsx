import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NotebookText } from "lucide-react";
import { Badge } from "../ui/badge";
import { DiaryActionMenu } from "./diary-action-menu";
import { formatDate } from "@/lib/formatDate";

interface Diary {
  _id: string;
  title: string;
  mood: string;
  point: number;
  date: string;
}

interface DiaryRowProps {
  diary: Diary;
  onEdit: (diary: Diary) => void;
  onDelete: (id: string) => void;
  onRowClick: (title: string) => void;
}

export const DiaryTableRow = ({
  diary,
  onEdit,
  onDelete,
  onRowClick,
}: DiaryRowProps | any) => {
  console.log(diary, "sdadadadreajhakghawlfj");
  return (
    <TableRow
      key={diary?._id}
      className="opacity-80 hover:opacity-100 transition-all duration-500"
    >
      <TableCell className="hidden sm:table-cell cursor-pointer">
        <NotebookText
          className="m-auto text-blue-400"
          onClick={() => onRowClick(diary?.title)}
        />
      </TableCell>
      <TableCell className="font-medium">
        <Badge
          variant="outline"
          className="bg-green-400 px-4 py-1 text-gray-700"
        >
          {diary?.title}
        </Badge>
      </TableCell>
      <TableCell>
        <Badge
          variant="outline"
          className="bg-yellow-400 px-4 py-1 text-gray-700"
        >
          {diary?.mood}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Badge
          variant="outline"
          className="bg-violet-400 px-4 py-1 text-gray-700"
        >
          {diary?.point}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell text-gray-700">
        <Badge>{formatDate(diary?.date, false)}</Badge>
      </TableCell>
      <TableCell>
        <DiaryActionMenu
          onEdit={() => onEdit(diary)}
          onDelete={() => onDelete(diary?._id)}
        />
      </TableCell>
    </TableRow>
  );
};
