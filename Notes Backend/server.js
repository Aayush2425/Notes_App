import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { MongoClient } from "mongodb";
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
app.post("/SignIn", (req, res) => {
  const { email, password } = req.body;
  check(email, password);
  async function check(email, password) {
    try {
      await client.connect();
      console.log("Successfully connected to Atlas");
      const db = client.db(dbName);
      const col = db.collection("User");

      let personDocument = {
        email: email,
        password: password,
        joiningDate: new Date(),
      };

      const filter = { email: email, password: password };
      const document = await col.findOne(filter);
      if (document) {
        res.json("success");
      } else {
        res.json("fail");
      }
    } catch (err) {
      console.log(err.stack);
    } finally {
      await client.close();
    }
  }

  run().catch(console.dir);
});
// new user sign up
app.post("/SignUp", (req, res) => {
  const { email, name, password } = req.body;
  newdata(email, name, password);
  async function newdata(email, name, password) {
    try {
      await client.connect();
      console.log("Successfully connected to Atlas");
      const db = client.db(dbName);
      const col = db.collection("User");

      let personDocument = {
        name: name,
        email: email,
        password: password,
        joiningDate: new Date(),
      };

      const p = await col.insertOne(personDocument);
    } catch (err) {
      console.log(err.stack);
    } finally {
      await client.close();
    }
  }
  res.json(email, name, password);
});

// get user profile
app.get("/Notes/:id", (req, res) => {
  const { id } = req.params;
  let found = false;
  Database.users.forEach((user) => {
    if (user.id == id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json("no user found");
  }
});
