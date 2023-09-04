const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "mano", address: 'bbsr' },
  { id: 2, name: "kunal", address: 'bam' },
];

app.get("/", (req, res) => {
  res.send("Server is Running...");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const resultObj = users.find((ele) => ele.id === +req.params.id)
  res.json(resultObj);
});

app.post("/users", (req, res) => {
  users.push(req, res);
  res.send('User added successfully...')
})

app.listen(8000, () => {
  console.log(`server started with port number 8000`);
});
