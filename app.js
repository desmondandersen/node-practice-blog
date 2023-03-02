const express = require("express");

// Create instance of express app
const app = express();

// Listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  // NOTE: automatically sets header and status code
  // NOTE: __dirname is a global variable in node
  res.sendFile("/pages/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("/pages/about.html", { root: __dirname });
});
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

// NOTE: only use this if nothing else matches
app.use((req, res) => {
  res.status(404).sendFile("/pages/404.html", { root: __dirname });
});
