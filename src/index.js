const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log("App is running on Port:", port);
});
