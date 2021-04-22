const express = require("express");
const exphbs = require("express-handlebars");
const fs = require("fs");
const axios = require("axios");
const data = require("./database/users.json");
const loginData = require("./database/login.json");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("banner");
});

app.get("/home", (req, res) => {
  res.send("Awesome");
});

app.post("/home", (req, res) => {
  loginData.push(req.body);
  res.render("home", req.body);

  fs.writeFileSync(
    __dirname + "/database/login.json",
    JSON.stringify(data, null, 4)
  );
});

app.get("/signin", (req, res) => {
  res.render("signin");
});

app.post("/signin", (req, res) => {
  console.log(req.body);
  data.push(req.body);
  res.render("signin", req.body);

  fs.writeFileSync(__dirname + "/database/users.json"),
    JSON.stringify(data, null, 4);
});

app.listen(4444, () => console.log("Server Started"));
