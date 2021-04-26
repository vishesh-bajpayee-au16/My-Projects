const express = require("express");
const exphbs = require("express-handlebars");
const fs = require("fs");
const userData = require("./database/users.json");
const app = express();
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Home Route
app.get("/", (req, res) => {
  res.render("home");
});

// Services Route
app.get("/services", (req, res) => {
  res.render("services");
});

// About Route
app.get("/about", (req, res) => {
  res.render("about");
});

// Contact Route
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(3000, () => console.log("Server Started"));
