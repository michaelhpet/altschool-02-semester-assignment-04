# Simple Server - Http Methods

Write a simple server to handle the following
GET /books
PUT /books
DELETE /books
GET /books/author/
POST /books/author/
PUT /books/author/

NB. Whatever the response for each of this endpoints, is up to you to decide

## Authentication

1. Get the authentication username and password from the header.
2. Free up the body to be able to carry payload for other method types.
3. Add more endpoints for books [GET, POST, PUT, PATCH, DELETE]. (These endpoint don't to do anything. but must return a response)
4. Add more endpoints for authors [GET, POST, PUT, PATCH, DELETE]. (These endpoint don't to do anything. but must return a response)

## Express

Build app using express

- create Author Router in another file
  - this should have CRUD endpoints (Create, Read, Update, Delete)
  - Link it to the main file (index.js or server.js or app.js, whatever you chose to use)
- Add a global simple logger to the app. (like i showed you in class)
