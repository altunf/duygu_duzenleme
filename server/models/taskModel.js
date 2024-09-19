import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema(
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

    date: {
      type: Date,
      required: [true, "Tarih alanı gereklidir"],
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

const Task = mongoose.model("Task", taskSchema);

export { Task };
