const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  authenticate(req, res, (req, res) => {
    if (req.url === "/books") books(req, res);
    else if (req.url === "/books/authors") bookAuthors(req, res);
    res.end();
  });
});

server.listen(8900, "localhost");

/**
 * Book controller
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
function books(req, res) {
  let data = "Nothing to do with book";
  if (req.method === "GET") data = "Getting book";
  if (req.method === "POST") data = "Creating book";
  if (req.method === "PUT") data = "Updating book";
  if (req.method === "PATCH") data = "Updating book partially";
  if (req.method === "DELETE") data = "Deleting book";
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Length", data.length);
  res.write(data);
  res.end();
}

/**
 * BookAuthor controller
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
function bookAuthors(req, res) {
  let data = "Nothing to do with author";
  if (req.method === "GET") data = "Getting author";
  if (req.method === "POST") data = "Creating author";
  if (req.method === "PUT") data = "Updating author";
  if (req.method === "PATCH") data = "Updating author partially";
  if (req.method === "DELETE") data = "Deleting author";
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Length", data.length);
  res.write(data);
  res.end();
}

/**
 * Auth middleware
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {http.RequestListener} next
 */
function authenticate(req, res, next) {
  const username = req.headers["username"];
  const password = req.headers["password"];
  if (username && password) {
    req.user = { username, password };
    next(req, res);
  } else {
    const data = "Authentication required";
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Length", data.length);
    res.write(data);
    res.end();
  }
}
