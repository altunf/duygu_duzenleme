import { useState } from "react";
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
  HeartIcon,
  MessageSquareIcon,
  ShareIcon,
  BookOpenIcon,
  Hash,
  GitCommitVertical,
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
  onEdit: (diary: Diary) => void;
  onDelete: (id: string) => void;
  onRowClick: (title: string) => void;
}

export default function DiaryCard({
  diary,
  onEdit,
  onDelete,
  onRowClick,
}: DiaryRowProps | any) {
  //const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="w-full max-w-md bg-card text-card-foreground">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold capitalize">
            {diary?.title}
          </CardTitle>
          <DiaryActionMenu
            onEdit={() => onEdit(diary)}
            onDelete={() => onDelete(diary?._id)}
          />
        </div>

        <div>
          <Badge
            variant="outline"
            className="bg-blue-400 px-4 py-1 text-gray-700"
          >
            <CalendarIcon className="mr-1 h-4 w-4" />
            {formatDate(diary?.date, false)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p className="text-base">
            {diary?.text.length > 200
              ? `${diary?.text.slice(0, 200)}...`
              : diary?.text}
          </p>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="flex justify-between w-full">
          {/* <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
          >
            <HeartIcon
              className={`mr-1 h-4 w-4 ${
                isLiked ? "fill-current text-red-500" : ""
              }`}
            />
            {isLiked ? "Liked" : "Like"}
          </Button> */}

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
        <Button className="w-full" onClick={() => onRowClick(diary?.title)}>
          <BookOpenIcon className="mr-2 h-4 w-4" />
          Günlüğü Oku
        </Button>
      </CardFooter>
    </Card>
  );
}
