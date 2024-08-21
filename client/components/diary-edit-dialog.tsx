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
import { Button } from "@/components/ui/button";

interface Diary {
  _id: string;
  title: string;
}

interface DiaryEditDialogProps {
  open: boolean;
  onClose: () => void;
  selectedDiary: Diary | null;
  newTitle: string;
  setNewTitle: (title: string) => void;
  onSave: () => void;
}

export function DiaryEditDialog({
  open,
  onClose,
  selectedDiary,
  newTitle,
  setNewTitle,
  onSave,
}: DiaryEditDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
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
          <Button type="button" onClick={onSave}>
            Kaydet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
