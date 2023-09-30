import { MongoClient } from "mongodb";

// MongoDB connection URL
const url = "mongodb://localhost:27017/Aayush"; // Default MongoDB port is 27017

// Database name
const dbName = "Aayush"; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to MongoDB
client.connect((err) => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    return;
  }

  console.log("Connected to MongoDB successfully");

  // Perform database operations here

  // Close the connection when you're done
  client.close();
});
