import mongoose from "mongoose";

mongoose
  .connect("mongodb://0.0.0.0:27017/User_Info", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));
