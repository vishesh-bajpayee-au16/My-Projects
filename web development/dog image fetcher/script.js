const img = document.querySelector("img");
const btn = document.querySelector("button");

btn.addEventListener("click", handleEventClick);

function handleEventClick() {
  getData();
}

async function getData() {
  const responseObj = await fetch("https://dog.ceo/api/breeds/image/random");
  console.log(responseObj);
  const jsonObj = await responseObj.json();
  img.src = jsonObj.message;

  img.style.transition = "all ease-in-out 0.3s";
}
