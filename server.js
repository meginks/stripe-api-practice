const express = require("express");
const cors = require("cors");
const Routes = require("/routes.js");
const server = express();

server.use(express.json());
server.use(cors());
server.use("/api", Routes);

server.get("/", (req, res) => {
  res.send(`<h1>SANITY CHECK</h1>`);
});

module.exports = server;
