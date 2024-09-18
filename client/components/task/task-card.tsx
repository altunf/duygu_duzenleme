import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Check, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { formatDate } from "@/lib/formatDate";
import { Card } from "../ui/card";
import Link from "next/link";

interface Task {
  _id: string;
  title: string;
  tag: string;
  date?: string;
}

interface TaskCardProps {
  task: Task;
  loading?: string | null;
  handleAddCompletion?: (task: any) => void;
  handleDelete?: (task: any) => void;
  isCompleted: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  loading = null,
  handleAddCompletion,
  handleDelete,
  isCompleted = false,
}) => {
  return (
    <>
      <Card className="flex items-center justify-between w-[400px] gap-3 p-1 rounded-lg ">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleAddCompletion && handleAddCompletion(task)}
          disabled={loading === task?._id}
          className="shrink-0"
        >
          {loading === task?._id ? (
            <Loader2 className="w-5 h-5 animate-spin text-primary transition-all duration-2000" />
          ) : (
            <Check
              className={`w-5 h-5 ${
                loading === task?._id
                  ? "text-muted-foreground"
                  : "text-green-500"
              }`}
            />
          )}
        </Button>
        <div className="flex-grow min-w-0">
          <p
            className={`text-sm font-medium truncate capitalize ${
              isCompleted ? "line-through text-muted-foreground" : ""
            }`}
          >
            {task?.title}
          </p>
          {isCompleted && task?.date && (
            <p className="text-xs text-muted-foreground mt-1">
              {formatDate(task?.date)}
            </p>
          )}
        </div>
        <Badge className="ml-2 shrink-0 bg-violet-400 dark:text-black">
          <Link href={`/exercises/${task?.tag}`}>{task?.tag}</Link>
        </Badge>
        <Badge
          variant={isCompleted ? "secondary" : "default"}
          className="ml-2 shrink-0"
        >
          {isCompleted ? "Tamamlandı" : "Bekliyor"}
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
          onClick={() => handleDelete && handleDelete(task)}
        >
          <Trash2 className="w-5 h-5 text-destructive" />
        </Button>
      </Card>
    </>
  );
};

export default TaskCard;
