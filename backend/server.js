const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hi");
  res.send("Backend for React File Manager");
});

app.listen(3000);
