var city = document.querySelector('#atime_div');
var time = document.querySelector('.aist_div');
var icon = document.querySelector('#icon_div')



function getWeather() {
  let api = 'https:api.airvisual.com/v2/nearest_city?lat=48.02&lon=-50.20&key=ee08e794-47c5-41d4-b543-da237c526ffa';

  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
      console.log(data);
    })
    .then(function (data) {
      var tempCity = data['data']['current']['pollution']['aqius'];
      var tempTime = data['data']['current']['weather']['ic'];


      atime_div.innerHTML = "The Current Air Quality Index (by US AQI Standards) is " + tempCity;


      var img = document.createElement("img");
      img.src = "https://www.airvisual.com/images/" + tempTime + ".png";
      img.height = 50;
      var src = document.getElementById("aist_div");
      src.appendChild(img);

    })




}
getWeather();