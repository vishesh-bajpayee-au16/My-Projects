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

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const userSigned = req.body;
  usersData.push(userSigned);
  fs.writeFileSync(
    __dirname + "/database/users.json",
    JSON.stringify(usersData, null, 4)
  );
  res.render("login", userSigned);
});

// signup route
app.post("/signup", (req, res) => {
  res.render("signup");
});

// dashboard
app.post("/dashboard", (req, res) => {
  for (let index = 0; index < usersData.length; index++) {
    const userObj = usersData[index];
    if (
      userObj.username === req.body.username &&
      userObj.password === req.body.password
    ) {
      res.render("dashboard");
      return;
    }
  }
  res.render("invalid-entry");
});

// CREATING SERVER
app.listen(3001, () => console.log("Server Started"));
