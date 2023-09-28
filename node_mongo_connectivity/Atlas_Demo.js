const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
const MongoClient = require("mongodb").MongoClient;
app.use(express.json())

let connection;
async function connectToDB() {
  try {
    const URL = "mongodb+srv://manoranjan1:manoatlas1@cluster0.truobbk.mongodb.net/?retryWrites=true&w=majority"
    connection = await MongoClient.connect("URL");
    console.log("Connection Established");
  } catch (err) {
    console.log(err);
  }
}

app.get("/", function (req, res) {
  res.send("<h1>Server is Running...</h1>");
});
app.get("/restaurants", async (req, res) => {
  const restaurants = connection.db("sample_restaurants").collection("restaurants").find({});
  const result = await restaurants.toArray();
  res.status(200).json(result);
  // res.send("<h1>Server is running fine...</h1> ")
});

app.get("/restaurants/:id", async (req, res) => {
    const userId = +req.params.id;
    const restaurants = connection.db("july2023").collection("restaurants").find({id: userId});
    const result = await restaurants.toArray();
    res.status(200).json(result);
});

app.post("/restaurants", async (req, res) => {
    const payload = req.body;
    connection.db("july2023").collection("restaurants").insertOne(payload);
    res.status(201).send("Employee Added successfully...");
  });

  app.patch("/restaurants/:id", async (req, res) => {
    const empId = +req.params.id;
    const payload = req.body;
    connection.db("july2023").collection("restaurants").updateOne({ id: empId },{ $set: payload },{upsert:true});
    res.send("User Updated successfully");
  });

  app.delete("/restaurants/:id", async (req, res) => {
    const employeeId = +req.params.id;
    connection.db("july2023").collection("restaurants").deleteOne({ id: employeeId });
    res.status(200).send("restaurants deleted successfully");
  });

app.listen(5000, () => {
  connectToDB();
  console.log("server listening at http://localhost:5000");
});

// not connected to mongodb atlas..