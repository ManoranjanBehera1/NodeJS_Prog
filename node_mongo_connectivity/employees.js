let express = require("express");
let app = express();
let mongodb = require("mongodb").MongoClient;
let url = "mongodb://0.0.0.0:27017";
const cors = require("cors");
app.use(cors());


app.get("/", function (req, res) {
  res.send("<h1>Server is Running...</h1>");
});
app.get("/employees", function (req, res) {
  mongodb.connect(url, function (err, dc) {
    if (err) {
      res.status(500).send("Error connecting to database: " + err.message);
    } else {
      let dbObj = dc.db("july2023");
      dbObj
        .collection("employees")
        .find()
        .toArray(function (err, employees) {
          if (err) {
            res.status(203).send("error while fetching records");
          } else {
            res.status(200).json(employees);
          }
        });
    }
  });
});
app.get("/employees/:id", function (req, res) {
  mongodb.connect(url, function (err, dc) {
    if (err) {
      res.status(500).send("Error connecting to database: " + err.message);
    } else {
      let dbObj = dc.db("march2023");
      dbObj
        .collection("employees")
        .find({ eId: +req.params.id })
        .toArray(function (err, employees) {
          if (err) {
            res.status(203).send("error while fetching records");
          } else {
            res.status(200).json(employees);
          }
        });
    }
  });
});

app.listen("5000", () => {
  console.log("listening at http://localhost:5000");
});
