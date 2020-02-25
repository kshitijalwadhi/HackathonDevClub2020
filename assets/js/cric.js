var city = document.querySelector("#ctime_div");
var time = document.querySelector(".cist_div");
var icon = document.querySelector("#cicon_div");
var winner = document.querySelector("#cicon_div");

function getWeather() {
  let api =
    "https://cricapi.com/api/matches?apikey=iLuZLcuvFPNNoAUOch4A68goKsl1";

  fetch(api)
    .then(function(response) {
      let data = response.json();
      return data;
      console.log(data);
    })
    .then(function(data) {
      var tempCity = data["matches"][0]["team-2"];
      var tempTime = data["matches"][0]["team-1"];
      var icon = data["matches"][0]["dateTimeGMT"];
      var winner = data["matches"][0]["winner_team"];

      console.log(data);

      ctime_div.innerHTML =
        tempCity +
        " vs " +
        tempTime +
        " on 2020-02-20" +
        ". Winner: " +
        winner +
        " , by 10 wickets";
    });
}
getWeather();
