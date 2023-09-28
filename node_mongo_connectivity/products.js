const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

app.get("/products", async (req, res) => {
  // fetch the data from DB and Return to the client
  let connection;
  try {
    console.log("Starting connection");
    connection = await MongoClient.connect("mongodb://0.0.0.0:27017");
    console.log("Connection Established", connection);
    const products = connection.db("july2023").collection("products").find({});
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
