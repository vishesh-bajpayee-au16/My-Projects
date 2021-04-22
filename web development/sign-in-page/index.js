const express = require("express");
const expHbs = require("express-handlebars");
const data = require("./database/database.json");
const fileSys = require("fs");
const { json } = require("body-parser");
const app = express();

app.use(json());
app.use(express.urlencoded({ extended: true }));
app.engine("hbs", expHbs({ extname: "hbs" }));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/info", (req, res) => {
  res.render("info");
});

app.post("/", (req, res) => {
  console.log(req.body);
  data.push(req.body);
  res.redirect(`/info?data=${req.body}`);
  res.json({ error: 0 });
  fileSys.writeFileSync(
    __dirname + "/database/database.json",
    JSON.stringify(data, null, 4)
  );
});

app.listen(3000, () => console.log("server started"));
