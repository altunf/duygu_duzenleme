"use client";

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
import { Textarea } from "./ui/textarea";
import { Slider } from "./ui/slider";

const formSchema = z.object({
  title: z.string(),
  mood: z.string(),
  point: z.number(),
  date: z.string(),
  text: z.string(),
});

export function DiaryForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      mood: "",
      point: 2,
      date: "",
      text: "",
    },
  });

  return (
    <main className="px-4 md:px-6 pb-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <header className="space-y-1">
            <div className="flex items-center justify-start space-x-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Günlük adı giriniz..."
                        className="text-3xl font-bold w-full border-none focus:outline-none px-0 "
                        autoFocus
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Duygularla ilgili günlük deneyimlerinizi ve düşüncelerinizi
              kaydedin.
            </p>
          </header>
          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-4">
              <FormField
                control={form.control}
                name="mood"
                render={({ field }) => (
                  <FormItem className="w-[150px]">
                    <FormLabel>Duygular</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Bir duygu seçin" />
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
              <div className="flex items-center pace-x-2 ">
                <FormField
                  control={form.control}
                  name="point"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duygu yoğunluğu</FormLabel>
                      <FormControl>
                        <div className="flex items-center justify-between rounded h-9 w-[150px] border px-3 py-1">
                          <Slider
                            defaultValue={[2]}
                            max={10}
                            step={1}
                            onValueChange={field.onChange}
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
              <div className="flex items-center pace-x-2">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tarih</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          id="date"
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
                      <Textarea
                        placeholder="Write your entry here."
                        className="min-h-[300px] "
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Kaydet</Button>
          </div>
        </form>
      </Form>
    </main>
  );

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, "values");
  }
}
