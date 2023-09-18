import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
app.use(bodyParser.json());
app.use(cors());
const Database = {
  users: [
    {
      id: 123,
      name: "Aayush",
      email: "aayush@gmail.com",
      password: "chocolate",
      joined: new Date(),
    },
    {
      id: 124,
      name: "Madhav",
      email: "madhav@gmail.com",
      password: "food",
      joined: new Date(),
    },
  ],
};
app.get("/", (req, res) => {
  res.send(Database.users);
});

app.post("/SignIn", (req, res) => {
  if (
    req.body.email === Database.users[0].email &&
    req.body.password === Database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("error logging in");
  }
});

app.post("/SignUp", (req, res) => {
  const { email, name, password } = req.body;
  Database.users.push({
    id: 123,
    name: name,
    email: email,
    password: password,
    joined: new Date(),
  });
  res.json(Database.users[Database.users.length - 1]);
});

app.get("/profile/:id", (req, res) => {
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
app.listen(4000, () => {
  console.log("app is running on port 4000");
});
