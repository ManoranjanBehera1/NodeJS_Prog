const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");
const employeeModel = require("./employeeModel");

const url = "mongodb://0.0.0.0:27017/july2023";
mongoose.connect(url);

mongoose.connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.get("/employees", async function (req, res) {
  let employees = await employeeModel.find({});
  res.json(employees)
});

app.get("/employees/:id", async function (req, res) {
  try {
      let employees = await employeeModel.findById(req.params.eid.id);
      res.json(employees)
    } catch (err) {
        console.log(err);
    }
});
app.post("/employees", async function (req, res) {
  try {
    const newEmp = new employeeModel(req.body);
    await newEmp.save();
    res.send("Employee Added Successfully...");
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
