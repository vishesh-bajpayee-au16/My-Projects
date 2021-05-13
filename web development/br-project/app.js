const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const homePage = require("./routes/home");
const app = express();

app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use("/", homePage);

app.listen(5001, () => console.log("Server Started"));
