const fs = require("fs");

// Asynchronously read the file
fs.readFile("./content/first123.txt", "utf8", (err, data) => {
    console.log(data);
}) 