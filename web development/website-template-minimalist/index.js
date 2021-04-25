"use strict";
const express = require("express");
const exphbs = require("express-handlebars");
const fs = require("fs");
const axios = require("axios");
const userData = require("./database/users.json");
const loginData = require("./database/login.json");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// LOGIN PAGE
app.get("/", (req, res) => {
  res.render("banner");
});

// DASHBOARD

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.post("/dashboard", (req, res) => {
  loginData.push(req.body);

  fs.writeFileSync(
    __dirname + "/database/login.json",
    JSON.stringify(loginData, null, 4)
  );
  res.render("dashboard", req.body);
});

// SIGNUP PAGE

app.get("/signUp", (req, res) => {
  res.render("signUp");
});

app.post("/signUp", (req, res) => {
  userData.push(req.body);
  fs.writeFileSync(
    __dirname + "/database/users.json",
    JSON.stringify(userData, null, 4)
  );
  res.render("dashboard", req.body);
});

// TODO PAGE

app.get("/todo", (req, res) => {
  res.render("todo");
});

app.listen(5400, () => console.log("Server Started"));
