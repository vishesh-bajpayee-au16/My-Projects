const express = require("express");
const csv = require("csvtojson");
const fs = require("fs");
const csvFilePath = "netflix_titles.csv";
const netflixData = require("./netflix.json");
const app = express();

// Conversion and write to json
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    netflixData.push(jsonObj);
    // console.log(netflixData);
    fs.writeFileSync(
      __dirname + "/netflix.json",
      JSON.stringify(netflixData, null, 4)
    );
    return;
  });

app.get("/netflix/:showd", (req, res) => {
  res.send(netflixData[req.params.showd]);
});

app.listen(3344, () => console.log("Server Started"));
