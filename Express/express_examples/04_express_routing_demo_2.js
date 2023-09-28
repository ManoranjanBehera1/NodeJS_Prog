const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Server is running fine...");
});

// Multiple routing
const userRouter = express.Router();
const productRouter = express.Router();

userRouter.route("/").get(function (req, res) {
  res.end("restaurants Router Working");
});
userRouter.route("/details").get(function (req, res) {
  res.end("User Details Router Working");
});

productRouter.route("/").get(function (req, res) {
  res.end("products Router Working");
});
productRouter.route("/details").get(function (req, res) {
  res.end("product Details Router Working");
});

app.use("/restaurants", userRouter);
app.use("/products", productRouter);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
