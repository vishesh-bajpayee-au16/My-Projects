const express = require("express");
const exphbs = require("express-handlebars");
const fs = require("fs");
const axios = require("axios");
const data = require("./database/database.json");
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
  data.push(req.body);
  res.render("home", req.body);

  fs.writeFileSync(
    __dirname + "/database/database.json",
    JSON.stringify(data, null, 4)
  );
});

app.get("/signin", (req, res) => {
  res.render("signin");
});

app.listen(4000, () => console.log("Server Started"));
