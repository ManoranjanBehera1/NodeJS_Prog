const products = require("./data/products.json");

const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/home");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

// careers page
app.get("/careers", function (req, res) {
  res.render("pages/careers");
});

// products page
app.get("/products", function (req, res) {
  res.render("pages/products", { products });
});

// contact page
app.get("/contact", function (req, res) {
  res.render("pages/contact");
});

app.listen(5000);
console.log("Server is listening on port 5000");
