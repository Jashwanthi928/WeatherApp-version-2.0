//  This is an updated version of weather app which uses google places api and open weather api to display weather.
// Author
// Jashwanthi 

let dataBox = 0;

//Code to display day and time


function getTwelveHrs() {
  var today = new Date();
  var day = today.getDay();
  var hourlist = [12,01,02,03,04,05,06,07,08,09,10,11,12,01,02,03,04,05,06,07,08,09,10,11];
  var daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var hour = today.getHours();
  var minute = today.getMinutes();
  var append = hour >= 12 ? " pm " : " am ";
  if (minute < 10) {
    minute = "0" + minute;
  } else {
    minute = minute;
  }
  var time = hourlist[hour] + ":" + minute + append;
  var day = daylist[day];
  document.getElementById("daytime").innerHTML = day + "," + " " + time;
}

// code to display weather

function weatherDetails() {
  let cityName = document.getElementById("input").value;
  const key = "3b3c21860d9f02f48d6de97dcfb3fc4e";
  console.log(cityName);
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      key
  )
    .then(function(resp) {
      return resp.json();
    }) // Convert data to json

    .then(function(d) {
      drawWeather(d);
    })
    .catch(function() {});
}

function drawWeather(d) {
  dataBox = d;

  let celcius = Math.round(parseFloat(dataBox.main.temp) - 273.15);
  let fahrenheit = Math.round(
    (parseFloat(dataBox.main.temp) - 273.15) * 1.8 + 32
  );
  let description = d.weather[0].description;
  let city = d.name;
  let icon = d.weather[0].icon;
  let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
  document.getElementById("city").innerHTML = city;
  document.getElementById("climate").innerHTML = description;
  document.getElementById("temperature").innerHTML = celcius;
  document.getElementById("wicon").src = iconurl;
}

//Temperature conversion

function convertTemp(value) {
  let celcius = Math.round(parseFloat(dataBox.main.temp) - 273.15);
  let fahrenheit = Math.round(
    (parseFloat(dataBox.main.temp) - 273.15) * 1.8 + 32
  );
  if (value == "C") {
    document.getElementById("temperature").innerHTML = celcius;
  } else if (value == "F") {
    document.getElementById("temperature").innerHTML = fahrenheit;
  }
}
