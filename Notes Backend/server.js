import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";
import SignUpRouter from "./Routes/auth.route.js";
import UserRouter from "./Routes/user.route.js";
import mongoose from "mongoose";
import User from "./Models/user.model.js";
const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
app.listen(4000, () => {
  console.log("app is running on port 4000");
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to MongoDb"))
  .catch((err) => console.log(err));
// login details check
app.use(SignUpRouter);
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const errorMessage = error.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    errorMessage,
  });
});

app.use(UserRouter);