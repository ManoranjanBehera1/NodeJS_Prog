var fs = require("fs");

console.log("program started");

// Asynchonously read the file
fs.readFile("./content/first.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  console.log(data.toString());
});

console.log("program finished");
