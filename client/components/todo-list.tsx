import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TrashIcon } from "lucide-react";

export default function ExerciseTodoList() {
  return (
    <div className="bg-background rounded-lg border p-6 w-full max-w-md flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 bg-muted p-2 rounded-md">
          <Checkbox id="todo-1" />
          <label htmlFor="todo-1" className="flex-1 text-sm font-medium">
            Buy groceries
          </label>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2 bg-muted p-2 rounded-md line-through text-muted-foreground">
          <Checkbox id="todo-2" defaultChecked />
          <label htmlFor="todo-2" className="flex-1 text-sm font-medium">
            Clean the house
          </label>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2 bg-muted p-2 rounded-md">
          <Checkbox id="todo-3" />
          <label htmlFor="todo-3" className="flex-1 text-sm font-medium">
            Call mom
          </label>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
