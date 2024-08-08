import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectMood() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Bir duygu seçin" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Temel Duygular</SelectLabel>
          <SelectItem value="apple">Öfkeli</SelectItem>
          <SelectItem value="banana">Neşeli</SelectItem>
          <SelectItem value="blueberry">Tiksinmiş</SelectItem>
          <SelectItem value="grapes">Üzgün</SelectItem>
          <SelectItem value="pineapple">Şaşırmış</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default function NewDiary() {
  return (
    <div className="px-4 py-6 md:px-6 lg:py-12">
      <div className="space-y-4">
        <header className="space-y-1">
          <h1 className="text-3xl font-bold">Mood Diary</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Record your daily experiences and thoughts related to feelings.
          </p>
        </header>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <SelectMood />
            <div className="flex items-center space-x-2">
              <Label htmlFor="date">Tarih</Label>
              <Input type="date" id="date" />
            </div>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="entry">Günlük</Label>
            <Textarea
              id="entry"
              placeholder="Write your entry here."
              className="min-h-[200px]"
            />
          </div>
          <Button>Kaydet</Button>
        </div>
      </div>
    </div>
  );
}
