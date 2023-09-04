const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());
const mongoose = require("mongoose");
const employeeModel = require("./employeeModel");

const url = "mongodb://0.0.0.0:27017/july2023";
mongoose.connect(url);

mongoose.connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.get("/employees", async function (req, res) {
  let employees = await employeeModel.find({});
  employeeModel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
