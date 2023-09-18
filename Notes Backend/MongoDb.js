import { MongoClient } from "mongodb";

// Replace the following with your Atlas connection string
const url =
  "mongodb+srv://AayushGandhi:YPajUaTDpleeamPx@userinfo.b92p5dr.mongodb.net/?retryWrites=true&w=majority";

// Connect to your Atlas cluster
const client = new MongoClient(url);
const dbName = "UserInfo";
async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
    const db = client.db(dbName);
    const col = db.collection("User");

    let personDocument = {
      name: { first: "Alan", last: "Turing" },
      birth: new Date(1912, 5, 23), // May 23, 1912
      death: new Date(1954, 5, 7), // May 7, 1954
      contribs: ["Turing machine", "Turing test", "Turingery"],
      views: 1250000,
    };

    const p = await col.insertOne(personDocument);
    // Find and return the document
    const filter = { "name.last": "Turing" };
    const document = await col.findOne(filter);
    console.log("Document found:\n" + JSON.stringify(document));
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
