import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username area is required"],
      lowercase: true,
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

export default User;
