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
      required: [true, "Name area is required"],
      lowercase: true,
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Surname area is required"],
    },

    userID: {
      type: String,
      required: [true, "Email area is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Diary = mongoose.model("Diary", diarySchema);

export { Diary };
