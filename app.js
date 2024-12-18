const express = require("express");
const sendMail = require("./email");
const app = express();
const port = process.env.PORT;

sendMail("email@example.com");

app.get("/", (req, res) => {
  res.send("Hello, Node.js with Express!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
