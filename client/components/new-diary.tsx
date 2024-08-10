"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import * as React from "react";
import { useState } from "react";

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
          <SelectItem value="öfkeli">Öfkeli</SelectItem>
          <SelectItem value="neşeli">Neşeli</SelectItem>
          <SelectItem value="tiksinmiş">Tiksinmiş</SelectItem>
          <SelectItem value="üzgün">Üzgün</SelectItem>
          <SelectItem value="şaşırmış">Şaşırmış</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function EditableTitle() {
  const [diaryTitle, setDiaryTitle] = useState("Günlük Adı Giriniz");
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleClick = () => {
    setIsEditing(true);
    setDiaryTitle("");
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    if (diaryTitle == "") {
      setDiaryTitle("Günlük Adı Giriniz");
    }
  };

  const handleInputChange = (e: any) => {
    setDiaryTitle(e.target.value);
  };

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={diaryTitle}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="text-3xl font-bold w-full border-none focus:outline-none"
          autoFocus
        />
      ) : (
        <h1
          className="text-3xl font-bold cursor-pointer "
          onClick={handleTitleClick}
          autoFocus
        >
          {diaryTitle}
        </h1>
      )}
    </>
  );
}

export default function NewDiary() {
  return (
    <div className="px-4 md:px-6 pb-6">
      <form className="space-y-4">
        <header className="space-y-1">
          <div className="flex items-center justify-start space-x-2">
            <EditableTitle />
          </div>
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
      </form>
    </div>
  );
}
