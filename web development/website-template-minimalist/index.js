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
  res.send("AWesome");
});

app.post("/home", (req, res) => {
  data.push(req.body);
  res.render("home");

  fs.writeFileSync(
    __dirname + "/database/database.json",
    JSON.stringify(data, null, 4)
  );
});

app.listen(3000, () => console.log("Server Started"));
