import mongoose, { Schema } from "mongoose";
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
        title: { type: String, required: true },
        content: { type: String, required: true },
        color: { type: String },
        bold: { type: Boolean, default: false },
        italics: { type: Boolean, default: false },
        underline: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        password: { type: String, default: "" },
        isProtected: { type: Boolean, default: false },
      },
    ],
    Block: [
      {
        type: { type: String, required: true },
        content: { data: { type: mongoose.Schema.Types.Mixed } },
      },
    ],
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

export default User;
