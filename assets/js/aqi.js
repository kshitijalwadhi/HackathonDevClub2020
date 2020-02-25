var city = document.querySelector("#atime_div");
var time = document.querySelector(".aist_div");
var icon = document.querySelector("#icon_div");

function getWeather() {
  let api =
    "https:api.airvisual.com/v2/nearest_city?lat=28.58&lon=77.23&key=71e51ad9-c732-4497-b57e-662911438596";

  fetch(api)
    .then(function(response) {
      let data = response.json();
      return data;
      console.log(data);
    })
    .then(function(data) {
      var tempCity = data["data"]["current"]["pollution"]["aqius"];
      var tempTime = data["data"]["current"]["weather"]["ic"];

      atime_div.innerHTML =
        "The Current Air Quality Index (by US AQI Standards) is " + tempCity;

      var img = document.createElement("img");
      img.src = "https://www.airvisual.com/images/" + tempTime + ".png";
      img.height = 50;
      var src = document.getElementById("aist_div");
      src.appendChild(img);
    });
}
getWeather();
