var fs = require("fs");

//async
fs.unlink("./content/mynewfile1.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});

//sync delete
try {
  fs.unlinkSync("./content/mynewfile2.txt");
  console.log("File deleted!");
} catch (err) {
  console.error("there was an error:", err.message);
}
