import { unlink } from "node:fs/promises";

// await
try {
  await unlink("./temp/hello.txt");
  console.log("successfully deleted /temp/hello");
} catch (error) {
  console.error("there was an error:", error.message);
}
