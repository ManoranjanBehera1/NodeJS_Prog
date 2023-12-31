const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("./form1.html"));
});
app.post("/submit-student-data", (req, res) => {
  res.send(
    `${req.body.firstName} ${req.body.lastName} submitted succesfully!!!`
  );
});

app.listen(5000, function () {
  console.log("Node server is running..");
});
