import { readFile, writeFile } from "fs/promises";

console.log("start");
try {
  const firstFileContent = await readFile("./content/first.txt");
  const secondFileContent = await readFile("./content/second.txt");
  console.log(firstFileContent)
  await writeFile(
    "./content/result-async.txt", "utf8",
    `2 files content:: ${firstFileContent} & ${secondFileContent}`
  );
  console.log("write done...");
} catch (err) {
  console.error("there was an error:", err.message);
}
console.log("end");

// doubt - how to read files in utf format not in buffer format...