var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphaArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var colorBox0 = document.getElementById("color-1");
var colorBox1 = document.getElementById("color-2");
var colorBox2 = document.getElementById("color-3");
var colorBox3 = document.getElementById("color-4");
var colorBox4 = document.getElementById("color-5");
var generateBtn = document.getElementById("btn");

const singleNumLst = function () {
  let numList = [];
  for (var i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * numberArr.length);
    numList.push(randomNum);
  }
  return numList;
};

const loopforNumArr = function () {
  var finalNumArr = [];
  for (var i = 0; i <= 5; i++) {
    finalNumArr.push(singleNumLst());
  }
  return finalNumArr;
};

generateBtn.addEventListener("click", function () {
  colorBox0.style.backgroundColor = `#${loopforNumArr()[0].join("")}`;
  colorBox1.style.backgroundColor = `#${loopforNumArr()[1].join("")}`;
  colorBox2.style.backgroundColor = `#${loopforNumArr()[2].join("")}`;
  colorBox3.style.backgroundColor = `#${loopforNumArr()[3].join("")}`;
  colorBox4.style.backgroundColor = `#${loopforNumArr()[4].join("")}`;
});
