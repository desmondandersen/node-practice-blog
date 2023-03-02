const fs = require("fs");

// Read files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) console.log(err);
  else console.log(data.toString());
  // data = <Buffer 6d 65 6f 77 20 6d 65 6f 77>
});

// Write files
fs.writeFile("./docs/blog2.txt", "Hello there", () => {
  console.log("Successful WRITE");
});

// Directories
// NOTE: existsSync is synchronous func
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) console.log(err);
    else console.log("Folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) console.log(err);
    else console.log("Folder deleted");
  });
}

// Deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) console.log(err);
    else console.log("File delete");
  });
}

/* File streams */
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8", // Encodes this as readable format
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// 'Data' event
try {
  readStream.on("data", (chunk) => {
    writeStream.write("--- WRITE DATA ---\n");
    writeStream.write(chunk);
  });

  // ALTERNATIVE: readStream.pipe(writeStream);
} catch (error) {
  console.log(error);
}
