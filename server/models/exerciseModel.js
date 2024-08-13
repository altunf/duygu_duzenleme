import mongoose from "mongoose";

const { Schema } = mongoose;

const dateSchema = new Schema(
  {
    date: {
      type: String,
      required: false,
    },
  },
  { _id: false }
);
const exerciseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Name area is required"],
      lowercase: true,
    },
    description: {
      type: String,
      required: [false, "Description area is required"],
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
      type: Map,
      of: [dateSchema],
      default: {},
    },
    userID: {
      type: String,
      required: [false, "UserID area is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

export { Exercise };
