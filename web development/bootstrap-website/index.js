const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.get("/contactUs-data", (req, res) => {
  res.send("Contact info received");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/signup", (req, res) => {
  res.send(__dirname + "/public/signup.html");
});

app.listen(3100, () => console.log("Server Started"));
