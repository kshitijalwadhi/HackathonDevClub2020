
var time = document.querySelector('.pist_div');




function getWeatherp() {
  let api = 'https:api.airvisual.com/v2/nearest_city?lat=48.02&lon=-50.20&key=ee08e794-47c5-41d4-b543-da237c526ffa';

  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
      console.log(data);
    })
    .then(function (data) {



      var img = document.createElement("img");
      img.src = "https://picsum.photos/1100/600?grayscale";
      img.align = "middle";
      var src = document.getElementById("pist_div");
      src.appendChild(img);

    })




}
getWeatherp();