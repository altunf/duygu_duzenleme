import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "../ui/use-toast";
import { Slider } from "../ui/slider";

// Import PlateEditor related components
import { PlateEditor } from "@/components/plate-editor";

const formSchema = z.object({
  title: z.string(),
  mood: z.string(),
  point: z.number(),
  date: z.string(),
  text: z.string(), // `text` field for the PlateEditor content
});

export function CreateDiaryPlate({ token }: any) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      mood: "",
      point: 5,
      date: "",
      text: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userID = JSON.parse(atob(token?.split(".")[1])).userId;
      const response = await fetch("http://localhost:3001/diaries/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Current-User": userID,
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        form.reset();
        toast({
          variant: "default",
          title: "Günlüğünüz başarılı bir şekilde kaydedildi",
        });
      } else {
        console.error("Veriler gönderilemedi, hata:", response.statusText);
        toast({
          variant: "destructive",
          title: "Günlüğünüz kaydedilemedi!",
          description: "Bütün alanları doldurduğunuzdan emin olun",
        });
      }

      const data = await response.json();
    } catch (error) {
      console.error("Error fetching diaries:", error);
    }
  };

  return (
    <main className="px-4 md:px-6 pb-6 pt-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <header className="space-y-1">
            <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-start md:space-x-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="w-full md:w-auto">
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Günlük adı giriniz"
                        className="text-3xl font-bold w-full border-none focus:outline-none px-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-wrap">
              Duygularınızla ilgili günlük deneyimlerinizi ve düşüncelerinizi
              kaydedin.
            </p>
          </header>
          <div className="space-y-4">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-x-4 lg:flex-wrap">
              <FormField
                control={form.control}
                name="mood"
                render={({ field }) => (
                  <FormItem className="w-full md:w-[150px]">
                    <FormLabel>Nasıl Hissediyorsun?</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Bir duygu seç" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Temel Duygular</SelectLabel>
                            <SelectItem value="öfkeli">Öfkeli</SelectItem>
                            <SelectItem value="neşeli">Neşeli</SelectItem>
                            <SelectItem value="tiksinmiş">Tiksinmiş</SelectItem>
                            <SelectItem value="üzgün">Üzgün</SelectItem>
                            <SelectItem value="şaşırmış">Şaşırmış</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-2 w-full md:w-[150px]">
                <FormField
                  control={form.control}
                  name="point"
                  render={({ field: { value, onChange } }) => (
                    <FormItem>
                      <FormLabel>Duygu Yoğunluğu</FormLabel>
                      <FormControl>
                        <div className="flex items-center justify-between rounded h-9 w-full border px-3 py-1">
                          <Slider
                            defaultValue={[value]}
                            max={10}
                            step={1}
                            onValueChange={(vals) => {
                              onChange(vals[0]);
                            }}
                          />
                          <span className="ml-2">
                            {form.getValues("point")}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center space-x-2 w-full md:w-auto">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tarih</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="date"
                          id="date"
                          className="w-full"
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div>
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem className="grid w-full gap-1.5">
                    <FormLabel>Günlük</FormLabel>
                    <FormControl>
                      <PlateEditor visible={false} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Kaydet
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}
