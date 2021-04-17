const form = document.getElementById("form");
const email = document.getElementById("email");
const pasword = document.getElementById("pasword");
const address = document.getElementById("address");
const address2 = document.getElementById("address2");
const zip = document.getElementById("zip");
const checkbox = document.getElementById("checkbox");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  const data = {
    email: email.value,
    pasword: pasword.value,
    address: address.value,
    address2: address2.value,
    zip: zip.value,
    checkpox: checkbox.value,
  };
}
