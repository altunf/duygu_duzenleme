import mongoose from "mongoose";

const { Schema } = mongoose;

const diarySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Başlık alanı gereklidir"],
      lowercase: true,
      trim: true,
    },
    mood: {
      type: String,
      required: [true, "Ruh hali alanı gereklidir"],
      lowercase: true,
      trim: true,
    },
    point: {
      type: Number,
      required: [true, "Puan alanı gereklidir"],
    },
    date: {
      type: Date,
      required: [true, "Tarih alanı gereklidir"],
    },
    text: {
      type: String,
      required: [true, "Metin alanı gereklidir"],
    },
    userID: {
      type: String,
      required: [true, "Kullanıcı ID'si gereklidir"],
    },
  },
  {
    timestamps: true,
  }
);

diarySchema.index({ title: 1, userID: 1 }, { unique: true });

const Diary = mongoose.model("Diary", diarySchema);

export { Diary };
