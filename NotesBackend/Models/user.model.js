import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    Notes: [
      {
        content: { type: String, required: true },
        color: { type: String },
        bold: { type: Boolean, default: false },
        italics: { type: Boolean, default: false },
        underline: { type: Boolean, default: false },
      },
    ],
    Block: [
      {
        type: { type: String, required: true },
        content: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

export default User;
