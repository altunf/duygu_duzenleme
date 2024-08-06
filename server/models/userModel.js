import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name area is required"],
      lowercase: true,
      trim: true,
    },
    surname: {
      type: String,
      required: [true, "Surname area is required"],
      lowercase: true,
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Username area is required"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email area is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password area is required"],
      minLength: [4, "At least 4 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export { User };
