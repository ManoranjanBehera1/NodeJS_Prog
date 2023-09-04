var fs = require("fs");

//async
fs.appendFile("./content/mynewfile2.txt", "Hello content! \n", function (err) {
  if (err) throw err;
  console.log("Content Appended!");
});
