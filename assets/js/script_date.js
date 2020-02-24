var city = document.querySelector("#time_div");
var time = document.querySelector(".ist_div");

function getWeather() {
  let api = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";

  fetch(api)
    .then(function(response) {
      let data = response.json();
      return data;
    })
    .then(function(data) {
      var tempCity = data["timezone"];
      var tempTime = data["datetime"];
      console.log(data);

      ist_div.innerHTML = "Current Local Date/Time is " + tempTime;
    });
}
getWeather();
