// PREREQUISITES
const express = require("express");
const exphbs = require("express-handlebars");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const loginData = require("./database/login-log.json");
const usersData = require("./database/users.json");
const { json } = require("body-parser");

// DECLARING APP
const app = express();

// MIDDLEWARES
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(json());
app.use(express.static("public"));

// HANDLEBAR ACTIVATION
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// DECLARING ROUTES

// home route
app.get("/", (req, res) => {
  res.render("home");
});

// login route
app.post("/login", (req, res) => {
  res.render("login", req.body);
  usersData.push(req.body);
  fs.writeFileSync(
    __dirname + "/database/users.json",
    JSON.stringify(usersData, null, 4)
  );
});

// signup route
app.post("/signup", (req, res) => {
  res.render("signup");
});

// CREATING SERVER
app.listen(3001, () => console.log("Server Started"));
