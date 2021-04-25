document.getElementById("refresh").addEventListener("click", function (e) {
  e.preventDefault();
  picture();
});

picture = () => {
  const quotes = fetch("https://type.fit/api/quotes");

  quotes.then(function (response) {
    response
      .json()
      .then(function (data) {
        var quotedetail = data[Math.round(Math.random() * data.length)];
        console.log(Math.round(Math.random() * data.length));
        document.getElementById("quote").innerHTML = `"${quotedetail.text}"`;
        document.getElementById(
          "author"
        ).innerHTML = `Author : ${quotedetail.author}`;
      })
      .catch(function () {
        let x = document.getElementById("breed");
        document.getElementById("breed").innerHTML = `<li>Not found</li>`;
        console.log(x);
      });
  });
};
picture();
