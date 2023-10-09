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

// console.log(process.env.MONGO);
// const url =
//   "mongodb+srv://AayushGandhi:YPajUaTDpleeamPx@userinfo.b92p5dr.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to MongoDb"))
  .catch((err) => console.log(err));
// Connect to your Atlas cluster
// const client = new MongoClient(url);
const dbName = "UserInfo";
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
// app.post("/", (req, res) => {
//   const { email, password } = req.body;

//   check(email, password);
//   async function check(email, password) {
//     try {
//       await client.connect();
//       console.log("Successfully connected to Atlas SignIn");
//       const db = client.db(dbName);
//       const col = db.collection("User");

//       const filter = { email: email, password: password };
//       const document = await col.findOne(filter);

//       if (document) {
//         res.status(200).json({ message: "success", id: document._id });
//       } else {
//         res.json("fail");
//       }
//     } catch (err) {
//       console.log(err.stack);
//     } finally {
//       await client.close();
//     }
//   }
// });
// new user sign up
// app.post("/SignUp", (req, res) => {
//   const { email, name, password } = req.body;
//   newdata(email, name, password);
//   async function newdata(email, name, password) {
//     try {
//       await client.connect();
//       console.log("Successfully connected to Atlas SignUp");
//       const db = client.db(dbName);
//       const col = db.collection("User");

//       let personDocument = {
//         name: name,
//         email: email,
//         password: password,
//         joiningDate: new Date(),
//         Notes: [],
//       };

//       const p = await col.insertOne(personDocument);

//       res.status(200).json({ id: p.insertedId });
//     } catch (err) {
//       console.log(err.stack);
//     } finally {
//       await client.close();
//     }
//   }
// });

// get user profile
app.use(UserRouter);
// app.get("/Notes/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   getdata();
//   async function getdata() {
//     try {
//       await client.connect();
//       console.log("Successfully connected to Atlas Profile");
//       const db = client.db(dbName);
//       const col = db.collection("User");

//       const filter = { _id: new ObjectId(`${id}`) };
//       const document = await col.findOne(filter);
//       // console.log(document);
//       if (document) {
//         console.log("Found a document with id " + id + " " + document.name);
//         res.json(document);
//       } else {
//         res.json("fail");
//       }
//     } catch (err) {
//       console.log(err.stack);
//     } finally {
//       await client.close();
//     }
//   }
// });

// New Notes Added

// app.post("/Notes/:id", async (req, res) => {
//   const { id } = req.params;
//   const { content, color, bold, italics, underline } = req.body;
//   try {
//     await client.connect();
//     console.log("Successfully connected to Atlas Notes");
//     const db = client.db(dbName);
//     const col = db.collection("User");
//     const filter = { _id: new ObjectId(`${id}`) };
//     console.log("ID :=>", filter);
//     const document = await col.findOne(filter);

//     console.log("Documrnt :=>", document);
//     let Notes = {
//       content: content,
//       color: color,
//       bold: bold,
//       italics: italics,
//       underline: underline,
//     };
//     // console.log(Notes);
//     // console.log("Filter :", filter);
//     if (document) {
//       document.Notes.push(Notes);
//       await col.updateOne(filter, {
//         $push: { Notes: Notes },
//       });
//       console.log("Notes = ", document.Notes);
//       res.status(200).json({ message: "success", document: document });
//     } else {
//       console.log("Failed");
//       res.json("fail");
//     }
//   } catch {}
// });

// app.delete("/Notes/:id", async (req, res) => {
//   const { id } = req.params;
//   const { index } = req.body;
//   try {
//     await client.connect();
//     console.log("Successfully connected to Atlas delete");
//     const db = client.db(dbName);
//     const col = db.collection("User");
//     const filter = { _id: new ObjectId(`${id}`) };
//     // res.send(filter);
//     // console.log(filter);
//     const a = `Notes.${index}`;
//     // console.log("aaaaa >", a);
//     const document = await col.findOne(filter);
//     // console.log("Filter :", filter);
//     // console.log("document  >", document);
//     if (document) {
//       await col.updateOne(filter, { $unset: { [a]: "1" } });
//       await col.updateOne(filter, { $pull: { Notes: null } });
//       const pa = await col.findOne(filter);
//       res.json({ msg: "success" });
//       console.log("Notes = ", pa);
//     } else {
//       console.log("Failed");
//       res.json("fail");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.put("/Notes/:id", async (req, res) => {
//   const { id } = req.params;
//   const { content, index, color } = req.body;
//   try {
//     await client.connect();
//     console.log("Successfully connected to Atlas update");
//     const db = client.db(dbName);
//     const col = db.collection("User");
//     const filter = { _id: new ObjectId(`${id}`) };
//     console.log("Filter :", filter);
//     const document = await col.findOne(filter);
//     console.log(document);
//     console.log("color", color);
//     if (document) {
//       const updateValue = { $set: {} };
//       // console.log("Notes = ", document.Notes[index].color);
//       updateValue["$set"]["Notes." + index] = {
//         content: content,
//         color: color,
//       };
//       await col.updateOne(filter, updateValue);
//       const pa = await col.findOne(filter);

//       console.log("Notes = ", pa);
//       res.json({ msg: "success" });
//     } else {
//       console.log("Failed");
//       res.json("fail");
//     }
//   } catch {}
// });
