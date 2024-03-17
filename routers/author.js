const router = require("express").Router;
const author = router();

author.get("/", (_, res) => {
  res.send("Getting author");
});

author.post("/", (_, res) => {
  res.send("Creating author");
});

author.put("/", (_, res) => {
  res.send("Updating author");
});

author.patch("/", (_, res) => {
  res.send("Updating author partially");
});

author.delete("/", (_, res) => {
  res.send("Deleting author");
});

module.exports = author;
