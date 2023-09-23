import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(4000, () => {
  console.log("app is running on port 4000");
});

const url =
  "mongodb+srv://AayushGandhi:YPajUaTDpleeamPx@userinfo.b92p5dr.mongodb.net/?retryWrites=true&w=majority";

// Connect to your Atlas cluster
const client = new MongoClient(url);
const dbName = "UserInfo";
// login details check
app.post("/", (req, res) => {
  const { email, password } = req.body;

  check(email, password);
  async function check(email, password) {
    try {
      await client.connect();
      console.log("Successfully connected to Atlas SignIn");
      const db = client.db(dbName);
      const col = db.collection("User");

      const filter = { email: email, password: password };
      const document = await col.findOne(filter);

      if (document) {
        res.status(200).json({ message: "success", id: document._id });
      } else {
        res.json("fail");
      }
    } catch (err) {
      console.log(err.stack);
    } finally {
      await client.close();
    }
  }
});
// new user sign up
app.post("/SignUp", (req, res) => {
  const { email, name, password } = req.body;
  newdata(email, name, password);
  async function newdata(email, name, password) {
    try {
      await client.connect();
      console.log("Successfully connected to Atlas SignUp");
      const db = client.db(dbName);
      const col = db.collection("User");

      let personDocument = {
        name: name,
        email: email,
        password: password,
        joiningDate: new Date(),
        Notes: [],
      };

      const p = await col.insertOne(personDocument);

      res.status(200).json({ id: p.insertedId });
    } catch (err) {
      console.log(err.stack);
    } finally {
      await client.close();
    }
  }
});

// get user profile
app.get("/Notes/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  getdata();
  async function getdata() {
    try {
      await client.connect();
      console.log("Successfully connected to Atlas Profile");
      const db = client.db(dbName);
      const col = db.collection("User");

      const filter = { _id: new ObjectId(`${id}`) };
      const document = await col.findOne(filter);
      // console.log(document);
      if (document) {
        console.log("Found a document with id " + id + " " + document.name);
        res.json(document);
      } else {
        res.json("fail");
      }
    } catch (err) {
      console.log(err.stack);
    } finally {
      await client.close();
    }
  }
});

// New Notes Added

app.post("/Notes/:id", async (req, res) => {
  const { id } = req.params;
  const { content, color } = req.body;
  try {
    client.connect();
    console.log("Successfully connected to Atlas Notes");
    const db = client.db(dbName);
    const col = db.collection("User");
    let Notes = {
      content: content,
      color: color,
    };

    const filter = { _id: new ObjectId(`${id}`) };
    const document = await col.findOne(filter);
    // console.log(document);
    if (document) {
      document.Notes.push(Notes);
      await col.updateOne(filter, {
        $push: { Notes: Notes },
      });
      console.log("Notes = ", document.Notes);
    } else {
      console.log("Failed");
      res.json("fail");
    }
  } catch {}
});
