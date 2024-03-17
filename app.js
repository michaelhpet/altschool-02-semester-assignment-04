const express = require("express");
const author = require("./routers/author");

const server = express();

server.use(log);
server.use(authenticate);

server.get("/books", (req, res) => {
  res.send("Getting book");
});

server.post("/books", (_, res) => {
  res.send("Creating book");
});

server.put("/books", (_, res) => {
  res.send("Updating book");
});

server.patch("/books", (_, res) => {
  res.send("Updating book partially");
});

server.delete("/books", (_, res) => {
  res.send("Deleting book");
});

server.use("/books/author", author);

server.listen(8900, "localhost", () => {
  console.log("Server started");
});

/**
 * Auth middleware
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
function authenticate(req, res, next) {
  const username = req.headers["username"];
  const password = req.headers["password"];
  if (username && password) {
    req.user = { username, password };
    next();
  } else res.status(401).send("Authentication required");
}

/**
 * Logger middleware
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
function log(req, res, next) {
  console.log(`Request from ${req.ip} to ${req.method} ${req.url}`);
  next();
}
