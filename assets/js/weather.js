var input = document.querySelector('.input_text');
    var name = document.querySelector('.name');
    var temp = document.querySelector('.temp');
    var desc = document.querySelector('.desc');
    var clouds = document.querySelector('.clouds');
    var button = document.querySelector('.submit');

    button.addEventListener('click', function (name) {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=2ae7d4488ebe944bb8ff3a7220be02c1')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          var tempValue = data['main']['temp'] - 273;
          var nameValue = data['name'];
          var descValue = data['weather'][0]['description'];

          name.innerHTML = nameValue;
          desc.innerHTML = "Atmospheric Conditions : " + descValue.toUpperCase();
          temp.innerHTML = "Temp : " + Math.floor(tempValue) + " °C";
          

        })

    })
      .catch(err => alert("Wrong city name!"));