const express = require("express");
const app = express();
const axios = require("axios");

app.get("/", function (req, res) {
  res.send("Server Running...");
});

app.get("/restaurants/:userName", async function (req, res) {
  const githubUserName = req.params.userName || "";
  let response = await axios.get(
    `https://api.github.com/restaurants/${githubUserName}`
  );
  res.send(response.data);
});

//Other routes here
app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
