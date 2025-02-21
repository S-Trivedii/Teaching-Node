import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
    trim: true, // only works with string
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6, // min and max only works with string
  },
});

export const User = mongoose.model("User", userSchema);
