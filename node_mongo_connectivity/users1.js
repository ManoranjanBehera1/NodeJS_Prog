const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
const MongoClient = require("mongodb").MongoClient;
app.use(express.json())

let connection;
async function connectToDB() {
  try {
    connection = await MongoClient.connect("mongodb://0.0.0.0:27017");
    console.log("Connection Established");
  } catch (err) {
    console.log(err);
  }
}

app.get("/", function (req, res) {
  res.send("<h1>Server is Running...</h1>");
});
app.get("/users", async (req, res) => {
  const users = connection.db("july2023").collection("users").find({});
  const result = await users.toArray();
  res.status(200).json(result);
  // res.send("<h1>Server is running fine...</h1> ")
});

app.get("/users/:id", async (req, res) => {
    const userId = +req.params.id;
    const users = connection.db("july2023").collection("users").find({id: userId});
    const result = await users.toArray();
    res.status(200).json(result);
});

app.post("/users", async (req, res) => {
    const payload = req.body;
    connection.db("july2023").collection("users").insertOne(payload);
    res.status(201).send("Employee Added successfully...");
  });

  app.patch("/users/:id", async (req, res) => {
    const empId = +req.params.id;
    const payload = req.body;
    connection.db("july2023").collection("users").updateOne({ id: empId },{ $set: payload },{upsert:true});
    res.send("User Updated successfully");
  });

  app.delete("/users/:id", async (req, res) => {
    const employeeId = +req.params.id;
    connection.db("july2023").collection("users").deleteOne({ id: employeeId });
    res.status(200).send("users deleted successfully");
  });

app.listen(5000, () => {
  connectToDB();
  console.log("server listening at http://localhost:5000");
});
