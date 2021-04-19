const express = require("express");
const app = express();
const data = require("./data.json");
const fileSystem = require("fs");
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
  data.push(req.body);
  res.send({ error: 0 });

  fileSystem.writeFileSync(
    __dirname + "/data.json",
    JSON.stringify(data, null, 4)
  );
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/signup", (req, res) => {
  res.send(__dirname + "/public/signup.html");
});
// Calling server
app.listen(3100, () => console.log("Server Started"));
