const express = require("express");
const restaurants = require("./restaurants.json");
const port = 5000;

const app = express();

app.get("/restaurants", function (req, res) {
  res.write(JSON.stringify(restaurants));
});
app.get("/restaurants/:id", function (req, res) {
  res.send("1 user");
});
app.post("/restaurants", function (req, res) {
  res.send("post ");
});
app.put("/restaurants/:id", function (req, res) {
  res.send("PUT ");
});
app.patch("/restaurants/:id", function (req, res) {
  res.send("PATCH ");
});
app.delete("/restaurants/:id", function (req, res) {
  res.send("DELETE ");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
