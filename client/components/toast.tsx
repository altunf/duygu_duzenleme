import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";

export const ToastDemo = (title: string, desc: string, name: string) => {
  const { toast } = useToast();

  return (
    <div className="flex items-center justify-center p-8 xxl:text-[32px]">
      <Button
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Puanınız Hesaplanamadı!",
            description: "Lütfen 1. Sıradan Başlayarak İşaretlemele Yapınız.",
          });
        }}
      >
        HESAPLA
      </Button>
    </div>
  );
};
