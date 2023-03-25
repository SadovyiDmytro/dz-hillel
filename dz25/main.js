function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5d066958a60d315387d9492393935c19`;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      document.getElementById('temp').textContent = data.main.temp;
      document.getElementById('pressure').textContent = data.main.pressure;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('humidity').textContent = data.main.humidity;
      document.getElementById('wind-speed').textContent = data.wind.speed;
      document.getElementById('wind-direction').textContent = data.wind.deg;
      document.getElementById('icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    } else {
      console.log('Error: ' + xhr.status);
    }
  };
  xhr.send();
}

getWeather('Lviv');