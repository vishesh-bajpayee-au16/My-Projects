const express = require("express");
const exphbs = require("express-handlebars");
const fs = require("fs");
const data = require("./db/users.json");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.get("/signUp", (req, res) => {
  res.render("signUp");
});

app.post("/signUp", (req, res) => {
  data.push(req.body);

  fs.writeFileSync(__dirname + "/db/users.json", JSON.stringify(data, null, 4));

  res.render("sent");
});

app.listen(5550, () => console.log("Server Started"));
