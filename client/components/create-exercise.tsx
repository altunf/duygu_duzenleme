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

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  tag: z.string(),
  text: z.string(),
  //completionDates: z.string(),
});

export function CreateExercise() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      tag: "",
      text: "",
      //completionDates: "",
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
                        placeholder="Egzersiz adı giriniz..."
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
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Tanım giriniz..."
                        className="text-3xl font-bold w-full border-none focus:outline-none px-0 "
                        autoFocus
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </p>
          </header>
          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-4 lg:flex-flow">
              <FormField
                control={form.control}
                name="tag"
                render={({ field }) => (
                  <FormItem className="w-[150px]">
                    <FormLabel>Ne ile ilgili?</FormLabel>
                    <FormControl>
                      <Select
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
            </div>
            <div>
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem className="grid w-full gap-1.5">
                    <FormLabel>Egzersiz</FormLabel>
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const currentUser: any = localStorage.getItem("token");
    const userID = JSON.parse(currentUser).userCheck._id;

    const response = await fetch("http://localhost:3001/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Current-User": userID,
      },
      body: JSON.stringify(values),
    });
  }
}
