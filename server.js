const http = require("http");
const fs = require("fs");
// To-do: learn web sockets

const server = http.createServer((req, res) => {
  console.log("REQ:", req.url, req.method);

  // STATUS CODES:
  // 200 - OK
  // 301 - Resource moved
  // 404 - Not found
  // 500 - Internal server error

  // Set header content type
  res.setHeader("Content-Type", "text/html");

  // Routing
  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  // Send HTML file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

// localhost -> 127.0.0.1 (own computer)
server.listen(3000, "localhost", () => {
  console.log("Listening...");
});
