import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  BookOpenIcon,
  Hash,
  GitCommitHorizontal,
} from "lucide-react";

import { formatDate } from "@/lib/formatDate";
import { DiaryActionMenu } from "./diary-action-menu";
import { Badge } from "../ui/badge";

interface Diary {
  _id: string;
  title: string;
  mood: string;
  point: number;
  date: string;
}

interface DiaryRowProps {
  diary: Diary;
  onEdit?: (diary: Diary) => void;
  onDelete?: (id: string) => void;
  onRowClick?: (title: string) => void;
}

export default function DiaryCard({
  diary,
  onEdit,
  onDelete,
  onRowClick,
}: DiaryRowProps | any) {
  const content = diary?.text.length > 0 && JSON.parse(diary?.text);

  return (
    <Card
      className="w-96 transition-shadow duration-300 hover:shadow-lg border-none  dark:hover:shadow-gray-900 cursor-pointer"
      x-chunk="dashboard-07-chunk-4"
    >
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold capitalize">
            {diary?.title}
          </CardTitle>
          <DiaryActionMenu
            onEdit={() => onEdit && onEdit(diary)}
            onDelete={() => onDelete && onDelete(diary?._id)}
          />
        </div>

        <div>
          <CardDescription className="flex items-center justify-start">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {formatDate(diary?.date, false)}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription></CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="flex justify-between w-full">
          <Badge
            variant="outline"
            className="bg-violet-400 px-4 py-1 text-gray-700 capitalize"
          >
            <Hash className="w-4 h-4" />
            {diary?.mood}
          </Badge>
          <Badge
            variant="outline"
            className="bg-green-400 px-4 py-1 text-gray-700"
          >
            <GitCommitHorizontal className="w-4 h-4" /> {diary?.point}
          </Badge>
        </div>
        <Button className="w-full" onClick={() => onRowClick(diary?._id)}>
          <BookOpenIcon className="mr-2 h-4 w-4" />
          Günlüğü Oku
        </Button>
      </CardFooter>
    </Card>
  );
}
