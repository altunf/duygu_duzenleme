import mongoose from "mongoose";

const { Schema } = mongoose;

const exerciseListSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Name area is required"],
      lowercase: true,
    },
    tag: {
      type: Array,
      required: [true, "Tag area is required"],
      lowercase: true,
    },
    date: {
      type: Date,
      required: [true, "Date area is required"],
    },

    isCompleted: {
      type: Boolean,
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

const ExerciseList = mongoose.model("ExerciseList", exerciseListSchema);

export { ExerciseList };
