import mongoose from "mongoose";

const { Schema } = mongoose;

const diarySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Name area is required"],
      lowercase: true,
      trim: true,
      unique: true,
    },
    mood: {
      type: String,
      required: [true, "Mood area is required"],
      lowercase: true,
      trim: true,
    },
    point: {
      type: Number,
      required: [true, "Point area is required"],
      lowercase: true,
    },
    date: {
      type: Date,
      required: [true, "Date area is required"],
    },
    text: {
      type: String,
      required: [true, "Text area is required"],
    },
    userID: {
      type: String,
      required: [true, "UserID area is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Diary = mongoose.model("Diary", diarySchema);

export { Diary };
