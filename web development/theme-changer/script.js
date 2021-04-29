const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const span = document.getElementById("span");
const heading = document.getElementById("heading");
const paragraph = document.getElementById("paragraph");
const body = document.getElementById("body");
const darkMode = document.getElementById("dark-mode-icon");
const home = document.getElementById("home");
const contact = document.getElementById("contact");
const about = document.getElementById("about");
const services = document.getElementById("services");
const btnchange = (btn, color) => {
  btn.addEventListener("click", () => {
    span.style.color = "#" + color;
    home.style.color = "#" + color;
    about.style.color = "#" + color;
    contact.style.color = "#" + color;
    services.style.color = "#" + color;
  });
};

let darkmodeFlag = false;
darkMode.addEventListener("click", () => {
  if (darkmodeFlag == false) {
    body.style.background = "black";
    darkMode.style.color = "white";
    heading.style.color = "white";
    paragraph.style.color = "white";

    darkmodeFlag = true;
  } else if (darkmodeFlag == true) {
    body.style.background = "white";
    darkMode.style.color = "black";
    heading.style.color = "black";
    paragraph.style.color = "black";
    darkmodeFlag = false;
  }
});

btnchange(red, "ce1f6a");
btnchange(yellow, "ffc93c");
btnchange(blue, "51c4d3");
btnchange(green, "206a5d");
