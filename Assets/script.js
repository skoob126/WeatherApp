var APIKey = "305e74f7b559dc205d357f22675c6297";
var queryUrlCurrentWeather = "api.openweathermap.org/data/2.5/weather?id=dallas&appid=00eff7d761d251282cf428a2883520a6";
var queryUrlUvIndex = "http://api.openweathermap.org/data/2.5/uvi?appid={00eff7d761d251282cf428a2883520a6}&lat={lat}&lon={lon}";
var queryUrl5Day = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={00eff7d761d251282cf428a2883520a6}";

$.ajax(queryUrlCurrentWeather, {
    method: "GET"
}).then(function (response) {

    console.log(queryUrlCurrentWeather);
    console.log(response)

    $(city).html("<h1>" + response.name + "Weather Details</>");
    $(".wind").text("Wind Speed: " + response.wind.speed);

    $(".humidity").text("Humidity: " + response.main.humidity);

    $(".temp").text("Temperature (F) " + response.main.temp);

    $(".uvIndex")

    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    $(".tempF").text("Temperature (Kelvin) " + tempF);

});


