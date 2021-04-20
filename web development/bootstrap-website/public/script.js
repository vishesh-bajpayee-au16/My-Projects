const form = document.getElementsByTagName("form")[0];
const email = document.getElementsByClassName("email");
const pasword = document.getElementById("pasword");
const address = document.getElementById("address");
const address2 = document.getElementById("address2");
const zip = document.getElementById("zip");
const checkbox = document.getElementById("checkbox");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  const contactData = {
    email: email.value,
    pasword: pasword.value,
    address: address.value,
    address2: address2.value,
    zip: zip.value,
    checkpox: checkbox.value,
  };
  // await cal
  await axios.post("/contactUs-data", contactData);
}
