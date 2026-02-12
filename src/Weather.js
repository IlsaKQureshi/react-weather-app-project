import React, { use, useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setloaded] = useState(false);
  let [weatherIcon, setWeatherIcon] = useState(null);

  function handleResponse(response) {


    setWeatherData({
      city: response.data.city,
      date: new Date(response.data.time * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
      temp: Math.round(response.data.temperature.current),
      humid: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      weatherIcon: response.data.condition.icon_url,
      desc: response.data.condition.description
    })
    setloaded(true)
    console.log(response.data)
  }


  if (loaded) {
    return <div className="Weather">

      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control" /></div>
          <div className="col-3">
            <input type="submit" value="search" className="btn" /></div></div>
      </form>

      <div className="LocationDate">
        <h2>{weatherData.city}</h2>
        <h2>{weatherData.date}</h2>
      </div>

      <div className="WeatherIcon">
        <ul><li className="text-capitalize">{weatherData.desc}</li><li>
          <img className="icon" src={weatherData.weatherIcon.replace("http://", "https://")}></img>
        </li>
        </ul>
      </div>

      <div className="Temperature">{weatherData.temp}<span>°C</span></div>

      <div className="AirqualityHumidity row text-center">
        <div className="col-6">
          <h5>Humidity: {weatherData.humid}%</h5></div>
        <div className="col-6">
          <h5>Wind: {weatherData.wind}m/s</h5></div>
      </div>
    </div>
  } else {
    const apiKey = "bc8d89bca04963f6034ob7f2f43ta0c9";
    let city = "brussels";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading..."
  }

}