var getLocationBtn = document.getElementById("getLocationBtn");

const onPositionReceived = function (position) {
  console.log(`Latitude: ${position.coords.latitude}`);
  console.log(`Longitude: ${position.coords.longitude}`);
  console.log(position);
};

const onPositionDenied = function () {
  console.log("Denied");
};

const getUserLocation = function () {
  console.log("Trying to get the user's position");
  navigator.geolocation.getCurrentPosition(
    onPositionReceived,
    onPositionDenied
  );
};

getLocationBtn.addEventListener("click", getUserLocation);
