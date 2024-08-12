import mongoose from "mongoose";

const { Schema } = mongoose;

const exerciseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Name area is required"],
      lowercase: true,
    },
    description: {
      type: String,
      //required: [true, "Description area is required"],
      lowercase: true,
    },
    tag: {
      type: Array,
      required: [true, "Tag area is required"],
      lowercase: true,
    },
    text: {
      type: String,
      required: [true, "Text area is required"],
    },
    completionDates: {
      type: Array,
      required: [true, "UserID area is required"],
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

const Exercise = mongoose.model("Exercise", exerciseSchema);

export { Exercise };
