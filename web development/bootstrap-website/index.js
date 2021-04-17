const express = require("express");
const app = express();
const fileSystem = require("fs");
const data = require("./data.json");
app.use(express.static("./public"));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.get("/contactUs-data", (req, res) => {
  res.send("Contact info received");
});

app.post("/contactUs-data", (req, res) => {
  DataCue.push(req.body);
  res.join({ error: 0 });
});

fileSystem.writeFile("./data.json", data);

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/signup", (req, res) => {
  res.send(__dirname + "/public/signup.html");
});

app.listen(3100, () => console.log("Server Started"));
