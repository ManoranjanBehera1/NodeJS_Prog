const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

app.get("/restaurants", async (req, res) => {
  // fetch the data from DB and Return to the client
  let connection;
  try {
    console.log("Starting connection");
    const url = "mongodb+srv://manoranjan1:manoatlas1@cluster0.truobbk.mongodb.net/?retryWrites=true&w=majority";
    connection = await MongoClient.connect(url);
    console.log("Connection Established", connection);
    const products = connection.db("sample_restaurants").collection("restaurants").find({});
    const result = await products.toArray();
    res.json(result);
  } catch (err) {
    console.log(err);
  } finally {
    await connection.close();
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
