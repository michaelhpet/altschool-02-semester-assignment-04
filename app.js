const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/books") books(req, res);
  else if (req.url === "/books/authors") bookAuthors(req, res);
  res.end();
});

server.listen(8900, "localhost");

/**
 * Book controller
 * @param {Request} req
 * @param {Response} res
 */
function books(req, res) {
  let data = "Nothing to do with book";
  if (req.method === "GET") data = "Getting book";
  if (req.method === "PUT") data = "Updating book";
  if (req.method === "DELETE") data = "Deleting book";
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Length", data.length);
  res.write(data);
  res.end;
}

/**
 * BookAuthor controller
 * @param {Request} req
 * @param {Response} res
 */
function bookAuthors(req, res) {
  let data = "Nothing to do with author";
  if (req.method === "GET") data = "Getting author";
  if (req.method === "POST") data = "Creating author";
  if (req.method === "PUT") data = "Updating author";
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Length", data.length);
  res.write(data);
  res.end;
}
