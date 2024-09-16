import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal, SlidersHorizontal } from "lucide-react";
interface ActionMenuProps {
  onEdit: () => void;
  onDelete: () => void;
}

export const DiaryActionMenu = ({ onEdit, onDelete }: ActionMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button aria-haspopup="true" size="icon" variant="ghost">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Eylemler</DropdownMenuLabel>
        <DropdownMenuItem onClick={onEdit}>Yeniden Adlandır</DropdownMenuItem>
        <DropdownMenuItem onClick={onDelete}>Sil</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
