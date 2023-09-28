const express = require("express");
const app = express();
const port = 5000;

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./user-swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let restaurants = [
  { id: 1, name: "sachin", sal: 5000, gender: "male" },
  { id: 2, name: "rahul", sal: 6000, gender: "male" },
  { id: 3, name: "mitali", sal: 5500, gender: "female" },
];

app.get("/", (req, res) => {
  res.send(`<h1>Server is Running fine...</h1>`);
});

app.get("/api/restaurants", (req, res) => {
  res.json(restaurants);
});

app.get("/api/restaurants/:id", (req, res) => {
  const id = +req.params.id;
  restaurants = restaurants.filter((user) => user.id === id);
  res.json(restaurants);
});
app.get("/api/myrestaurants", (req, res) => {
  const name = req.query.name;
  restaurants = restaurants.filter((user) => user.name === name);
  res.json(restaurants);
});

app.listen(port, () => {
  console.log(`Server listening on the port::::::${port}`);
});
