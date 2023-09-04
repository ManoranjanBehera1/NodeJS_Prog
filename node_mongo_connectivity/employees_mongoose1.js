const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const employeeModel = require("./employeeModel");

const url = "mongodb://0.0.0.0:27017/july2023";
mongoose.connect(url);

/* let employeeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  sal: String,
  
}); */
let employeeModel = mongoose.model("employees", employeeSchema);

mongoose.connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.get("/employees", async function (req, res) {
  let employees = await employeeModel.find({});
  res.json(employees)
});
app.get("/employees/:id", async function (req, res) {
  const empId = +req.params.id;
  let employees = await employeeModel.find({eid: empId});
  res.json(employees)
});
app.post("/employees", async function (req, res) {
  try {
    let newProduct = new employeeModel();
    newEmployee.id = req.body.id;
    newEmployee.name = req.body.name;
    newEmployee.sal = req.body.sal;
    await newProduct.save();
    res.send("Employee Added Successfully!!");
  } catch (e) {
    console.error(e);
  }
});

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
